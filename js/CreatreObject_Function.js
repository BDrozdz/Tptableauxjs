/*let Etudiant = [['Bruno','DROZDZ',48,'DW16', [20,20,20,20,20,20]], 
    ['Mètis','DROZDZ',24,'DW14', [15,15,15,15,15,15]], 
    ['Esthète','DROZDZ',12,'DW12', [10,10,10,10,10,10]]];*/

let Etudiant = [];
Etudiant[0] = ['Bruno','DROZDZ',48,'DW16', [20,20,20,20,20,20]];
Etudiant[1] = ['Mètis','DROZDZ',24,'DW14', [15,15,15,15,15,15]];
Etudiant[2] = ['Esthète','DROZDZ',12,'DW12', [10,10,10,10,10,10]];

let EtudiantCreate = [];

//EtudiantCreate = CreateObject(Etudiant); 

Etudiant.forEach(element => { 
      
    EtudiantCreate[EtudiantCreate.length]=element;

});

EtudiantCreate.forEach(element => console.log(element));



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