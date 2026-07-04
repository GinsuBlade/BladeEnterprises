# Blade Enterprises Website

Next.js 14 + Tailwind CSS corporate site for Blade Enterprises.

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Deployment (Vercel — Free Tier)

This is the fastest and cheapest path. Vercel's Hobby plan is **$0/month** for a site like this.

### Steps:

1. Push this folder to a GitHub repo (private or public)

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click **Add New Project** → Import your repo

4. Vercel auto-detects Next.js. Default settings work. Click **Deploy**.

5. Your site is live at `your-project.vercel.app`

6. To use your own domain (e.g. `bladeenterprises.com`):
   - Go to Project Settings → Domains
   - Add your domain
   - Update your DNS to point to Vercel (they walk you through it)

**Cost: $0/month** on Hobby plan. Upgrade to Pro ($20/month) only if you need team members or advanced analytics.

---

## Deployment (Cloudflare Pages — Alternative)

Also free. Better for static-heavy sites.

```bash
npm run build
```

Then:
1. Go to Cloudflare Dashboard → Pages → Create a project
2. Connect GitHub repo OR upload the `.next` folder manually
3. Set build command: `npm run build`
4. Set output directory: `.next`
5. Deploy

**Note:** Cloudflare Pages has some limitations with Next.js App Router. Vercel is the recommended option for this stack.

---

## Contact Form

The contact form currently simulates submission. To make it functional, add one of these (both have free tiers):

### Option A: Formspree (simplest)
1. Sign up at formspree.io
2. Create a form, get your endpoint URL
3. In `app/contact/page.tsx`, replace the `handleSubmit` function:

```ts
const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  });
  setSubmitted(true);
};
```

### Option B: Resend (more control, sends real emails)
Install: `npm install resend`
Create an API route at `app/api/contact/route.ts` using the Resend SDK.

---

## Customization Checklist

- [ ] Replace `bladeenterprises.com` with real domain in `layout.tsx`, `sitemap.ts`, `robots.txt`
- [ ] Update contact email addresses in `Footer.tsx` and `contact/page.tsx`
- [ ] Add logo image to `/public/` and update `Nav.tsx`
- [ ] Add Formspree or Resend for contact form
- [ ] Update careers listings as needed
- [ ] Add Google Analytics or Plausible if tracking needed

---

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Google Fonts (Playfair Display + Inter)
- Deployed on Vercel
