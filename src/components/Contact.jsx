import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";

import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please write a message.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        "service_tjjx40g",
        "template_9rqlu87",
        {
          from_name: form.name,
          to_name: "Moaz Ali",
          from_email: form.email,
          to_email: "moaz.a.ismail1@gmail.com",
          message: form.message,
        },
        "QHmHOZ2J-FPR__4te",
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Message sent successfully! I'll get back to you soon.",
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="grid  gap-2 mb-10">
          <a
            href="mailto:moaz.a.ismail1@gmail.com"
            className="
    flex items-center gap-4
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    p-4
    transition-all
    duration-300
    hover:border-[#915EFF]
    hover:bg-[#915EFF]/10
    hover:-translate-y-1
    "
          >
            <FaEnvelope size={20} />
            <span>moaz.a.ismail1@gmail.com</span>
          </a>

          <a
            href="tel:01113140942"
            className="
    flex items-center gap-4
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    p-4
    transition-all
    duration-300
    hover:border-[#915EFF]
    hover:bg-[#915EFF]/10
    hover:-translate-y-1
    "
          >
            <FaPhoneAlt size={20} />
            <span>01113140942</span>
          </a>

          <a
            href="tel:01039010884"
            className="
    flex items-center gap-4
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    p-4
    transition-all
    duration-300
    hover:border-[#915EFF]
    hover:bg-[#915EFF]/10
    hover:-translate-y-1
    "
          >
            <FaPhoneAlt size={20} />
            <span>01039010884</span>
          </a>

          <a
            href="https://www.linkedin.com/in/moaz-a-ismail1/"
            target="_blank"
            rel="noopener noreferrer"
            className="
    flex items-center gap-4
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    p-4
    transition-all
    duration-300
    hover:border-[#915EFF]
    hover:bg-[#915EFF]/10
    hover:-translate-y-1
    "
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.facebook.com/moza.a.ismail/"
            target="_blank"
            rel="noopener noreferrer"
            className="
    flex items-center gap-4
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    p-4
    transition-all
    duration-300
    hover:border-[#915EFF]
    hover:bg-[#915EFF]/10
    hover:-translate-y-1
    "
          >
            <FaFacebook size={20} />
            <span>Facebook</span>
          </a>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              required
              onChange={handleChange}
              placeholder="Write your message..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex gap-4 flex-wrap">
            <button
              disabled={loading}
              type="submit"
              className="bg-[#915EFF] hover:bg-[#7a47ff] transition-all py-3 px-8 rounded-xl text-white font-bold flex items-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Oval
                    height={20}
                    width={20}
                    color="#fff"
                    secondaryColor="#ffffff55"
                    strokeWidth={4}
                  />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <a
              href="/Moaz_Ali_CV.pdf"
              download
              className="border border-[#915EFF] text-white hover:bg-[#915EFF] transition-all py-3 px-8 rounded-xl font-bold flex items-center gap-3"
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
