type Steps = {
  id: string;
  sub: string;
  name: string;
};
type MultiSteps = {
  steps: Steps[];
  currentStep: number;
};

function FormSteps({ steps, currentStep }: MultiSteps) {
  return (
    <section
      className="relative inset-0 md:flex md:flex-col bg-purplish-blue w-full h-full md:rounded-lg
    md:bg-sidebar-svg bg-center bg-cover bg-sidebar-mobile"
    >
      <div
        className="flex flex-col items-start md:justify-start justify-center py-10 md:flex-col w-full md:space-y-6 pl-12 px-4 gap-x-5 
      uppercase h-full"
      >
        <ol className="relative h-max fle w-full">
          {steps.map((step, index) => (
            <li className="mb-10 ms-6 flex-1 md:block" key={step.id}>
              {currentStep === index ? (
                <div className="group flex items-center justify-start gap-x-5">
                  <span
                    className={`asolute flex items-center justify-center w-8 h-8 ring-2 ring-white rounded-full bg-light-blue text-marine-blue `}
                  >
                    {" "}
                    {step.id}
                  </span>
                  <div className="flex flex-col">
                    <p className="text-base text-pastel-blue">{step.sub}</p>
                    <h1 className="text-lg font-semibold text-white2">
                      {step.name}
                    </h1>
                  </div>
                </div>
              ) : (
                <div className="group flex items-center justify-start gap-x-5">
                  <span
                    className={`asolute flex items-center justify-center w-8 h-8 ring-2 ring-white rounded-full bg-transparent text-white `}
                  >
                    {" "}
                    {step.id}
                  </span>
                  <div className="flex flex-col">
                    <p className="text-base text-pastel-blue">{step.sub}</p>
                    <h1 className="text-lg font-semibold text-white2">
                      {step.name}
                    </h1>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default FormSteps;
