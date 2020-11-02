function task2() {
    let str = document.getElementById("str_inp").value;
    // document.getElementById("xor").innerHTML = str;
    let ar = [];
    // // let n = str[0];
    // // while(n--){

    // // }
    let i=0;
    while(i+2<str.length){
        let l = parseInt(str[i]);
        let r =parseInt(str[i+2]);
        // console.log(l);
        // console.log(r);
        // console.log(typeof(r));
        i = i+4;
        // let ans = l;
        for(let j=l+1;j<=r;j++){
            l = l^j;
        }
        if(l%2===0){
            ar.push("Even");
        }
        else{
            ar.push("Odd");
        }
        // console.log(ar);
    }

    let ar_len = ar.length;
    let op = "";
    for(let k=0;k<ar_len;k++){
      op = op +ar[k]+"<br>";  
    //   console.log(op);

    }
    document.getElementById("xor").innerHTML = op;


  }