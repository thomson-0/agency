
import hero2 from '../assets/43357938.jpg';
import Button from './Button';

function Hero2() {
  return (
    <div className=" py-16">
      <section className="flex flex-col md:flex-row justify-between items-center">

      <div className="w-full  md:w-1/3 lg:w-2/5 mt-4 md:mt-0">
          <div className="w-full flex justify-center ">
            <img
              className=""
              src={hero2}
              alt="Illustration"
            />
          </div>
        </div>


        <div className="w-full md:w-2/3 lg:w-3/5 text-center md:text-left">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-black">
            How to design your site footer like we did
          </h1>
          
          <p className="mt-7 mb-8 font-medium tracking-widest  text-gray-400 dark:text-white sm:leading">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <Button name={'Learn More'} />
        </div>
       
      </section>
    </div>
  );
}

export default Hero2;
