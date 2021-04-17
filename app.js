let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.com', '.net', '.us', '.io']



for(let x = 0; x < pronoun.length; x++) {
    for(let y = 0; y < adj.length; y++) {
        for (let z = 0; z < noun.length; z++) {
            for(let a = 0; a < extension.length; a++) {
                console.log( `${pronoun[x]}${adj[y]}${noun[z]}${extension[a]}` )
            }
            
        }
    }
}

