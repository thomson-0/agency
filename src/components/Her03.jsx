import React from 'react';
import hero2 from '../assets/36186546.jpg';
import { BsArrowRightShort } from 'react-icons/bs';
import icon1 from '../assets/Logo.jpg';
import icon2 from '../assets/Logo (1).jpg';
import icon3 from '../assets/Logo (2).jpg';
import icon4 from '../assets/Logo (3).jpg';
import icon5 from '../assets/Logo (4).jpg';

const img = [icon1, icon2, icon3, icon4, icon5];

function Hero3() {
  return (
    <div className="py-16 ">
      <section className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 lg:w-2/5 mt-4 md:mt-0">
          <div className="w-full flex justify-center">
            <img className="" src={hero2} alt="Illustration" />
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-3/5 text-center md:text-left">
          <p className="mt-7 mb-3 font-medium tracking-widest text-gray-400 dark:text-white sm:leading">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h4 className="text-green-500 font-semibold text-sm mb-3">Tim Smith</h4>
          <p className="mt-2 mb-3 font-thin text-xs tracking-widest text-gray-400 dark:text-white sm:leading">British Dragon Boat Racing Association</p>
          <div className="flex flex-col md:flex-row justify-between items-center mt-5 my-5 gap-10">
            <div className="flex justify-start items-center gap-10">
              {img.map((image, index) => (
                <img key={index} src={image} alt={`Client Logo ${index + 1}`} className="max-h-24" />
              ))}
            </div>
            <div className="flex justify-end items-center gap-3">
              <h4 className="text-green-500 cursor-pointer mt-2 text-right font-semibold text-sm mb-3">Meet all customers </h4>
              <BsArrowRightShort className="text-green-500 " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero3;
