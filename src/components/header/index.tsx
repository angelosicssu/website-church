import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-3 flex justify-between items-center">
      <Image src={'/logo-nib.svg'} width={90} height={90} alt={""}></Image>
      <div className="flex gap-12 uppercase text-white items-center">
        <nav className="flex flex-row gap-8">
          <div className="flex gap-8">
            <a href="#" className="relative cursor-pointer group text-zinc-400 hover:text-white transition ease-in-out duration-300">
              Quem Somos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-500 group-hover:w-full rounded-md"></span>
            </a>
            <a href="#" className="relative cursor-pointer group text-zinc-400 hover:text-white transition ease-in-out duration-300">
              Meditação
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-500 group-hover:w-full rounded-md"></span>
            </a>
            <a href="#" className="relative cursor-pointer group text-zinc-400 hover:text-white transition ease-in-out duration-300">
              Eventos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-500 group-hover:w-full rounded-md"></span>
            </a>
          </div>
          <div className="flex gap-5" >
            <a href="#" className="cursor-pointer"><Image src={'/icons/youtube.svg'} width={25} height={25} alt={""}></Image></a>
            <a href="#" className="cursor-pointer"><Image src={'/icons/instagram.svg'} width={25} height={25} alt={""}></Image></a>
            <a href="#" className="cursor-pointer"><Image src={'/icons/spotify.svg'} width={25} height={25} alt={""}></Image></a>
          </div>
        </nav>
        <div className="py-1 px-2 rounded-lg cursor-pointer transition ease-in-out delay-150 bg-orange-500 hover:scale-105 hover:bg-indigo-700 duration-200">
          <a>Contato</a>
        </div>
      </div>
    </div>
  ) 
}