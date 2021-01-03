const fs = require('fs')

fs.readFile('readme.txt',(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Asyc data is ' + data.toString())
    }
})

const data = fs.readFileSync('readme.txt')
console.log('Syncs data is ' + data.toString())
console.log('This is the end')