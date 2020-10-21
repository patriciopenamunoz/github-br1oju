import APIGraphList from "./APIGraphList";

class APIDashboard {
    constructor(dimensionTiempo = 1, idCliente = 1, idSubCliente = 1, idPais = 1, idUser = 1, token = "") {
        this.graphList = null;
        
        token = `Bearer ${token}`;

        let url = 'https://tms.log.solutions/dashBoard';
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            let responseText = JSON.parse(xhr.responseText);
            if (responseText.status)
                this.graphList = new APIGraphList(responseText.jsonData);
        };
        xhr.send(JSON.stringify({
            cualFn: 2,
            jsonData: JSON.stringify({
                fecha: "2020-09-27",
                dimenTiempo: dimensionTiempo,
                idCliente: idCliente,
                idSubCliente: idSubCliente,
                idPais: idPais,
                idUser: idUser,
                token: token
            })
        }));
    }
}

export default APIDashboard;