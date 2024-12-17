import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>

      <div 
        className="relative bg-cover bg-center text-white flex flex-row justify-between items-center py-5 px-20"
        style={{
          backgroundImage: "url('/backgrounds/welcome.jpg')",
          height: "550px"
        }}
      >
        
        <div className="flex flex-col gap-10">
          <div className="flex flex-col text-7xl uppercase gap-2">
            <h1>Seja</h1>
            <h1 
            className="uppercase text-transparent stroke-text font-sans text-7xl"
            style={{
              WebkitTextStroke: "2px white",
              color: "transparent"
            }}
            >
              Bem Vindo</h1>
          </div>

          <nav className="flex flex-row w-48 border-4 p-2 rounded-lg items-center gap-2 bg-neutral-400 bg-opacity-50 cursor-pointer transition ease-in-out delay-150 hover:scale-105 hover:bg-blue-950 duration-200">
            <a><Image src={'/icons/circled-play.svg'} width={30} height={30} alt=""></Image></a>
            <a className="uppercase">Nossa Igreja</a>
          </nav>

        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="uppercase text-4xl">O Cristão Inteligente</h1>
          <div className="border-8 border-white rounded-md">
            <iframe src="https://www.youtube.com/embed/MuzUA2ZmxDE" width={570} height={320} className="rounded-md" allowFullScreen/>
          </div>
        </div>
        
      </div>
      
      <div className="relative overflow-hidden bg-blue-700 p-1">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-sm text-white">
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
          </span>
          <span className="text-sm text-white">
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
          </span>
          <span className="text-sm text-white">
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
          </span>
          <span className="text-sm text-white">
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
            NIBGC<span className="mx-2">•</span>
          </span>
        </div>
      </div>

      <div className="flex flex-row py-16 justify-evenly">
        <div>
          <Image src={'/backgrounds/quem-somos.svg'} height={500} width={500} alt=""></Image>
        </div>
        <span className="h-90 w-2 bg-black"></span>
        <div className="flex flex-col uppercase gap-10">
          <h1 className="text-5xl text-center text-blue-950 relative inline-block">
            <span className="relative px-2">
              <span className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-300 text-lg gap-5 shadow-2xl z-0"></span>
              <span className="relative z-10 ">Quem Somos</span>
            </span>
          </h1>
          
          <div className="flex flex-col text-left font-mono text-lg gap-5">
            <p>Há mais de 10 anos, a nova igreja batista grande<br/>
            circular vem construindo uma história na cidade<br/>
            de Manaus.</p>
            <p>Uma igreja diferenciada, alicerçada na palavra de<br/>
            Deus e no amor, que através de suas programações<br/>
            dinâmicas, tem alcançado inúmeras vidas.</p>
            <p>A Nibgc está de braços abertos para você! Venha<br/>
            nos conhecer e fazer parte desta grande e linda<br/>
            família.</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="border-2 border-black py-2 px-5 items-center hover:cursor-pointer hover:bg-blue-300 hover:border-white hover:text-white duration-300">
              <a>Seja Bem Vindo</a>
            </div>
            <div className="border-2 border-black py-2 px-9 items-center hover:cursor-pointer hover:bg-blue-400 hover:border-white hover:text-white duration-300">
              <a>Novo Aqui?</a>
            </div>
          </div>

        </div>
      </div>

      <span className="bg-gradient-to-r from-blue-600 to-blue-500 flex justify-between px-4 py-2 items-center">
        <div className="flex flex-col text-white text-3xl uppercase">
          <p>Próxima</p>
          <p>Programação</p>
        </div>
        <div>
          <Image src={'/icons/culto-familiar.svg'} height={150} width={250} alt=""></Image>
        </div>
        <div className="bg-white py-5 px-10 text-3xl rounded-xl">
          <p>1d 10h</p>
        </div>
      </span>

    </div>
  );
}
