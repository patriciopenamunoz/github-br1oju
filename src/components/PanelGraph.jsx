import React from 'react';

function PanelGraph(props) {
    return(
        <div className="graph-panel">
            <div>
                <select className="input-sm" style={{padding:"4px 3px", width:"120px"}}>
                    <option>Prueba</option>
                </select>
            </div>
            <div className="graph-inner-panel">
                {props.children}
            </div>
        </div>
    );
}

export default PanelGraph;