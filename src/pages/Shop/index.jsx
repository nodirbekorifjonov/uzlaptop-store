import React, { useState } from "react";

// material tailwind
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// style.css
import "./style.css";

// react-icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoGridSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

// data
import productData from "../../assets/data/products.json";
import { Link } from "react-router-dom";

const Shop = () => {
  // accordion
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  // filters
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Shop Products Category buttons
  const [gridButton, setGridButton] = useState(false);
  const [burgerButton, setBurgerButton] = useState(true);

  const handleGridBtn = () => {
    setGridButton(true);
    setBurgerButton(false);
  };

  const handleBurgerBtn = () => {
    setBurgerButton(true);
    setGridButton(false);
  };

  // Update selected brands
  const handleBrandCheckboxChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((prevBrands) =>
        prevBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands((prevBrands) => [...prevBrands, brand]);
    }
  };

  // Filter products based on category and selected brands
  const filteredProducts = productData.filter((product) => {
    const categoryFilter =
      filterCategory === "all" || product.productCategory === filterCategory;

    const brandFilter =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.productBrand);

    return categoryFilter && brandFilter;
  });

  return (
    <section className="shop py-[2rem] text-[#1C1C1C]">
      <div className="site-container flex gap-[1.8rem]">
        {/* Aside */}
        <div className="shop__sidebar w-[24rem] max-[875px]:hidden">
          <Accordion open={openAcc1} className="mb-[2rem]">
            <AccordionHeader
              onClick={handleOpenAcc1}
              className="py-[1.2rem] border-t-[1px]"
            >
              <div className="w-full flex justify-between items-center">
                <span className="text-[1.6rem] font-semibold">Category</span>
                <span className="text-[2.4rem]">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="flex flex-col items-start text-[#505050]">
                <button
                  onClick={() => setFilterCategory("laptops")}
                  className="py-[0.9rem] text-[1.6rem]"
                >
                  Laptops
                </button>
                <button
                  onClick={() => setFilterCategory("keyboards")}
                  className="py-[0.9rem] text-[1.6rem]"
                >
                  Keyboards
                </button>
                <button
                  onClick={() => setFilterCategory("mouses")}
                  className="py-[0.9rem] text-[1.6rem]"
                >
                  Mouses
                </button>
                <button
                  onClick={() => setFilterCategory("headphones")}
                  className="py-[0.9rem] text-[1.6rem]"
                >
                  Headphones
                </button>
                <button
                  onClick={() => setFilterCategory("all")}
                  className="py-[0.9rem] text-[1.6rem] text-[#0d6efd]"
                >
                  View all
                </button>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2} className="mb-[2rem]">
            <AccordionHeader
              onClick={handleOpenAcc2}
              className="py-[1.2rem] border-t-[1px]"
            >
              <div className="w-full flex justify-between items-center">
                <span className="text-[1.6rem] font-semibold">Brands</span>
                <span className="text-[2.4rem]">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <form className="flex flex-col items-start text-[#505050]">
                {filteredProducts.map((product) => (
                  <label
                    key={product.productId}
                    className="py-[0.9rem] flex items-center gap-[1rem] text-[1.6rem] cursor-pointer"
                  >
                    <input type="checkbox" />
                    <span>{product.productBrand}</span>
                  </label>
                ))}
                {/* <label className="py-[0.9rem] flex items-center gap-[1rem] text-[1.6rem] cursor-pointer">
                  <input type="checkbox" />
                  <span>Asus</span>
                </label> */}
              </form>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3} className="mb-[2rem]">
            <AccordionHeader
              onClick={handleOpenAcc3}
              className="py-[1.2rem] border-t-[1px]"
            >
              <div className="w-full flex justify-between items-center">
                <span className="text-[1.6rem] font-semibold">Price range</span>
                <span className="text-[2.4rem]">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <form className="block pt-[0.8rem]">
                <label className="block py-[0.8rem]">
                  <input
                    type="range"
                    name="range__name"
                    id="range__id"
                    min={350}
                    max={6000}
                    className="block mb-[2rem]"
                    // value={price}
                    // onChange={(changeEvent) => setPrice(changeEvent.target.value)}
                  />
                </label>
                <div className="flex gap-[0.9rem] mb-[0.8rem]">
                  <label className="block w-[48%]">
                    <span className="mb-[0.5rem] text-[1.6rem]">Min</span>
                    <input
                      type="text"
                      placeholder="0"
                      className="border-[1px] border-[#DEE2E7] outline-none w-full p-[1rem] rounded-[0.6rem]"
                    />
                  </label>
                  <label className="block w-[48%]">
                    <span className="mb-[0.5rem] text-[1.6rem]">Min</span>
                    <input
                      type="text"
                      placeholder="999999"
                      className="border-[1px] border-[#DEE2E7] outline-none w-full p-[1rem] rounded-[0.6rem]"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  className="py-[1rem] px-[1.6rem] flex justify-center items-center w-full border-[1px] border-[#DEE2E7] rounded-[0.6rem] bg-white text-[#0D6EFD] text-[1.6rem] font-semibold"
                >
                  Apply
                </button>
              </form>
            </AccordionBody>
          </Accordion>
        </div>
        {/* Products */}
        <div className="shop__products w-full">
          {/* Products Top */}
          <div className="shop__products-top pt-[2.2rem] pr-[1rem] pb-[2.1rem] pl-[1.9rem] bg-[#FFF] border-[1px] border-[#DEE2E7] rounded-[0.6rem] w-full mb-[2rem] flex items-center justify-between">
            <h5 className="text-[1.6rem] font-normal">
              12,911 items in{" "}
              <span className="font-semibold">All categories</span>
            </h5>
            <div className="flex">
              <span
                onClick={handleGridBtn}
                className={`product-view flex justify-center items-center py-[1rem] px-[0.9rem] border-[1px] border-[#DEE2E7] rounded-tl-[0.6rem] rounded-bl-[0.6rem] cursor-pointer text-[1.6rem] hover:bg-[#dee2e7ce] ${
                  gridButton ? "active" : ""
                }`}
              >
                <IoGridSharp />
              </span>
              <span
                onClick={handleBurgerBtn}
                className={`product-view flex justify-center items-center py-[1rem] px-[0.9rem] border-[1px] border-[#DEE2E7] rounded-tr-[0.6rem] rounded-br-[0.6rem] cursor-pointer text-[1.6rem] hover:bg-[#dee2e7ce] ${
                  burgerButton ? "active" : ""
                }`}
              >
                <GiHamburgerMenu />
              </span>
            </div>
          </div>

          {/* Products Content */}
          <div className="shop__products-content">
            {/* Products Grid View */}
            {gridButton && (
              <ul className="shop__product-list">
                <li className="shop__products-item">Grid View</li>
              </ul>
            )}
            {/* Products List View */}
            {burgerButton && (
              <ul className="shop__product-list flex flex-col gap-[1rem]">
                {productData.map((product) => (
                  <li
                    key={product.productId}
                    className="shop__products-item w-full pt-[0.9rem] pr-[2rem] pb-[1.1rem] pl-[0.7rem] border-[1px] border-[#DEE2E7] rounded-[0.6rem] bg-white flex max-[675px]:py-[0.8rem] max-[675px]:pl-[0.8rem] max-[675px]:pr-[3rem]"
                  >
                    {/* Card Img */}
                    <div className="shop__products-img w-[21rem] h-[21rem] pt-[1.2rem] pr-[1.2rem] pb-[1.3rem] pl-[1.3rem] flex justify-center items-center flex-shrink-0 max-[675px]:w-[15rem] max-[675px]:h-[15rem] max-[675px]:p-[0.65rem] max-[440px]:w-[9.8rem] max-[440px]:h-[9.8rem] max-[440px]:p-[0.65rem]">
                      <img
                        src={`./images/png/${product.productImg}`}
                        alt=""
                        className="w-full"
                      />
                    </div>
                    {/* Card Info */}
                    <div className="shop__products-info relative pl-[1.2rem] pt-[1.4rem] w-full flex max-[675px]:pt-[1rem] max-[675px]:pl-[2rem]">
                      <div className="max-w-[58rem]">
                        <h3 className="shop__products-title text-[1.6rem] font-medium leading-[1.37] mb-[1.6rem] max-[675px]:mb-[1.2rem] max-[580px]:mb-[0.8rem] max-[440px]:text-[#505050] max-[440px]:font-normal max-[440px]:mb-[0.5rem]">
                          {product.productName}
                        </h3>
                        <div className="shop__products-cost flex gap-[0.7rem] items-end mb-[0.5rem]">
                          {/* New Cost */}
                          <h5 className="text-[2rem] font-semibold leading-[1.4] max-[440px]:text-[1.5rem]">
                            {product.productCost}
                          </h5>
                          {/* Old Cost */}
                          {product.productOldCost && (
                            <span className="text-[1.6rem] text-[#8B96A5] font-semibold line-through">
                              $998.00
                            </span>
                          )}
                        </div>
                        <span className="block text-[1.6rem] text-[#00B517] mb-[1.2rem] max-[675px]:text-[1.3rem] max-[675px]:mb-[0.5rem]">
                          Available
                        </span>
                        <p className="shop__product-description text-[1.6rem] text-[#505050] mb-[0.8rem] max-[675px]:text-[1.4rem] max-[580px]:hidden">
                          {`${product.producrtDescription.slice(0, 100)}...`}
                        </p>
                        <Link
                          to=""
                          className="text-[1.6rem] font-medium text-[#0D6EFD] max-[440px]:text-[1.4rem]"
                        >
                          View details
                        </Link>
                      </div>
                      {/* Like BTN */}
                      <button className="absolute p-[0.8rem] border-[1px] border-[#DEE2E7] rounded-[0.6rem] text-[#0D6EFD] top-[1rem] right-0 max-[440px]:hidden">
                        <FaRegHeart />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
