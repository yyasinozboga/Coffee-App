import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import normalize from '../../src/utils/helper';
const Rute = (props: any) => (
  <Svg
    width={normalize(175)}
    height={normalize(148)}
    viewBox="0 0 175 148"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M173 146V3.5L161 9L41 15.5V39.5L16 41L18 71L2.5 72"
      stroke="#C67C4E"
      strokeWidth={normalize(4)}
      strokeLinecap="round"
    />
  </Svg>
);
export default Rute;
