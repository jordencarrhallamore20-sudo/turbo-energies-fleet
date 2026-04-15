# Turbo Energies Fleet Manager

A workshop-focused web app for yellow machines, support equipment, and service tracking.

## Included in this build
- Orange / grey / black Turbo Energies theme
- Admin-first login flow
- Dashboard
- Fleet register with seeded units
- Repairs, services, parts, worksheets, reports, and admin pages
- Demo mode that works without Supabase
- Supabase schema and seed SQL for production setup

## Roles
- Admin
- Manager
- Fleet Manager
- Chargehand
- Foreman
- Stores

## Quick start
1. Install Node.js 20+
2. In the project folder run:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:3000`
4. Demo login options on the login page:
   - `admin@turbo.local` / `admin123`
   - `manager@turbo.local` / `manager123`
   - `stores@turbo.local` / `stores123`

## Production path
Use Supabase for real authentication, database storage, file uploads, and role control.

1. Create a Supabase project
2. Run `database/schema.sql`
3. Run `database/seed.sql`
4. Add your project values to `.env.local`
5. Replace the demo auth and data services with Supabase queries in `lib/`
6. Deploy to Vercel

## Notes
This build is a strong working starter app with seeded workshop data and UI flows. For a live production rollout, the next step is wiring all CRUD actions to Supabase and enabling file storage, reminders, and WhatsApp integration.
