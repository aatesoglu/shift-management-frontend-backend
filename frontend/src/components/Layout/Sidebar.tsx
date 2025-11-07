import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Clock, 
  Building2, 
  FileText 
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Clock, label: "Vardiyalar", path: "/shifts" },
  { icon: Users, label: "Çalışanlar", path: "/users" },
  { icon: Building2, label: "Departmanlar", path: "/departments" },
  { icon: FileText, label: "İzinler", path: "/leaves" },
  { icon: Calendar, label: "Çizelge", path: "/schedule" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <h1 className="text-xl font-bold text-sidebar-foreground">VardiyaPro</h1>
      </div>
      <nav className="space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
              data-testid={`nav-${item.path === '/' ? 'home' : item.path.replace('/', '')}`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
