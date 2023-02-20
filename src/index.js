const init = () => {
    const form =document.querySelector("form");
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const input=document.querySelector('input')
        fetch(` http://localhost:3000/movies/${input.value}`)
        .then((res)=>res.json())
        .then((data)=>renderdata(data))
    })
  
}

function renderdata(data){
    const header=document.querySelector('h4')
    const prag=document.querySelector('p')
    header.innerHTML=`${data.title}`
    prag.innerHTML=`${data.summary}`
}

document.addEventListener('DOMContentLoaded', init);