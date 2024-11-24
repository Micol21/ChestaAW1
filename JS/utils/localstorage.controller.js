//obtener informacion
export const getData = (key)=>{
const res = JSON.parse(localStorage.getItem(key))

return res ? res : []
}

//setear informacion
export const setData = (key,arr)=>{
    try {
        localStorage.setItem(key,JSON.stringify(arr))
        console.log('Item añadido')
    } catch (error) {
        console.log(error)
    }
    
}

//eliminar informacion
export const deletData = (key)=>{
    
}


  