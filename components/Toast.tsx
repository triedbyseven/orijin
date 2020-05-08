import React, { useEffect, useState, useRef } from 'react';
import { TweenMax } from 'gsap';

export interface ToastProps {
  id: number;
  title: string;
  text: string;
  removeNotification: any;
}

export interface ToastState {
  second: number;
  otherSecond: number;
}

const Toast: React.SFC<ToastProps> = ({
  id,
  title,
  text,
  removeNotification,
}) => {
  const [state, updateState] = useState<ToastState>({
    second: 100,
    otherSecond: 0,
  });

  useEffect(() => {
    TweenMax.to(`.animate-${id}`, 1, {
      opacity: 1,
    });
    if (state.second === 0) {
      TweenMax.to(`.animate-${id}`, 1, {
        opacity: 0,
        onComplete: () => removeNotification(id),
      });
    }
  });

  const useInterval = (callback, delay) => {
    const savedCallback: any = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      let id = setInterval(tick, delay);

      function tick() {
        savedCallback.current();
      }

      if (state.second === 0) {
        clearInterval(id);
      }

      if (delay !== null) {
        return () => clearInterval(id);
      }
    });
  };

  useInterval(() => {
    updateState({
      second: state.second - 1,
      otherSecond: parseFloat(state.otherSecond.toFixed(2)) + 10 / 100,
    });
  }, 100);

  return (
    <div
      className={`toast animate-${id}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        marginBottom: '1rem',
      }}
    >
      <div className="toast-header">
        <svg width="20" height="20">
          <rect
            width="20"
            height="20"
            rx="4"
            ry="4"
            style={{
              fill: 'rgb(0,122,255)',
            }}
          />
        </svg>
        <strong className="mr-auto" style={{ marginLeft: '0.4rem' }}>
          {title}
        </strong>
        <small className="text-muted">
          {state.otherSecond > 1
            ? `${Math.floor(state.otherSecond)} seconds ago`
            : 'just now'}
        </small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
          onClick={() => removeNotification(id)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">{text}</div>
      <div className="progress-bar" style={{ width: state.second + '%' }} />
      <style jsx>
        {`
          .progress-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            background-color: #007bff;
            transition: width 0.1s ease;
          }
        `}
      </style>
    </div>
  );
};

export default Toast;
