let notes = [2,5,3,9,7];
let NotesFilter = [];

NotesFilter = FilterNotes(notes);

if (NotesFilter.length == 0) {
    // console.log(NotesFilter.length);
    alert("Pas de note > 10");
}
else{
    NotesFilter.forEach(elemfilter => {
        console.log(elemfilter)});
    }
function FilterNotes (notes) {
    let OverandEgal10 = [];
     notes.forEach(element => { 
    if (element >=10 ){
        OverandEgal10.push = element;
        console.log(element); /* Debug */
    }  
});
/* console.log(sum); Debug */
return(OverandEgal10);}