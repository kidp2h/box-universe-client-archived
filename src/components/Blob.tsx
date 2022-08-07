import React from 'react';
import styles from '@styles/blob.module.scss';
import classnames from 'classnames';

type Props = {
  image: string;
  x: number;
  y: number;
};
const Blob = (props: Props) => {
  const { image, x, y } = props;
  /* eslint-disable */
  console.log('blob-render');

  return (
    <div className="lg:flex hidden">
      <div className={classnames(styles.blobGradient)}>
        <svg
          viewBox="0 0 800 500"
          height="100%"
          widths="100%"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg">
          <g transform={`translate(${x}, ${y})`}>
            <defs>
              <clipPath id="shape">
                <path className="blob" fill="#d1d8e0">
                  <animate
                    attributeName="d"
                    dur="5s"
                    repeatCount="indefinite"
                    values="M478,311Q461,372,399.5,387.5Q338,403,294,429.5Q250,456,205,431.5Q160,407,102.5,387.5Q45,368,29.5,309Q14,250,34.5,193.5Q55,137,92.5,90Q130,43,190,37Q250,31,306,43.5Q362,56,387,106Q412,156,453.5,203Q495,250,478,311Z;
                            M430,299Q419,348,385,386Q351,424,300.5,425Q250,426,195.5,432.5Q141,439,110,394Q79,349,45,299.5Q11,250,24,188.5Q37,127,81.5,81Q126,35,188,23.5Q250,12,303.5,38Q357,64,401.5,100.5Q446,137,443.5,193.5Q441,250,430,299Z;
                            M461.5,301.5Q428,353,400.5,408.5Q373,464,311.5,469.5Q250,475,195,457.5Q140,440,116,390.5Q92,341,76.5,295.5Q61,250,62,196Q63,142,100.5,99Q138,56,194,43Q250,30,312,33Q374,36,397,94Q420,152,457.5,201Q495,250,461.5,301.5Z;
                            M431,299.5Q422,349,384,383Q346,417,298,427.5Q250,438,194,440.5Q138,443,112.5,393.5Q87,344,54,297Q21,250,49.5,200.5Q78,151,104.5,97.5Q131,44,190.5,41Q250,38,295.5,65Q341,92,372,127Q403,162,421.5,206Q440,250,431,299.5Z;
                            M478,311Q461,372,399.5,387.5Q338,403,294,429.5Q250,456,205,431.5Q160,407,102.5,387.5Q45,368,29.5,309Q14,250,34.5,193.5Q55,137,92.5,90Q130,43,190,37Q250,31,306,43.5Q362,56,387,106Q412,156,453.5,203Q495,250,478,311Z;"></animate>
                </path>
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
      <div className={classnames(styles.blobBlur)}>
        <svg
          viewBox="0 0 800 500"
          widths="100%"
          height="100%"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg">
          <g transform={`translate(${x}, ${y})`}>
            <defs>
              <clipPath id="shape">
                <path className="blob" fill="#d1d8e0">
                  <animate
                    attributeName="d"
                    dur="5s"
                    repeatCount="indefinite"
                    values="M478,311Q461,372,399.5,387.5Q338,403,294,429.5Q250,456,205,431.5Q160,407,102.5,387.5Q45,368,29.5,309Q14,250,34.5,193.5Q55,137,92.5,90Q130,43,190,37Q250,31,306,43.5Q362,56,387,106Q412,156,453.5,203Q495,250,478,311Z;
                          M430,299Q419,348,385,386Q351,424,300.5,425Q250,426,195.5,432.5Q141,439,110,394Q79,349,45,299.5Q11,250,24,188.5Q37,127,81.5,81Q126,35,188,23.5Q250,12,303.5,38Q357,64,401.5,100.5Q446,137,443.5,193.5Q441,250,430,299Z;
                          M461.5,301.5Q428,353,400.5,408.5Q373,464,311.5,469.5Q250,475,195,457.5Q140,440,116,390.5Q92,341,76.5,295.5Q61,250,62,196Q63,142,100.5,99Q138,56,194,43Q250,30,312,33Q374,36,397,94Q420,152,457.5,201Q495,250,461.5,301.5Z;
                          M431,299.5Q422,349,384,383Q346,417,298,427.5Q250,438,194,440.5Q138,443,112.5,393.5Q87,344,54,297Q21,250,49.5,200.5Q78,151,104.5,97.5Q131,44,190.5,41Q250,38,295.5,65Q341,92,372,127Q403,162,421.5,206Q440,250,431,299.5Z;
                          M478,311Q461,372,399.5,387.5Q338,403,294,429.5Q250,456,205,431.5Q160,407,102.5,387.5Q45,368,29.5,309Q14,250,34.5,193.5Q55,137,92.5,90Q130,43,190,37Q250,31,306,43.5Q362,56,387,106Q412,156,453.5,203Q495,250,478,311Z;"></animate>
                </path>
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

export default React.memo(Blob);
