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

This project must run as a Node.js app because it includes a Next.js API route.
Do not copy the source code directly into `public_html`.

Recommended replacement flow when another site is already live:

1. Back up the current domain folder, for example rename `public_html` to
   `public_html_old`.
2. Create or select a private app folder outside the public domain folder, for
   example `~/egm-horeca`.
3. Upload or clone this repository into that private folder.
4. In Cyberfolks, create a Node.js application for the domain and set:
   - application root: the private app folder
   - startup file: `app.js`
   - environment: `production`
5. Install and build the app:

```bash
npm install
npm run build
npm run start
```

If Cyberfolks assigns a port, set it as `PORT`; otherwise the app listens on
`127.0.0.1:3000`.

Keep the project outside `public_html`. The public domain folder should only
proxy traffic to the local Node.js port, and `storage/` must stay writable so
service requests persist.

Example `.htaccess` for the domain folder, replacing `3000` with the assigned
port:

```apache
DirectoryIndex disabled
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
```
