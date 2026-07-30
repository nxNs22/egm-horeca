import { promises as fs } from "fs";
import path from "path";

export type RequestStatus = "nou" | "contactat" | "programat" | "inchis";

export type ServiceRequest = {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  service: string;
  message: string;
  status: RequestStatus;
  createdAt: string;
  updatedAt: string;
};

export type NewServiceRequest = {
  name: string;
  phone?: string;
  email?: string;
  subject?: string;
  service?: string;
  message?: string;
};

const statuses: RequestStatus[] = ["nou", "contactat", "programat", "inchis"];
const dataDir = path.join(process.cwd(), "storage");
const dataFile = path.join(dataDir, "service-requests.json");

function cleanText(value: unknown, maxLength: number) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function validateRequestInput(input: Record<string, unknown>) {
  const name = cleanText(input.name, 120);
  const phone = cleanText(input.phone, 60);
  const email = cleanText(input.email, 140);
  const subject = cleanText(input.subject, 160);
  const service =
    cleanText(input.service, 120) || subject || "Contact website";
  const message = cleanText(input.message, 1200);

  if (!name) {
    throw new Error("Numele este obligatoriu.");
  }

  if (!phone && !email) {
    throw new Error("Telefonul sau emailul este obligatoriu.");
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Emailul nu este valid.");
  }

  return { name, phone, email, subject, service, message };
}

async function ensureStorageDir() {
  await fs.mkdir(dataDir, { recursive: true });
}

export async function listServiceRequests(): Promise<ServiceRequest[]> {
  try {
    const raw = await fs.readFile(dataFile, "utf8");
    const data = JSON.parse(raw) as ServiceRequest[];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function writeServiceRequests(requests: ServiceRequest[]) {
  await ensureStorageDir();
  const tmpFile = `${dataFile}.tmp`;
  await fs.writeFile(tmpFile, JSON.stringify(requests, null, 2), "utf8");
  await fs.rename(tmpFile, dataFile);
}

export async function createServiceRequest(input: NewServiceRequest) {
  const now = new Date().toISOString();
  const request: ServiceRequest = {
    id: crypto.randomUUID(),
    name: input.name,
    phone: input.phone ?? "",
    email: input.email ?? "",
    subject: input.subject ?? input.service ?? "",
    service: input.service ?? input.subject ?? "Contact website",
    message: input.message ?? "",
    status: "nou",
    createdAt: now,
    updatedAt: now,
  };

  const requests = await listServiceRequests();
  await writeServiceRequests([request, ...requests]);
  return request;
}

export async function updateServiceRequest(
  id: string,
  updates: Partial<Pick<ServiceRequest, "status" | "message">>,
) {
  const requests = await listServiceRequests();
  const index = requests.findIndex((request) => request.id === id);

  if (index === -1) {
    return null;
  }

  const nextStatus = updates.status;
  if (nextStatus && !statuses.includes(nextStatus)) {
    throw new Error("Status invalid.");
  }

  const updated: ServiceRequest = {
    ...requests[index],
    ...updates,
    status: nextStatus ?? requests[index].status,
    updatedAt: new Date().toISOString(),
  };

  requests[index] = updated;
  await writeServiceRequests(requests);
  return updated;
}

export function getRequestStats(requests: ServiceRequest[]) {
  return statuses.reduce(
    (stats, status) => ({
      ...stats,
      [status]: requests.filter((request) => request.status === status).length,
    }),
    {
      total: requests.length,
    } as Record<RequestStatus | "total", number>,
  );
}
