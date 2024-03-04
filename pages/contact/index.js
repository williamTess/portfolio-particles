// components
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// icons
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left 
        flex items-center justify-center h-full"
      >
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            className="h2 text-center mb-12"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex gap-x-6 w-full">
              <input className="input" type="text" placeholder="name" />
              <input className="input" type="text" placeholder="email" />
            </div>
            <input className="input" type="text" placeholder="subject" />
            <textarea className="textarea" placeholder="message" />
            <button
              className="btn rounded-full border border-white/50 max-w-[170ps] px-8 
              transition-all duration-300 flex items-center justify-center overflow-hidden 
              hover:border-accent group"
              type="submit"
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0 
              transition-all duration-500"
              >
                Let's talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px] "
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
