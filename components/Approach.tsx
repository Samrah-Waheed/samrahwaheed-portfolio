"use client";

import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Approach = () => {
  const items = [
    {
      title: "Brainstorming & Idea Mapping",
      des: "I start by understanding the project needs and mapping out ideas clearly.",
      icon: <IoMdCheckmarkCircleOutline size={30} />,
    },
    {
      title: "Clean & Modern Development",
      des: "I design and build clean, modern, and fully responsive interfaces.",
      icon: <IoMdCheckmarkCircleOutline size={30} />,
    },
    {
      title: "Testing & Final Delivery",
      des: "I test the project carefully before delivering it with full quality.",
      icon: <IoMdCheckmarkCircleOutline size={30} />,
    },
  ];

  return (
    <section className="py-20 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">My Approach</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} title={item.title} icon={item.icon} des={item.des}>
            {item.des}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Approach;

const Card = ({ title, icon, des }: any) => {
  return (
    <div className="p-6 bg-black/20 border border-white/20 rounded-xl hover:bg-black/30 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{des}</p>
    </div>
  );
};