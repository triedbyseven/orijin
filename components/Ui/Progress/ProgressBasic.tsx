export interface ProgressBasicProps {

}

const ProgressBasic: React.SFC<ProgressBasicProps> = () => {
  return (
    <div className="progessbar-container mb-5">
      <div className="step">1</div>
      <div className="step">2</div>
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
            border-radius: 22px;
            webkit-box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
            -moz-box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
            box-shadow: 0px 10px 24px 0px rgba(0,123,255,0.30);
          }
          .progessbar-container .active {
            border: 1px solid #111b60;
          }
        `}
      </style>
    </div>
  );
}

export default ProgressBasic;