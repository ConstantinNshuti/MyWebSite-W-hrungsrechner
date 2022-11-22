let version : string = "04";
let text1 = (document.getElementById('wert1') as HTMLInputElement);
let text2 = (document.getElementById('wert2') as HTMLInputElement);
let backUp;
let myExchangeResult = document.getElementById('neu-zeile') as HTMLElement;
let i:number = 0;
let parent_table = document.getElementById('table-laden') as HTMLElement;
let show_table:boolean = false;
let wert1: string;
let wert2: string;
let exchange: number;

function start(){
    document.getElementById("version").innerText = "Currency Calculator V-" + version;
}

function delete_input(parent: any){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }

}

function swap_currency(){
    exchange =Number((document.getElementById("resulat") as HTMLInputElement).value);
    // @ts-ignore
    wert1 = String(text1.value);
    // @ts-ignore
    wert2 = String(text2.value);

    text1.value = wert1;
    text2.value = wert2;
    if(i === 0){
        myExchangeResult.innerHTML = `<p>Exchange rate ${wert1} /  ${wert2}  =  ${exchange.toFixed(2)}</p>`
        if(show_table){
            delete_input(parent_table);
            show_table=false;
        }
        i=1

    }else if(i===1){
        console.log(i);
        backUp = wert1;
        wert1 = wert2;
        wert2= backUp;

        text1.value = wert1;
        text2.value = wert2;
        myExchangeResult.innerHTML = `<p>Exchange rate ${wert1} /  ${wert2}  =  ${exchange.toFixed(2)}</p>`

        if(show_table){
            delete_input(parent_table);
            show_table=false;
        }

        i=0;
    }


}

function calculate_table(){

    if(!show_table){

        wert1 = (document.getElementById('wert1') as HTMLInputElement).value;
        wert2 = (document.getElementById('wert2') as HTMLInputElement).value;

        let element = document.createElement('div')

        let table = '<table id="as-table"> '
            + '<tr class="first-line">'
            + '<td >'+wert1+'</td>'
            + '<td>'+ wert2+'</td>'
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
        element.innerHTML = table;
        parent_table?.appendChild(element)

        document.getElementById('footer').innerText = 'Currency table';


        show_table=true;
    }

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