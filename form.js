
var security = 0 ;

function identity(){
    var ident = document.getElementById("ident");
    var compte = document.getElementById("compte");
    var a = ident.value.length;
    var b = 25;
    
    if (ident.value.length > 25){
        a = 25;
    }
    compte.value = [a+'/'+b];
}

function confirmeMdp() {
    var confmdp = document.getElementById("confmdp");
    var mdp = document.getElementById("mdp");
    
    if (confmdp.value !== mdp.value){
        console.log(confmdp.value)
        console.log(mdp.value)
        confmdp.style.borderColor = 'red';
    } else{
        confmdp.style.borderColor = 'green';
    }
}

function validateGender(gen) {
    if ((inscription.gen[0].checked == false) 
    && (inscription.gen[1].checked == false)) {
        
    } else {
        
    }
    return error;
}

 function Submit(){ 
 
     if (ident.value == "")                                  
     { 
         alert("Mettez votre nom."); 
         name.focus(); 
         return false; 
     }      
     if (email.value == "")                                   
     { 
         alert("Mettez une adresse email valide."); 
         email.focus(); 
         return false; 
     }    
    //  if (email.value.indexOf("@", 0) < 0)                 
    //  { 
    //      alert("Mettez une adresse email valide."); 
    //      email.focus(); 
    //      return false; 
    //  }    
    //  if (email.value.indexOf(".", 0) < 0)                 
    //  { 
    //      alert("Mettez une adresse email valide."); 
    //      email.focus(); 
    //      return false; 
    //  } 
     if (mdp.value == "")                        
     { 
         alert("Saisissez votre mot de passe"); 
         mdp.focus(); 
         return false; 
     }
     if (confmdp.value !== mdp.value)                        
     { 
         alert("Confirmer votre mot passe"); 
         confmdp.focus(); 
         return false; 
     } 
     if (confmdp.value == "")                        
     { 
         alert("Confirmer votre mot passe"); 
         confmdp.focus(); 
         return false; 
     }
 }
 

 function isGood(mdp) {
    var password_strength = document.getElementById("password-text");

    //TextBox left blank.
    if (mdp.length == 0) {
      password_strength.innerHTML = "";
      return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.
    regex.push("^[a-zA-Z0-9$@$!%*#?&]{5,}$"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(mdp)) {
        passed++;
      }
    }

    //Display status.
    var strength = "";
    switch (passed) {
      case 0:
      case 1:
        strength = " <div class='mdpc bg-bigdanger' style='width: 20%'></div>";
       
        break;
      case 2:
        strength = "<div class='mdpc bg-danger' style='width: 40%'></div>";
        break;
      case 3:
        strength = "<div class='mdpc bg-warning' style='width: 60%'></div>";
        break;
      case 4:
        strength = "<div class='mdpc bg-success' style='width: 80%'></div>";
        break;
        case 5:
        strength = "<div class='mdpc bg-successfull' style='width: 100%'></div>";
        break;

    }
    password_strength.innerHTML = strength;

  }