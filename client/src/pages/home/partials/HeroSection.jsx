import React from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import AnimatedScrollButton from "../../../components/common/AnimatedScrollButton";

// Import images
import helpingHand2 from "../../../assets/homeless1.jpg";
import homeless1 from "../../../assets/prison1.jpg";
import { Button } from "@heroui/button";
import SmileEmoji from "../../../assets/SmileEmoji";
import HeartEmoji from "../../../assets/heart_emoji";
import handgreeting from "../../../assets/handgreeting1.png";
import BackgroundPattern from "../../../assets/HandsBackgroundPattern";
import StatsBackgroundPattern from "../../../assets/StatBackgroundPattern";

function HeroSection() {
  const cards = [
    {
      type: "stat",
      title: "65%",
      description:
        // "17 Thousand People Died, Thousands Injured, Houses and Buildings Destroyed. Turkey-Syria Grieves",
        "17 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      btnText: "Lorem...",
      className: "bg-success-900 w-[260px] h-[380px] text-white",
    },
    {
      type: "health",
      title: "Lorem",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
      image: helpingHand2,
      className: "bg-[#14171F] text-white w-[260px] h-[350px]",
    },
    {
      type: "join",
      //   title: "Join 5000+",
      title: "Lore 5000+",
      //   description: "People Donate",
      description: "Lorem ipsum",
      btnText: "Join community",
      className: "bg-success-100 w-[260px] h-[250px]",
    },
    {
      type: "education",
      title: "Lorem",
      description: "Ipsum dolor sit amet consectetur adipisicing. ",
      image: homeless1,
      className: "bg-[#14171F] text-white w-[260px] h-[350px]",
    },
    {
      type: "explore",
      btnText: "Explore more",
      className: "bg-[#CDFF6B] hover:bg-[#b8ff42] w-[260px] h-[70px]",
    },
    {
      type: "help",
      //   title: "Let them be heard",
      title: "Man dolor hu uoios",
      //   icon: "😊",
      icon: <SmileEmoji className="w-14" />,
      className: "bg-default-900 text-white w-[260px] h-[120px]",
    },
    {
      type: "donate",
      title: "Make a Change",
      description:
        "Join our mission to make a difference. Together we can create lasting impact in our communities.",
      btnText: "Donate today",
      className: "bg-[#14171F] text-white w-[260px] h-full",
    },
    {
      type: "impact",
      title: "Our Impact",
      description: "See how we're changing lives",
      btnText: "Learn more",
      className: "bg-emerald-700 text-white w-[260px] h-[300px]",
    },
  ];
  return (
    <div className="max-w-[1600px] mx-auto px-4 py-10">
      {/* Hero Text */}
      <div className="relative text-center max-w-3xl mx-auto mb-12 z-10">
        {/* radial circle */}
        <div className="absolute left-[-100px] top-[-800px] h-[1000px] w-[1000px] bg-gradient-to-r from-success-100 to-success-200 rounded-full blur-2xl opacity-50 -z-10"></div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 z-[1]">
          {/* Great futures are built with a small charity */}
          Lorem ipsum dolor sit amet conse adipisicing.
        </h1>
        <p className="text-xl text-default-600 mb-8">
          {/* The world's largest social fundraising platform, optimized for your
      charity in a more easy way */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ad error
          dignissimos aliquid porro nesciunt neque earum laborum rerum nihil.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            className="bg-default-900 text-white px-8 py-3 rounded-full transition-all"
            size="lg"
          >
            {/* Donate now */}
            Lorem, ipsum.
          </Button>
          <Button
            className="bg-default-200 hover:bg-default-300 text-default-900 px-8 py-3 rounded-full flex items-center gap-2 transition-all"
            size="lg"
          >
            {/* ▶ Watch Video */}▶ Lorem, ipsum.
          </Button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="flex justify-center mt-18 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 place-items-start">
          {/* First Column */}
          <div className="space-y-3">
            {/* Stat Card */}
            <div
              className={`rounded-[32px] overflow-hidden ${cards[0].className}`}
            >
              <div className="h-full flex justify-between flex-col relative">
                <StatsBackgroundPattern />
                <div className="p-6 mt-9 relative z-10">
                  <h2 className="text-6xl font-bold mb-4">{cards[0].title}</h2>
                  <p className="mb-6 text-default-200 text-base font-normal flex-grow">
                    {cards[0].description}
                  </p>
                </div>

                <Button
                  className="flex justify-between gap-2 h-[60px] bg-default-50/10 text-white border-1 border-default-50/10 rounded-3xl transition-all m-2 px-3 relative z-10"
                  size="lg"
                  endContent={
                    <div className="bg-warning rounded-full">
                      <ArrowUpRight className="w-6 h-6 m-3 text-success-800" />
                    </div>
                  }
                >
                  {cards[0].btnText}
                </Button>
              </div>
            </div>
            {/* Help Card */}
            <div
              className={`rounded-[32px] overflow-hidden ${cards[5].className}`}
            >
              <div className="p-6 flex items-center justify-center gap-3  h-full">
                <span className="text-2xl">{cards[5].icon}</span>
                <span className="text-3xl font-semibold">{cards[5].title}</span>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-3 flex flex-col items-end justify-end h-full">
            {/* Health Card */}
            <div
              className={`rounded-[32px] overflow-hidden relative ${cards[1].className}`}
            >
              <img
                src={cards[1].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="p-4 h-full flex flex-col justify-end relative z-10">
                <p className="text-base text-default-300 font-semibold mb-2">
                  {cards[1].title}
                </p>
                <p className="text-white text-2xl">{cards[1].description}</p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-3 flex flex-col items-end justify-end h-full">
            {/* Join Card */}
            <div className="mb-6 w-full  flex items-center justify-center">
              <AnimatedScrollButton />
            </div>
            <div
              className={`rounded-[32px] overflow-hidden ${cards[2].className}`}
            >
              <div className=" flex flex-col h-full justify-between">
                <div className="mt-8 p-5">
                  <h3 className="text-3xl text-center font-bold text-default-900">
                    {cards[2].title} <br />
                    {cards[2].description}
                  </h3>
                </div>
                {/* <button className="flex items-center gap-2 text-gray-900 group">
              {cards[2].btnText}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button> */}
                <Button
                  className="flex justify-between gap-2 h-[60px] bg-success-300/40 border-1 border-default-50/10 rounded-3xl m-2 px-3"
                  size="lg"
                  endContent={
                    <div className="bg-default-900 rounded-full">
                      {/* <ArrowUpRight className="w-6 h-6 m-3 text-success-800" /> */}
                      <ArrowUpRight className="w-6 h-6 m-3 text-success-50" />
                    </div>
                  }
                >
                  {cards[2].btnText}
                </Button>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="space-y-3 flex flex-col items-end justify-end h-full">
            {/* Education Card */}
            <div
              className={`rounded-[32px] overflow-hidden relative ${cards[3].className}`}
            >
              <img
                src={cards[3].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="p-4 h-full flex flex-col justify-end relative z-10">
                <h3 className="text-base text-default-300 font-semibold mb-2">
                  {cards[3].title}
                </h3>
                <p className="text-white text-2xl">{cards[3].description}</p>
              </div>
            </div>
          </div>

          {/* Fifth Column */}
          <div className="space-y-3">
            {/* hands Card */}
            <div
              className={`rounded-[32px] overflow-hidden ${cards[0].className}`}
            >
              <div className="relative h-full px-2 flex flex-col justify-end items-start bg-warning-500 overflow-hidden">
                <BackgroundPattern />
                <img
                  src={handgreeting}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <Button
                  className="flex justify-between gap-2 h-[60px] w-full bg-default-900/50 text-white border-1 border-default-50/10 rounded-3xl transition-all my-2 px-3"
                  size="lg"
                  endContent={
                    <div className="bg-warning-900 rounded-full">
                      <ArrowUpRight className="w-6 h-6 m-3 text-warning" />
                    </div>
                  }
                >
                  {cards[0].btnText}
                </Button>
              </div>
            </div>
            {/* Help Card */}
            <div
              className={`rounded-[32px] overflow-hidden ${cards[5].className}`}
            >
              <div className="p-5 flex items-center justify-center bg-warning-900 gap-3 h-full">
                <span className="text-2xl">
                  {/* {cards[5].icon} */}
                  <HeartEmoji className="w-14" />
                </span>
                <span className="text-3xl font-semibold text-warning-500">
                  {/* {cards[5].title} */}Lorem ism man dolor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-6 w-full  flex items-center justify-center">
    <AnimatedScrollButton />
  </div> */}
    </div>
  );
}

export default HeroSection;
