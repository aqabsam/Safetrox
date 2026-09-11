# Safetrox

Modern Safetrox occupational safety training website built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
## Firebase setup

Create a `.env.local` file with the Firebase web app values:

```text
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_ADMIN_UIDS=3d5K6bFJfnaI0ufavRADKZ3Dzwo2
```

Enable Email/Password sign-in and Firestore in Firebase. The admin route is `/admin`. The Firebase Auth user with UID `3d5K6bFJfnaI0ufavRADKZ3Dzwo2` has full admin access. Additional administrators can use `VITE_ADMIN_UIDS` and/or an `admin: true` custom claim before deploying `firestore.rules`.
