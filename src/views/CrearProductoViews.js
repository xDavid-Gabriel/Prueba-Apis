import { useState } from "react";
import FormProducto from "../components/FormProducto";
import { crearProducto } from "../services/productosService";

let imagen;

export default function CrearProductoViews() {
  const [value, setValue] = useState({
    descripcion: "",
    tipoCarnada: "",
    comentario: 0,
    likes: 0,
    usuario:0

    // title: "",
    // author: "",
    // isbn: "",
    
  });

  const actualizarInput = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
  
    });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearProducto(value);
    } catch (error) {
      console.log(error);
    }
  };

  //   const manejarImagen = (e) => {
  //     e.preventDefault();
  //     console.log(e.target.files);
  //    //imagen = e.target.files[0]; //como para utilizar
  //   };

  return (
    <div>
      <FormProducto
        value={value}
        actualizarInput={actualizarInput}
        manejarSubmit={manejarSubmit}
        // manejarImagen={manejarImagen}
      />
    </div>
  );
}
