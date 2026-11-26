import React, { useEffect } from 'react'
import { useState } from 'react'
function Chrono() {
  const [seconde,setSeconde] = useState(0)
  useEffect(()=>{
              // traitement de useEffect
              const interval = setInterval(()=>{
                   setSeconde(previous=> previous+1)
              },1000)
              //nettoyage
              return ()=>{
                       clearInterval(interval)
              }
  },[])
  return (
    <div>
         seconde : {seconde}
    </div>
  )
}
export default Chrono