import data from "../../data/data.json"

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}


export const pedirItemPorId =(id) =>{
    return new Promise((resolve,reject)=> {

        const item = data.find((el)=> el.id === id);

        if(item) {
            resolve(item)
        }else{
            reject({
                error: "No se encontro el Producto"
            })
        }

    }) 
}




export default pedirProductos;
