import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm max-w-xs leading-relaxed">
              Your business deserves to be found.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm hover:text-amber transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-sm">
          © 2026 Luma Sites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
