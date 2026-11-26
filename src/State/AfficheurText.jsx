import React, { useState } from 'react'

function AfficheurText() {
    const [isVisible,setIsVisible]= useState(true)
    function toggle(){
        // if (isVisible == true)
        //     setIsVisible(false)
        // else
        //     setIsVisible(true)
        setIsVisible(!isVisible)
       
    }
  return (
    <div>
        <button style={{color:"red"}} onClick={toggle}> {isVisible ? "Masquer" : "Afficher"}</button>
        {isVisible && <h2>Bievenue FUS205</h2>}
    </div>
  )
}

export default AfficheurText