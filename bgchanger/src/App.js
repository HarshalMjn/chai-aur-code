
import { useState } from 'react';
import './App.css';


 
function App() {

  const [color, setacolor] = useState("");

 return (
  <div className='w-full h-screen duration-200' 
   style={{backgroundColor:color}}>

    <div className='fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center
      gap-3 shadow-lg bg-white rounded px-3 py-2'>
        <button onClick={() => setacolor("red")}
        className='outline-none px-4 py1 rounded-lg bg-red-800 text-white'>Red</button>
         <button onClick={() => setacolor("green")}
        className='outline-none px-4 py1 rounded-lg bg-green-700 text-white'>Green</button>
          <button onClick={() => setacolor("blue")}
        className='outline-none px-4 py1 rounded-lg bg-blue-700 text-white'>Blue</button>
          <button onClick={() => setacolor("black")}
        className='outline-none px-4 py1 rounded-lg bg-black text-white'>Black</button>
      </div>

    </div>

  </div>
 );
  

  
}

export default App;
