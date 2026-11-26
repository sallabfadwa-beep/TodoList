import React, { useState } from 'react'

function InputField() {
    const [text,setText]= useState('OK')
  return (
    <div>
        Saisir du texte : <input type='text' onChange={(e)=> setText(e.target.value)} value={text}/>
        <br />
        {text}
    </div>
  )
}

export default InputField