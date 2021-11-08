let notes = [12,5,3,19,17]
let average = 0;

average = Average(notes);

alert(`La moyenne est de :  ${average}`);
function Average (notes) {
    let sum = 0;
    notes.forEach(element => { 
    /* console.log(element); Debug */   
    sum += element;    
});
/* console.log(sum); Debug */
return(sum / notes.length);}