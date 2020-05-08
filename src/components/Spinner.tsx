import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  const [height, updateHeight] = useState(0);

  useEffect(() => {
    updateHeight(window.innerHeight);
  });

  return (
    <div className="container" style={{ height }}>
      <div
        className="row align-items-center justify-content-center"
        style={{ width: '100%', height }}
      >
        <span
          className={`spinner-grow spinner-grow-sm`}
          role="status"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  );
};
