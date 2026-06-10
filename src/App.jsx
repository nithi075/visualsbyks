import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Home Components
import Hero from "./components/Hero/Hero";
import StorySection from "./components/StorySection/StorySection";
import FilmSection from "./components/FilmSection/FlimSection";
import About from "./components/About/About";
import Testimonials from "./components/testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Storytelling from "./components/StoryTelling/StoryTelling";
import WeddingStory from "./components/WeddingStory/WeddingStory";
import TenPartNarrative from "./components/TenPartNarrative/TenPartNarrative";
import FAQ from "./components/FreequentQ/faq";

// Gallery Detail Page
import GalleryDetail from "./pages/Gallery";

/* =========================
   HOME PAGE
========================= */

function HomePage() {
  return (
    <div className="app">
      <Navbar />

      <Hero />

      {/* <StorySection /> */}
         <Storytelling />

      <TenPartNarrative />

   


      <About />

      <WeddingStory />

      <Testimonials />
            <FilmSection />


      <FAQ />

      <Gallery />

      <Footer />
    </div>
  );
}

/* =========================
   APP ROUTES
========================= */

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Dynamic Gallery */}
        <Route
          path="/gallery/:category"
          element={<GalleryDetail />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

