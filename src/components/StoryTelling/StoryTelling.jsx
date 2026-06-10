import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./StoryTelling.css";

import wedding from "../../assets/img2.jpg";
import wedding2 from "../../assets/img3.jpg";
import couple from "../../assets/img3.jpg";
import portrait from "../../assets/img4.jpg";
import candid from "../../assets/img5.jpg";
import wedding3 from "../../assets/img1.jpeg";

export default function Gallery() {

const navigate = useNavigate();

const items = [


{
  title: "Maternity Magic",
  category: "Celebrations",
  slug: "maternity",
  img: wedding2
},

{
  title: "Wedding Moments",
  category: "Luxury Weddings",
  slug: "wedding",
  img: wedding
},

{
  title: "Couple Moments",
  category: "Love Stories",
  slug: "pre-wedding",
  img: couple
},

{
  title: "Portrait Studio",
  category: "Portraits",
  slug: "portrait",
  img: portrait
},

{
  title: "Bride Photography",
  category: "Moments",
  slug: "bride",
  img: candid
},

{
  title: "Engagement Bliss",
  category: "Love Stories",
  slug: "engagement",
  img: wedding3
}


];

const [activeIndex, setActiveIndex] = useState(1);

useEffect(() => {


const interval = setInterval(() => {

  setActiveIndex((prev) =>
    prev === items.length - 1
      ? 0
      : prev + 1
  );

}, 4000);

return () => clearInterval(interval);


}, []);

const getPosition = (index) => {


const total = items.length;

let position = index - activeIndex;

if (position < -total / 2) {
  position += total;
}

if (position > total / 2) {
  position -= total;
}

return position;


};

return (


<section
  className="portfolio"
  id="portfolio"
>

  <div className="portfolio-wrapper">

    <motion.div

      className="portfolio-header"

      initial={{
        opacity: 0,
        y: 40
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }}

      viewport={{
        once: true
      }}

    >

      <span className="p-tag">
        PORTFOLIO
      </span>

      <h2 className="portfolio-title">

        Timeless Frames &
        <br />

        <span>
          Editorial Stories
        </span>

      </h2>

      <p className="p-sub">

        Explore our curated collection
        of cinematic wedding storytelling,
        luxury celebrations,
        and emotional moments.

      </p>

    </motion.div>

    <div className="portfolio-slider">

      {items.map((item, index) => {

        const position = getPosition(index);

        const isActive =
          index === activeIndex;

        return (

          <motion.div

            key={index}

            className={`portfolio-card ${
              isActive ? "active" : ""
            }`}

            animate={{

              x:

                position === 0
                  ? "0%"

                  : position < 0
                  ? "-105%"
                  : "105%",

              scale:

                isActive
                  ? 1
                  : 0.82,

              rotate:

                position < 0
                  ? -6
                  : position > 0
                  ? 6
                  : 0,

              opacity:

                Math.abs(position) > 1
                  ? 0
                  : 1,

              filter:

                isActive
                  ? "blur(0px)"
                  : "blur(1px)"

            }}

            transition={{

              duration: 1.2,

              ease: [0.16, 1, 0.3, 1]

            }}

            style={{

              zIndex:
                isActive
                  ? 10
                  : 1

            }}

            onClick={() => {

              setActiveIndex(index);

              navigate(
                `/gallery/${item.slug}`
              );

            }}

          >

            <div className="card-image-wrap">

              <img
                src={item.img}
                alt={item.title}
              />

              <div className="card-overlay"></div>

            </div>

          </motion.div>

        );

      })}

    </div>

    <AnimatePresence mode="wait">

      <motion.div

        key={activeIndex}

        className="active-details"

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        exit={{
          opacity: 0,
          y: -20
        }}

        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}

      >

        <span className="active-category">

          {items[activeIndex].category}

        </span>

        <h3>

          {items[activeIndex].title}

        </h3>

        <p>

          A celebration of emotions,
          timeless storytelling,
          and artistic luxury photography.

        </p>

        <button

          className="portfolio-btn"

          onClick={() =>
            navigate(
              `/gallery/${items[activeIndex].slug}`
            )
          }

        >

          VIEW FULL GALLERY

        </button>

      </motion.div>

    </AnimatePresence>

  </div>

</section>


);

}
