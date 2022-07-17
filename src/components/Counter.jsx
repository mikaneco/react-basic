import React, {useEffect, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  
  const countUp = () => {
    setCount(prevState => prevState + 1)
  }

  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  useEffect(() =>{
    console.log('current count is ...', count)
  },[])

  return (
    <>
      <p>
        現在のカウント数：　{count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>

    </>
  );
};

export default Counter;