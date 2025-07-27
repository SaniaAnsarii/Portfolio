import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnimatedCursor from "react-animated-cursor";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
     
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color="20, 184, 166" // teal for your theme
          outerAlpha={0.4}
          innerScale={1}
          outerScale={2.2}
          trailingSpeed={6}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
