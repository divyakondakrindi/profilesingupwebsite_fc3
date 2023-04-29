// var Name = document.getElementById("name");
// var Email = document.getElementById("email");
// var Password = document.getElementById("password");
// var cpassword = document.getElementById("confirm");

document.getElementById("btn").addEventListener("click" , checkit);

function checkit(){
    let Name = document.getElementById("name");
    let Email = document.getElementById("email");
    let Password = document.getElementById("password");
    let cpassword = document.getElementById("confirm");
    if(Name.value != "" && Email.value != "" && Password.value != "" && cpassword.value != ""){
            
            document.getElementById("pass").innerHTML = "Successfully Signed Up";
            setInterval(newpage, 1000);
        // newpage();
    }
    else{
        document.getElementById("fail").innerHTML = "Error : All the fields are mandatory";
    }
}

function newpage(){
    location.replace("./profile.html")
   
}

