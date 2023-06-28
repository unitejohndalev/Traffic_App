//import next image
import Image from "next/image";

//import motion
import { motion } from "framer-motion";

//import variants
import { fadeInLeft, fadeInRight, staggerTextContainer } from "../variants";

const How = ({ howData }) => {
  //destructure data
  const { title, subtitle, girlImg } = howData;
  return (
    <section
      className="mb-[60px] lg:mb-[160px] flex justify-center items-center h-[100vh]"
      id="how"
    >
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-10"
        >
          {/* image */}
          <motion.div variants={fadeInRight} className="flex-1">
            <Image src={girlImg} alt="girlImg" width={720} height={678} />
          </motion.div>
          {/* text */}
          <motion.div variants={fadeInLeft} className="flex-1 flex justify-end">
            <div className="max-w-[455px]">
              <h1 className="h3">{title}</h1>
              <p className="lead">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
