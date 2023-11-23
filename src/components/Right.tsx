import { RootState, useAppSelector } from "../store/store";

const Right1 = () => {
  console.log("Rendering : Right1");

  return (
    <div>
     
      <Right2 />
    </div>
  );
};

const Right2 = () => {
  console.log("Rendering : Right2");

  return (
    <div>
      Store Value
      <Right3 />
    </div>
  );
};


const Right3 = () => {
  console.log("Rendering : Right3");

  const counter = useAppSelector((state: RootState) => state.counter);
  

  return (
    <div>
      Value : {counter.value}
      <br />
    </div>
  );
};

export default Right1;