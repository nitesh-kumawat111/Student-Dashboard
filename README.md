A modern and responsive Student Dashboard built using Next.js, Tailwind CSS, and Framer Motion, designed to provide an interactive and visually engaging learning experience.

🚀 Features
🎯 Bento Grid Layout for clean and structured UI
🎬 Smooth Animations using Framer Motion (staggered card loading, hover effects)
📊 Dynamic Course Cards with progress tracking
🔥 Activity & Daily Streak Sections for user engagement
📱 Fully Responsive Design (Desktop, Tablet, Mobile)
📂 Supabase Integration for real-time data fetching
⚡ Optimized with Next.js App Router (RSC)

🛠️ Tech Stack
Next.js (App Router)
React + TypeScript
Tailwind CSS
Framer Motion
Supabase (Database)

Lucide Icons
🎨 UI Highlights
Gradient-based modern design
Interactive hover effects with smooth transitions
Skeleton loading states for better UX
Collapsible responsive sidebar

While building this project, I faced a challenge integrating Framer Motion with Next.js Server Components, as animations cannot run directly inside page.tsx. To solve this, I followed a proper architecture by creating separate Client Components specifically for handling animations. This approach allowed me to keep data fetching in Server Components while managing smooth UI animations in Client Components, resulting in a clean and scalable implementation.  

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
