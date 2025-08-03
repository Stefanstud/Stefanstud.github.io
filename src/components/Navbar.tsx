import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("education");

    const sections = [
        { id: "education", label: "Education", color: "bg-muted-foreground" },
        { id: "experience", label: "Experience", color: "bg-primary" },
        { id: "publications", label: "Publications", color: "bg-accent-purple" },
        { id: "projects", label: "Projects", color: "bg-accent-green" },
        { id: "awards", label: "Awards", color: "bg-accent-orange" },
    ];

    const scrollToSection = (sectionId: string) => {
        if (sectionId === "about") {
            // Scroll to the very top of the page
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setActiveSection(sectionId);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const navbarHeight = 80; // Approximate navbar height
                const elementPosition = element.offsetTop - navbarHeight;

                window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth"
                });
                setActiveSection(sectionId);
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm">
            <div className="container mx-auto px-2 max-w-5xl py-3">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <div className="flex items-center gap-2 ml-6">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-xl font-bold font-academic text-foreground hover:text-primary transition-colors"
                        >
                            SK
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-6">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-muted/50 ${activeSection === section.id
                                    ? "bg-muted text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <div className={`w-2 h-2 rounded-full ${section.color}`}></div>
                                <span className="text-base font-academic">{section.label}</span>
                            </button>
                        ))}

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
