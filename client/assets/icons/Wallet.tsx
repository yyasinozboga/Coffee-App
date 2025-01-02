import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Wallet = (props: any) => (
  <Svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18.0325 12.4964H14.6589C13.4202 12.4957 12.4162 11.4924 12.4154 10.2537C12.4154 9.01501 13.4202 8.01175 14.6589 8.01099H18.0325"
      stroke="#C67C4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.0405 10.2024H14.7808"
      stroke="#C67C4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.45643 3H13.6593C16.0744 3 18.0323 4.95793 18.0323 7.37305V13.3539C18.0323 15.769 16.0744 17.727 13.6593 17.727H6.45643C4.0413 17.727 2.08337 15.769 2.08337 13.3539V7.37305C2.08337 4.95793 4.0413 3 6.45643 3Z"
      stroke="#C67C4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.86304 6.78178H10.3622"
      stroke="#C67C4E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Wallet;
