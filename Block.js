const sha256 = require('crypto-js/sha256');

module.exports = class Block {

    constructor(index = 0, data = 'Genesis block', previousHash) {
        this.index = index;
        this.data = data;
        this.timestamp = new Date();
        this.previousHash = previousHash;
        this.hash = this.generateHash();
    }

    generateHash() {
        return sha256(
            this.index +
            this.previousHash +
            JSON.stringify(this.data) +
            this.timestamp_
        ).toString();
    }

}

