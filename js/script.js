//Commentare la riga qua sotto dopo aver verificato che ci sia l' alert e che quindi sia tutto collegato
//alert("Test di collegamento")
const carica=(mioButton)=> {
    //aggiungo il nome del prodotto
    let nome=document.querySelector("#" + mioButton.id + "Nome").innerText //creo una variabile dove salvo il testo del prodotto

    //aggiungo la quantità del prodotto
    let quantita=document.querySelector("#" + mioButton.id + "Qta").value //creo una variabile dove salvo il valore dela quantità

    //aggiungo un nuovo elemento 
    let nuovoElemento=document.createElement("div") //crea un div <div>Quantità: </div>
    //scrivo nel nuovo elemento
    nuovoElemento.innerText="Quantità: " + quantita + " | Descrizione: " + nome //scrivo nel div (ancora non lo vedo !)
    //inserisco la scritta nel div
    document.querySelector("#carrello").appendChild(nuovoElemento) //inserisco il div nella pagina (prima era solo nella RAM)
}