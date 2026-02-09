import React from "react";
import Marquee from "react-fast-marquee";

const TextSlider = () => {
  return (
    <div className="bg-[#DEF57F] h-18 flex">
      <ul class="flex text-xl items-center">
        <Marquee className="space-x-10">
          <li class="flex items-center">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span className="text-black font-bold">VEGETARIAN DONE BETTER</span>
          </li>
          <li class="flex items-center space-x-2 ml-4">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span className="text-black font-semibold">
              BRINGING YOU THE BEST IN SNACKS, DESSERTS & DAIRY!
            </span>
          </li>
          <li class="flex items-center space-x-2 ml-4">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span className="text-black font-bold">VEGETARIAN DONE BETTER</span>
          </li>
          <li class="flex items-center space-x-2 ml-4">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span className="text-black font-semibold">
              BRINGING YOU THE BEST IN SNACKS, DESSERTS & DAIRY!
            </span>
          </li>
          <li class="flex items-center space-x-2 ml-4">
            <span class="w-2 h-2 bg-black rounded-full inline-block"></span>
            <span className="text-black font-bold">
              THE BEST IN SNACKS, DESSERTS & DAIRY
            </span>
          </li>
        </Marquee>
      </ul>
    </div>
  );
};

export default TextSlider;
