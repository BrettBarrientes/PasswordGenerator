const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",
    ";","<",">",".","?","/"];

passwordButtonEl = document.getElementById("button");
outputEl = document.getElementById("Output");
outputEl2 = document.getElementById("Output2");


button.addEventListener("click", function() {
    passwordlength = 16;
    password = "";
    password2 = "";
    for (var i = 0; i <= passwordlength; i++){
        let randomPassword = characters[Math.floor(Math.random() * characters.length)];
        let randomPassword2 = characters[Math.floor(Math.random() * characters.length)];
        password += randomPassword;
        password2 += randomPassword2;
    }
    document.getElementById("Output").innerHTML = password
    document.getElementById("Output2").innerHTML= password2
})




