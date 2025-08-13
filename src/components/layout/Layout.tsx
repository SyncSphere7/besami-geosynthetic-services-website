import { ReactNode } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import QuickContactWidget from "@/components/ui/quick-contact-widget";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <QuickContactWidget />
    </div>
  );
};

export default Layout;