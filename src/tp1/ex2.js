
function ex2() {
    const fruits=["Pomme", "Banane", "Orange", "Mangue"]
      return (
      <div>     
      <ul>
        {fruits.map((fruit)=>(
          <li  className="fruit" key={fruit}>
            {fruit}
         </li>
         ))}
      </ul>
    </div> 
  );
}

export default ex2;