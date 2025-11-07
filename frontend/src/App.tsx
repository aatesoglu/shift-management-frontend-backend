import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Shifts from "./pages/Shifts.tsx";
import Users from "./pages/Users.tsx";
import Departments from "./pages/Departments.tsx";
import Leaves from "./pages/Leaves.tsx";
import Schedule from "./pages/Schedule.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shifts" element={<Shifts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/employees" element={<Navigate to="/users" replace />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/schedule" element={<Schedule />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
