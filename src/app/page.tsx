"use client";
import { useRouter } from "next/navigation";
import Coffee from "../../public/Coffee-2346113.svg";

export default function Home() {
  const router=useRouter()
  return (
    <div className=" h-full flex flex-col bg-gradient-to-t from-[#99bc85] to-[#e4efe7]">
      <div
        className=" flex flex-1/3  justify-center items-center flex-col"
        style={{ color: "var(--green-6F826A)" }}
      >
        <div className="flex items-center text-5xl ">
          <span className="m-1">Real</span>
          <Coffee width={70} height={70} />
        </div>
        <p className="text-5xl font-bold pl-5 mt-3" > Cafe </p>
      </div>
      <div className="flex-1/2 flex flex-col items-center  ">
        <button  onClick={()=>router.push('/menu')} className="button md:w-1/12 mb-5">منو</button >
        <button className="button md:w-1/12 mb-5" >درباره ما</button >
        <button className="button md:w-1/12 mb-5" >تماس با ما</button >
      </div>
    </div>
  );
}
