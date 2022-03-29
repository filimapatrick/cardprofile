import React from 'react'
import styled from 'styled-components'
import CardDetail from './CardDetail'
import A1 from './img/rexume.jpg'

function Card() {
    const CardBody = styled.div`

    height:500px;
    width:400px;
    justify-content:center;
    margin-left:auto;
    margin-right:auto;
    margin-top:8rem;
    
.upper{
    height: 35%;
    /* background-color: rgb(64, 201, 210); */
    background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 4%, rgba(9,99,121,0) 74%, rgba(0,212,255,0.369140625) 91%);
   border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.upper >img{
    height:150px;
    margin-top:6rem;
    border-radius:50%;
    border:10px solid #FFFFFF;
}
    
.lower{
    height: 65%;
    background-color:#FFFFFF; 
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top:-1.5rem;
}

 .lower > .lower-content{
padding-top:7rem;
 }

 .lower .lower-content >h2 >span{
     color:gray;
     opacity:0.5;
 }

 span{
     color:gray;
     opacity:0.5;
     padding-bottom:1rem;
 }

 .lower > .lower-content > :nth-child(2) {
padding-bottom:2rem;
padding-top:2rem;
 }

 hr{
    opacity:0.5;
 }
    `   
  return (
    <>

    <CardBody>
       
        <div className='upper'>
<img src={A1}/>
        </div>

        <div className='lower'>
           <div className='lower-content'>
           <h2>Victor Crest <span>26</span></h2>  
           <span>London </span>

           <hr/>
               </div>
            <CardDetail/>
             </div>
   </CardBody>
    </>
  )
}

export default Card