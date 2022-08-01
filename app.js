let userName=prompt("Please enter your name ");
let userGender=prompt("Please enter your gender");
let userAge=prompt("Enter your age");
if(userAge<=0){
    alert("your age sould be more than 0");
}
let userConfer=prompt("are you sure that you want to scip te welcoming message?");
if(userConfer=="no"){
if (userGender=="male"){
    alert("welcome Mr"+" "+userName);
}
else if(userGender=="female"){
    alert("welcome Ms"+ " " +userName);
}
else{
    alert("welcome "+userName);
}
}

