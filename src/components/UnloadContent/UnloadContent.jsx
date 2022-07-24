import React from "react";
import ContentLoader from "react-content-loader";

const UnloadContent = ({
  width,
  height,
  widthsec,
  heightsec,
  props,
  rx,
  ry,
  xx,
  yy,
}) => (
  <ContentLoader
    speed={2}
    width={widthsec}
    height={heightsec}
    viewBox={`0 0 ${widthsec} ${heightsec}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x={xx} y={yy} rx={rx} ry={ry} width={width} height={height} />
  </ContentLoader>
);

export default UnloadContent;
