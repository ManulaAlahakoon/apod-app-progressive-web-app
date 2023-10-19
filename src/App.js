import { useEffect,useState } from 'react';
import { fetchAPOD } from './api/fetchAPOD.js';
import './App.css';

function App() {

  const [data, setData] = useState([])
  const search = async () => {
    const data = await fetchAPOD();
    setData(data)
    console.log(data);
  }

  useEffect(() => {
    search()
  }, [])


  

  return (
    <div className="App">
      <h1>{data.title}</h1>
      
        <img id="nasaImg" src={data.hdurl} alt="Astronomy Picture of the Day" />

      <p>{data.explanation}</p>    
    </div>
  );
}

export default App;
