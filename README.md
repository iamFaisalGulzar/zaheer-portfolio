# Portfolio Website

A world-class, professional portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Designed to showcase full-stack development expertise, system design capabilities, and professional experience.

## Features

- 🎨 **Modern UI/UX** - Clean, professional design following international standards
- ⚡ **Performance Optimized** - Fast loading times and smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion
- ♿ **Accessible** - Built with accessibility best practices
- 🚀 **Production Ready** - Optimized for deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio2
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
portfolio2/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation.tsx    # Navigation bar
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── experience.tsx    # Work experience
│   ├── projects.tsx      # Projects showcase
│   ├── skills.tsx        # Skills section
│   ├── contact.tsx       # Contact form
│   └── footer.tsx        # Footer
├── lib/                  # Utilities and data
│   ├── utils.ts          # Utility functions
│   └── data.ts           # Portfolio data
└── public/               # Static assets
```

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal information (name, title, contact)
- Work experience
- Projects
- Skills and certifications
- Education details

### Styling

- Colors: Modify CSS variables in `app/globals.css`
- Theme: Update Tailwind config in `tailwind.config.ts`
- Components: Customize UI components in `components/ui/`

### Adding Projects

Add new projects to the `projects` array in `lib/data.ts`:

```typescript
{
  name: "Project Name",
  description: "Short description",
  longDescription: "Detailed description",
  technologies: ["React", "Node.js"],
  highlights: ["Key feature 1", "Key feature 2"],
  impact: ["Impact metric 1", "Impact metric 2"],
  link: "https://project-url.com",
  github: "https://github.com/username/project",
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the project:
```bash
npm run build
```

The `out` directory will contain the static export (if configured) or use the standard Next.js build output.

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Optimized animations with Framer Motion
- ✅ CSS optimization with Tailwind
- ✅ SEO-friendly metadata

## Best Practices Implemented

- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO**: Meta tags, structured data, semantic markup
- **Performance**: Code splitting, lazy loading, optimized assets
- **Responsive Design**: Mobile-first approach
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint configuration, clean code structure

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, feel free to reach out!

---

Built with ❤️ using Next.js and TypeScript

