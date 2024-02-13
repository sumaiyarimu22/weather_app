import Favourite from "./weather/Favorite";
import Input from "./weather/Input";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className='fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10'>
      <nav className='container mx-auto flex items-center justify-between py-6'>
        <a href='#'>
          <img className='h-9' src={logo} alt='Weather App' />
        </a>

        <div className='flex items-center gap-4 relative'>
          <Input />
          <Favourite />
        </div>
      </nav>
    </header>
  );
};

export default Header;
