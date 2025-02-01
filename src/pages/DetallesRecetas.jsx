import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API = 'https://dummyjson.com/recipes';
const DetallesRecetas = () => {
    const params = useParams()
     const [datos, setDatos] = useState([])
     const URI=`${API}/${params.id}`
          const getDatos = async () => {
              try {
                  const response = await fetch(URI);
                  const data = await response.json();
                  console.log(data)
                  setDatos(data);
              } catch (error) {
                  console.error(error)
              }
          };
          useEffect(() => {
              getDatos();
          }, []);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6">
        <img src={datos.image} className="img-thumbnail img-fluid" alt="" />
        </div>
        <div className="col-md-6">
        <h2 className="text-center py4 text-danger">{datos.name}</h2>
        <h4>Ingredientes</h4>
        <p>{datos.ingredients}</p>
        <h4>instrucciones</h4>
        <p>{datos.instructions}</p>
        <h4>Tiempo de preparacion</h4>
        <h3>{datos.prepTimeMinutes} minutos</h3>
        <h1 className="text-center text-warning">{datos.rating}</h1>
        </div>
      </div>
    </div>
  )
}

export default DetallesRecetas
