import { BsArrowRightShort } from 'react-icons/bs';
import img1 from '../assets/pexels-cottonbro-studio-5076531.jpg';
import img2 from '../assets/pexels-karina-zhukovskaya-6446685.jpg';
import img3 from '../assets/pexels-moose-photos-1586973 (1).jpg';

const iconData = [
  { img: img1, text: 'What are your safeguarding responsibilities and how can you manage them?' },
  { img: img2, text: 'Creating Streamlined Safeguarding Processes with OneRen' },
  { img: img3, text: 'Revamping the Membership Model with Triathlon Australia ' },
];

export default function Marketing() {
  return (
    <div className='py-16'>
      <div className='text-center'>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-black">
          Caring is the new marketing
        </h1>

        <p className="mt-7 mb-8 font-medium tracking-widest text-gray-400 dark:text-white sm:leading">
          The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
      </div>

      <div className="flex flex-col md:flex-row  justify-between items-center gap-4">
        {iconData.map((item, index) => (
          <div className="relative py-10 md:py-0" key={index}>
            <img src={item.img} alt="" className="rounded" width={316} height={210} />
            <div className=" w-4/5 rounded-lg text-center mx-auto absolute -bottom-10 left-0 right-0 bg-slate-50 text-gray-400 dark:text-white sm:leading p-2">
              <p>{item.text}</p>
              <div className="flex justify-center items-center gap-3">
              <h4 className="text-green-500 cursor-pointer mt-2 font-semibold text-sm mb-3">Meet all customers </h4>
              <BsArrowRightShort className="text-green-500 " />
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
