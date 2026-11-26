import React, { useState } from 'react'


function SuiviClics() {
    const [clicksButton1,setClicksButton1] = useState(0)
    const [clicksButton2,setClicksButton2] = useState(0)
      

  return (
    <div>
        clicksButton1 : {clicksButton1} - <button onClick={()=>setClicksButton1((previous)=>previous + 1 )}>clicksButton1</button> <br />
        clicksButton2 : {clicksButton2} - <button onClick={()=>setClicksButton2((previous)=>previous + 1 )}>clicksButton1</button> <br />
        <p style={{color:(clicksButton1 + clicksButton2) >=10 && 'red' }}>
          nombre total de click est : {clicksButton1 + clicksButton2}
        </p>
    </div>
  )
}

export default SuiviClics