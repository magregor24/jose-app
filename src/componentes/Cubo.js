import React from 'react'
import './css/Card.css'
import img from '../img/whitcher.jpeg'
import img2 from '../img/4.png'

class Cubo  extends  React.Component {

  

  render(){

    return (

            <div className='row'>
              <div className='col-md-4' id='coluno'>ddfdfd</div> 
              <div>
                <div className='col-md-4 cubo'> 
                
                  <div className='cara' id='uno'>    <img src={img} alt=''  /> </div>
                  <div className='cara' id='dos'>    <img src={img2} alt=''  /> </div>
                  <div className='cara' id='tres'>   <img src={img} alt=''  /> </div>
                  <div className='cara' id='cuatro'> <img src={img} alt=''  /> </div>
   
                </div>
              </div> 
               <div className='col-md-4'>ddfdfd</div> 
            </div>           
    )
  }

}

export default Card
