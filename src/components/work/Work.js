import React from 'react'
import Worklayout from '../latout/Worklayout'
import hedingcommmon from '../heding/hedingcommmon'
import "./work.css"

const Work = () => {
  return (
    <section className="work">
    <div className="container">
       <div className="box">
          <div className="left">
             <div className="title">
               <hedingcommmon hedind_title ="How we work" hedind_p ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>
             </div>
          </div>
          <div className="right">
             <div className="box">
                    <Worklayout title_name = "Strategy" title_p="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." title_img="./image/pointer 1.png"/>
                    <Worklayout title_name = "Wireframing" title_p="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." title_img="./image/pointer 2.png"/>
                    <Worklayout title_name = "Design" title_p="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." title_img="./image/pointer 3.png"/>
                    <Worklayout title_name = "Development" title_p="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." title_img="./image/pointer 4.png"/>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default Work

