import React from 'react';
import { css } from 'theme-ui';

const BGImage = ({ children, slim }) => {
  return (
    <div
      css={css({
        width: `100%`,
        height: slim ? [`400px`, `500px`] : [`500px`, `600px`, `700px`, `40vw`],
        maxHeight: `1200px`,
        zIndex: 1,
        '.gatsby-image-wrapper': {
          position: `static !important`,
          filter: `grayscale(100%)`,
          '> div': {
            paddingBottom: `0 !important`,
            height: slim
              ? [`400px !important`, `500px !important`]
              : [
                  `500px !important`,
                  `600px !important`,
                  `700px !important`,
                  `40vw !important`,
                ],
            maxHeight: `1200px`,
          },
        },
        '&:before': {
          content: `""`,
          height: `100%`,
          left: 0,
          top: 0,
          position: `absolute`,
          width: `100%`,
          zIndex: 2,
        },
        '&:after': {
          backfaceVisibility: `hidden`,
          content: `""`,
          height: `100%`,
          left: 0,
          top: 0,
          position: `absolute`,
          width: `100%`,
        },
      })}
    >
      {children}
    </div>
  );
};

export default BGImage;
