let task;
let input = prompt("Choose your task number (1-9)");

switch (input){

    case "1":{
        var out="";
        let i=0;
        for (let i=0; i<11;i++){
            if (i<10){
                out+=i+"-";
            } else {
                 out+=i;
            }
        }
        document.getElementById("result").innerHTML+=out + "<br>";
        break;}

    case "2":{
        var out=0;
        for(let i=0; i<=30;i++){
            out+=i;
        }
        document.getElementById("result").innerHTML+=out + "<br>";
        break;}


    case "3":{
        let out = [];
        for (let i=1; i<=50; i++){
            if(i%2==0){
                out+=(i + " ")
            }
        }
        document.getElementById("result").innerHTML = out + "<br>";
        break;}

    case "4":{
        let out =[];
        for (let i=10; i>0;i--){
            out+=(i + " ")
        }
        document.getElementById("result").innerHTML+=out + "<br>";
    break;}

    case "5":{
        let alpha = ['A','B','C','D','E'];
        let beta = ['A','A','A','A','A'];
        let out = [];
        let x = 4;
        let cons1 = ""
        let cons2 = ""
        for (let i=0; i<5; i++){
            cons1 = ""
            out=beta;
            for (let j=0; j<=i; j++){
                out[x]=alpha[i];
                x-=1;
            }
            x=4;
            for (let y in out){
                cons1+=(out[y] + " ")
            }
            cons2+=(cons1 + "<br>")
            
        }document.getElementById("result").innerHTML+=cons2 + "<br>";
    break;}


    case "6":{
        let alpha = [1,2,3,4,5];
        let beta = [1,1,1,1,1];
        let out = [];
        let x = 4;
        for (let i=0; i<5; i++){
            out=beta;
            for (let j=0; j<=i; j++){
                out[x]=alpha[i];
                x-=1;
            }
            
            x=4;
            document.getElementById("result").innerHTML += out + "<br>";
        }
    break;}

    case "7":{ 
        let beta = []
        for (let i=1; i<=5; i++){
            beta = []
            for (let j=1; j<=5; j++){
                if (i==j){
                    beta.push(i);
                }
                else{
                    beta.push(0)
                }
            }
            beta = beta.join('')
            document.getElementById("result").innerHTML+=beta + "<br>";
        }

    break;}

    case "8":{
        let x = 5;
        let out = 1;
        for (let i=x; i>0; i--){
            out*=i;
        }
        document.getElementById("result").innerHTML+=out + "<br>";
    break;}

case "9":{
    var range = 10;
    var out = [0, 1];
    let res=["0 1 "]
    for (let i = 2; i < range; i++){
        out[i] = out[i-1] + out[i-2];
        res+=(out[i]+" ")
    }
    document.getElementById("result").innerHTML+=res + "<br>";
    break;}

case "10":{
    var orange="Orange Coding School";
    var letter = '';
    var count=0;
    for(let i=0; i<orange.length; i++){
        letter=orange[i];
        if(letter=="C" || letter=='c'){
            count+=1;
        }
    }
    document.getElementById("result").innerHTML+=count + "<br>";
    break;}

case '11':{
    var mul1 = [];
    var mul2 = [];
    for (let i=1; i<=5; i++){
        for (let j=1; j<=5; j++){
            document.getElementById("result").innerHTML += i + " * " + j + " = " + (i*j) + "  ";
        }
        document.getElementById("result").innerHTML+="<br>";

    }
    break;}

case '12':{
    var mult1 = [];
    var x=1;
    for (let i=1; i<6; i++){
        for (let j=0; j<i; j++){
        document.getElementById("result").innerHTML+=x + "  ";
        x+=1;
    }
    document.getElementById("result").innerHTML+="<br>";
    }
    break;}
case "13":{
    for (let i=1; i<=100; i++){
        if(i%7==0){
            document.getElementById("result").innerHTML+=i + "   ";
        }
    }
    break;}
case "14":{
    var sum = 0;
    for (let i=0; i<=100; i++){
        if(i%2!=0){
            sum+=i;
        }
    }
    document.getElementById("result").innerHTML+=sum;
    break;}
case "15":{
    for (let i =1; i<=10; i++){
        document.getElementById("result").innerHTML+=i**2 + "   ";
    }
    break;}
case "16":{
    for (let i=1; i<=30; i++){
        if(i%3==0 && i%5==0){
            document.getElementById("result").innerHTML+=" FizzBuzz ";
        } else if (i%3==0){
            document.getElementById("result").innerHTML+=" Fizz ";
        } else if (i%5==0){
            document.getElementById("result").innerHTML+=" Buzz ";
        } else {
            document.getElementById("result").innerHTML+=i + " ";
        }
    }
    break;}
case "17":{
    var mult1 = [];
    var x="*";
    for (let i=1; i<6; i++){
        for (let j=0; j<i; j++){
        document.getElementById("result").innerHTML+=x + "  ";
    }
    document.getElementById("result").innerHTML+="<br>";
    }
    break;}
case "18":{
    var mult1 = [];
    var x="*";
    for (let i=6; i>0; i--){
        for (let j=0; j<i; j++){
        document.getElementById("result").innerHTML+=x + "  ";
    }
    document.getElementById("result").innerHTML+="<br>";
    }
    break;}
case "19":{
    var mult1 = [];
    var x=1;
    for (let i=1; i<6; i++){
        for (let j=1; j<=i; j++){
        document.getElementById("result").innerHTML+=j + "  ";

    }
    document.getElementById("result").innerHTML+="<br>";
    }
    break;}
case "20":{
    var mult1 = [];
    var x=1;
    for (let i=1; i<6; i++){
        for (let j=1; j<=i; j++){
        document.getElementById("result").innerHTML+=i + "  ";

    }
    document.getElementById("result").innerHTML+="<br>";
    }
    break;}




case "21":{
    for(let i=0; i<=200; i++){
    var digits = String(i).split(""); 
        var sum = 0;
        for(let j =0; j<digits.length; j++){
            sum+=Number(digits[j]);
        }
        if(sum/5==1){document.getElementById("result").innerHTML+=i + "<br>";}
        }
    break;}


// =========== Using no split ==========
case "21a":{
console.log("starting")
    for(let i=0; i<=200; i++){
let sum = 0;
console.log("Working with:" + i)
    for (let x of String(i)){
        sum+=Number(x);
        console.log(x)
    }
    if ((sum)==5){
        document.getElementById("result").innerHTML+=i + "<br>";
    }
}
break;}




case "22":{
    var st = "";
    for(let i=0; i<100; i++){
        var digits = String(i).split(""); 
        x=digits[0];
        for(let j of digits){
            if (x>j && j!=0){
                document.getElementById("result").innerHTML+=i + "<br>";
            }
        }
    }
    break;}

    
// =========== Using no split ==========
case "22a":{
    let first = "";
    let start = 0;
    for(let i=0; i<100; i++){
        let comp = 0;
        for(let j of String(i)){
            if (start==0){
                first=j;
                start+=1;
            }
            comp=j
            }
            console.log(j)
        if (first>comp && comp!=0){
        document.getElementById("result").innerHTML+=i + "<br>";
        }
        first = 0;
        start = 0;
    }
    break;}




case "23":{
    var x=0;
    for(let i=0; i<100; i++){
        var digits = String(i).split("");
        x = digits[0];
       if(digits.length>1){
        for(var j of digits){
            if (x==j){
                y=i;
                x=j;
            } else if (x!=j){
                y=0;
                break;
            }
        }
        if (y>0){
            document.getElementById("result").innerHTML+=i + "<br>";
        }}
    }
    break;}


    
// =========== Using no split ==========
case "23a":{
    for(let i=0; i<100; i++){
    let check = 0;
    let start = 0;
    let old = 0;
            for(let j of String(i)){
            if (start==0){
                old=j;
                start+=1;
            } 
            if (old == j){
                check=1
            } else {
                check=0
                break
            }
            }
        if (check==1){
        document.getElementById("result").innerHTML+=i + "<br>";
        }
    }
    break;}





case "24":{
    let mul=1;
    for(let i=0; i<=300; i++){
        var digits = String(i).split("");
        mul=1;
       if(digits.length>1){
        for(var j of digits){
            mul*=j;
        }
        if (i%mul==0){
            document.getElementById("result").innerHTML+=i + "<br>";
        }}
    }
    break;}

        
// =========== Using no split ==========
case "24a":{
    let mul=1;
    for(let i=0; i<=300; i++){
        mul=1;

        for(var j of String(i)){
            mul*=j;
        }
        if (i%mul==0){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
    }
    break;}



case "25":{
    var mul=1;
    var sum=0;
    for(let i=0; i<=100; i++){
        var digits = String(i).split("");
        mul=1;
        sum=0;
       if(digits.length>1){
        for(var j of digits){
            mul*=j;
            sum+=Number(j);
        }
        if (mul==sum){
            document.getElementById("result").innerHTML+=i + "<br>";
        }}
    }
    break;}

        
// =========== Using no split ==========
case "25a":{
    for(let i=0; i<=50; i++){
        let mul=1;
        let sum=0;
        for(var j of String(i)){
            mul*=Number(j);
            sum+=Number(j)
        }
        if (mul==sum){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
    }
    break;}





case "26":{
    var mul=1;
    var sum=0;
    var rev=[];
    var sum1=[];
    var sum2=[];
    
    for(let i=0; i<=400; i++){
        let digits = String(i).split("");
        let rev = [...digits].reverse();
        let revnum = rev.join('')
       if(digits.length>1){
        if(revnum%3==0 && i%3==0){
        
            document.getElementById("result").innerHTML+=i + "<br>";
        
    }}}
    break;}   


    
case "27":{
    var sub=0;
    for(let i=0; i<=200; i++){
        var digits = String(i).split("");
        sub = digits[0];
        var skip = 0;
       if(digits.length>1){
        for(var j of digits){
            if (skip==0){
                skip+=1;
                continue
            }
            else {sub-=j;
            
        }}
        if (sub==2 || sub==-2 ){
            document.getElementById("result").innerHTML+=i + "<br>";
        }}
    }
    break;}
case "28":{
    for(let i=0; i<=500; i++){
        var digits = String(i).split("");
        old=digits[0];
        var skip=0;
       if(digits.length>1){
        for(var j of digits){
            if (skip==0){
                skip+=1;
                continue;
            }
            if ((j-old)==1){
                old = j;
            } else {
                old=0;
                break;
            }   
        }
        if (old!=0){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
        
       }
    }
    break;}
case "29":{
    for(let i=0; i<=500; i++){
        var digits = String(i).split("");
        old=digits[0];
        var skip=0;
       if(digits.length>1){
        for(var j of digits){
            if (skip==0){
                skip+=1;
                continue;
            }
            if ((old-j)==1){
                old = j;
            } else {
                old=0;
                break;
            }   
        }
        if (old!=0){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
        
       }
    }
    break;}

case "30": {
    for(let i=0; i<=300; i++){
        var digits = String(i).split("");
        var sum=0;
        var skip=digits.length;
        var comp=0;
       if(digits.length>1){

        for(var j of digits){
        if (skip>1){
            sum+=Number(j)
            skip-=1
        } else {
            comp = j
        }
        if (sum==j){document.getElementById("result").innerHTML+=i + "<br>";
        }
        
        }
    }
    break;}}

case "31":{
    for(let i=0; i<=200; i++){
        var digits = String(i).split("");
        var sum = 0;
        var skip=0;
       if(digits.length>1){
        for(var j of digits){
            sum+=Number(j);
       }
       if (sum>10){
        document.getElementById("result").innerHTML+=i + "<br>";
       }
    }}
    break;}

case "32": {
        for(let i=0; i<=200; i++){
        var digits = String(i).split("");
        var sum = 0;
        var skip=0;
       if(digits.length>1){
        for(var j of digits){
            sum+=Number(j);
       }
       if (isPrime(sum)){
        document.getElementById("result").innerHTML+=i + " is prime" + "<br>";
       }
    }}
    break;}



case "33":{
        for(let i=0; i<=200; i++){
        var digits = String(i).split("");
        var skip=0;
       if(digits.length>1){
        for(var j of digits){ //1231   1
            sum=0;
            for (var x of digits){ //1231
                if (x==j){
                    sum+=1;
                } 
                if (sum>=2){
                    document.getElementById("result").innerHTML+=i + "<br>";
                    break;
                }
            } if (sum=2){break;}
            }}}
    break;}

case "34":{
    var mul=1;

    var rev='';
    for(let i=0; i<=200; i++){
        var sum1=[];
        var sum2=[];
        let digits = String(i).split("");
        let rev = [...digits].reverse();
       if(digits.length>1){

        for (let j=0;j<digits.length;j++){
            sum1+=(digits[j]);
            sum2+=(rev[j]);
        }
        if (Number(sum1)<Number(sum2))
            document.getElementById("result").innerHTML+=sum1 +" > "+sum2 + "<br>";
        }
    }
    break;}

case"35":{

    for(let i=0; i<=200; i++){
        var mul=1;
    var digits = String(i).split(""); 
    var sum = 0;
    if(digits.length>1){

        for(var x of digits){
            mul*=Number(x);
        }
        if(mul%5==0 && mul!=0){
            document.getElementById("result").innerHTML+=i + "<br>";}
        
    
    }}
    break;}

case"36":{

    for(let i=0; i<=300; i++){
        var mul=1;
    var digits = String(i).split(""); 
    var sum = 0;
    var count = 0;
    if(digits.length>1){

        for(var x of digits){
            sum+=Number(x);
            count+=1;
        }
        if((count*5)==sum){
            document.getElementById("result").innerHTML+=i + "<br>";}
        
    
    }}
    break;}
case"37":{

    for(let i=0; i<=500; i++){
        var sum="";
        let digits = String(i).split("");
        var rev = [...digits].reverse();
        var revnum = rev.join('') 
        if(Number(revnum)%2==0){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
    }
    break;}

case"38":{

    for(let i=0; i<=500; i++){
        var sum="";
        let digits = String(i).split("");
        let skip = 0;
        let comp=0;
        let compto=0;
        for (var j of digits){
            if (skip!=0){
                comp = j;
            } else if (skip==0){
                compto=j
            }
            skip+=1;
        }
        if((comp*comp)==(compto)){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
    }
    break;}

case"39":{

    for(let i=0; i<=300; i++){
        var mul=1;
    var digits = String(i).split(""); 
    var sum = 0;
    var count = 0;
    if(digits.length>1){

        for(var x of digits){
            sum+=Number(x);
            count+=1;
        }
        if(sum%count==0){
            document.getElementById("result").innerHTML+=i + "<br>";}
        
    
    }}
    break;}

case"40":{

    for(let i=0; i<=300; i++){
        var mul=1;
    var digits = String(i).split(""); 
    var sum = 0;
    var count = 0;
    if(digits.length>1){

        for(var x of digits){
            sum+=Number(x);
        }
        if(sum==15){
            document.getElementById("result").innerHTML+=i + "<br>";}
        
    
    }}
    break;}

case "41":{

    for(let i=0; i<=1000; i++){
        var mul=1;
    var digits = String(i).split(""); 
    var sum = 0;
    var mul = 1;
    if(digits.length>1){

        for(var x of digits){
            sum+=Number(x);
            mul*=Number(x);
        }
        if(sum==mul){
            document.getElementById("result").innerHTML+=i + "<br>";}
        
    
    }}
    break;}

case "42":{


    for(let i=0; i<=1000; i++){
        var mul=1;
    let digits = String(i).split("");
        var rev = [...digits].reverse();
        var revnum = rev.join('') 
    if(digits.length>1){
        if (revnum==(i+9)){
            document.getElementById("result").innerHTML+=i + "<br>";
        }}}
    break;}

case "43": {

    for(let i=0; i<=100; i++){
    var comp = i*i
    comp = String(comp) 
        if (comp.endsWith(String(i))){
         document.getElementById("result").innerHTML+=i + "<br>";   
        }

    }
    break;}

case "44":{

    for(let i=0; i<=1000; i++){
    let digits = String(i).split("");
        var rev = [...digits].reverse();
        var revnum = rev.join('') 
    if(digits.length>1){
        var test = i-Number(revnum)
        if (test%9==0 && test!=0){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
    }
}
    break;}


case "45": // TBD

    break;




case "46":{

    for(let i=0; i<=1000; i++){
        var sum=0;
        let digits = String(i).split("");
        for (var j of digits){
            sum+=Number(j);
        }
        if((sum*sum)==(i)){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
    }
    break;}



case "47":{

    for(let i=0; i<=1000; i++){
        var sum=0;
        let digits = String(i).split("");
        for (var j of digits){
            sum+=Number(j*j*j);
        }
        if((sum)==(i)){
            document.getElementById("result").innerHTML+=i + "<br>";
        }
    }
    break;}



case "48":{
        for(let i=0; i<=200; i++){
        const digits = String(i).split("");
        const sum = 0;
       if(digits.length>1){
        let check = isPrime(i);
       if (check){
        document.getElementById("result").innerHTML+=i + "<br>";
       }
       check=0;
    }}
    break;}


case "49":{
    let mul=1;
    var sum=0;
    for(let i=0; i<=1000; i++){
        var digits = String(i).split("");
        mul=1;
        sum=0;
       if(digits.length>1){
        for(var j of digits){
            mul*=j;
            sum+=Number(j);
        }
        if (mul==(sum*sum)){
            document.getElementById("result").innerHTML+=i + "<br>";
        }}
    }
    break;}



case "50":{

        for(let i=0; i<=1000; i++){
        let digits = String(i).split("");
        var rev = [...digits].reverse();
        var revnum = rev.join('')
        var check = 0;
        var test = revnum*i
        let test1 = String(test).split("");
        var comp = test1[0]
        var skip = test1.length;
        if(digits.length>1){
        for (var j of test1){
            if (skip==1){
                if (Number(j)==1)
                    check=1;
                break;
            } else {
                skip-=1
            }
        }
       if (check==1){
        document.getElementById("result").innerHTML+=i + "<br>";
       }
    }}
    break;}




}
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    // eliminate multiples of 2 and 3
    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}