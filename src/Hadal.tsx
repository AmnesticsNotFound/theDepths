import { useState } from 'react'
import './App.css'

function Hadal({id, sealife, name, subtitle }) {
  

  
  return (
    <div className="layers" id ={`${id}`}>
      <h1 className='depthTitle'>{name}</h1>
      <h5 id="subtitle">{subtitle}</h5>
      <div className="sealifeDiv">

        <div className = "row">
          {sealife && sealife[0] ?
          sealife[0].map((animal) => {
            
            return (
            <div className="animalContainer" style={{top:`${animal['displacementy']}`, left:`${animal['displacementLeft']}`, right:`${animal['displacementRight']}`}}>
              <a href={`${animal['link']}`} target="_blank" className="fade">
              <h2>{animal['name']}</h2>
              <img src={animal['img']} alt="" style={{width:`${animal['size']}`}}/>
              </a>
            </div>
            )}) : null}
        </div>

        <div className = "row">
          {sealife && sealife[1] ?
          sealife[1].map((animal,) => {
            
            return (
            <div className="animalContainer" style={{top:`${animal['displacementy']}`, left:`${animal['displacementLeft']}`, right:`${animal['displacementRight']}`}}>
              <a href={`${animal['link']}`} target="_blank" className="fade">
              <h2>{animal['name']}</h2>
              <img src={animal['img']} alt="" style={{width:`${animal['size']}`}}/>
              </a>
            </div>
            )}) : null}
        </div>

        <div className = "hadalText">
          {sealife && sealife[2] ?
          sealife[2].map((animal) => {
            
            return (
            <div className="animalContainer" style={{top:`${animal['displacementy']}`, left:`${animal['displacementLeft']}`, right:`${animal['displacementRight']}`}}>
              <h2>{animal['name']}</h2>
              <img src={animal['img']} alt="" style={{width:`${animal['size']}`}}/>
            </div>
            )}) : null}
        </div>

        
        <div id="trieste">
          <a href="https://en.wikipedia.org/wiki/Trieste_(bathyscaphe)" target="_blank">
          <h4>Trieste</h4>
          <h5>The first of many to reach this point</h5>
          <img src="./images/trieste.png" style={{width: 'min(30vh, 30vw)'}}alt=""/>
          </a>
        </div>
        
        
        
      </div>

    </div>
  )
} 

export default Hadal