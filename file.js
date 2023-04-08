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

function getDivContentById4(id){
  // Récupérer l'élément select par son ID
var selectElement = document.getElementById("lieu");

// Récupérer la valeur sélectionnée de l'élément select
var selectedValue = selectElement.value;

// Afficher la valeur sélectionnée dans la console
console.log(selectedValue);
return selectedValue;
}

function valider(){
    var div1Content = getDivContentById("suspect");
  var div2Content = getDivContentById2("arme");
  var div3Content = getDivContentById3("motif");
  var div4Content = getDivContentById4("lieu");
  sessionStorage.setItem("suspect","bob");
  sessionStorage.setItem("arme","bouteille");
  sessionStorage.setItem("motif","argent");
  sessionStorage.setItem("lieu","bar");
  var valeurRecuperer1=sessionStorage.getItem('suspect');
  var valeurRecuperer2=sessionStorage.getItem('arme');
  var valeurRecuperer3=sessionStorage.getItem('motif');
  var valeurRecuperer4=sessionStorage.getItem('lieu');




  if (div1Content == valeurRecuperer1 && div2Content == valeurRecuperer2 && div3Content == valeurRecuperer3&& div4Content==valeurRecuperer4) {
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
  
  ﻿const tabPrenom = [
"ADRIEN",
"AGNES",
"AHMED",
"AIME",
"ALAIN",
"ALBERT",
"ALEXANDRA",
"ALEXANDRE",
"ALEXIS",
"ALFRED",
"ALI",
"ALICE",
"ALINE",
"ALPHONSE",
"AMANDINE",
"AMELIE",
"ANDRE",
"ANDREE",
"ANGELIQUE",
"ANNA",
"ANNE",
"ANNICK",
"ANNIE",
"ANTHONY",
"ANTOINE",
"ANTOINETTE",
"ANTONIO",
"ARLETTE",
"ARMAND",
"ARNAUD",
"ARTHUR",
"AUDREY",
"AUGUSTE",
"AURELIE",
"AURELIEN",
"BAPTISTE",
"BEATRICE",
"BENJAMIN",

"BENOIT",

"BERNADETTE",
"BERNARD",

"BERTRAND",
"BRIGITTE",
"BRUNO",
"CAMILLE",
"CAROLE",

"CAROLINE",
"CATHERINE",
"CECILE",
"CEDRIC",
"CELINE",

"CHANTAL",

"CHARLES",

"CHARLOTTE",
"CHRISTELLE",

"CHRISTIAN",
"CHRISTIANE",
"CHRISTINE",

"CHRISTOPHE",
"CLAIRE",

"CLAUDE",
"CLAUDINE",

"CLEMENT",

"COLETTE",
"CORINNE",

"CYRIL",
"DAMIEN",

"DANIEL",

"DANIELE",
"DANIELLE",

"DAVID",

"DELPHINE",
"DENIS",

"DENISE",
"DIDIER",
"DOMINIQUE",
"EDITH",

"EDMOND",
"EDOUARD",
"ELIANE",
"ELIE",

"ELISABETH",
"ELISE",

"ELODIE",

"EMILE",
"EMILIE",
"EMMANUEL",
"EMMANUELLE",

"ERIC",
"ERNEST",
"ESTELLE",
"ETIENNE",

"EUGENE",
"EVELYNE",
"FABIEN",
"FABIENNE",

"FABRICE",
"FANNY",
"FELIX",

"FERNAND",
"FLORENCE",
"FLORENT",

"FLORIAN",
"FRANCE",
"FRANCINE",
"FRANCIS",

"FRANCK",
"FRANCOIS",

"FRANCOISE",
"FREDERIC",
"FREDERIQUE",

"GABRIEL",
"GABRIELLE",
"GASTON",

"GENEVIEVE",
"GEORGES",

"GEORGETTE",
"GERALDINE",
"GERARD",

"GERMAIN",
"GERMAINE",
"GHISLAINE",

"GILBERT",

"GILLES",
"GINETTE",

"GISELE",

"GREGORY",
"GUILLAUME",
"GUY",

"HELENE",
"HENRI",
"HENRIETTE",

"HERVE",
"HUBERT",
"HUGUES",

"HUGUETTE",
"IRENE",

"ISABELLE",
"JACKY",
"JACQUELINE",

"JACQUES",
"JANINE",

"JEAN",
"JEANINE",

"JEANNE",
"JEANNINE",

"JEREMY",
"JEROME",

"JOCELYNE",
"JOEL",

"JOELLE",
"JONATHAN",
"JOSE",
"JOSEPH",

"JOSETTE",
"JOSIANE",
"JULES",
"JULIE",

"JULIEN",
"JULIETTE",
"KARIM",
"KARINE",

"KEVIN",
"LAETITIA",

"LAURA",

"LAURE",

"LAURENCE",
"LAURENT",
"LEON",
"LILIANE",
"LIONEL",
"LOIC",
"LOUIS",

"LOUISE",
"LUC",
"LUCETTE",
"LUCIE",
"LUCIEN",
"LUCIENNE",

"LUDOVIC",
"LYDIE",
"MADELEINE",
"MAGALI",
"MANUEL",
"MARC",

"MARCEL",
"MARCELLE",
"MARGUERITE",
"MARIA",
"MARIE",
"MARINE",

"MARION",
"MARIUS",
"MARTHE",
"MARTIAL",
"MARTIN",

"MARTINE",
"MARYSE",
"MATHIEU",
"MATHILDE",
"MATTHIEU",

"MAURICE",
"MAX",
"MAXIME",
"MELANIE",
"MICHAEL",

"MICHEL",
"MICHELE",
"MICHELINE",
"MICHELLE",

"MICKAEL",
"MIREILLE",
"MOHAMED",
"MOHAMMED",

"MONIQUE",
"MURIEL",
"MYRIAM",
"NADIA",

"NADINE",

"NATHALIE",
"NELLY",
"NICOLAS",

"NICOLE",
"NOEL",
"NOELLE",
"ODETTE",

"ODILE",
"OLIVIER",
"PASCAL",
"PASCALE",

"PATRICE",
"PATRICIA",
"PATRICK",

"PAUL",

"PAULE",
"PAULETTE",
"PAULINE",
"PHILIPPE",
"PIERRE",

"PIERRETTE",
"RAOUL",
"RAPHAEL",
"RAYMOND",
"RAYMONDE",

"REGINE",
"REGIS",
"REMI",
"REMY",

"RENE",
"RENEE",
"RICHARD",
"ROBERT",

"ROGER",
"ROLAND",
"ROMAIN",
"ROSE",

"SABINE",
"SABRINA",
"SAMUEL",
"SANDRA",

"SANDRINE",
"SARAH",
"SEBASTIEN",
"SERGE",

"SEVERINE",
"SIMON",
"SIMONE",

"SOLANGE",
"SONIA",
"SOPHIE",

"STEPHANE",
"STEPHANIE",
"SUZANNE",

"SYLVAIN",
"SYLVIE",

"THERESE",
"THIERRY",
"THOMAS",

"VALERIE",

"VANESSA",
"VERONIQUE",
"VICTOR",
"VINCENT",

"VIRGINIE",
"WILLIAM",
"XAVIER",
"YANN",

"YANNICK",
"YVES",
"YVETTE",
"YVON",
"YVONNE"
];
const tabNom =[
"ADAM",
"ALBERT",
"ALEXANDRE",
"ALLAIN",
"ALLARD",
"ANDRE",

"ANDRIEU",
"ANTOINE",
"ARNAUD",
"AUBERT",
"AUBRY",
"AUGER",
"BAILLY",

"BARBE",
"BARBIER",
"BARON",
"BARRE",
"BARTHELEMY",
"BAUDRY",
"BAUER",

"BAZIN",
"BECKER",
"BENARD",
"BENOIT",
"BERGER",
"BERNARD",

"BERTHELOT",
"BERTHIER",
"BERTIN",
"BERTRAND",
"BESNARD",
"BESSON",

"BIGOT",
"BLANC",
"BLANCHARD",
"BLANCHET",
"BLIN",

"BLONDEL",
"BLOT",
"BODIN",
"BONNEAU",
"BONNET",

"BONNIN",
"BOUCHER",
"BOUCHET",
"BOULANGER",
"BOURDON",

"BOURGEOIS",
"BOUSQUET",
"BOUTIN",
"BOUVET",

"BOUVIER",
"BOYER",
"BRETON",
"BRIAND",

"BRUN",
"BRUNEAU",
"BRUNEL",
"BRUNET",

"BUISSON",
"CAMUS",
"CARLIER",

"CARON",
"CARPENTIER",
"CARRE",
"CHAMBON",

"CHAPUIS",

"CHARBONNIER",
"CHARLES",

"CHARPENTIER",
"CHARRIER",
"CHARTIER",
"CHAUVEAU",

"CHAUVET",

"CHAUVIN",

"CHEVALIER",
"CHEVALLIER",
"CLEMENT",
"CLERC",
"COHEN",
"COLAS",

"COLIN",
"COLLET",
"COLLIN",
"COMBES",
"CORDIER",
"COSTA",

"COSTE",
"COULON",
"COURTOIS",
"COUSIN",
"COUTURIER",
"CROS",

"DA COSTA",
"DANIEL",
"DA SILVA",
"DAVID",
"DELAGE",

"DELAHAYE",
"DELATTRE",
"DELAUNAY",
"DELMAS",
"DELORME",

"DENIS",
"DESCHAMPS",
"DEVAUX",
"DIALLO",
"DIAZ",

"DIDIER",
"DOS SANTOS",
"DUBOIS",
"DUFOUR",
"DUHAMEL",

"DUMAS",
"DUMONT",
"DUPONT",
"DUPRE",

"DUPUIS",
"DUPUY",
"DURAND",
"DUVAL",

"ETIENNE",
"EVRARD",
"FABRE",

"FAIVRE",
"FAURE",
"FAVRE",
"FERNANDES",

"FERNANDEZ",
"FERRAND",
"FERREIRA",

"FISCHER",
"FLEURY",
"FONTAINE",

"FOUCHER",
"FOURNIER",

"FRANCOIS",
"GAILLARD",
"GARCIA",
"GARNIER",
"GAUDIN",

"GAUTHIER",
"GAUTIER",
"GAY",

"GEORGES",
"GERARD",
"GERMAIN",
"GILBERT",
"GILLES",

"GILLET",
"GIMENEZ",
"GIRARD",
"GIRAUD",
"GODARD",
"GOMES",
"GOMEZ",
"GONCALVES",

"GONZALEZ",
"GRAS",
"GREGOIRE",
"GRENIER",
"GRONDIN",
"GROS",
"GUERIN",
"GUIBERT",

"GUICHARD",
"GUILBERT",
"GUILLAUME",
"GUILLET",
"GUILLON",
"GUILLOT",
"GUILLOU",
"GUY",

"GUYON",
"GUYOT",
"HAMON",
"HARDY",
"HEBERT",
"HENRY",
"HERNANDEZ",

"HERVE",
"HOARAU",
"HOAREAU",
"HUBERT",
"HUET",
"HUMBERT",

"IMBERT",
"JACOB",
"JACQUES",
"JACQUET",
"JACQUOT",
"JEAN",
"JOLY",

"JOSEPH",
"JOUBERT",
"JOURDAN",
"JULIEN",
"KLEIN",

"LABBE",
"LABORDE",
"LACOMBE",
"LACOSTE",
"LACROIX",
"LAFON",

"LAGARDE",
"LAINE",
"LAMBERT",
"LAMY",
"LANGLOIS",

"LAPORTE",
"LAROCHE",
"LAUNAY",
"LAURENT",
"LEBLANC",

"LEBON",
"LEBRETON",
"LEBRUN",
"LECLERC",

"LECLERCQ",
"LECOMTE",
"LECONTE",
"LEDUC",

"LEFEBVRE",
"LEFEVRE",
"LEFORT",
"LE GALL",

"LEGENDRE",
"LEGER",

"LE GOFF",
"LEGRAND",
"LEGROS",
"LEJEUNE",

"LELIEVRE",
"LEMAIRE",
"LEMAITRE",
"LEMOINE",
"LEMONNIER",

"LENOIR",
"LEROUX",

"LE ROUX",
"LEROY",
"LESAGE",
"LEVEQUE",
"LEVY",
"LOISEAU",
"LOMBARD",
"LOPES",

"LOPEZ",
"LOUIS",
"LUCAS",
"MAHE",
"MAILLARD",
"MAILLET",
"MAILLOT",
"MALLET",
"MARCHAL",

"MARCHAND",
"MARECHAL",
"MARIE",
"MARIN",
"MARION",
"MARQUES",
"MARTEL",

"MARTIN",
"MARTINEAU",
"MARTINET",
"MARTINEZ",
"MARTINS",
"MARTY",
"MARY",

"MAS",
"MASSE",
"MASSON",
"MATHIEU",
"MAUREL",
"MAURICE",
"MAURIN",

"MAURY",
"MENARD",
"MERCIER",
"MERLE",
"MEUNIER",
"MEYER",

"MICHAUD",
"MICHEL",
"MILLET",
"MONNIER",
"MOREAU",
"MOREL",

"MORENO",
"MORIN",
"MORVAN",
"MOULIN",
"MULLER",
"NAVARRO",

"NGUYEN",
"NICOLAS",
"NOEL",
"NORMAND",
"OLIVIER",

"OLLIVIER",
"PAGES",
"PARENT",
"PARIS",

"PASCAL",
"PASQUIER",
"PAUL",
"PAYET",
"PELLETIER",

"PELTIER",
"PEREIRA",
"PEREZ",
"PERRET",

"PERRIER",
"PERRIN",
"PERROT",
"PETIT",

"PHILIPPE",
"PICARD",
"PICHON",
"PIERRE",

"PINEAU",
"POIRIER",
"PONCET",

"PONS",
"POTTIER",
"POULAIN",
"PREVOST",
"PUJOL",
"RAYMOND",
"RAYNAUD",

"REGNIER",
"REMY",
"RENARD",
"RENAUD",
"RENAULT",
"REY",

"REYNAUD",
"RICARD",
"RICHARD",
"RIOU",

"RIVIERE",
"ROBERT",
"ROBIN",
"ROCHE",
"ROCHER",
"RODRIGUES",
"RODRIGUEZ",
"ROGER",
"ROLLAND",
"ROQUES",
"ROSSI",

"ROSSIGNOL",
"ROUSSEAU",
"ROUSSEL",
"ROUSSET",
"ROUX",
"ROY",
"ROYER",
"RUIZ",
"SABATIER",
"SALMON",
"SANCHEZ",

"SAUVAGE",
"SCHMITT",
"SCHNEIDER",
"SEGUIN",
"SERRE",
"SIMON",
"TANGUY",
"TESSIER",
"TEXIER",

"THIBAULT",
"THOMAS",
"TORRES",
"TOUSSAINT",
"TRAN",
"TURPIN",
"VAILLANT",
"VALENTIN",
"VALETTE",
"VALLEE",

"VALLET",
"VASSEUR",
"VERDIER",
"VIAL",
"VIDAL",
"VINCENT",
"VOISIN",
"WAGNER",

"WEBER",
"WEISS"
];
const tabArmes = ["hache","couteau de cuisine","bouteille","épée","poing américain","pied de biche","pistolet","fusil","dague","couteau suisse","pelle"];
const tabLieux = ["Café","Bar","Foret","Musee","Salon","Quai","Stade","Route","Villa","Plage"];
const tabMotifs =["Jalousie","Argent","Triangle amoureux","Vengeance personnelle","vengeance d'un proche","accident","métier tueur à gage","personnalité abusive"];

const parsedData = JSON.parse(JSON.stringify(data));
const select = document.createElement('select');
  




