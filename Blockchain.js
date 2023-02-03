const Block = require('./Block');

module.exports = class Blockchain {
    
    constructor() {
        this.chain = [new Block()];
        this.nextIndex = 1;
    }

    getLastHash(){
        return this.chain[this.chain.length -1].hash;
    }

    addBlock(data) {
        const block = new Block(this.nextIndex, data, this.getLastHash());
        this.chain.push(block);
        this.nextIndex++;
    }

}