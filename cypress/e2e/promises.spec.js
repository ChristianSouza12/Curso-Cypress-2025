

it("Sem testes ainda" , () =>{

})


const getSomething = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {

        

            resolve (13)
            
        }, 1000);

    })
  
}


const system = async () => {
    console.log("Init")

    const some = await getSomething()

   
        console.log(`Something is ${some}`);
    

    

    
    console.log("End")
    
}

system()