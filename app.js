var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var extension = ['.com','.io', '.eu', '.me'];

for(let x = 0; x < pronoun.length; x++) {
    for(let y = 0; y < adj.length; y++) {
        for(let z = 0; z < noun.length; z++) {
            for(let i = 0; i < extension.length; i++){
                 console.log(`${pronoun[x]}${adj[y]}${noun[z]}${extension[i]}`)
            }
        }
    }
}
