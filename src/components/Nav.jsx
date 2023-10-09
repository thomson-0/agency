import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {RxHamburgerMenu} from 'react-icons/rx'

const navLink = [
  { link: 'Home', path: 'home' },
  { link: 'Features', path: 'features' },
  { link: 'Community', path: 'community' },
  { link: 'Blog', path: 'blog' },
  { link: 'Pricing', path: 'pricing' },
];

function Nav() {
  return (
    <header className='py-7'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex justify-between items-center'>
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className='hidden sm:block'>
            <ul className='flex gap-x-8 items-center'>
              {navLink.map((linkItem, index) => (
                <li key={index}>
                  <Link to={linkItem.path}>{linkItem.link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='sm:hidden'>
            <RxHamburgerMenu/>
            
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
