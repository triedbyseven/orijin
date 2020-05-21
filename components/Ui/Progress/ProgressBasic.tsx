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
        <div className="step-container">
          <div key={step.id} className={`step ${currentStep.index === step.index ? 'active-step' : ''}`}>
            {step.index + 1}
          </div>
          <svg height="1" width="275" className="progress-line-container">
            <line
              className={`progress-line ${currentStep.index === step.index ? 'active-line' : ''}`}
              x1="0" y1="0" x2={0} y2="0" style={{ stroke: '#111b60', strokeWidth: 2 }} />
              Sorry, your browser does not support inline SVG.
            </svg>
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
          .progessbar-container .step-container {
            position: relative;
          }
          .progessbar-container .step {
            z-index: 10;
            position: relative;
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
          .progress-line-container {
            z-index: 1;
            position: absolute;
            top: 15px;
          }
          .progress-line {
          }
          .progessbar-container .active-step {
            border: 1px solid #111b60;
          }
        `}
      </style>
    </div>
  );
};

export default ProgressBasic;
