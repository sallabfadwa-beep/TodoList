import React, { useEffect, useState } from 'react'

export default function Chrono() {
    const [seconde,setSeconde] = useState(0)
    useEffect(() => {
        //traitement de useEffect
        const intervall = setInterval(() => {
            setSeconde (s => s+1)
        },1000)

        //nettoyage
        return () => {
            clearInterval (intervall)
        }
    },[])
  return (
    <div>seconde : {seconde}</div>
  )
}
