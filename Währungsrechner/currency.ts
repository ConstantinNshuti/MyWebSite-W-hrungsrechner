let version : string = "04";
let text1 = (document.getElementById('wert1') as HTMLInputElement);
let text2 = (document.getElementById('wert2') as HTMLInputElement);
let backUp;
let myExchangeResult = document.getElementById('neu-zeile') as HTMLElement
let myExchangeResult1 = document.getElementById('neu-zeile') as HTMLElement;
//let i:number = 1;
let parent_table = document.getElementById('table-laden') as HTMLElement;
//let show_table:boolean = false;
let wert1: string;
let wert2: string;
let exchange: number;

function start(){
    document.getElementById("version").innerText = "Currency Calculator V-" + version;
}


function swap_currency(){


    exchange =Number((document.getElementById("resulat") as HTMLInputElement).value);
    wert1 = (document.getElementById('wert1') as HTMLInputElement).value;
    wert2 = (document.getElementById('wert2') as HTMLInputElement).value;

        backUp = wert1;
        wert1 = wert2;
        wert2= backUp;

       text1.value = wert1;
       text2.value = wert2;


        let x = (1/exchange).toFixed(4);
        //@ts-ignore
        (document.getElementById("resulat") as HTMLInputElement).value = String(x);
         myExchangeResult1.innerHTML = `<p>Exchange rate ${wert1} / ${wert2} = ${(1/exchange).toFixed(4)}</p>`
}

function calculate_table(){

    parent_table.innerHTML = "";

        wert1 = (document.getElementById('wert1') as HTMLInputElement).value;
        wert2 = (document.getElementById('wert2') as HTMLInputElement).value;

        exchange =Number((document.getElementById("resulat") as HTMLInputElement).value);
        myExchangeResult.innerHTML = `<p>Exchange rate ${wert1} / ${wert2} = ${exchange.toFixed(4)}</p>`


        let element = document.createElement('div')


        let table = '<table id="as-table"> '
            + '<tr class="first-line">'
            + '<td >'+wert1+'</td>' + '<td>'+ wert2+'</td>'
            + '</tr>';

        let i=0;

        while(i < 1000){
            if(i < 10){
                i=i+1;

                let jedeZweite: String = 'first-10';
                if ((i % 2) === 0){
                    jedeZweite = 'farbe2zeile';
                }

                let y = (exchange * i).toFixed(4);
                table +=`<tr class= ${jedeZweite} > <td>${i}</td><td>${y}
                    </td></tr>`;

            }
            else if(i < 100){
                i=i+10;
                let jedeZweite1: String = 'first-100';
                if ((i % 20) !== 0){
                    jedeZweite1 = 'farbe20zeile';
                }
                let y = (exchange * i).toFixed(4);
                table +=`<tr class= ${jedeZweite1} > <td>${i}</td><td>${y}
                    </td></tr>`;
            }
            else {
                i+=100;
                let jedeZweite2: String = 'first-1000';
                if ((i % 200) === 0){
                    jedeZweite2 = 'farbe200zeile';
                }
                let y = (exchange * i).toFixed(4);
                table +=`<tr class= ${jedeZweite2} > <td>${i}</td><td>${y}
                    </td></tr>`;

            }
        }
        table += '</table>';
        element.innerHTML = table;
        parent_table?.appendChild(element)

        document.getElementById('footer').innerText = ' Currency table';


}

document.addEventListener("DOMContentLoaded", (Event) => {
    start();
         document.getElementById('swapbutton').addEventListener('click', (event:any)=>{
         event.preventDefault();
         swap_currency()
    })

    document.getElementById('calculate').addEventListener('click', (event:any)=> {
        event.preventDefault();
        calculate_table();
    })

})