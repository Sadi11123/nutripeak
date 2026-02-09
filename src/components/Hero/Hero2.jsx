import HeroTwo from "../../assets/Media/hero-img/Hero-Img-two.png";
import TextSlider from "../TextSilder/TextSlider";
// eslint-disable-next-line
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
    y: 500,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Hero2 = ({ activeSlide, index }) => {
  return (
    <div>
      <div className="bg-[#F28B54] min-h-screen flex items-center pt-49 overflow-hidden">
        <div className="max-w-375  mx-auto px-6 w-full relative">
          {/* CENTER HEADING + IMAGE */}
          <div className="flex flex-col items-center relative">
            <motion.h1
              key={index}
              variants={textVariants}
              initial="hidden"
              animate={activeSlide === index ? "visible" : "hidden"}
              className="text-[96px] font-black text-[#702C0A] uppercase text-center tracking-[-3px] leading-22.5"
            >
              Feel & perform <br /> your best to <br /> win the day
            </motion.h1>

            {/* Product Image */}
            <motion.div
              key={`img-${index}`}
              variants={imgVariants}
              initial="hidden"
              animate={activeSlide === index ? "visible" : "hidden"}
              className="relative -mt-17.5"
            >
              <img
                src={HeroTwo}
                alt="NutriPeak Product"
                className="w-[320px]"
              />
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block mr-20 pt-24">
            <div className="max-w-md text-black">
              <p className="text-base leading-relaxed text-start">
                Unlock your full potential with our potent all-in-one mushroom &
                apoptogenic blends that support energy*, focus, and mental
                clarity—so you're ready for whatever the day throws at you. All
                with a taste you’ll actually look forward to.
              </p>

              <div className="flex gap-3 pt-10">
                <button className="text-lg font-medium bg-black text-white py-3 px-9 rounded-xl  hover:bg-white hover:text-black duration-500">
                  Shop Now
                </button>
                <button className="text-lg font-medium text-black py-3 px-9 rounded-xl border border-black  hover:bg-black hover:text-white duration-500">
                  View Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TextSlider />
    </div>
  );
};

export default Hero2;
