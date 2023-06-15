import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Tootr logo"
            width={110}
            height={20}
            className="object-contain"
          />
        </Link>
        <div className="flex">
          <CustomButton
            title="Log In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />

          <CustomButton
            title="Sign Up"
            btnType="button"
            containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
