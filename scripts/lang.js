//GET IMAGES ID
const eng = document.getElementById("langEng");
const es = document.getElementById("langEs");

//NAVIGATION EVENT
eng.addEventListener('click', ()=>{
    window.location.href='/indexEng.html';
    console.log("click on uk flag");
})

es.addEventListener('click', ()=>{
    window.location.href='/index.html';
    console.log("click on uk flag");
})