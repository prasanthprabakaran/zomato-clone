import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props; 
  return (
    <div className={className}
    style={{ 
        ...style, 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"White", 
        borderRadius:"50%",
        padding:"4px" 
    }}
    onClick={onClick}
    >

    </div>
  )
}

export default NextArrow