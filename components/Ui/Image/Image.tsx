import { useState, useEffect } from 'react';
import { Growing } from '../Spinner';

export interface ImageProps {
  imageUrl: string;
}

const Image: React.SFC<ImageProps> = ({ imageUrl }) => {
  const [imageLoading, updateImageLoading] = useState(true);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       updateImageLoading(false);
  //     }, 250);
  //   });

  return (
    <>
      <div style={{ width: 50, height: 50, backgroundColor: '#fff' }}>
        {!imageLoading ? null : (
          <div
            style={{ display: 'flex', width: 50, height: 50 }}
            className="align-items-center justify-content-center"
          >
            <Growing />
          </div>
        )}
        <img
          src={imageUrl}
          onLoad={() => updateImageLoading(false)}
          onError={() => console.log('Image failed to load.')}
          style={!imageLoading ? {} : { display: 'none', borderRadius: '8px' }}
        />
      </div>
    </>
  );
};

export default Image;
