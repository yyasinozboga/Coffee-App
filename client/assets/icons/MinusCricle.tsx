import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const MinusCricle = (props: any) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={23} height={23} rx={11.5} fill="white" />
    <Rect x={0.5} y={0.5} width={23} height={23} rx={11.5} stroke="#F9F2ED" />
    <Path
      d="M8 12H16"
      stroke="#A2A2A2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MinusCricle;
