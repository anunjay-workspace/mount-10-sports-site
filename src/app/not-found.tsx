import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NotFoundContent } from "@/components/not-found-content";

export default function RootNotFound() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <NotFoundContent />
      </main>
      <Footer />
    </div>
  );
}
