//console.log(2)
//izsaucot funkcju, tiks nosutita zina
function sutitZinu() {
    console.log('sutitZinu() darbojas');
    //lai pārbaudītu vai konsolē strādā, uzraksta f-jas nosaukumu
    let zina = document.querySelector('.manaZina');//pieklust laukumam,kur var rakstit zinu
    //mainigaja Zina būs vērtība, kas ierakstīta laukumā
    //value nevajag,jo tad nevar dabut aktualo no laukuma
    let zinas = document.querySelector('.chataZinas');//visas zinas, kas atsauksies uz chataZinas elementu
    zinas.innerHTML = zinas.innerHTML+'<br>'+zina.value; 
    //ar br piepluso jauno zinu
    //tas, kas ir laukumina, ieviet innerHTML
    //div elementam mainis ieksejo html
}
async function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}
//saja bridi izveido ari txt failu
  //pasaka, ka sanemtos datus no servera redzes ka tekstu
//asycn nozime, ka f-ja notiek nesinhronas lietas
//fecth lauj piekluut kadam failam un iesaukt tā saturu ieksā

setInterval(ieladetChataZinas,1000) 
//reizi sekundē izpildīt f-ju ieladetChataZinas()