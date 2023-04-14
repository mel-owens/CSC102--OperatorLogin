function creditCheck(){

    console.log("creditCheck() started"); 
    var firstName; 
    var lastName; 
    var fullName; 
    var badgeNum; 
    var fullNameLength; 
    
    // extracting the first name from the form  
    firstName = document.getElementById("fName").value; 
    console.log("The first name is "  + firstName); 
    
    // extracting the last name from the form 
    lastName = document.getElementById("lName").value;  
    console.log("The last name is " + lastName);  
    
    // building the full name 
    fullName = firstName + " " + lastName; 
    console.log("The full name is " + fullName); 

    //extracting the badge number
    badgeNum = document.getElementById("badgeID").value; 
    console.log("The badge number is " + badgeNum); 

    // finding out the full name length 
    fullNameLength = fullName.length; 
    console.log("The full name length is " + fullNameLength); 

    //input validation 
    if(fullNameLength > 15 || fullNameLength == 1){
        console.log("invalid login, please try again");
        document.getElementById("loginStatus").innerHTML = "invalid login, please try again"; 
    } else if(badgeNum > 555 || badgeNum < 1){
        console.log("invalid badge ID, please try again");
        document.getElementById("loginStatus").innerHTML = "invalid badge ID, please try again";
    }else {
        console.log("Welcome to the UAT Space Page!")
        document.getElementById("loginStatus").innerHTML = "Welcome to the UAT Space Page!";
        alert("Welcome, " + fullName + " to UAT Space!"); 
        location.replace("./uatSpace.html"); 
    }

 }