import React from 'react'

const Worklayout = ({title_name,title_p,title_img}) => {
  return (
    <div className="item">
    <img src={title_img} alt="pointer"/>
    <h4>{title_name}</h4>
    <p>{title_p}</p>
 </div>
  )
}

export default Worklayout