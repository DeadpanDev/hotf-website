import { NavbarMain } from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavbarMain />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
