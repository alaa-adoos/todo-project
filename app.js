function userWelcome(){
let userName=prompt("Please enter your name ");
let userGender=prompt("Please enter your gender");

for(let i=0;;){
    var userAge =prompt("Enter your age");
    if(userAge>0)
    break;
    else
    alert("your age must be more than 0");
}

let userConfirm=confirm("are you want to skip welcoming message?");
if(userGender=="male"){
    alert("welcome Mr "+userName);
}
else if(userGender=="female"){
    alert("welcome Ms "+userName);
}
else
alert("welcom "+userName);
}
userWelcome();

function userServes(){
    const arr=[]
    var Ok=prompt("are you ok ?");
    if(Ok=="yes"||Ok=="no"){
        arr.push(Ok)
    }
    else{
        arr.push("invalid");
    }
    var boring=prompt("are you feel boring ?");
    if(boring=="yes"||boring=="no"){
        arr.push(boring)
    }
    else{
        arr.push("invalid");
    }
    var watch=prompt("are you watching The walking dead ?");
    if(watch=="yes"||watch=="no"){
        arr.push(watch)
    }
    else{
        arr.push("invalid");
    }
 for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
 }
}
userServes();