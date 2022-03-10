import { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productosService";

export default function ListaProductosViews() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const productosObtenidos = await obtenerProductos();
      console.log(productosObtenidos);
      setProductos(productosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <h1>Productos registrados</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          {productos.map(
            ({ id, descripcion, tipoCarnada, comentarios, likes }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{descripcion}</td>
                <td>{tipoCarnada}</td>
                <td>{comentarios}</td>
                <td>{likes}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {/* Mi Api */}

      {/* <table className="table">
        <thead>
          <tr>
            <th> Titulos</th>
            <th> Author</th>
            <th> ISBN</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(({ title, author, isbn }, i) => (
            <tr key={i}>
              <td>{title}</td>
              <td>{author}</td>
              <td>{isbn}</td>
              
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* <div className="container">
        <div className="row">
        {productos.map(({ title, author, isbn, imagePath }, i) => (
            <div key={i}>
              <h2>{title}</h2>
              <h2>{author}</h2>
              <h2>{isbn}</h2>
              <img src={`http://localhost:3000/${imagePath}`}/>
            </div>
          ))}
          </div>
        </div> */}
    </div>
  );
}
