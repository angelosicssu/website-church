"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const programs = [
  { name: "Culto Familiar", logo: "/icons/culto-familiar.svg", color: "bg-blue-700" },
  { name: "Nova Jovens", logo: "/icons/nova-jovens.svg", color: "bg-black" },
  { name: "Nova Teens", logo: "/icons/nova-teens.svg", color: "bg-orange-500" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return; // Evita que o próximo slide seja acionado antes da animação terminar
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
      setIsAnimating(false);
    }, 600); // Duração da animação (600ms)
  };

  // Troca automática de slides a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Obtém os índices dos itens visíveis (anterior, atual e próximo)
  const prevIndex = (currentIndex - 1 + programs.length) % programs.length;
  const nextIndex = (currentIndex + 1) % programs.length;

  return (
    <div className="relative flex justify-center items-center py-10 overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-4xl h-64">
        <div
          className={`absolute flex w-full h-full transform transition-transform duration-500 ease-in-out ${
            isAnimating ? "-translate-x-[33.33%]" : "translate-x-0"
          }`}
          style={{ display: "flex", gap: "1rem" }}
        >
          <div
            className={`flex flex-col items-center justify-center w-1/3 h-full rounded-lg ${programs[prevIndex].color}`}
          >
            <Image
              src={programs[prevIndex].logo}
              width={100}
              height={100}
              alt={programs[prevIndex].name}
            />
          </div>

          <div
            className={`flex flex-col items-center justify-center w-1/3 h-full rounded-lg ${programs[currentIndex].color} scale-110`}
          >
            <Image
              src={programs[currentIndex].logo}
              width={100}
              height={100}
              alt={programs[currentIndex].name}
            />
          </div>

          <div
            className={`flex flex-col items-center justify-center w-1/3 h-full rounded-lg ${programs[nextIndex].color}`}
          >
            <Image
              src={programs[nextIndex].logo}
              width={80}
              height={80}
              alt={programs[nextIndex].name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
