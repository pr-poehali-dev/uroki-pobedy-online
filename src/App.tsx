
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WwiiPage from "./pages/WwiiPage";
import SvoPage from "./pages/SvoPage";
import CrimeaPage from "./pages/CrimeaPage";
import HeroesPage from "./pages/HeroesPage";
import QuizPage from "./pages/QuizPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wwii" element={<WwiiPage />} />
          <Route path="/svo" element={<SvoPage />} />
          <Route path="/crimea" element={<CrimeaPage />} />
          <Route path="/heroes" element={<HeroesPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
