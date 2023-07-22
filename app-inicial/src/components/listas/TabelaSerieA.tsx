interface TabelaSerieAProps {
  times: string[];
}

const TabelaSerieA = (props: TabelaSerieAProps) => {
  const items: any[] = [];
  for (let i = 0; i < props.times.length; i++) {
    console.log(props.times[i]);
    items.push(
      <li className="text-xl list-decimal" key={props.times[i]}>
        {props.times[i]}
      </li>
    );
  }

  return (
    <ol>
      {props.times.map((item, i) => {
        return (
          <li
            className={`text-xl list-decimal ${
              i % 2 === 0 ? "text-blue-500" : "text-yellow-500"
            }`}
            key={item}
          >
            {item}
          </li>
        );
      })}
    </ol>
  );
};

export default TabelaSerieA;
