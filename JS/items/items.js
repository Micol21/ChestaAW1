import { getData,setData,deletData } from "../utils/localstorage.controller.js";


const btnAdd = document.getElementById('btnAdd')
const btnquit = document.getElementById('btnquit')
const btnañadir = document.getElementById('btnañadir')

window.addEventListener('load',()=>{
    //obtener informacion del local storage 
    const items = getData('itemsData')
    console.log(items)
})


btnañadir.addEventListener('click', ()=>{
 //agregar un nuevo elemento 
 const newname = document.getElementById('newName')
 const newDesc = document.getElementById('newDesc')
const newItems = {name:newname, desc: newDesc}

 //obtener los datos del ls
    const items = getData('itemsData')
    
 //agregarlo localmete 
 items.push(newItems)
 
 //setear el ls con el nuevo array
 setData('itemsData',items)
})

btnquit.addEventListener('click', ()=>{
    //encontrar el elemnto
    //modificarlo localmente

    //setear el ls con el nuevo array 
})


btnAdd.addEventListener('click', ()=>{
    
})