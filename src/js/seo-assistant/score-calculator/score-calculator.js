class ScoreCalculator {

    constructor(items, parser = (item) => item) {
        items = items.map(parser);
        let total = Object.values(items).reduce((accumulator, current) => accumulator + (current.total * current.weight) , 0);
        let partial = Object.values(items).reduce((accumulator, current) => accumulator + (current.partial * current.weight) , 0);
        this._score = Math.floor(100 / total * partial);
    }

    get score(){
        return this._score;
    }
}

export default ScoreCalculator;