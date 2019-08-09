/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

export default props => (
  <div
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    <div
      sx={{
        flexGrow: 1,
        flexBasis: 256,
      }}
    >
      Sidebar
    </div>
    <div
      sx={{
        flexGrow: 99999,
        flexBasis: 0,
        minWidth: 320,
      }}
    >
      {props.children}
    </div>
  </div>
);
