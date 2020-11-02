function task3() {
    let str = document.getElementById("toSort").value;
    
    let i=0;
    let ar = [];
    while(i<str.length){
        let temp = "";
        while(i<str.length && str[i]!=" "){
            temp = temp+str[i];
            i++;
        }
        // console.log(temp);
        ar.push(temp);
        i++;
    }
    ar.sort();

    str = "";
    for(let j=0;j<ar.length;j++){
        str = str+ar[j]+"<br>";
    }
    document.getElementById("sorted").innerHTML = str;

  }