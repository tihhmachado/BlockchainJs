const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({
    from: 'a',
    to: 'b',
    amount: 1
})

console.log(blockchain);