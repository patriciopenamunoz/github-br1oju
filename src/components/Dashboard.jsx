import "./dashboard.css";
import APIDashboard from "../library/APIDashboard";
import React, { useState } from "react";
import DashboardContextObject from "../library/DashboardContextObject";
import DashboardContext from "../library/DashboardContext";

function Dashboard(props) {
  const [dimenTiempo, setDimenTiempo] = useState(props.dimenTiempo);
  const idCliente = props.idCliente;
  const idSubCliente = props.idSubCliente;
  const idPais = props.idPais;
  const idUser = props.idUser;
  const token = props.token;
  const columns = props.columns;

  function getResponse() {
    return new APIDashboard(
      dimenTiempo,
      idCliente,
      idSubCliente,
      idPais,
      idUser,
      `Bearer ${token}`
    );
  }

  function getGraphList() {
    return getResponse().graphList;
  }

  function getCategoryKey() {
    switch (dimenTiempo) {
      case 1:
        return { axisId: "id_mes", axisName: "mes" };
      case 2:
        return { axisId: "id_orden", axisName: "diasemana" };
      case 3:
        return { axisId: "id_orden", axisName: "horas_dia" };
      case 4:
        return { axisId: "id_orden", axisName: "dim_año" };
      case 6:
        return { axisId: "id_orden", axisName: "dim_diames" };
      default:
        return { axisId: "", axisName: "" };
    }
  }

  let context = new DashboardContextObject();
  context.graphList = getGraphList();
  context.categoriesKey = getCategoryKey();
  return (
    <div className="graph-dashboard">
      <div>
        <button onClick={() => setDimenTiempo(1)}>Mes</button>
        <button onClick={() => setDimenTiempo(2)}>Día Semana</button>
        <button onClick={() => setDimenTiempo(3)}>Horas</button>
      </div>
      <br></br>
      <DashboardContext.Provider value={context}>
        {props.children}
      </DashboardContext.Provider>
    </div>
  );
}

export default Dashboard;
