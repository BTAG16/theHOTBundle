import { Instagram } from "lucide-react";

export default function Footer() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/thehotbundle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
    console.log('Footer Instagram link clicked');
  };

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The HOT Bundle. All rights reserved.
            </p>
          </div>

          {/* Social Link */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleInstagramClick}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary hover-elevate transition-colors"
              data-testid="button-footer-instagram"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}