function isOdd(){
    const number = prompt("Enter a Number: ");

    if(number % 2 == 0){
        console.log("The number is even");
    }else{
        console.log("The Number is odd");
    }
}
isOdd();