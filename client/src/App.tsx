import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { useTelegram } from "@/hooks/use-telegram";

// Pages
import Home from "@/pages/Home";
import SellerDashboard from "@/pages/SellerDashboard";
import SellerUpload from "@/pages/SellerUpload";
import BuyerMarketplace from "@/pages/BuyerMarketplace";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/seller" component={SellerDashboard} />
      <Route path="/seller/upload" component={SellerUpload} />
      <Route path="/buyer" component={BuyerMarketplace} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Telegram WebApp
  useTelegram();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
        <Router />
        <Navigation />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
