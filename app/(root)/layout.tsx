import { Navbar } from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
