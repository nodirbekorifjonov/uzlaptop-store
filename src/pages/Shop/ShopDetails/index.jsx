import React from "react";

// styles
import "./style.css";

// components
import DetailsCarousel from "../../../components/DetailsCarousel";

// react-icons
import { FaCheck } from "react-icons/fa6";

// data
import productData from "../../../assets/data/products.json";
import { Link } from "react-router-dom";

// responsive recomments
const isResponsive = window.innerWidth < 979; // Adjust the breakpoint as needed
const productsToDisplay = isResponsive ? 6 : 10;

const ShopDetails = () => {
  return (
    <section className="shopdetails py-[2rem] max-[450px]:pt-0">
      {/* Shop Details Info */}
      <div className="shopdetails__info w-full mb-[2rem]">
        <div className="shopdetails-content site-container">
          <div className="shopdetails__info-content flex gap-[2.2rem] border-[1px] border-[#DEE2E7] bg-white px-[2rem] pt-[2rem] pb-[4rem] rounded-[0.6rem] max-[876px]:flex-wrap max-[450px]:p-0">
            {/* Shop Details Info | Images */}
            <div className="shopdetails__info-images w-[38rem] max-[876px]:mx-auto">
              <DetailsCarousel />
            </div>
            {/* Shop Details Info | Info */}
            <div className="shopdetails__info-details w-full max-[450px]:p-[2rem]">
              <span className="flex items-center gap-[0.2rem] text-[1.6rem] text-[#00B517] leading-[1.5] mb-[0.5rem]">
                <FaCheck /> Available
              </span>
              {/* name */}
              <h3 className="shopdetails__name text-[#1C1C1C] text-[2rem] leading-[1.4] font-semibold mb-[1rem]">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
              </h3>
              {/* Rassrochka */}
              <div className="p-[1.6rem] w-full bg-[#FFF0DF] flex gap-[1rem] mb-[0.4rem]">
                {/* 3 Month */}
                <div className="pr-[4rem] border-r border-[#BDC1C8]">
                  <h3 className="text-[#FA3434] text-[1.8rem] font-semibold mb-[0.4rem] leading-none">
                    $98
                  </h3>
                  <span className="text-[#606060] text-[1.3rem]">3 month</span>
                </div>
                {/* 6 Mont */}
                <div className="pr-[4rem] border-r border-[#BDC1C8]">
                  <h3 className="text-[#FA3434] text-[1.8rem] font-semibold mb-[0.4rem] leading-none">
                    $98
                  </h3>
                  <span className="text-[#606060] text-[1.3rem]">6 month</span>
                </div>
                {/* 9 Mont */}
                <div className="pr-[4rem]">
                  <h3 className="text-[#FA3434] text-[1.8rem] font-semibold mb-[0.4rem] leading-none">
                    $98
                  </h3>
                  <span className="text-[#606060] text-[1.3rem]">9 month</span>
                </div>
              </div>
              <ul className="shopdetails__list">
                <li className="shopdetails__item flex text-[1.6rem] gap-[2rem] py-[1.6rem] border-b-[1px] border-[#E0E0E0]">
                  <span className="block w-[12rem] text-[#8B96A5]">Price:</span>
                  <span className="block text-[#505050]">$98</span>
                </li>
                <li className="shopdetails__item flex text-[1.6rem] gap-[2rem] py-[0.8rem]">
                  <span className="block w-[12rem] text-[#8B96A5]">Brand:</span>
                  <span className="block text-[#505050]">$98</span>
                </li>
                <li className="shopdetails__item flex text-[1.6rem] gap-[2rem] py-[0.8rem]">
                  <span className="block w-[12rem] text-[#8B96A5]">
                    Processor:
                  </span>
                  <span className="block text-[#505050]">$98</span>
                </li>
                <li className="shopdetails__item flex text-[1.6rem] gap-[2rem] pt-[0.8rem] pb-[1.6rem] border-b-[1px] border-[#E0E0E0]">
                  <span className="block w-[12rem] text-[#8B96A5]">
                    Screen:
                  </span>
                  <span className="block text-[#505050]">$98</span>
                </li>
                <li className="shopdetails__item flex text-[1.6rem] gap-[2rem] py-[0.8rem]">
                  <span className="block w-[12rem] text-[#8B96A5]">
                    Memory:
                  </span>
                  <span className="block text-[#505050]">$98</span>
                </li>
                <li className="shopdetails__item flex text-[1.6rem] gap-[2rem] pt-[0.8rem] pb-[1.6rem] border-b-[1px] border-[#E0E0E0]">
                  <span className="block w-[12rem] text-[#8B96A5]">RAM:</span>
                  <span className="block text-[#505050]">$98</span>
                </li>
              </ul>
            </div>
            {/* Shop Details Address */}
            {/* <div className="shopdetails__info-address">
              <div className="mb-[0.5rem]">
                <h5 className="text-[1.8rem] font-semibold text-[#1c1c1c]">
                  Address:
                </h5>
                <span className="text-[1.6rem] text-[#505050] font-normal">
                  Malika savdo majmuasi, B43a
                </span>
              </div>
              <div className="mb-[1rem]">
                <h5 className="text-[1.8rem] font-semibold text-[#1c1c1c]">
                  Working time:
                </h5>
                <span className="text-[1.6rem] text-[#505050] font-normal">
                  daily from 08:00 to 18:00
                </span>
              </div>
              <iframe
                src="https://yandex.com/map-widget/v1/?l=sat&ll=69.271523%2C41.339057&mode=whatshere&utm_campaign=morda&utm_medium=com&utm_source=share&whatshere%5Bpoint%5D=69.270008%2C41.338811&whatshere%5Bzoom%5D=19&z=19"
                height={300}
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
      {/* Shop Details Description */}
      <div className="shopdetails__description mb-[2rem]">
        <div className="shopdetails-content site-container">
          <div className="shopdetails__description-content border-[1px] border-[#DEE2E7] bg-white pb-[2rem] rounded-[0.6rem]">
            <div className="border-b-[1px] border-[#dee2e7] py-[1.5rem] px-[2rem]">
              <span className="text-[#0D6EFD] font-medium">Description</span>
            </div>
            <div className="pt-[1rem] px-[2rem]">
              <p className="text-[#505050] text-[1.6rem] font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                ratione dolor temporibus saepe magni nisi nam, voluptatum,
                distinctio cupiditate aut vel deleniti quam beatae error quidem
                mollitia consequatur fugit itaque minus debitis eius nesciunt?
                Illum totam at numquam repudiandae ipsum similique ex quasi
                possimus eos laboriosam error sequi incidunt fuga harum,
                distinctio fugiat aliquam sunt tempora quidem porro? Laborum,
                dolor voluptatibus. Ut corrupti amet in dolores consectetur
                perspiciatis beatae, quia aspernatur libero accusamus, rem
                dolorum necessitatibus, quaerat quos. Quia exercitationem
                commodi dolorem sequi fuga officiis, dolor doloribus at,
                voluptatem nobis possimus adipisci alias recusandae ipsam?
                Quasi, ullam aut ducimus voluptatem pariatur in facere nihil
                distinctio ex, eos corrupti ab! Facere animi repudiandae
                blanditiis obcaecati incidunt suscipit itaque officia esse
                molestiae dolor omnis odit minus magni, eos nihil. Deleniti vero
                ad minima maxime dicta officiis quibusdam aliquam saepe atque.
                Aliquid, dolores perferendis repellat sequi corrupti unde eum
                velit magni ullam sint consequatur, quia, qui quae ad omnis
                animi excepturi impedit. Ex molestias enim culpa porro alias at
                nesciunt ullam quia blanditiis veniam temporibus quod, veritatis
                quaerat quibusdam deleniti illum asperiores iusto nemo in.
                Fugiat non vero dignissimos qui inventore officia aspernatur
                veniam similique accusantium voluptate debitis, sequi porro id
                incidunt maxime?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Details Recommends */}
      <section className="recommended py-[1rem] text-[#1c1c1c]">
        <div className="site-container">
          <h3 className="recommended__title flex flex-col text-[2.4rem] font-semibold leading-[1.33] mb-[2.4rem] max-[400px]:text-[1.8rem] max-[400px]:mb-[1rem]">
            Recommended items
          </h3>
          <ul className="recommended__list w-full flex flex-wrap justify-evenly gap-[2rem] max-[478px]:gap-[0.8rem]">
            {productData.slice(0, productsToDisplay).map((product) => (
              <li
                key={product.productId}
                className="recommended__item flex justify-center items-center"
              >
                <Link className="recommended__link w-[22rem] h-[31rem] px-[1rem] pt-[0.9rem] pb-[0.8rem] block bg-white border-[1px] border-[#E0E0E0] rounded-[0.6rem] max-[478px]:w-[16.5rem] max-[478px]:h-[24rem]">
                  <div className="recommended__link-img flex justify-center items-center w-full h-[19.4rem] p-[1.2rem] mb-[1.4rem] max-[478px]:h-[14rem]">
                    <img
                      src={`/images/png/${product.productImg}`}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="recommended__link-info px-[0.6rem]">
                    <h5 className="text-[1.6rem] font-medium leading-[1.37] mb-[0.4rem] max-[478px]:leading-[1.37] max-[478px]:mb-[0.18rem]">
                      {product.productCost}
                    </h5>
                    <p className="text-[1.6rem] leading-[1.5] text-[#8b96a5] max-[478px]:text-[1.3rem] max-[478px]:leading-none">
                      {product.productName}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Shop Details Order */}
    </section>
  );
};

export default ShopDetails;
