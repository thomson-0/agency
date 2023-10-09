
import icon1 from '../assets/Logo.jpg';
import icon2 from '../assets/Logo (1).jpg';
import icon3 from '../assets/Logo (2).jpg';
import icon4 from '../assets/Logo (3).jpg';     
import icon5 from '../assets/Logo (4).jpg';

const img = [icon1, icon2, icon3, icon4, icon5]; 

function Brand() {
  return (
    <div className="text-center  py-12">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl leading-tight text-[#4D4D4D]">Our Clients</h1>
      <p className="mt-7 mb-8 font-medium tracking-widest uppercase text-gray-400 dark:text-white sm:leading">We have been working with some Fortune 500+ clients</p>
      <div className="flex justify-around items-centermt-5 my-5  gap-10">
        {img.map((image, index) => (
          <img key={index} src={image} alt={`Client Logo ${index + 1}`} className="max-h-24" />
        ))}
      </div>
    </div>
  );
}

export default Brand;
