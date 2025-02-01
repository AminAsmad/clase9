import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API = 'https://dummyjson.com/products';
const DetallesProductos = () => {
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
    <div className='container bg-'>
      <div className="row">
        <div className="col-md-4">
        <img src={datos.thumbnail} className="img-thumbnail img-fluid" alt="" />
        </div>
        <div className="col-md-8">
        <h2 className="text-center py4 text-danger">{datos.title}</h2>
        <h4>Descripcion</h4>
        <p>{datos.description}</p>
        <h4>Marca</h4>
        <p>{datos.brand}</p>
        <h4>Categoria</h4>
        <p>{datos.category}</p>
        <h1 className="text-center text-danger">{datos.price}</h1>
        </div>
      </div>
    </div>
  )
}

export default DetallesProductos
