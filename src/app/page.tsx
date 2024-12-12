import Image from "next/image";

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
            className="uppercase text-transparent stroke-text"
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
          <h1 className="uppercase text-4xl">Título do Vídeo</h1>
          <div className="border-8 border-white rounded-md">
            <iframe src="https://www.youtube.com/embed/MuzUA2ZmxDE" width={570} height={320} className="rounded-md" allowFullScreen/>
          </div>
        </div>
        
      </div>
      <span className="h-10 bg-blue-600">NIBGC</span>

    </div>
  );
}
