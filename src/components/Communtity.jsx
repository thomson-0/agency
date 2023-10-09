
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineFactory } from 'react-icons/md';
import { LiaHandsSolid } from 'react-icons/lia';

const iconData = [
  { icon: <IoIosPeople size={64} />, text: 'Membership Organisations',
  text2:'Our membership management software provides full automation of membership renewals and payments' },
  { icon: <MdOutlineFactory size={64} />, text: 'National Associations', 
text2:"We provide a complete solution for national associations, including the ability to manage their members"  },
  { icon: <LiaHandsSolid size={64} />, text: 'Clubs & Groups',
  text2:"We provide a complete solution for national associations, including the ability to manage their members" 
 },
];

function Community() {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-[#4D4D4D]">
          Manage your entire community
        </h1>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl  text-green-400">
          in a single system
        </h1>
        <p className="mt-7 mb-8 font-medium tracking-widest uppercase text-gray-400 dark:text-white sm:leading">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center mt-5 my-5 gap-10">
        {iconData.map((item, index) => (
          <div key={index} className=" flex flex-col gap-y-5 items-center text-center">
            {item.icon}
            <p className="mt-3 text-center font-bold text-2xl max-w-max text-gray-600">
              {item.text}
            </p>
            <p className="mt-3 text-center font-medium tracking-widest   text-gray-600">
              {item.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
