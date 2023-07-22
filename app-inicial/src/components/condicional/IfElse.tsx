interface Props {
  teste: boolean;
  children: any;
}

export const IfElse = (props: Props) => {
  if (props.teste) {
    return props.children[0];
  } else {
    return props.children[1];
  }
};
