//import next image
import Image from "next/image";

//import Link
import Link from "next/link";

//import motion
import { motion } from "framer-motion";

//import variants
import { fadeInUp, footerTruckAnim, staggerFooterContainer } from "../variants";

//import icons
import { CgArrowLongRight } from "react-icons/cg";

const Footer = ({ footerData }) => {
  //destructure footerData
  const { truckImg, hillImg, text, form } = footerData;

  //destructure form data
  const { labelName, placeholderName, labelEmail, placeholderEmail, btnText } =
    form;

  return (
    <footer
      className="bg-darkblue lg:bg-transparent lg:bg-footer
  lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[738px] pt-12 lg:pt-0 relative
   flex justify-center items-center h-[100vh]"
      id="footer"
    >
      <motion.div
        variants={staggerFooterContainer}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.1 }}
        className="container mx-auto lg:min-h-[738px] flex items-center justify-center"
      >
        {/* truck image */}
        <motion.div
          variants={footerTruckAnim}
          className="hidden lg:flex absolute -left-[105px] top-20 "
        >
          <Image alt="truckImg" src={truckImg} width={430} height={210} />
        </motion.div>
        {/* hill image */}
        <div className="hidden lg:flex absolute left-0 top-[200px]">
          <Image alt="hillImg" src={hillImg} width={137} height={92} />
        </div>
        {/* text & form */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center lg:pr-[95px] lg:gap-x-[95px]
        gap-y-10 lg:gap-y-0"
        >
          {/* text */}
          <div className="text-white flex-1 border-l-[10px] border-accent py-4 lg:mt-24">
            <p className="max-w-[330px] text-[20px] leading-[30px] ml-[40px]">
              {text}
            </p>
          </div>
          {/* form */}
          <form
            className="w-full max-w-[550px] bg-white flex-1 rounded-[10px]
        lg:order-2 flex flex-col px-[35px] lg:px-[75px] py-[25px]
        lg:py-[52px] space-y-[40px] drop-shadow-primary"
          >
            {/* name input */}
            <div className="flex flex-col">
              <label className="font-light mb-[10px]" htmlFor="name">
                {labelName}
              </label>
              <input
                className="input"
                type="text"
                placeholder={placeholderName}
                id="name"
              />
            </div>
            {/* email input */}
            <div className="flex flex-col">
              <label className="font-light mb-[10px]" htmlFor="email">
                {labelEmail}
              </label>
              <input
                className="input"
                type="text"
                placeholder={placeholderEmail}
                id="email"
              />
            </div>
            {/* button */}
            <button className="btn self-start hover:bg-accent-hover transition">
              {btnText}
              {/* icon */}
              <CgArrowLongRight className="text-[30px]" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
