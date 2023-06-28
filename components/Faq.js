//import next image
import Image from "next/image";

//import components
import Accordion from "./Accordion";

//import motion
import { motion } from "framer-motion";

//import variant
import {
  fadeInLeft,
  fadeInRight,
  staggerAccordionContainer,
  staggerTextContainer,
} from "../variants";

const Faq = ({ faqData }) => {
  //destructure data
  const { pretitle, title, boyImg, accordions } = faqData;
  return (
    <section
      className="min-h-[1150px] lg:bg-faq
    bg-no-repeat bg-right-top lg:pt-40 lg:pb-24 mb-[60px]
    lg:mb-[160px]"
      id="faq"
    >
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="relative flex flex-col lg:flex-row
        justify-center lg:justify-start items-center
        pt-8 pb-16 lg:pt-16 lg:pb-32"
        >
          {/* text */}
          <motion.div variants={fadeInRight} className="lg:max-w-[45%]">
            <h3 className="h3">{pretitle}</h3>
            <h2 className="h2 mb-6 lg:mb-12">{title}</h2>
          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeInLeft}
            className="lg:absolute lg:-right-16"
          >
            <Image alt="boyImg" src={boyImg} width={708} height={498} />
          </motion.div>
        </motion.div>
        {/* accordian list */}
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2
        gap-x-[20px] gap-y-[10px]"
        >
          {accordions.map((accordion, index) => {
            return <Accordion key={index} accordion={accordion} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
