
function identity(){
    var ident = document.getElementById("ident");
    var compte = document.getElementById("compte");
    var a = ident.value.length;
    var b = 25;
    
    compte.value = [a+'/'+b];
    ident.maxLength = 25;
}

// (function validateMdp() {
//     var mdp = document.getElementById("mdp");
//     var security = 0;

//     if (security == 1){
//         mdp.style.borderColor = 'red';
//     } else if (security == 2){
//         mdp.style.borderColor = 'orange';
//     }
// })();

function confirmeMdp() {
    var confmdp = document.getElementById("confmdp");
    
    if (confmdp.value != mdp.value){
        confmdp.style.borderColor = 'red';
    } else{
        confmdp.style.borderColor = 'green';
    }
}

(function validateGender(gen) {
    if ((inscription.gen[0].checked == false) 
    && (inscription.gen[1].checked == false)) {
        
    } else {
        
    }
    return error;
})();

// function validateEmail() {
//     var email = document.getElementById("email");
//     var error = "";
//     var temail = trim(email.value); // value of field with whitespace trimmed off
//     var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
//     var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

//     if (email.value == "") {
//         email.style.borderColor = 'Red';
//         var error = "2";
//     } else if (!emailFilter.test(temail)) { //test email for illegal characters
//         email.style.borderColor = 'Red';
//         var error = "3";
//     } else if (email.value.match(illegalChars)) {
//         email.style.borderColor = 'Red';
//         var error = "4";
//     } else {
//         email.style.borderColor = 'initial';
//     }
//     return error;
// }

//     else if (mdp.value.length >= 5){
//         security ++;
//     }

//     // if (mdp.value.match( /[^a-zA-Z\d]/g)){
//     //     mdp.style.borderColor = 'red';
//     // }
//     //  else if (mdp.value.length >= 5){
//     //     mdp.style.borderColor = 'orange';
//     // } else if (mdp.value.length >= 5 && mdp.value.match(/[0-9]/g)){
//     //     mdp.style.borderColor = 'blue';
//     // } else if (mdp.value.match( /[0-9]/g) && mdp.value.match( /[A-Z]/g) && mdp.value.match( /[^a-zA-Z\d]/g) && mdp.value.length < 5){
//     //     mdp.style.borderColor = 'green';
//     // } else{
//     //     mdp.style.borderColor = 'black';
//     // }

//     // (function lenghMdp(){
    
//     //  else if (mdp.value.length < 5){
        
//     //         intensity += 1;
//     //      }

//     // })();

//     // (function numMdp(){
    
//     //     if (mdp.value.match( /[0-9]/g)){
//     //         intensity += 1;
//     //     }
//     // })();

//     // (function lmajMdp(){
    
//     //     if (mdp.value.match( /[A-Z]/g)){
        
//     //         intensity += 1;
//     //     }
//     // })();

//     // (function speMdp(){
    
//     //     if (mdp.value.match( /[^a-zA-Z\d]/g)){
        
//     //         intensity += 1;
//     //     }
//     // })();
// }

