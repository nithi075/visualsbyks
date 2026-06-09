import { useParams } from "react-router-dom";
import "./GalleryDetails.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";

import wed1 from "../assets/wed1.jpg";
import wed2 from "../assets/wed2.jpg";
import wed3 from "../assets/wed3.jpg";
import wed4 from "../assets/wed4.jpg";
import wed5 from "../assets/wed5.jpg";
import wed6 from "../assets/wed6.jpg";

import mat1 from "../assets/mat1.jpg";
import mat2 from "../assets/mat2.jpg";
import mat3 from "../assets/mat3.jpg";  
import mat4 from "../assets/mat4.jpg";
import mat5 from "../assets/mat5.jpg";
import mat6 from "../assets/mat6.jpg";
import mat7 from "../assets/mat7.jpg";
import mat8 from "../assets/mat8.jpg";

import pre1 from "../assets/pre1.jpg";
import pre2 from "../assets/pre2.jpg";
import pre3 from "../assets/pre3.jpg";
import pre4 from "../assets/pre4.jpg";
import pre5 from "../assets/pre5.jpg";
import pre6 from "../assets/pre6.jpg";
import pre7 from "../assets/pre7.jpg";
import pre8 from "../assets/pre8.jpg";  
import pre9 from "../assets/pre9.jpg";
import pre10 from "../assets/pre10.jpg";


/* Bride Images */
import bride1 from "../assets/bride1.jpg";
import bride2 from "../assets/bride2.jpg";
import bride3 from "../assets/bride3.jpg";

const galleryData = {

  maternity: {
    title: "Maternity Photography",
    subtitle: "The Beauty of Waiting",
    description:
      "A timeless celebration of motherhood, documenting the emotions, anticipation, and beauty of this extraordinary journey.",
    images: [
      mat1, 
      mat2,
      mat3,
      mat4, 
      mat5,
      mat6,
      mat7,
      mat8
    ]
  },

  wedding: {
    title: "Wedding Photography",
    subtitle: "The Sacred Bond",
    description:
      "Capturing every ritual, emotion, and unforgettable moment with a cinematic and storytelling approach.",
    images: [
      wed2,
      wed5,
      wed2,
      wed5,
      wed2,
      wed5
    ]
  },

  "pre-wedding": {
    title: "Pre-Wedding Photography",
    subtitle: "Before Forever",
    description:
      "Romantic, artistic, and authentic moments that tell your love story before the wedding day arrives.",
    images: [
      pre1,
      pre2,
      pre3,
      pre4,
      pre5,
      pre6,
      pre7,
      pre8,
      pre9,
      pre10
    ]
  },

  bride: {
    title: "Bride Photography",
    subtitle: "The Bridal Elegance",
    description:
      "Capturing the grace, beauty, emotions, and intricate details that make every bride unique on her special day.",
    images: [
      bride1,
      bride2,
      bride3
    
    ]
  }

};

export default function GalleryDetail() {

  const { category } = useParams();

  const gallery =
    galleryData[category] ||
    galleryData["wedding"];

  return (
    <>
      <Navbar />

      <section className="portfolio-gallery-hero">

        <span className="portfolio-gallery-tag">
          PORTFOLIO COLLECTION
        </span>

        <h1>
          {gallery.title}
        </h1>

        <h3>
          {gallery.subtitle}
        </h3>

        <p>
          {gallery.description}
        </p>

      </section>

      <section className="portfolio-gallery-section">

        <div className="portfolio-gallery-grid">

          {gallery.images.map((img, index) => (
            <div
              key={index}
              className="portfolio-gallery-card"
            >
              <img
                src={img}
                alt={gallery.title}
              />
            </div>
          ))}

        </div>

      </section>

      <section className="portfolio-gallery-cta">

        <span>
          LET'S CREATE SOMETHING BEAUTIFUL
        </span>

        <h2>
          Ready To Tell Your Story?
        </h2>

        <a
          href="#contact"
          className="portfolio-gallery-btn"
        >
          Book Your Session
        </a>

      </section>

      <Footer />
    </>
  );
}
