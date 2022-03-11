import axios from "axios";

// Las peticiones

const URL = "http://127.0.0.1:8000/api/carnada/listar/1";
const URL_2 = "http://127.0.0.1:8000/api/carnada"

const obtenerProductos = async () => {
  try {
    const { data } = await axios.get(URL);
    return data.data;
  } catch (error) {
    throw error;
  }
};

const crearProducto = async (nuevoProducto) => {
  try {
    const headers = {
      "Content-Type": "aplication/json",
    };

    const { data } = await axios.post(URL_2, nuevoProducto, { headers });
    return data.data;
  } catch (error) {
    throw error;
  }
};

export { obtenerProductos, crearProducto };
