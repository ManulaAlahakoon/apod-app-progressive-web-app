
import React, { useEffect, useState } from 'react';
import { fetchAPOD } from './api/fetchAPOD.js';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import astronaut from './pictures/astronaut.png';
import lunarGif from './pictures/lunar.gif';
import stars from './pictures/stars.gif';

function App() {
  const [data, setData] = useState({
    title: 'Loading...',
    explanation: 'Loading...', 
    hdurl: '',
  });

  const search = async () => {
    try {
      const result = await fetchAPOD();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    search();
    AOS.init({duration:3000})

  }, []);

  return (
    <div className="App">
      <Parallax pages={6}>
        <ParallaxLayer
          offset={0}
          speed={2}
          factor={3}
          style={{
            backgroundImage: `url(${astronaut})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={-0.1}>
          <h1 className="heading" id="topic" data-aos="zoom-in"> 
            Astronomy Picture of the Day
          </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1}>
          <h1 className="heading">
            {data.title}
          </h1>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.8, end: 2 }} speed={0.5}>
          <img id="lunar" src={lunarGif} alt="Lunar Gif" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={-0.2}>
          <img id="nasaImg" src={data.hdurl} alt="Astronomy Picture of the Day" />
        </ParallaxLayer>

        <ParallaxLayer offset={5} factor={1.5} style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: 'cover',
        }}></ParallaxLayer>

        <ParallaxLayer offset={5.2} speed={-0.1}>
          <p className="explain">
            {data.explanation}
          </p>
        </ParallaxLayer>
       
      </Parallax>


    </div>
  );
}

export default App;

