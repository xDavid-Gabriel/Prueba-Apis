import "bootstrap/dist/css/bootstrap.min.css";
import ListaProductosViews from "./views/ListaProductosViews";
import CrearProductoViews from "./views/CrearProductoViews";

export default function App() {
  return (
    <div>
      <ListaProductosViews />
      <CrearProductoViews />
    </div>
  );
}
