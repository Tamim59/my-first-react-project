import React from 'react'

const hedingcommmon = ({hedind_title,hedind_p}) => {
  return (
    <> 
        <h2>{hedind_title}</h2>
        <p>{hedind_p}</p>
        <a className="titlebtn" href="#">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i></a>
    </>
  )
}

export default hedingcommmon