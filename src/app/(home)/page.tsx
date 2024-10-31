import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-end space-x-4 p-4">
        <Button variant="outline" asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </nav>
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Home
        </h1>
      </main>
    </div>
  );
}
