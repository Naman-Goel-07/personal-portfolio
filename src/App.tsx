import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import { Page } from "@/lib/routes";
import Home from "./pages/Home";

const {
  "/about": About,
  "/projects": Projects,
  "/achievements": Achievements,
  "/now": Now,
  "/contact": Contact,
  "*": NotFound,
} = Page;

const App = () => (
  <ThemeProvider>
    <Toaster position="top-center" />
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/now" element={<Now />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
