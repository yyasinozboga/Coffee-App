import * as React from 'react';
import Svg, {Mask, Rect, G, Defs, Pattern, Use, Image} from 'react-native-svg';
const SVGComponent = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Mask
      id="mask0_418_984"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}>
      <Rect x={2} y={2} width={20} height={20} fill="url(#pattern0_418_984)" />
    </Mask>
    <G mask="url(#mask0_418_984)">
      <Rect x={2} y={2} width={20} height={20} rx={5} fill="#C67C4E" />
    </G>
    <Defs>
      <Pattern
        id="pattern0_418_984"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_418_984" transform="scale(0.00195312)" />
      </Pattern>
      <Image
        id="image0_418_984"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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e809yvY9AKshAJyfH2hZyK9qWew/p2XBv3xkUwBwvkyQn59ToxuAPTLq98d1vN+sazsyZAYAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADCh/wPbVqhj8nmRegAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default SVGComponent;
