let Etudiant = [['Bruno','DROZDZ',48,'DW16', [20,20,20,20,20,20]], 
    ['Mètis','DROZDZ',24,'DW14', [15,15,15,15,15,15]], 
    ['Esthète','DROZDZ',12,'DW12', [10,10,10,10,10,10]]];
let EtudiantCreate = [];

//EtudiantCreate = CreateObject(Etudiant); 

Etudiant.forEach(element => { 
      
    EtudiantCreate.push = CreateObject(element);

});

console.log(EtudiantCreate);

function CreateObject(Eleve){
    let eleve ={
        prenom : [Eleve[0]],
        nom : [Eleve[1]],
        age : [Eleve[2]],
        classe : [Eleve[3]],
        notes : [Eleve[4]]
    }    
    return eleve;
}