let version : string = "04";
let wert1;
let wert2;
let exchange;

function start(event){
    document.getElementById("version").innerText = "Currency Calculator V-" + version;
}

function swap_currency(event){
    document.getElementById('swapbutton').addEventListener('click', (event:any)=>{
        event.preventDefault();

        wert1 =(document.getElementById('wert1') as HTMLInputElement).value;
        //console.log(wert1);

        wert2 = (document.getElementById('wert2') as HTMLInputElement).value;
        //console.log(wert2);
        exchange = wert2/wert1;
        (document.getElementById("resulat") as HTMLInputElement).value = `${(exchange).toFixed(2)}`

        document.getElementById("neu-zeile").innerText = "Exchange rate: " + wert1
            + " / "+  wert2 + " = " + exchange.toFixed(2);

    } )
}



document.addEventListener("DOMContentLoaded", (Event) => {
    start(event);
    swap_currency(event);
    //calculate_table(event);

})