import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import ColumnGraph from "./components/ColumnGraph";
import PanelGraph from "./components/PanelGraph";
import Graph from "./components/Graph";

ReactDOM.render(
  <Dashboard
    dimenTiempo={3}
    idCliente={1}
    idSubCliente={1}
    idPais={1}
    idUser={1}
    token="eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiZGVtbyIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2MDIxNjgzOTgsImV4cCI6MTYwMjE2ODk5OH0.uirRYhFDb0Kt6g0T6brRELiyOLEi4z2DKT08udoy0JTR9L7incrkTqwLNUo9jhDc9b0J8IyZc1txpjYh8jEcbw"
  >
    <ColumnGraph>
      <PanelGraph>
        <Graph
          name="REP001"
          type="c-graph-series"
          title="Entregas"
          yTitle="Total"
          serieKey="valor_resultado"
          series={[
            { name: "Entregas Exitosas", alias: "Entregas exitosas" },
            { name: "Entregas Fallidas", alias: "Entregas fallidas" },
            { name: "Entregas Pendientes", alias: "Q clientes" }
          ]}
          typeVars={[{ name: "percent", serieAPIKey: "porcentaje" }]}
        />
      </PanelGraph>
    </ColumnGraph>
    {/* <ColumnGraph>
            <PanelGraph>
                <Graph 
                    name="REP002"
                    type="area"
                    title="Entregas"
                    yTitle="Total"
                    serieKey="valor_resultado"
                    series={["Entregas Exitosas","Entregas Fallidas","Entregas Pendientes"]}
                />
            </PanelGraph>
            <PanelGraph>
                <Graph 
                    name="REP003"
                    type="area"
                    title="Entregas"
                    yTitle="Total"
                    serieKey="valor_resultado"
                    series={["Entregas Exitosas","Entregas Fallidas","Entregas Pendientes"]}
                />
            </PanelGraph>
        </ColumnGraph> */}
  </Dashboard>,
  document.getElementById("root")
);
