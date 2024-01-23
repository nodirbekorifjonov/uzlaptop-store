import React, { useState } from "react";

// react-icons
import { FaPlus, FaTelegramPlane, FaInstagram } from "react-icons/fa";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const SubscribeSection = () => {
  // subscribe buttons
  const [showSubscribe, setShowSubscribe] = useState("");

  return (
    <section className="subscribe pt-[3.8rem] pb-[3.9rem] mt-[1rem] bg-[#EFF2F4] text-[#1C1C1C]">
      <div className="site-container flex flex-col items-center text-center">
        <h2 className="text-[2rem] font-semibold leading-[1.4]">
          Subscribe on our newsletter
        </h2>
        <p className="text-[1.6rem] text-[#606060] leading-[1.5] mb-[2.1rem]">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex gap-[2rem]">
          <Link
            to="https://t.me/uzlaptop"
            target="_blank"
            className={`subscribe__links block text-[2rem] text-[#0d6efd] p-[1.2rem] bg-white rounded-full shadow-[4px_4px_8px_0px_rgba(34,60,80,0.08)] cursor-pointer translate-x-[2rem] opacity-0 transition-all duration-300 hover:translate-y-[-0.5rem] hover:translate-x-0 ${showSubscribe}`}
          >
            <FaTelegramPlane />
          </Link>
          <span
            onClick={() =>
              showSubscribe === ""
                ? setShowSubscribe("active")
                : setShowSubscribe("")
            }
            className={`subscribe__links-btn block text-[2rem] text-[#0d6efd] p-[1.2rem] bg-white rounded-full shadow-[4px_4px_8px_0px_rgba(34,60,80,0.08)] cursor-pointer transition-all duration-300 ${showSubscribe}`}
          >
            <FaPlus />
          </span>
          <Link
            to="https://www.instagram.com/uz_laptop/"
            target="_blank"
            className={`subscribe__links block text-[2rem] text-[#0d6efd] p-[1.2rem] bg-white rounded-full shadow-[4px_4px_8px_0px_rgba(34,60,80,0.08)] cursor-pointer translate-x-[-2rem] opacity-0 transition-all duration-300 hover:translate-y-[-0.5rem] hover:translate-x-0 ${showSubscribe}`}
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
