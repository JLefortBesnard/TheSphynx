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
  var nbreTentative=3;
    var div1Content = getDivContentById("suspect");
  var div2Content = getDivContentById2("arme");
  var div3Content = getDivContentById3("motif");
  // var div4Content = getDivContentById4("lieu");
  sessionStorage.setItem("suspect","bob");
  sessionStorage.setItem("arme","bouteille");
  sessionStorage.setItem("motif","argent");
  // sessionStorage.setItem("lieu","bar");
  var valeurRecuperer1=sessionStorage.getItem('suspect');
  var valeurRecuperer2=sessionStorage.getItem('arme');
  var valeurRecuperer3=sessionStorage.getItem('motif');
  // var valeurRecuperer4=sessionStorage.getItem('lieu');




  if (div1Content == valeurRecuperer1 && div2Content == valeurRecuperer2 && div3Content == valeurRecuperer3) {
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
  
  // JavaScript
const select = document.getElementById("mySelect");

// Récupérer les données JSON
fetch("./dataSphynx.json")
  .then(response => response.json())
  .then(data => {
    // Pour chaque élément dans les données JSON, créer un élément <option> correspondant
    data.forEach(item => {
      const option = document.createElement("option");
      //option.text = item.label;
      option.value = item.value;
      select.add(option);
    });
  });





