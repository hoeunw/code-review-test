import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // ❌ 일부러 문제 있는 코드
  function addOne() {
    document.title = "Count: " + count; // React에서 직접 DOM 수정 (안티패턴)
    console.log("clicked");             // 불필요한 console.log
    setCount(count + 1);
  }

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Counter: {count}</h1>
      <button onClick={addOne}>Click</button>
    </div>
  );
}
