//console.log(window.document);

const firstColorElt = document.getElementById('firstcolor');
//console.log(firstColorElt);
const secondColorElt = document.getElementById('secondcolor');

const bodyElt = document.querySelector('body');
// console.log(bodyElt);

firstColorElt.addEventListener('input',function(){
// console.log(firstColorElt.value);
bodyElt.style ="background: linear-gradient(to right  ,"+firstColorElt.value +" , "+ secondColorElt.value+")"
});

secondColorElt.addEventListener('input',function(){
    // console.log(secondColorElt.value);
bodyElt.style =`background: linear-gradient(to right  ,${firstColorElt.value} , ${secondColorElt.value})`
}); 
