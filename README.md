# EGM Horeca SRL

Next.js public service website with a backend API route for service requests.

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The public site is at `/`.

## Environment

Create `.env.local` from `.env.example` before production:

```bash
NEXT_PUBLIC_SITE_URL=https://egmhoreca.ro
```

## Cyberfolks Deployment

Use the Cyberfolks Node.js application panel with:

```bash
npm install
npm run build
npm run start
```

Set the startup file to `server.js` when the panel asks for one. If Cyberfolks
assigns a port, set it as `PORT`; otherwise the app listens on `127.0.0.1:3000`.

Keep the project outside `public_html`. The public domain folder should only
proxy traffic to the local Node.js port, and `storage/` must stay writable so
service requests persist.

Example `.htaccess` for the domain folder:

```apache
RewriteEngine On
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
```

Replace `3000` with the port assigned in the Cyberfolks panel.
