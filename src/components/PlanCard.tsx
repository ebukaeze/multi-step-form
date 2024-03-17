"use client";
import React, { SVGProps, useState } from "react";
import { CardContainer } from "../design-system/formatting";

type Plan = {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  monthly: string;
  yearly: string;
  activePlan: boolean;
  index: number;
};

const PlanCard = ({
  icon,
  title,
  monthly,
  yearly,
  activePlan,
  index,
}: Plan) => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="w-full flex md:flex-row flex-col">
      <CardContainer
        active={activeCard}
        index={index}
        setActiveCard={setActiveCard}
      >
        <div
          className="w-full flex items-center md:items-start md:space-y-10 md:justify-between 
        justify-start md:flex-col h-full gap-x-4"
        >
          {icon}
          <div className="flex flex-col md:items-start items-start md:justify-end md:mt-5">
            <h1 className="text-lg font-semibold text-marine-blue">{title}</h1>
            <p className="text-cool-gray text-base">
              {activePlan ? `$${yearly}/yr` : `$${monthly}/mo`}
            </p>
            <p className="text-sm">{activePlan && "2 months free"}</p>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default PlanCard;
