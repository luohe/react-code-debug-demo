import { useReducer } from 'react';
import './App.css';

// 定义初始状态
const initialState = { count: 0 };

// 定义 reducer 函数
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  // 使用 useReducer 钩子
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = (type) => {
    console.log(dispatch);
    dispatch({ type: type })
  }

  return (
    <div className="App">
      <p>Hello World</p>
      <button onClick={() => handleIncrement('increment')}>Increment</button>
      <span>{state.count}</span>
      <button onClick={() => handleIncrement('decrement')}>Decrement</button>
    </div>
  );
}

export default App;
