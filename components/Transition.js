// framer motion
import { motion } from "framer-motion";

// variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const AnimatedDiv = ({ className, transition }) => {
  return (
    <motion.div
      className={
        "fixed top-0 bottom-0 right-full w-screen h-screen " + className
      }
      variants={transitionVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={transition}
    />
  );
};

const Transition = () => {
  return (
    <>
      <AnimatedDiv
        className="z-40 bg-animated1"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <AnimatedDiv
        className="z-30 bg-animated2"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <AnimatedDiv
        className="z-20 bg-animated3"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
