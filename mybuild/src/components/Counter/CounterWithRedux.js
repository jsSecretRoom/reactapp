import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../reducers/counterReducer'; // Подключение действий

const CounterWithRedux = () => {
  
  const count = useSelector(state => state.counter.count); // Обратите внимание на путь до состояния
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterWithRedux;