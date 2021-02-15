import React from 'react'
import {useEffect, useState} from 'react'

export const AccessoriesView = () => {
 
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`
    });
  
    return (
      <div>
            <h1>This is the accessoriesView</h1>
        <p>You clicked {count} times</p>
        <button onClick={incrementCount}>Click me</button>
      </div>
    )
  }
  
  export default AccessoriesView;