import Ocean from './ocean.tsx'
import Layer from './Layer.tsx'
import Hadal from './Hadal.tsx'
import sealife from '../public/sealife.json'
import DepthMeter from './DepthMeter.tsx'
import './App.css'

function App() {
  
  return (
    <>
      <DepthMeter></DepthMeter>
      <div id = "mainBody">
        
        <h1>The Depths Below </h1>
        
        <Ocean></Ocean>
        <Layer id="epipelagic" sealife={sealife.epipelagic} name="The Surface">
        

        </Layer>
        <Layer id="mesopelagic" sealife={sealife.mesopelagic} name="The Twilight Zone"></Layer>
        <Layer id="bathypelagic" sealife={sealife.bathypelagic} name="The Midnight Zone"></Layer>
        <Layer id="abyssopelagic" sealife={sealife.abyssopelagic} name="The Abyss"></Layer>
        <Hadal id="hadalpelagic" sealife={sealife.hadalpelagic} name="The Trenches" subtitle="The ocean is a desert with the perfect disguise up above
"></Hadal>

        
        

      </div>
      
    </>
  )
}

export default App

