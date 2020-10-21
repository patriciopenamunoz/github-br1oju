class APIGraph {
    constructor(data) {
        this.name = data[0].grafico;
        this.data = data;
    }

    getSeries(
        category_key,
        value_key = null,
        series_names_list = [],
        typeVars = []
    ) {
        series_names_list = series_names_list.map(
            (serieName) => new SerieName(serieName)
        );
        let categories = [...new Set(this.data.map((point) => point[category_key]))];
        return {
            categories: categories,
            series: new SerieList(this.data, value_key, series_names_list, typeVars)
        };
    }
}

class Serie {
    constructor(serie_name, data = [], typeVars = []) {
        this.name = serie_name.alias;
        this.data = data;
        this.typeVars = typeVars;
    }

    pushData(value) {
        this.data.push(value);
    }

    replaceLastData(value) {
        if (this.data.length - 1 >= 0)
            return this.data[this.data.length - 1] = value;
    }
}

class SerieList {
    constructor(data, category_key, value_key = null, series_names_list = [], type_vars = []) {
        this.seriesNamesList = series_names_list;
        this.categoryKey = category_key;
        this.valueKey = value_key;
        this.data = data;
        this.typeVars = type_vars;
        this.categories = [...new Set(this.data.map((point) => point[this.categoryKey]))];
        this.serieList = [];

        this.setList();
    }

    getSerie(name) {
        this.serieList.find(serie => serie.name === name);
    }

    pushAll(value) {
        this.serieList.forEach(serie => serie.push(value));
    }

    getList() {
        return this.serieList;
    }

    setList() {
        debugger;
        if (this.value_key) {
            this.serieList = this.seriesNamesList.map((serieName) => new Serie(serieName.alias));
            this.categories.forEach((category) => {
                this.pushAll(0);
                this.data
                    .filter((point) => point[this.categories] === category, this)
                    .forEach((point) => {
                        if (this.seriesNamesList.map((serieName) => serieName.name).includes(point[this.value_key])) {
                            let currentSerie = this.getSerie(point[this.value_key]);
                            currentSerie.replaceLastData(point.total);
                        }
                    }, this);
            });
        } else {
            this.serieList = [new Serie(this.seriesNamesList[0], this.data, this.typeVars)];
        }
    }
}

class SerieName {
    constructor(serie) {
        if (typeof serie === "object") {
            this.name = serie.name;
            this.alias = serie.alias;
        } else {
            this.name = serie;
            this.alias = serie;
        }
    }

    toString() {
        return this.alias;
    }
}

export default APIGraph;
