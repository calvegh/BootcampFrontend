import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../../states/store";
import { decrement, increment, increment_2 } from "../../states/slice";

export function Button() {
  const counterState = useSelector((state: RootType) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      Estado actual {counterState}
      <button onClick={() => dispatch(increment())}>Aumentar</button>
      <button onClick={() => dispatch(decrement())}>Disminuir</button>
      <button onClick={() => dispatch(increment_2(2))}>asas</button>
    </>
  );
}
