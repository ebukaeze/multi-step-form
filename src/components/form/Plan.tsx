import { useState } from "react";
import PlanCard from "../PlanCard";
import { Arcade, Advanced, Pro } from "../SvgProps";
import CheckMark from "../../assets/images/icon-checkmark.svg";

const planData = [
  {
    icon: <Arcade />,
    title: "Arcade",
    monthly: "9",
    yearly: "90",
  },
  {
    icon: <Advanced />,
    title: "Advanced",
    monthly: "12",
    yearly: "120",
  },
  {
    icon: <Pro />,
    title: "Pro",
    monthly: "15",
    yearly: "150",
  },
];

const Plan = () => {
  const [activePlan, setActivePlan] = useState(false);

  return (
    <section className="flex w-full md:max-w-lg max-w-md px-5 md:px-0 flex-col space-y-6 items-start md:justify-start justify-center mx-auto md:mx-0">
      <div className="gap-y-3 py-3">
        <h1 className="text-4xl font-[700] font-['Ubuntu-b'] text-marine-blue">
          Select Your Plan
        </h1>
        <p className="text-cool-gray font-['Ubuntu-r']">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="w-full flex justify-end items-center md:gap-x-8 md:flex-row flex-col md:gap-y-2 gap-y-5 ">
        {planData.map((data, index) => (
          <PlanCard
            key={index}
            icon={data.icon}
            title={data.title}
            monthly={data.monthly}
            yearly={data.yearly}
            activePlan={activePlan}
            index={index}
          />
        ))}
      </div>
      <div
        className="w-full h-16 bg-alabaster rounded-sm flex items-center justify-center
      gap-x-4"
      >
        <p
          className={`${
            !activePlan ? "text-marine-blue font-semibold" : "text-cool-gray"
          }`}
        >
          Monthly
        </p>
        <button
          onClick={() => setActivePlan(!activePlan)}
          className={`flex w-12 bg-marine-blue rounded-full px-2 py-1 transition duration-100 ease-in-out ${
            activePlan ? "items-end justify-end" : "items-start justify-start"
          }`}
        >
          <div className="w-4 h-4 rounded-full bg-white2"></div>
        </button>
        <p
          className={`${
            activePlan ? "text-marine-blue font-semibold" : "text-cool-gray"
          }`}
        >
          Yearly
        </p>
      </div>
    </section>
  );
};

export default Plan;
