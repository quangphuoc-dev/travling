import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import Menu from '../components/Menu';

function Header(props){
    const {title, bgColor} = props;
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
        <header className={"h-[112px] w-[1440px] max-w-full flex flex-row items-center justify-between"}>
        <a
          href="/"
        >
         <img src={Logo} alt="" className='h-[50px] w-[141px]' />
        </a>
        <div className='space-x-[80px]'>
          <Menu href="/product" label="Product"/>
          <Menu href="/contact" label="Contact"/>
          <Menu href="/about-us" label="About Us"/>
          {/* <a href="/product">
            Product
          </a>
          <a href="/contact">
            Contact
          </a>
          <a href='about-us'>
            About Us
          </a> */}
        </div>
        <button 
        onClick={incrementCount}
        className='bg-[#FA8443] rounded-lg h-[46px] w-[120px] text-white'>
          Sign Up {count}
        </button>
      </header>
    )
}

export default Header