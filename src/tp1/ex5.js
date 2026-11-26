import photo from '../photo.jpg';
function ex5(){
  return(
    <div className='image-card'>
      <h2> Mon image </h2>
      <img src={photo} style={{ width: "200px", borderRadius: "10px" }} />
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, officia! Facilis ipsa unde ducimus sunt adipisci sed incidunt, eaque commodi recusandae! Nam, amet qui? Ea doloribus illum maiores iure. Recusandae. </p>
    </div>
  );
}
export default ex5;