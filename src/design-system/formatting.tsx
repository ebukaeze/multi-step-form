import React from "react";

export const CardContainer = ({
  children,
  active,
  index,
  setActiveCard,
}: {
  children: React.ReactNode;
  active: number;
  index: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div
      className={`md:w-36 w-full h-max p-5 flex items-start justify-start border-2  outline-border
      rounded-lg hover:border-marine-blue hover:bg-alabaster cursor-pointer ${
        active == index
          ? "bg-alabaster border outline-border border-marine-blue"
          : "border-light-gray bg-transparent"
      }`}
      onClick={() => setActiveCard(index)}
    >
      {children}
    </div>
  );
};
