const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(response);


const apiworkout = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()*10)
    console.log(number);
    
    if (number<2) {
        resolve('Operation Success')
    }
    else{
        reject('Operation Failed')
    }
})

apiworkout
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

async function workout() {
    try{
    const result = await apiworkout
    console.log(result);}
    catch(error){
        console.log(error);
        
    }
}

workout()