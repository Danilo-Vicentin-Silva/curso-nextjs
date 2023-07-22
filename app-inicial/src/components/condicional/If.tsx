interface Props {
  teste: boolean;
  children: any;
}

export const If = (props: Props) => {
  if (props.teste) {
    return props.children;
  } else {
    return null;
  }
};
