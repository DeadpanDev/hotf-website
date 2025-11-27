import HeroSectionDemo1 from "@/components/hero-section-demo-1";

/**
 * Renders the centered landing page with Next.js and Vercel branding, introductory text, and action links.
 *
 * The component is purely presentational and adapts styling for light/dark themes and responsive layouts.
 *
 * @returns The JSX element representing the landing page.
 */
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center h-svh">
      <HeroSectionDemo1 />
    </div>
  );
}
