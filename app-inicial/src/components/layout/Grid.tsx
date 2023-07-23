interface Props {
  cols?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  x2l?: number;
  children: any;
}

const Grid = (props: Props) => {
  return (
    <div
      className={`grid grid-cols-${props.cols ?? 1} gap-4 w-full
    ${props.sm ? `sm: grid-cols-${props.sm}` : ``}
    ${props.md ? `md: grid-cols-${props.md}` : ``}
    ${props.lg ? `lg: grid-cols-${props.lg}` : ``}
    ${props.xl ? `xl: grid-cols-${props.xl}` : ``}
    ${props.x2l ? `x2l: grid-cols-${props.x2l}` : ``}`}
    >
      {props.children}
    </div>
  );
};

export default Grid;
