import React from "react";
import { FaSearchengin } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { SiCampaignmonitor } from "react-icons/si";
import { GiStabbedNote } from "react-icons/gi";
import FeedbackCarousel from "../components/FeedbackCarousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col-reverse items-center p-5 md:flex-row md:p-7 lg:p-10">
        <div className="w-full lg:ml-10 lg:w-1/2">
          <h1 className="mb-3 text-3xl font-bold text-center md:text-left lg:text-5xl ">
            We create <span className="text-orange-500">solutions</span> <br />{" "}
            for your business
          </h1>
          <p className="mb-5 text-sm text-center text-gray-500 md:text-left md:text-[16px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            numquam possimus tempora eius nam cupiditate aliquid necessitatibus
            quaerat facere ratione.
          </p>
          <div className="text-center md:text-left">
            <button
              type="button"
              class="text-white   bg-orange-500 hover:bg-orange-600  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-52 md:w-auto  "
            >
              Get Start
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/images/hero-bg.jpg" alt="" className="w-full" />
        </div>
      </div>
      <div className="w-full mt-10 md:mt-0">
        <div className="m-auto text-center lg:w-1/2">
          <h1 className="text-2xl font-bold md:text-3xl ">
            We Provide The Best{" "}
            <span className="text-orange-500">Services</span>{" "}
          </h1>
          <p className="mx-10 text-gray-500 lg:mx-[20%] text-sm md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            distinctio?
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 my-8 lg:gap-5">
          <div className="hover:scale-105 transition duration-300 rounded-md  w-48 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex items-center justify-center bg-red-500 h-14 w-14 rounded-tl-md rounded-br-md">
              {" "}
              <FaSearchengin className="m-4 text-3xl text-white" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold">Seo/Scm</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="hover:scale-105 transition duration-300 rounded-md  w-48 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex items-center justify-center bg-orange-500 h-14 w-14 rounded-tl-md rounded-br-md">
              {" "}
              <HiOutlineSpeakerphone className="m-4 text-3xl text-white" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold">Marketing</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="hover:scale-105 transition duration-300 rounded-md  w-48 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex items-center justify-center bg-green-500 h-14 w-14 rounded-tl-md rounded-br-md">
              {" "}
              <SiCampaignmonitor className="m-4 text-3xl text-white" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold">Viral Campaign</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="hover:scale-105 transition duration-300 rounded-md  w-48 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex items-center justify-center bg-indigo-500 h-14 w-14 rounded-tl-md rounded-br-md">
              {" "}
              <GiStabbedNote className="m-4 text-3xl text-white" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold">Others</h4>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffece6] ">
        <div className="flex flex-col items-center w-full p-5 md:flex-row md:px-7 md:py-5 lg:px-20 lg:py-10 ">
          <div className="w-full h-full md:w-1/2">
            <img
              src="/images/image-2.png"
              alt=""
              className="m-auto md:w-96 md:h-96"
            />
          </div>
          <div className="w-full py-3 md:w-1/2 md:py-0">
            <div>
              <h1 className="mb-3 text-2xl font-bold text-center lg:text-3xl md:text-left">
                Simple <span className="text-orange-500">Solutions!</span>
              </h1>
              <p className="text-sm text-center text-gray-500 md:text-left md:text-[16px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                obcaecati animi nostrum eius molestiae maxime odit illo, veniam
                quisquam veritatis.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-8 mb-3 ">
                <div className="relative flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-orange-500 rounded-full ">
                  1
                  <div className="absolute w-px h-10 bg-orange-500 lg:h-6 lg:-bottom-6 -bottom-10 left-5 "></div>
                </div>
                <div>
                  <h3 className="m-0 text-xl font-bold">Contact Us</h3>
                  <p className="m-0 text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 mb-3">
                <div className="relative flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-orange-500 rounded-full ">
                  2
                  <div className="absolute w-px h-10 bg-orange-500 lg:h-6 lg:-bottom-6 -bottom-10 left-5 "></div>
                </div>
                <div>
                  <h3 className="m-0 text-xl font-bold">Consult</h3>
                  <p className="m-0 text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 mb-3">
                <div className="relative flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-orange-500 rounded-full">
                  3
                  <div className="absolute w-px h-10 bg-orange-500 lg:h-6 lg:-bottom-6 -bottom-10 left-5 "></div>
                </div>
                <div>
                  <h3 className="m-0 text-xl font-bold">place order</h3>
                  <p className="m-0 text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 mb-3">
                <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-orange-500 rounded-full ">
                  4
                </div>
                <div>
                  <h3 className="m-0 text-xl font-bold">Payment</h3>
                  <p className="m-0 text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center p-5 md:flex-row lg:p-10 md:p-7">
        <div className="w-full lg:ml-10 md:w-1/2">
          <div>
            <h1 className="mb-3 text-2xl font-bold text-center md:text-left lg:text-3xl">
              Our <span className="text-orange-500">Agency</span>
            </h1>
            <p className="text-sm text-center text-gray-500 md:text-left md:text-[16px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              obcaecati animi nostrum eius molestiae maxime odit illo, veniam
              quisquam veritatis. <br /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Non neque quae itaque, voluptate delectus fuga
              assumenda explicabo enim perspiciatis optio aperiam minima,
              voluptatem maxime obcaecati.
            </p>
            <div className="mt-5 text-center md:text-left">
              <button
                type="button"
                class="text-white   bg-orange-500 hover:bg-orange-600  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-52 md:w-auto  "
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/image-3.jpg"
            alt=""
            className="w-full h-full m-auto md:h-96 md:w-96"
          />
        </div>
      </div>
      <div>
        <div className="w-full m-auto mb-3 text-center md:w-1/2">
          <h1 className="mb-3 text-2xl font-bold lg:text-3xl">
            What <span className="text-orange-500">Clients</span> Say!
          </h1>
          <p className="text-sm text-gray-500 md:text-[16px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            eveniet.
          </p>
        </div>
        <FeedbackCarousel />
      </div>
    </div>
  );
};

export default Home;
