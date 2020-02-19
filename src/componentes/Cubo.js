import React from 'react'
import './estilos/Cubo.css'
import img from '../img/whitcher.jpeg'
import img2 from '../img/terminator.jpg'
import img3 from '../img/woman.png'
import img4 from '../img/widow.jpg'

class Cubo  extends  React.Component {

  

  render(){

    return (
            <div className='contenedor'>
            <div className='row'>
              <div className='' id='coluno'></div> 
              
                <div className='col-md-4 cubo'> 
                
                  <div className='cara' id='uno'>    <img src={img} alt=''  /> </div>
                  <div className='cara' id='dos'>    <img src={img2} alt=''  /> </div>
                  <div className='cara' id='tres'>   <img src={img3} alt=''  /> </div>
                  <div className='cara' id='cuatro'> <img src={img4} alt=''  /> </div>
   
                </div>
             
               <div className=''></div> 
            </div> 
            </div>           
    )
  }

}

export default Cubo
