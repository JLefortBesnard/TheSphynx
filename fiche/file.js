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
var selectElement = document.getElementById("complice");

// Récupérer la valeur sélectionnée de l'élément select
var selectedValue = selectElement.value;

// Afficher la valeur sélectionnée dans la console
console.log(selectedValue);
return selectedValue;
}

function valider(){
    var div1Content = getDivContentById("suspect");
  var div2Content = getDivContentById2("arme");
  var div3Content = getDivContentById3("complice");
  if (div1Content == "1" && div2Content == "3" && div3Content == "2") {
    console.log("win");
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
      })
  }else{
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
      })
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
  




