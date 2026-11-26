function Message()
{
    const nom ="Ali"
    const T = [10,20,30,40]
    const somme= T.reduce((acc,element)=>acc+element,0)
    const style1 = {border:'1px solid black',borderRadius :'5px'}

    return (       
        <div style = {style1}> 
              <h1>titre niveau 1</h1>
              <p> paragraphe</p>
              <div>somme est  {somme}</div>
        </div>
    )
}
export default Message;