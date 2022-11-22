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

        wert1 = document.getElementById('wert1') as HTMLInputElement;
        const text1 = wert1?.value;

        wert2 = document.getElementById('wert2') as HTMLInputElement;

        const text2 = wert2?.value;

        exchange= (document.getElementById("resulat") as HTMLInputElement).value;

        document.getElementById("neu-zeile").innerText = "Exchange rate: " + text2
            + " / "+  text1 + " = " + exchange;

    } )
}

function calculate_table(event){
    event.preventDefault();

    wert1 = document.getElementById('wert1') as HTMLInputElement;
    const text1 = wert1?.value;

    wert2 = document.getElementById('wert2') as HTMLInputElement;
    const text2 = wert2?.value;

        let table : string = '<table id="as-table"> '
            + '<tr class="first-line">'
            + '<td >'+text1+'</td>'
            + '<td>'+ text2+'</td>'
            + '</tr>';

        let i=0;

        while(i < 1000){

            if(i < 10){
                i++;

                wert2 = (exchange * i).toFixed(2);
                table +='<tr class="first-10" >'+ '<td>'+i+'</td>'+'<td>'+wert2
                    +'</td>'+'</tr>' ;
            }
            else if(i < 100){
                i+=10;
                wert2 = (exchange * i).toFixed(2);
                table +='<tr class="first-100" >'+ '<td>'+i+'</td>'+'<td>'+wert2
                    +'</td>'+'</tr>' ;
            }
            else {
                i+=100;
                wert2 = (exchange * i).toFixed(2);
                table +='<tr class="first-1000" >'+ '<td>'+i+'</td>'+'<td>'+wert2
                    +'</td>'+'</tr>' ;

            }
        }
        table += '</table>';
        document.getElementById("table-laden").innerHTML = table;
        document.getElementById('footer').innerText = 'Currency table';


    }



document.addEventListener("DOMContentLoaded", (Event) => {
    start(event);
    swap_currency(event);



    document.getElementById('calculate').addEventListener('click', (event:any)=> {

        calculate_table(event);

    })

})
