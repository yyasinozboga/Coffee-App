import * as React from 'react';
import Svg, {Mask, Rect, G, Defs, Pattern, Use, Image} from 'react-native-svg';
const Bike = (props: any) => (
  <Svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
    style={{
      left: -5,
      top: 5,
    }}
    transform="rotate(180)">
    <Mask
      id="mask0_418_980"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      y={0}>
      <Rect
        width={70}
        height={70}
        transform="matrix(-1 0 0 1 26 6)"
        fill="url(#pattern0_418_980)"
      />
    </Mask>
    <G mask="url(#mask0_418_980)">
      <Rect
        width={32}
        height={32}
        transform="matrix(-1 0 0 1 26 6)"
        fill="#C67C4E"
      />
    </G>
    <Defs>
      <Pattern
        id="pattern0_418_980"
        patternContentUnits="objectBoundingBox"
        width={32}
        height={32}>
        <Use xlinkHref="#image0_418_980" transform="scale(0.00195312)" />
      </Pattern>
      <Image
        id="image0_418_980"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default Bike;
