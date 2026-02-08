import { Link, useLocation } from "wouter";
import { Home, ShoppingBag, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  // Only show navigation on sub-pages, not the landing choice page
  if (location === "/") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-200 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around p-3 max-w-md mx-auto">
        <Link 
          href="/" 
          className={cn(
            "flex flex-col items-center gap-1 p-2 rounded-xl transition-all",
            "text-gray-500 hover:text-primary",
            location === "/" && "text-primary bg-primary/10"
          )}
        >
          <Home size={24} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>

        <Link 
          href="/buyer" 
          className={cn(
            "flex flex-col items-center gap-1 p-2 rounded-xl transition-all",
            "text-gray-500 hover:text-green-600",
            location.startsWith("/buyer") && "text-green-600 bg-green-50"
          )}
        >
          <ShoppingBag size={24} />
          <span className="text-[10px] font-medium">Market</span>
        </Link>

        <Link 
          href="/seller" 
          className={cn(
            "flex flex-col items-center gap-1 p-2 rounded-xl transition-all",
            "text-gray-500 hover:text-blue-600",
            location.startsWith("/seller") && "text-blue-600 bg-blue-50"
          )}
        >
          <PlusCircle size={24} />
          <span className="text-[10px] font-medium">Sell</span>
        </Link>
      </div>
    </nav>
  );
}
