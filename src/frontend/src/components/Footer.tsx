import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'trust-portal'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Manavdeep Seva Trust</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated to making a positive impact in our community through compassionate service and sustainable initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground transition-colors hover:text-primary">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/donations" className="text-muted-foreground transition-colors hover:text-primary">
                  Donations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground transition-colors hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Founder: Anjani Dwivedi (Kavya)</li>
              <li>
                <strong className="text-foreground">Office:</strong> Deoria, Uttar Pradesh
              </li>
              <li>
                Phone:{' '}
                <a href="tel:9651044109" className="transition-colors hover:text-trust">
                  9651044109
                </a>
              </li>
              <li>
                Email:{' '}
                <a href="mailto:manavdeepsevatrust@gmail.com" className="transition-colors hover:text-nature">
                  manavdeepsevatrust@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© {currentYear} Manavdeep Seva Trust. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 fill-trust text-trust" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary transition-colors hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
