import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const GPS = (props: any) => (
  <Svg
    width={88}
    height={84}
    viewBox="0 0 88 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_418_986)">
      <Rect
        x={24}
        y={20}
        width={44}
        height={44}
        rx={8}
        fill="#EDEDED"
        shapeRendering="crispEdges"
      />
      <Path
        d="M46 49.5C50.1421 49.5 53.5 46.1421 53.5 42C53.5 37.8579 50.1421 34.5 46 34.5C41.8579 34.5 38.5 37.8579 38.5 42C38.5 46.1421 41.8579 49.5 46 49.5Z"
        stroke="#242424"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M46 45C47.6569 45 49 43.6569 49 42C49 40.3431 47.6569 39 46 39C44.3431 39 43 40.3431 43 42C43 43.6569 44.3431 45 46 45Z"
        stroke="#242424"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M46 34V32"
        stroke="#242424"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M38 42H36"
        stroke="#242424"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M46 50V52"
        stroke="#242424"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M54 42H56"
        stroke="#242424"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default GPS;
