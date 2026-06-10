import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./Testimonials.css";

import client1 from "../../assets/story3.jpg";
import client2 from "../../assets/story4.jpg";

const testimonials = [
  {
    image: client1,
    name: "Selvakumar & Sowmitha",
    review:
      "Their work isn't just photography; it's art. Every emotion, every detail, and every fleeting moment was captured beautifully. Looking through our album feels like reliving the day all over again."
  },
  {
    image: client2,
    name: "Karthik & Meha Dharsini",
    review:
      "An incredible storytelling experience from start to finish. The team made us feel comfortable, and the photographs are timeless. We couldn't have asked for a better experience."
  }
];

/* Duplicate cards for smoother carousel */
const displayTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      const card =
        slider.querySelector(".testimonial-card");

      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = 35;

      const nextPosition =
        slider.scrollLeft + cardWidth + gap;

      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      if (nextPosition >= maxScroll - 50) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        slider.scrollTo({
          left: nextPosition,
          behavior: "smooth"
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">

      <span className="testimonial-label">
        TRUSTED BY OUR CLIENTS
      </span>

      <h2 className="section-title">
        Words Of Love
      </h2>

      <div
        className="testimonial-slider"
        ref={sliderRef}
      >

        {displayTestimonials.map((item, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.05
            }}
          >

            <div className="client-avatar">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <h3 className="client-name">
              {item.name}
            </h3>

            <div className="quote-icon">
              ❝
            </div>

            <p className="quote-text">
              {item.review}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;