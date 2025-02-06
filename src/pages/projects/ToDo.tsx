import { Panel } from "primereact/panel";
import { Button } from "primereact/button";

const ToDo = () => {
  return (
    <Panel header="To-Do List">
      <div className="card flex justify-content-center gap-3">
        <Button label="Añadir" severity="info" raised />
        <Button label="Borrar" severity="danger" raised />
      </div>
    </Panel>
  );
};

export default ToDo;
