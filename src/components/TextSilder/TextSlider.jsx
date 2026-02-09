import React from "react";
import Marquee from "react-fast-marquee";

const TextSlider = () => {
  return (
    <div className="bg-[#DEF57F]">
      <ul class="flex text-xl gap-5 font-semibold py-5">
        <Marquee className="space-x-10">
          <li class="flex items-center space-x-2 ml-4">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span>VEGETARIAN DONE BETTER</span>
          </li>
          <li class="flex items-center space-x-2 ml-4">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span>BRINGING YOU THE BEST IN SNACKS, DESSERTS & DAIRY!</span>
          </li>
          <li class="flex items-center space-x-2 ml-4">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span>VEGETARIAN DONE BETTER</span>
          </li>
          <li class="flex items-center space-x-2 ml-4">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span>BRINGING YOU THE BEST IN SNACKS, DESSERTS & DAIRY!</span>
          </li>
        </Marquee>
      </ul>
    </div>
  );
};

export default TextSlider;
