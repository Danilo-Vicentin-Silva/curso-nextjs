import Grid from "@/components/layout/Grid";

const PaginaLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="lg:w-4/5 w-[90%]">
        <Grid lg={8} md={4} sm={2}>
          <div className="h-24 w-full  bg-purple-500">#1</div>
          <div className="h-24 w-full bg-green-500">#2</div>
          <div className="h-24 w-full bg-cyan-500">#3</div>
          <div className="h-24 w-full bg-rose-500">#4</div>
          <div className="h-24 w-full  bg-yellow-500">#5</div>
          <div className="h-24 w-full bg-blue-500">#6</div>
          <div className="h-24 w-full bg-red-500">#7</div>
          <div className="h-24 w-full bg-zinc-500">#8</div>
        </Grid>
      </div>
    </div>
  );
};

export default PaginaLayout;
