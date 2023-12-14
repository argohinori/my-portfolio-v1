// components
import Circles from "../../components/Circles";

// variants
import { fadeIn } from "../../variants";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect .</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
            className="flex-1 flex flex-col mx-auto w-full gap-6"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="email" placeholder="email" className="input" />
            </div>
            <input
              id="subject"
              type="text"
              placeholder="subject"
              className="input"
            />
            <textarea
              id="message"
              placeholder="message"
              className="textarea"
            ></textarea>
            <div className="flex gap-x-6 w-full justify-between">
              <Link
                href={"mailto:argo.orton@gmail.com"}
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="flex gap-2 group-hover:-translate-y-[120%] group-hover:opacity-5 transition-all duration-500">
                  <MdEmail className="translate-y-1 " />
                  Let's Talk
                </span>
                <BsArrowRight className="-translate-x-[500%] opacity-0 group-hover:flex group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </Link>
              <Link
                href={"https://me-qr.com/nteyph"}
                target="_blank"
                className="btn rounded-full border text-accent bg-white border-blue-900/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="flex gap-2 group-hover:-translate-y-[120%] group-hover:opacity-5 transition-all duration-500">
                  <FaWhatsapp className="translate-y-1 " />
                  Text me
                </span>
                <BsArrowRight className="-translate-x-[500%] opacity-0 group-hover:flex group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </Link>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
