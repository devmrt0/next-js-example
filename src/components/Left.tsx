import { countUp, countDown, setTarget } from "../store/slices/counterSlice";
import { AppDispatch, useAppDispatch } from "../store/store";
import { Button } from 'antd';


const Left1 = () => {
  console.log("Rendering : Left1");

  return (
    <div>
      
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  console.log("Rendering : Left2");

  return (
    <div>
      
      <Left3 />
    </div>
  );
};



function Left3(props: any) {
  console.log("Rendering : Left3");

  const dispatch: AppDispatch = useAppDispatch();

  const upEvent = () => {
    dispatch(countUp());
   
  };

  const downEvent = () => {
    dispatch(countDown());
    
  };

  const setEvent = (num: number) => {
    dispatch(setTarget(num));
   
  };

  return (
    <div>
      Change Value : &nbsp;
      <Button onClick={upEvent}>+Increase</Button>
      <Button type="primary" danger onClick={downEvent}>-Decrease</Button>
      <Button onClick={() => setEvent(5)}>Set 5</Button>
    </div>
  );
}

export default Left1;