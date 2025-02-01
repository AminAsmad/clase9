import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = 'https://dummyjson.com/products/';
const Productos = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data.products);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (

        <div className="container">
            <h4 className="text-center py-4">productos</h4>
            <div className="row">
                {datos && datos.map((item, index) => (
                    <>
                    <div key={index} className="col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <div className="card-header">
                            <img src={item.thumbnail} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <h4 className="card-text text-danger">{item.price}</h4>
                                <p><strong>Stock: {item.stock}</strong></p>                               
                            </div>
                            <div className="card-footer text-center">
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>ver detalles</a>
                                <Link to={`/detallesp/${item.id}`} href="#" className="btn btn-info">ver detalles</Link>
                            </div>
                        </div>
                    </div>
                   

  <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="d-flex gap-4">
            <div >
            <img src={item.thumbnail} className="card-img-top" alt="..." /></div>
            <div >
           
            <h4 className="card-text text-danger">{item.price}</h4>
            <p><strong>Stock: {item.stock}</strong></p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.brand}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
          
        </div>
    </div>
  </div>
</div>




                    </>
                ))}
            </div>
        </div>
    )
}

export default Productos
