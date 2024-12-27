const {readFile,writeFile}=require('fs');
//this is async
console.log("start")
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            return
        }
        const second=result;
        writeFile('./content/result-async.txt',
            `Here is the nigga ${first} ${second}`,
            {flag:'a'},
            (err,result)=>{
                if(err){
                    return
                }
                console.log('done lil bro')
            }
        )
    })
})
console.log('start new task');