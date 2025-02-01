import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = 'https://dummyjson.com/recipes';
const Recetas = () => {
      const [datos, setDatos] = useState([])
      const getDatos = async () => {
          try {
              const response = await fetch(API);
              const data = await response.json();
              console.log(data)
              setDatos(data.recipes);
          } catch (error) {
              console.error(error)
          }
      };
      useEffect(() => {
          getDatos();
      }, []);
  return (
    <div className="container">
      <h3 className="text-center py-4">Recetas</h3>
    <table className="table table-primary table-bordered">
  <thead>
    <tr className="text-center">
      <th scope="col">img</th>
      <th scope="col">Codigo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Ingredientes</th>
      <th scope="col">Tiempo</th>
      <th scope="col">Dificultad</th>
      <th scope="col">Region</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>


       {datos && datos.map((item, index) => (
        
        <tr key={index}>
        <td><img src={item.image} className="img-thumbnail img-fluid" alt="" /></td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.ingredients}</td>
        <td>{item.prepTimeMinutes}</td>
        <td>{item.difficulty}</td>
        <td>{item.cuisine}</td>
        <td> <Link to={`/detalles/${item.id}`} href="#" className="btn btn-success">ver detalles</Link></td>
        </tr>




        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Recetas
