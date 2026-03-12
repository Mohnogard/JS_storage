let task;
let input = prompt("Choose your task number (1-9)");

switch (input){

    case "1":
        var out="";
        let i=0;
        for (let i=0; i<11;i++){
            if (i<10){
                out+=i+"-";
            } else {
                 out+=i;
            }
        }
        alert(`${out}`);
        break;
    
    case "2":
        var out=0;
        for(let i=0; i<=30;i++){
            out+=i;
        }
        alert(out);
        break;


    case "5":
        const alpha = ['A','B','C','D','E'];
        var out=[];
        var empt=[];
        var x = 0;
        var y;
        for (let i=0; i<5 ; i++){
            for (y = 0; y<5 ; y++){
                if(i>=y){
                    out+=(alpha[i]);
                }
                else{
                    out+=(alpha[0]);
                }
            
            }
            out+= "<br>";
            console.log(out);
            var out='';
        }


        case "7":
            var out='';
            arr = ['0','0','0','0','0'];
            var x = 1;
            for (let i=0; i<5; i++){
                for (let j=0; j<5 ; j++){
                    if (j===i){
                        out+=x;
                        arr[i]=x;
                        x++;
                    } else {
                        arr[i]+='0';
                    }
                }
                console.log(arr);
                arr = ['0','0','0','0','0']
                
            }

}


00000
00011
00222
03333
44444



