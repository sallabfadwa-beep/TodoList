import React from 'react'
import EtudiantRow from './EtudiantRow'
import './TableEtudiants.css'

function TableEtudiants(props) {
    const {listeEtudiants} = props
    const effectif  = listeEtudiants.length
    const moyenneGeneral = listeEtudiants.reduce((acc,etd)=>acc + etd.moyenne,0) / effectif
    const nbEtdSup10= listeEtudiants.filter(etd =>etd.moyenne >= 10).length
    const pourcentageReussite = (nbEtdSup10 / effectif) * 100

    return (
    <div>
        <table>
              <thead>
                <tr>
                    <th>code</th><th>nom</th><th>moyenne</th>
                </tr>
              </thead>
              <tbody>
                 {listeEtudiants.map((etd,index)=> <EtudiantRow code ={etd.code} nom ={etd.nom} moyenne={etd.moyenne}/>)}
              </tbody>
        </table>
        <div className='statistique'>
             <p>moyenne génerale : {moyenneGeneral.toFixed(2)}</p>
             <p>nombre de moyenne sup à 10 : {nbEtdSup10}</p>
             <p>pourcentage (/100) de réussite est : {pourcentageReussite.toFixed(2)}%</p>
        </div>
    </div>
  )
}

export default TableEtudiants