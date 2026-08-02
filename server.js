import { createServer } from "http";
import { parse } from "url";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 3000);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((request, response) => {
    const parsedUrl = parse(request.url || "/", true);
    handle(request, response, parsedUrl);
  }).listen(port, hostname, () => {
    console.log(`EGM Horeca is ready on http://${hostname}:${port}`);
  });
});
