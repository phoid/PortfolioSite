# Portfolio Site

A technology portfolio website with an oceanic/nautical theme built with Next.js, Tailwind CSS, and prepared for PostgreSQL (Neon) and Genkit AI integration.

## Features

- 🌊 **Oceanic Theme**: Dark palette with deep ocean blues, blacks, and driftwood browns with pearl white and rope tan accents
- 📱 **Responsive Design**: Mobile-first responsive layout
- 🧭 **Navigation**: Clean navbar with smooth transitions
- 🗄️ **Database Ready**: Prisma ORM configured for Neon serverless PostgreSQL
- 🤖 **AI Ready**: Genkit setup for AI-powered features

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [Neon PostgreSQL](https://neon.tech/) with [Prisma ORM](https://www.prisma.io/)
- **AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Neon database account (for database features)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your Neon database credentials.

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Run database migrations (when database is configured):
   ```bash
   npx prisma db push
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup with Neon

1. Create a free account at [Neon](https://neon.tech/)
2. Create a new project and database
3. Copy the connection strings from your Neon dashboard:
   - Use the **pooled** connection string for `DATABASE_URL`
   - Use the **direct** connection string for `DIRECT_DATABASE_URL`
4. Run `npx prisma db push` to create the tables

## Project Structure

```
├── prisma/
│   └── schema.prisma      # Database schema
├── public/
│   └── icon.svg           # Site favicon
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles & theme
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   └── Navbar.tsx     # Navigation component
│   └── lib/
│       ├── prisma.ts      # Prisma client (Neon adapter)
│       └── genkit.ts      # Genkit AI configuration
└── ...
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Ocean Deep | `#0a1628` | Primary background |
| Ocean Dark | `#0f2744` | Secondary background |
| Ocean Mid | `#1a3a5c` | Borders, accents |
| Ocean Light | `#2d5a7b` | Primary accent |
| Driftwood | `#5c4033` | Warm accents |
| Rope Tan | `#c4a35a` | CTA, highlights |
| Pearl | `#f5f5f0` | Primary text |
| Abyss | `#050a12` | Deep background |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
