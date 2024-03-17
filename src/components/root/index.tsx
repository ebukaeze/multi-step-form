import { useState } from "react";

import FormSteps from "../FormSteps";
import PersonalInfo from "../form/PersonalInfo";

import { Button } from "../../@/components/ui/button";
import Plan from "../form/Plan";

const steps = [
  { id: "1", sub: "step 1", name: "Your Info" },
  { id: "2", sub: "step 2", name: "Select Plan" },
  { id: "3", sub: "step 3", name: "Add-ons" },
  { id: "4", sub: "step 4", name: "Summary" },
];
const MainPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviosStep] = useState(0);

  const delta = currentStep - previousStep;

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((step) => step + 1);
    }
  };

  return (
    <main
      className="w-full grid md:grid-cols-12 max-w-screen-2xl grid-cols-1
    md:bg-white md:p-5 h-[100dvh] bg-magnolia md:gap-x-12"
    >
      <div className="flex w-full col-span-3 md:flex-col flex-row py-3">
        <FormSteps steps={steps} currentStep={currentStep} />
      </div>
      <div
        className="flex flex-col md:relative md:items-start items-center md:justify-start justify-center md:col-span-9 col-span-6 
        md:h-full h-max py-8 pb-6 md:py-0 pt-12 md:pt-2 w-[100%] md:w-full md:max-w-screen-md max-w-md mx-auto 
       z-50"
      >
        <div
          className="flex bg-white w-full rounded-lg h-max md:h-full md:items-start 
        items-center md:justify-start justify-center py-8 md:py-0 pt-12
        md:max-w-screen-md max-w-md mx-auto -mt-32 md:mt-12 md:top-0 space-y-5"
        >
          {currentStep === 0 && <PersonalInfo />}
          {currentStep === 1 && <Plan />}
        </div>
        <div
          className={`w-full flex items-end ${
            currentStep == 0 ? "justify-end" : "justify-between"
          } mt-8 md:mt-0 md:mb-10
        md:max-w-lg max-w-md `}
        >
          <Button
            size="default"
            variant="ghost"
            className={`text-cool-gray font-semibold ${
              currentStep == 0 && "hidden"
            }`}
            disabled={currentStep == 0}
            onClick={handlePrev}
          >
            {" "}
            Go Back
          </Button>

          <Button
            size="default"
            variant="default"
            className="text-white2 font-medium bg-marine-blue"
            onClick={handleNext}
          >
            {" "}
            Next Step
          </Button>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
