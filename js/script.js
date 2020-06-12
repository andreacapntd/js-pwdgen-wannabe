/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito.
Infine scrivi sulla pagina nomecognomecolorepreferito19
*/

//Chiedere il nome
var name = prompt("Come ti chiami?");

//chiedere il cognome
var lastName = prompt("Qual è il tuo cognome?");


// chiedere il colore preferito
var colour = prompt("Qual è il tuo colore preferito?")

//generatore di password
document.getElementById('password').innerHTML = name+lastName+colour+19;
