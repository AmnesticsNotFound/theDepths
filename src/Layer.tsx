import { useState } from 'react'
import './App.css'

function Layer({id, sealife, name, subtitle="" }) {
 

  
  return (
    <div className="layers" id ={`${id}`}>
      <h1 className='depthTitle'>{name}</h1>
      <h5>{subtitle}</h5>
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

        <div className = "row">
          {sealife && sealife[2] ?
          sealife[2].map((animal) => {
            
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
          {sealife && sealife[3] ?
          sealife[3].map((animal) => {
            
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
          {sealife && sealife[4] ?
          sealife[4].map((animal) => {
            
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
          {sealife && sealife[5] ?
          sealife[5].map((animal) => {
            
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
          {sealife && sealife[6] ?
          sealife[6].map((animal) => {
            
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
          {sealife && sealife[7] ?
          sealife[7].map((animal) => {
            
            return (
            <div className="animalContainer" style={{top:`${animal['displacementy']}`, left:`${animal['displacementLeft']}`, right:`${animal['displacementRight']}`}}>
              <a href={`${animal['link']}`} target="_blank" className="fade">
              <h2>{animal['name']}</h2>
              <img src={animal['img']} alt="" style={{width:`${animal['size']}`}}/>
              </a>
            </div>
            )}) : null}
        </div>

        
      </div>

    </div>
  )
} 

export default Layer