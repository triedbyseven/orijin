export interface ProgressBasicProps {
  currentStep: CurrentStep;
  steps: Steps[];
}

interface CurrentStep {
  id: number;
  index: number;
  step: any;
}

interface Steps {
  id: number;
  index: number;
  step: any;
}

const ProgressBasic: React.SFC<ProgressBasicProps> = ({ currentStep, steps }) => {
  return (
    <div className="progessbar-container mb-5">
      {steps.map((step) => (
        <div key={step.id} className={`step ${currentStep.index === step.index ? 'active' : null}`}>
          {step.index + 1}
        </div>
      ))}
      <div className="step">3</div>
      <style jsx>
        {`
          .progessbar-container {
            display: flex;
            justify-content: space-between;
            padding: 0 3rem;
          }
          .progessbar-container .step {
            width: 30px;
            height: 30px;
            font-family: 'Montserrat';
            font-weight: 500;
            line-height: 30px;
            text-align: center;
            background-color: #eef4fe;
            border: 1px solid transparent;
            border-radius: 22px;
            webkit-box-shadow: 0px 10px 24px 0px rgba(0, 123, 255, 0.3);
            -moz-box-shadow: 0px 10px 24px 0px rgba(0, 123, 255, 0.3);
            box-shadow: 0px 10px 24px 0px rgba(0, 123, 255, 0.3);
          }
          .progessbar-container .active {
            border: 1px solid #111b60;
          }
        `}
      </style>
    </div>
  );
};

export default ProgressBasic;
