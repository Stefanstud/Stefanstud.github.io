import { Card } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { SiGooglescholar } from "react-icons/si";
import LazyImage from "./LazyImage";

const AboutSection = () => {
  return (
    <section id="about" className="mb-12">
      <Card className="paper-section border-none max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* About Content */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row gap-8 items-center h-full">
              {/* Name and Contact */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold font-academic text-foreground mb-2">
                  Stefan Krsteski
                </h1>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-end gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-academic leading-none">Lausanne, Switzerland</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:stefan.krsteski@gmail.com" className="font-academic hover:text-primary transition-colors leading-none">
                      stefan.krsteski@gmail.com
                    </a>
                  </div>
                  <div className="flex items-end gap-2">
                    <Github className="w-5 h-5" />
                    <a href="https://github.com/Stefanstud" target="_blank" rel="noopener noreferrer" className="font-academic hover:text-primary transition-colors leading-none">
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-end gap-2">
                    <Linkedin className="w-5 h-5" />
                    <a href="https://www.linkedin.com/in/stefan-krsteski-136abb235/" target="_blank" rel="noopener noreferrer" className="font-academic hover:text-primary transition-colors leading-none">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-end gap-2">
                    <SiGooglescholar className="w-5 h-5" />
                    <a href="https://scholar.google.com/citations?user=nFVO8wYAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="font-academic hover:text-primary transition-colors leading-none">
                      Google Scholar
                    </a>
                  </div>
                </div>
                {/* Bio */}
                <div className="mb-6">
                  <p className="text-lg font-academic leading-relaxed text-foreground">
                    Hello there! I'm a Master's student in Data Science at <a href="https://www.epfl.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">EPFL</a>, currently working as a research assistant at <a href="https://dlab.epfl.ch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dlab</a>. My interests span machine learning and deep learning in all forms -- from large language models and NLP to computer vision and graphs. I'm naturally curious and always looking to better understand how the world works. Lately, I've been interested in how humans learn and interact with each other, and how we can model aspects of that behavior computationally.
                  </p>
                </div>

                {/* Keywords */}
                <div>
                  <p className="font-academic text-foreground">
                    <span className="font-semibold">Keywords:</span> Natural Language Processing, Computational Social Science, Simulations
                  </p>
                </div>
              </div>
              {/* Profile Photo */}
              <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center self-center lg:self-center lg:mt-8">
                <LazyImage
                  src="/personal/me.jpg"
                  alt="Stefan Krsteski Profile Photo"
                  className="w-full h-full object-cover rounded-lg border shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AboutSection;