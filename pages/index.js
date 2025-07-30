
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
