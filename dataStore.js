const fs = require('fs')

function append(data){

    let currData = null;
    // read
    let fileData = fs.readFileSync('./data.json', 'utf8')
    currData = JSON.parse(fileData)

    // Stringified
    if(currData !== null){
        let todoJSON = JSON.stringify([...currData, data], null, 2)

        fs.writeFile('./data.json', todoJSON, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Successfully updated file")
            }
        })
    } 
    else{
        let todoJSON = JSON.stringify([data], null, 2)

        fs.writeFile('./data.json', todoJSON, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Successfully created file")
            }
        })
    }
}

function fetch(){
    let data = fs.readFileSync('./data.json', "utf-8")
    return data
}

module.exports = {
    append,
    fetch
}