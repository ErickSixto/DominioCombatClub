import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import HomePage from "@/pages/HomePage";
import ClasesPage from "@/pages/ClasesPage";
import HorarioPage from "@/pages/HorarioPage";
import PlanesPage from "@/pages/PlanesPage";
import FAQPage from "@/pages/FAQPage";
import ContactoPage from "@/pages/ContactoPage";

function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/clases" element={<ClasesPage />} />
              <Route path="/horario" element={<HorarioPage />} />
              <Route path="/planes" element={<PlanesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </LanguageProvider>
    </HashRouter>
  );
}

export default App;
