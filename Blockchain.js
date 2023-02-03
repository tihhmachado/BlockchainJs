const Block = require('./Block');

module.exports = class Blockchain {

    constructor() {
        this.chain = [new Block()];
        this.nextIndex = 1;
    }

    getLastHash() {
        return this.chain[this.chain.length - 1].hash;
    }

    addBlock(data) {
        const block = new Block(this.nextIndex, data, this.getLastHash());
        this.chain.push(block);
        this.nextIndex++;
    }

    isValid() {
        for (let i = this.chain.length - 1; i !== 0; i--) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            let isvalidBlock = currentBlock.index === previousBlock.index + 1
                && currentBlock.hash === currentBlock.generateHash()
                && currentBlock.previousHash === previousBlock.hash
                && currentBlock.timestamp > previousBlock.timestamp;
            if (!isvalidBlock) return false;
        }
        return true;
    }

}