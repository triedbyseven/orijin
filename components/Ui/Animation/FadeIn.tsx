import { useEffect } from 'react';
import { TweenMax } from 'gsap';

export interface FadeInProps {
  isTableRow?: boolean;
  children: any;
}

const FadeIn: React.SFC<FadeInProps> = ({ isTableRow = false, children }) => {
  useEffect(() => {
    TweenMax.staggerFromTo(`.animate`, 0.5, { y: 10, opacity: 0 }, { y: 0, opacity: 1 }, 0.4);
  }, []);

  if (isTableRow)
    return (
      <tr className="animate">
        {children}
        <style jsx>
          {`
            .animate {
              opacity: 0;
            }
          `}
        </style>
      </tr>
    );

  return (
    <div className="animate">
      {children}
      <style jsx>
        {`
          .animate {
            opacity: 0;
          }
        `}
      </style>
    </div>
  );
};

export default FadeIn;
