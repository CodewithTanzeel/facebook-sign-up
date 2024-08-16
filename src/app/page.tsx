import { Big_Shoulders_Stencil_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      { /* main*/}
      <div className="text-3xl w-1/3 px-10 mb-8 mr-10">
        <Image
          src={"https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"}
          alt="Facebook logo"
          width={300}
          height={100}
        />
        <p className="ml-7  mt-2">Facebook helps you connect and share with the people in your life.</p>
      </div>
      {/* input info */}
      <div className="bg-white rounded-xl flex flex-col p-5  w-1/3">
        <input
          className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Email address or phone number" />
        <input
          className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="password"
          placeholder="Password" />

        <button className="bg-blue-700 text-white hover:bg-blue-600 rounded-md text-lg font-bold my-2 py-2">Log in</button>
        <p className="text-blue-600 text-sm my-2 text-center  hover:underline">forgotten password?</p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 text-white hover:bg-green-600 rounded-md text-lg font-bold w- my-2 p-4 text-center  mx-auto">Create new account</button>


      </div>
    </div>

  );
}
