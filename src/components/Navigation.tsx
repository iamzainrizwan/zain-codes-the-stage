import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Code, Theater } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "home", icon: Home },
    { path: "/work", label: "work", icon: Briefcase },
    { path: "/projects", label: "projects", icon: Code },
    { path: "/theatre", label: "theatre", icon: Theater },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold hover:text-accent transition-colors">
            zain.dev
          </Link>
          <div className="flex gap-8">
            {links.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 text-sm transition-colors hover:text-accent ${
                  location.pathname === path ? "text-accent" : "text-muted-foreground"
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
