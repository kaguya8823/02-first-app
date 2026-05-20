import { useState } from 'react'
import './App.css'

function App() {
  // backendから取得したデータを格納するためのstate
  // useStateの型引数にstring | nullを指定して、初期値はnullにする。引数は文字なので
  const [hello, setHello] = useState<string | null>(null);

    // ここでbackendからデータを取得する処理を書く
    const fetchHello = async () => {
      const response = await fetch("http://localhost:3000");
      const text = await response.text();
      setHello(text);
    };

  return (
    <>
      <button onClick={fetchHello}>あいさつする</button>
      {hello && <p>{hello}</p>}
    </>
  );
}

export default App
