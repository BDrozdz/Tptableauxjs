let Maxarsene = ['Bruno','DROZDZ',48,'DW16', [20,20,20,20,20,20]];

Etudiant = CreateObject(Maxarsene); 

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

console.log(Etudiant); 

