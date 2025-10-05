# Silver Packs - Premium Silver Investment Platform

A modern, responsive website built with Next.js and Tailwind CSS for a silver investment platform.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: FAQ accordion, mobile navigation menu
- **SEO Optimized**: Proper meta tags and semantic HTML
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd silverPicker
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
silverPicker/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The current theme uses:
- Primary blue colors for CTAs and highlights
- Gray scale for text and backgrounds
- Accent colors for features (green, purple)

### Content
All content is easily customizable in the component files:
- Update text content directly in the JSX
- Modify pricing plans in `components/Pricing.tsx`
- Add/remove FAQ items in `components/FAQ.tsx`
- Update navigation links in `components/Header.tsx`

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repository
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Connect your repository and use the default build settings

## License

This project is licensed under the MIT License.
# silver
