import Image from "next/image"
import Button from "./button"

export default function Hero() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image 
        className="object-cover" 
        src="/ford-ranger_rd5m4t.jpg" 
        alt="Ford car" 
        fill
        priority />

        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10 transition-colors duration-200" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4 text-white">
          
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold mt-8 mb-2 max-w-[140px] sm:max-w-none leading-tight text-white drop-shadow-lg">
            Welcome to G Automotive
          </h1>
          <p className="max-w-xl text-xs sm:text-sm md:text-mg mb-4 text-gray-100 drop-shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur, Excepteur sint occaecat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
