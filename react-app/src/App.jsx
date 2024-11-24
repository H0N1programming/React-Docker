import './App.css';

const clickHandler = async () => {
  const res = await fetch("/api/");
  console.log(res);
}

function App() {
  return (
    <div className="App">
      <button onClick={clickHandler} >押せ！</button>
    </div>
  );
}

export default App;
