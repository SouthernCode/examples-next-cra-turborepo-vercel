import './Header.styles.css';
// import { CustomLink as Link } from '../Link/Link';
import Link from 'next/link';

export const Header = ({
}) => {

  return (
    <header>
      <Link href="/" className='logo'>Chori Commerce</Link>
      <ul className='navbar'>
        <li><Link href="/" className='header-link'>Home</Link></li>
        <li><Link href="/about-us" className='header-link'>About Us</Link></li>
        <li><Link href="/blog" className='header-link'>Our Clients</Link></li>
        <li><Link href="/blog" className='header-link'>Blog</Link></li>
      </ul>
    </header>
  );
};

