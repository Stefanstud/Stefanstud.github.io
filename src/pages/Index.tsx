import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-2 max-w-5xl pt-20"> {/* Added pt-20 for navbar spacing */}
        <AboutSection />
        <CVSection />
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t bg-muted/30">
        <div className="container mx-auto px-2 text-center">
          <p className="text-muted-foreground font-academic text-sm">
            © Copyright {new Date().getFullYear()} Stefan Krsteski.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
