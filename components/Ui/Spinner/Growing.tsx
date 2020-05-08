import React, { useEffect, useState } from 'react';

export interface GrowingProps {
  visible?: boolean;
  fullScreen?: boolean;
}

const Growing: React.SFC<GrowingProps> = ({
  visible = true,
  fullScreen = false,
}) => {
  const [height, updateHeight] = useState(0);

  useEffect(() => {
    updateHeight(window.innerHeight);
  });

  if (fullScreen) {
    return (
      <div className="container-fluid" style={{ height }}>
        <div
          className="row align-items-center justify-content-center"
          style={{ width: '100%', height }}
        >
          <span
            className={`spinner-grow spinner-grow-sm ${
              visible ? null : 'd-none'
            } `}
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`spinner-grow spinner-grow-sm ${visible ? null : 'd-none'} `}
      role="status"
      aria-hidden="true"
    ></span>
  );
};

export default Growing;
