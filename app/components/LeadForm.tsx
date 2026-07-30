"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export type LeadFormCopy = {
  title: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  messagePlaceholder: string;
  submitting: string;
  submit: string;
  fallbackError: string;
  success: string;
};

export function LeadForm({ copy }: { copy: LeadFormCopy }) {
  const [state, setState] = useState<FormState>("idle");
  const message =
    state === "success"
      ? copy.success
      : state === "error"
        ? copy.fallbackError
        : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(copy.fallbackError);
      }

      event.currentTarget.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} key={copy.title}>
      <div className="form-title">
        <h2>{copy.title}</h2>
      </div>

      <label>
        {copy.name}
        <input name="name" type="text" autoComplete="name" required />
      </label>

      <label>
        {copy.email}
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label>
        {copy.subject}
        <input name="subject" type="text" required />
      </label>

      <label>
        {copy.message}
        <textarea
          name="message"
          rows={7}
          placeholder={copy.messagePlaceholder}
        />
      </label>

      <input
        className="hidden-field"
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />

      <button className="primary-action form-submit" type="submit" disabled={state === "loading"}>
        <Send size={18} aria-hidden="true" />
        <span>{state === "loading" ? copy.submitting : copy.submit}</span>
      </button>

      {message ? (
        <p className={`form-message ${state === "error" ? "error" : "success"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
