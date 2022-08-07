import React from 'react';
import styles from '@styles/blob.module.scss';
import classnames from 'classnames';

type Props = {
  image: string;
  x: number;
  y: number;
};
const BlobStatic = (props: Props) => {
  const { image, x, y } = props;

  return (
    <div className="lg:flex hidden">
      <div className={classnames(styles.blobGradient)}>
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg">
          <g transform={`translate(${x}, ${y})`}>
            <defs>
              <clipPath id="shape">
                <path
                  className="blob"
                  d="M421.5,271.5Q383,293,363,305.5Q343,318,350.5,358.5Q358,399,337.5,428Q317,457,283.5,470Q250,483,223,449.5Q196,416,190.5,378Q185,340,135.5,355Q86,370,117,326.5Q148,283,127.5,266.5Q107,250,65.5,213.5Q24,177,96,183.5Q168,190,179.5,179Q191,168,203.5,157.5Q216,147,233,90.5Q250,34,287.5,26Q325,18,357.5,37.5Q390,57,384,107Q378,157,390.5,178.5Q403,200,431.5,225Q460,250,421.5,271.5Z"
                  fill="#d1d8e0"
                />
              </clipPath>
            </defs>
            <image
              x={0}
              y={0}
              width="100%"
              height="100%"
              clipPath="url(#shape)"
              xlinkHref={image}
              preserveAspectRatio="none"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default React.memo(BlobStatic);
