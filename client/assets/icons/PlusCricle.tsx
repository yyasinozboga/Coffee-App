import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const PlusCricle = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={23} height={23} rx={11.5} fill="white" />
    <Rect x={0.5} y={0.5} width={23} height={23} rx={11.5} stroke="#F9F2ED" />
    <Path
      d="M8 12H16"
      stroke="#242424"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16V8"
      stroke="#242424"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PlusCricle;
