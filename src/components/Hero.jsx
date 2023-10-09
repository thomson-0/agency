
import hero from '../assets/46430589.jpg';
import Button from './Button';

function Hero() {
  return (
    <div className=" py-16">
      <section className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-2/3 lg:w-3/5 min-w-fit text-center md:text-left">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl leading-tight text-black">
            Lessons and insights 
          </h1>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl leading-tight text-green-400">
          from 8 years
          </h1>
          <p className="mt-7 mb-8 font-medium tracking-widest uppercase text-gray-400 dark:text-white sm:leading">
          Where to grow your business as a photographer: site or social media?
          </p>
          <Button name={'Register'} />
        </div>
        <div className="w-full  md:w-1/3 lg:w-2/5 mt-4 md:mt-0">
          <div className="w-full flex justify-center ">
            <img
              className=""
              src={hero}
              alt="Illustration"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
