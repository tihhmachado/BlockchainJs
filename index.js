const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({
    from: 'a',
    to: 'b',
    amount: 1
})

console.log(blockchain);

//simulate adulteration on chain
//blockchain.chain[1].data = {from: 'c', to:'d', amount: 10};
console.log('The chain is ' + (blockchain.isValid() ? 'valid' : 'invalid'));

