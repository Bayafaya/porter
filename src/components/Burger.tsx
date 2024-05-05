import React from "react";
interface BurgerProps {
  // Define the props for your Burger component here
}

const Burger: React.FC<BurgerProps> = () => {

  const ref = React.createRef<HTMLDivElement>();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      className="relative group"
    >
      <div  ref={ref} className="relative flex overflow-hidden items-center justify-center rounded-full w-[36px] h-[36px] transform transition-all bg-primary ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
        <div className="flex flex-col justify-between w-[10px] h-[10px] transform transition-all duration-300 origin-center overflow-hidden">
          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
          <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
          <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

          <div className="absolute items-center justify-between transform transition-all duration-500 top-[5px] left-[-1px] -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
            <div className="absolute bg-white h-[2px] w-3 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
            <div className="absolute bg-white h-[2px] w-3 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Burger;
