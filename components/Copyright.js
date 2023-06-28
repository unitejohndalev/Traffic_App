//import next image
import Image from "next/image";

//import Link
import Link from "next/link";

// import social icons
import { IoLogoYoutube, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const Copyright = ({ footerData }) => {
  //destructure footerData
  const { logo } = footerData;
  return (
    <div className="flex flex-col  bg-primary pt-[50px] pb-[10px] relative ">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="mx-auto lg:mb-0 lg:mx-0 lg:pl-[200px]">
          <Link href={"/"} legacyBehavior>
            <a>
              <Image src={logo} width={170} height={41} alt="logo" />
            </a>
          </Link>
        </div>
        <ul
          className="flex items-center lg:flex-row gap-y-4
          lg:gap-y-0 gap-x-[50px] text-center text-lg pr-[50px] lg:pr-[200px]
         "
        >
          <li
            className="w-9 h-9 bg-accent hover:bg-accent-hover text-white rounded-full flex justify-center
            items-center transition"
          >
            <a href="">
              <IoLogoYoutube className="text-lg" />
            </a>
          </li>
          <li
            className="w-9 h-9 bg-accent hover:bg-accent-hover text-white rounded-full flex justify-center
            items-center transition"
          >
            <a href="">
              <IoLogoInstagram className="text-lg" />
            </a>
          </li>
          <li
            className="w-9 h-9 bg-accent hover:bg-accent-hover text-white rounded-full flex justify-center
            items-center transition"
          >
            <a href="">
              <IoLogoFacebook className="text-lg" />
            </a>
          </li>
        </ul>
      </div>
      {/* copyright */}
      <div
        className="flex
          items-center justify-center
           pt-10 text-lg h-[10vh]"
      >
        <div>
          <p className="text-white">
            Copyright &copy; Trafico. 2023. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
