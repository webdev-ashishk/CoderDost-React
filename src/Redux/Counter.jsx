// src/Counter.js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementby10 } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-11">
      <h1 className="text-red-500 font-bold text-5xl mb-9">
        Counter-Application
      </h1>
      <div className="flex justify-center">
        <div className="pt-40 border border-sky-600 bg-sky-200 w-2/4 rounded-lg">
          <p className="text-9xl mb-32 font-bold text-blue-600">
            Count:<b className=" text-white font-bold"> {count}</b>
          </p>
          <div className="mb-10">
            <button
              onClick={() => dispatch(increment())}
              className="mr-9 text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-1o"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(incrementby10())}
              className="mr-9 text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Increment by 10
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
