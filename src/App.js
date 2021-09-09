import './App.css';
import { useState } from 'react';
import Imagebar from './prodDes/content/Imagebar';
import InfoBar from './prodDes/content/InfoBar';
import Summary from './prodDes/content/Summary';

function App() {
  const [sumry, setSumry] = useState(false);
  const [count, setCount] = useState(0);
  const price = 1699;
  return (
    <>
    {
      sumry ? <Summary count = {count} price={price} /> : <div>
      <p className="heading">Product Description</p>
      <p className="pName" >Product Name</p>
      <div className="App">
        <Imagebar className="image" />
        <InfoBar className="info" count={count} setCount={setCount} sumry={sumry} setSumry={setSumry} price={price}/>
      </div>
      </div>
    }
    </>    
  );
}

export default App;
