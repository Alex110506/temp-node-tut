const {readFileSync,writeFileSync}=require('fs')
//this is sync
console.log('START')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
//console.log(first+second)
writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first} ${second}`,
    {flag:"a"} //append
)
console.log('im done lil bro')