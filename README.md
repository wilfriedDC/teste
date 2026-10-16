# Wilfried DC — Portfolio (Next.js)

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Démarrer
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `src/app/` — `layout.tsx` (police + metadata), `page.tsx` (assemblage), `globals.css` (design inchangé)
- `src/components/` — une section = un composant (Hero, About, Stack, Work, Services, Process, Experience, AiFeature, Testimonial, Contact, Footer)
- `src/lib/data.ts` — tout le contenu (projets, stack, services, expérience…)
- `src/components/ProjectProvider.tsx` — état de la modale projet partagé Hero ↔ Work

## À faire
- Déposer ton CV dans `public/wilfried-dc-cv.html` (ou .pdf et adapter le lien dans `About.tsx`)
- Remplacer les images Unsplash par tes vraies captures (dans `public/`, puis mettre à jour `data.ts`)
- Brancher le formulaire (`ContactForm.tsx`) sur une route API (Resend, Nodemailer…)
- Mettre tes vrais liens GitHub / LinkedIn / YouTube / Behance
