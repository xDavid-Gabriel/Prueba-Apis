import { useRef } from "react";

export default function FormProducto({
  value,
  actualizarInput,
  manejarSubmit,
}) {
  const inputFile = useRef();
  console.log(value);
  return (
    <div>
      <form
        className="p-4"
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            onChange={(e) => {
              actualizarInput(e);
            }}
            value={value.descripcion}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo Carnada</label>
          <input
            type="number"
            className="form-control"
            name="tipoCarnada"
            onChange={(e) => {
              actualizarInput(e);
            }}
            value={value.tipoCarnada}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Comentarios</label>
          <input
            type="number"
            className="form-control"
            name="comentario"
            onChange={(e) => {
              actualizarInput(e);
            }}
            value={value.comentarios}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Likes</label>
          <input
            type="number"
            className="form-control"
            name="likes"
            onChange={(e) => {
              actualizarInput(e);
            }}
            value={value.likes}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            type="number"
            className="form-control"
            name="usuario"
            onChange={(e) => {
              actualizarInput(e);
            }}
            value={value.usuario}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </form>

      {/* <form
        className="p-4"
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Titulo</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={(e) => {
              actualizarInput(e);
            }}
            value={value.title}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            onChange={(e) => {
              actualizarInput(e);
            }}
            value={value.author}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ISB</label>
          <input
            type="text"
            className="form-control"
            name="isbn"
            onChange={(e) => {
              actualizarInput(e);
            }}
            value={value.isbn}
          />
        </div>
        <div className="mb-3">
        <label className="form-label">Imagen</label>
             <input type="file" className="form-control" ref={inputFile} onChange={(e)=>{
                 actualizarInput(e);
                 }} name="imagePath"/>
        </div>

        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </form> */}
    </div>
  );
}
