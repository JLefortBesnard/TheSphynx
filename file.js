function getDivContentById(id){
    // Récupérer l'élément select par son ID
var selectElement = document.getElementById("suspect");

// Récupérer la valeur sélectionnée de l'élément select
var selectedValue = selectElement.value;

// Afficher la valeur sélectionnée dans la console
console.log(selectedValue);
return selectedValue;
}

function getDivContentById2(id){
    // Récupérer l'élément select par son ID
var selectElement = document.getElementById("arme");

// Récupérer la valeur sélectionnée de l'élément select
var selectedValue = selectElement.value;

// Afficher la valeur sélectionnée dans la console
//console.log(selectedValue);
return selectedValue;
}

function getDivContentById3(id){
    // Récupérer l'élément select par son ID
var selectElement = document.getElementById("motif");

// Récupérer la valeur sélectionnée de l'élément select
var selectedValue = selectElement.value;

// Afficher la valeur sélectionnée dans la console
console.log(selectedValue);
return selectedValue;
}

// function getDivContentById4(id){
//   // Récupérer l'élément select par son ID
// var selectElement = document.getElementById("lieu");

// // Récupérer la valeur sélectionnée de l'élément select
// var selectedValue = selectElement.value;

// // Afficher la valeur sélectionnée dans la console
// console.log(selectedValue);
// return selectedValue;
// }

function valider(){
  // var nbreTentative=3;
    var tueur = document.getElementById("tueur");
    var arme = document.getElementById("arme");
    var motif = document.getElementById("motif");
  // var div4Content = getDivContentById4("lieu");
  // sessionStorage.setItem("tueur","bob");
  // sessionStorage.setItem("arme","bouteille");
  // sessionStorage.setItem("motif","argent");
  // sessionStorage.setItem("lieu","bar");
  var solution= {
    "tueur": sessionStorage.getItem('tueur'),
    "arme": sessionStorage.getItem('arme'),
    "motif": sessionStorage.getItem('motif'),
  };
  console.log(solution);
  console.log(tueur.value);
  console.log(arme.value);
  console.log(motif.value);

  // Checking
  if (tueur.value == solution.tueur && motif.value == solution.motif && arme.value == solution.arme) {
    console.log("win");
    
    sessionStorage.clear();
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Bien joué'
      }),
      setTimeout(function() {
        window.location.href = "winning.html";
      }, 3000);
     
  }else{
    // if(nbreTentative!=0){
      
    // }
    console.log("perdu");
   
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Tu es mort'
      }),
      setTimeout(function() {
        window.location.href = "loosing.html";
      }, 3000);
  }
//   else if(div1Content == "1" && div2Content == "2" && div3Content == "1"){
//     console.log("mort")
//   }
//   else if(div1Content == "1" && div2Content == "1" && div3Content == "1"){
//     console.log("mort")
//   }
//   else if(div1Content == "3" && div2Content == "2" && div3Content == "1"){
//     console.log("mort")
//   }


}

function cloneForm() {
    var form = document.getElementById("myform");
  
    if (form) {
      var clonedForm = form.cloneNode(true);
      document.getElementById("formContainer").appendChild(clonedForm);
    } else {
      console.error("Le formulaire n'existe pas");
    }
  }
  




