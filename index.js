function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    let input = document.getElementById("writer").value;
    // Afficher la valeur
    console.log(input);

    let reader = document.getElementById("reader");
    reader.innerHTML = input;
}