import { Carousel } from "react-responsive-carousel";
import Hero from "../../components/Hero/Hero";
import Hero2 from "../../components/Hero/Hero2";
import Hero3 from "../../components/Hero/Hero3";
import Navbar from "../../components/navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
// import TextSlider from "../../components/TextSilder/TextSlider";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="h-screen">
      <Navbar />
      <Carousel
        showArrows={false} // left/right arrows
        showThumbs={false} // hide thumbnails
        infiniteLoop={true} // loop slides
        autoPlay={true} // autoplay slides
        interval={4000} // 5s per slide
        // stopOnHover={true} // pause on hover
        showStatus={false} // hide slide count
        swipeable={true} // allow swipe/drag
        showIndicators={false}
        emulateTouch={true} // enable cursor dragging on desktop
        onChange={(index) => setActiveSlide(index)}
        // dynamicHeight={true} // adjust height based on content
      >
        <Hero activeSlide={activeSlide} index={0} />
        <Hero2 activeSlide={activeSlide} index={1} />
        <Hero3 activeSlide={activeSlide} index={2} />
      </Carousel>
    </div>
  );
};

export default Home;
