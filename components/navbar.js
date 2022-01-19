import Image from "next/image";
import { useState, useRef } from "react";

export default function Navbar({ showMenu }) {
  const [menu, setMenu] = useState(false);
  const hamburger = useRef(null);
  const onHamburger = (e) => {
    if (menu === false) {
      hamburger.current.classList.toggle("active");
    } else {
      hamburger.current.classList.remove("active");
    }
    showMenu();
  };
  return (
    <div className="flex flex-row justify-between p-4 fixed w-full z-[9] bg-black">
      <div className="flex flex-row items-center">
        <div className="flex justify-center items-center">
          <div>
            <Image
              src="/assets/logo.png"
              alt="Vercel Logo"
              width={40}
              height={40}
            />
          </div>
          <h4 className="mx-1 text-white font-['NexaTextBold']">
            ChampagneSwap
          </h4>
        </div>
        <div className="flex text-white ml-4 font-['NexaTextBold'] lg:flex hidden">
          <a href="#">
            <h6 className="mx-2 text-sm">Swap</h6>
          </a>
          <a href="#">
            <h6 className="mx-2 text-sm">Trade</h6>
          </a>
          <a href="#">
            <h6 className="mx-2 text-sm">Pools</h6>
          </a>
          <a href="#">
            <h6 className="mx-2 text-sm">Lend</h6>
          </a>
          <a href="#">
            <h6 className="mx-2 text-sm">Borrow</h6>
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex font-['NexaTextBold']">
          <div className="flex text-white mx-2 hidden md:flex">
            <a href="#">
              <h5 className="text-sm">Blog</h5>
            </a>
            <div className="-mt-1 ml-1">
              <Image
                src="/assets/Vector.png"
                alt="Vector"
                width={8}
                height={8}
              />
            </div>
          </div>
          <div className="flex text-white mx-2 hidden md:flex">
            <a href="#">
              <h5 className="text-sm">Docs</h5>
            </a>
            <div className="-mt-1 ml-1">
              <Image
                src="/assets/Vector.png"
                alt="Vector"
                width={8}
                height={8}
              />
            </div>
          </div>
          <div className="flex text-white mx-2 hidden md:flex">
            <a href="#">
              <h5 className="text-sm">Analytics</h5>
            </a>
            <div className="-mt-1 ml-1">
              <Image
                src="/assets/Vector.png"
                alt="Vector"
                width={8}
                height={8}
              />
            </div>
          </div>
        </div>
        <div className="ml-4 hidden md:block">
          <button className="bg-[#10D281] px-4 py-1 text-sm rounded-lg font-['NexaTextBlack']">
            Enter App
          </button>
        </div>
        <div className="ml-4 z-[50]">
          <div
            className="inline-block mt-1 hamburger"
            ref={hamburger}
            onClick={onHamburger}
          >
            <div className="w-[25px] h-[2px] bg-white my-2 bar1"></div>
            <div className="w-[25px] h-[2px] bg-white my-2 bar2"></div>
            <div className="w-[25px] h-[2px] bg-white my-2 bar3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
