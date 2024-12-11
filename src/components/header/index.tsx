import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-3 flex justify-between items-center">
      <Image src={'/logo-nib.svg'} width={90} height={90} alt={""}></Image>
      <div className="flex gap-12 uppercase text-white items-center">
        <div className="flex flex-row gap-8">
          <div className="flex gap-8">
            <a className="cursor-pointer">Quem Somos</a>
            <a className="cursor-pointer">Meditação</a>
            <a className="cursor-pointer">Eventos</a>
          </div>
          <div className="flex gap-5" >
            <a className="cursor-pointer"><Image src={'/icons/youtube.svg'} width={25} height={25} alt={""}></Image></a>
            <a className="cursor-pointer"><Image src={'/icons/instagram.svg'} width={25} height={25} alt={""}></Image></a>
            <a className="cursor-pointer"><Image src={'/icons/spotify.svg'} width={25} height={25} alt={""}></Image></a>
          </div>
        </div>
        <div className="py-1 px-2 rounded-lg cursor-pointer transition ease-in-out delay-150 bg-orange-500 hover:scale-105 hover:bg-indigo-700 duration-200">
          <a>Contato</a>
        </div>
      </div>
    </div>
  ) 
}