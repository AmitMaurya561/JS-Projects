 function arr(first,second){
    let a= first.toLowerCase();
    let b= second.toLowerCase();
    a =a.split("").sort().join("").trim()
    b =b.split("").sort().join("").trim()
    return a===b
 
 }
 console.log(arr("Mother in law","Hitler Woman"));
 