import "./App.css";
import menu from "./assets/icon-menu.svg";
import sneakers from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import cartBtn from "./assets/icon-cart-btn.svg";
import avatar from "./assets/image-avatar.png";
import iconMinus from "./assets/icon-minus.svg";
import iconPlus from "./assets/icon-plus.svg";
import iconClose from "./assets/icon-close.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "./assets/image-product-1.jpg";
import product2 from "./assets/image-product-2.jpg";
import product3 from "./assets/image-product-3.jpg";
import product4 from "./assets/image-product-4.jpg";
import "swiper/css";
import { Navigation } from "swiper";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className={nav ? "fixed bg-white w-[70%] h-[100vh] z-[2] ease-out duration-[0.3s]" : "fixed left-[-100%]"}>
        <ul className="font-bold pt-24 pl-4">
          <li className="py-2">Collections</li>
          <li className="py-2">Men</li>
          <li className="py-2">Women</li>
          <li className="py-2">About</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>
      <header>
        <nav className="flex justify-between items-center p-4 bg-white">
          <div className="flex items-end">
            <div onClick={handleClick} className="z-[3]">
              {!nav ? (
                <img src={menu} alt="" />
              ) : (
                <img src={iconClose} alt="" />
              )}
            </div>
            <img className="block ml-4" src={sneakers} alt="" />
          </div>
          <div className="flex items-center">
            <img className="block mr-4" src={cart} alt="" />
            <img src={avatar} className="w-10" alt="" />
          </div>
        </nav>
      </header>
      <section>
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
        >
          <SwiperSlide>
            <img src={product1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product4} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="p-4">
        <p className="uppercase font-bold text-[#FF7D1B] text-[0.8rem]">
          sneaker company
        </p>
        <p className="font-bold text-[1.5rem] my-4">
          Fall Limited Edition Sneakers
        </p>
        <p className="text-[#6d6d6d]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-[1.5rem]">$125.00</span>
            <span className="inline-block text-[0.8rem] font-bold mx-4 bg-[#FBEEE6] text-[#FF7D1B] py-1 px-2 rounded-md">
              50%
            </span>
          </div>
          <div>
            <span className="text-[#969696] line-through">$250.00</span>
          </div>
        </div>
        <div className="flex justify-between items-center my-8 bg-slate-50 px-6 py-4">
          <img
            src={iconMinus}
            alt=""
            onClick={() => {
              if (count !== 0) {
                setCount(count - 1);
              }
            }}
          />
          <span className="font-bold">{count}</span>
          <img src={iconPlus} alt="" onClick={() => setCount(count + 1)} />
        </div>
        <a
          href="#"
          className="bg-[#FF7D1B] block w-full py-[1rem] shadow-md shadow-[#ff7e1b50] rounded-md font-bold"
        >
          <div className="flex justify-center">
            <img className="w-[1.2rem]" src={cartBtn} alt="" />
            <span className="text-white ml-4">Add to cart</span>
          </div>
        </a>
      </section>
    </>
  );
}

export default App;
