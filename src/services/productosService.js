import axios from "axios";

// Las peticiones

const URL = "http://127.0.0.1:8000/api/carnada/listar/1";

const obtenerProductos = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    throw error;
  }
};

export { obtenerProductos };
