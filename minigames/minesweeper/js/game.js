var Tadj = [];
var T = [];
var mines = 9;
size = 8;
tableCreate();
var tbl;
var stop = false;

function tableCreate() {
    initTables();
    var i=0;
    while(i!=mines){
    	var x = Math.floor(Math.random() * size);
    	var y = Math.floor(Math.random() * size);
    	if(Tadj[x][y]!=-1){		
    		Tadj[x][y]=-1;		
    		i++;				
    	}
    }
    calculerAdjacent();
    //body reference 
    var body = document.getElementsByTagName("body")[0];
    // create elements <table> and a <tbody>
    tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // cells creation
    for (var j = 0; j < size; j++) {
        // table row creation
        var row = document.createElement("tr");
        row.id = j;
        
        for (var i = 0; i < size; i++) {
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var cell = document.createElement("td");
            var cellSvg = document.createElement("img");
            cellSvg.src = "./img/Minesweeper_unopened_square.svg";
            
            cell.id = "cell-" + row.id + i;
            cellSvg.addEventListener("mousedown", (e) => {clickTbl((e.target || e.srcElement));});
            
            cell.appendChild(cellSvg);
            row.appendChild(cell);
        }
  
        //row added to end of table body
        tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
}

function initTables(){
    for(var i=0;i<size;i++){
        T.push([]);
        Tadj.push([]);
	    for(var j=0;j<size;j++){
            T[i][j] = 0;
            Tadj[i][j] = 0;
        }
    }
}

function calculerAdjacent(){
    for(var i=0;i<Tadj.length;i++){
    	for(var j=0;j<Tadj[i].length;j++){
    		if(Tadj[i][j]==-1){									
    			for(var k=i-1;k<=i+1;k++){						
    				for(var l=j-1;l<=j+1;l++){
    					if(caseCorrecte(k,l)==true && Tadj[k][l]!=-1){
    						Tadj[k][l]++;
    					}
    				}
    			}
    		}
		}
	}
}

function caseCorrecte(i, j){
	var k=Tadj.length;
	var l=Tadj[0].length;
	if (i<k && i>=0 && j<l && j>=0){							
		return true;											
	}
	return false;
}

function reveler(x,y){
    if(Tadj[x][y] === -1){
        T[x][y] = 1;
        document.getElementById("cell-" + x + y).children[0].src = "./img/Minesweeper_-1_first.svg";
        showMines();
        stop = true;
        setTimeout(function() {
            location.reload();
        }, 2000);
    
    }
    else{
        document.getElementById("cell-" + x + y).children[0].src = getAddrToSvg(Tadj[x][y]);
        T[x][y] = 1;
        if(Tadj[x][y]===0){
            for(var i = x-1;i<=x+1;i++){
                for(var j = y-1;j<=y+1;j++){			
	                if(caseCorrecte(i,j) && T[i][j]==0){
	    	            if(Tadj[i][j]>=1){				
	    		            T[i][j]=1;
                            document.getElementById("cell-" + i + j).children[0].src = getAddrToSvg(Tadj[i][j]);
	    	            }
	    	            else if(Tadj[i][j]==0){			
	    		            reveler(i,j);
	    	            }
	                }
                }
            }
        }
    }
}

function showMines(){
    for(var i = 0;i<size;i++){
        for(var j = 0;j<size;j++){			
	        if(caseCorrecte(i,j) && T[i][j] == 0 && Tadj[i][j]==-1){
                T[i][j] = 1;
                document.getElementById("cell-" + i + j).children[0].src = getAddrToSvg(Tadj[i][j]);
            }
        }
    }
}

function getAddrToSvg(num){
    var path = "./img/Minesweeper_"
    switch (num) {
        case -1 : return path + "-1.svg";
        case 0 : return path + "0.svg";
        case 1 : return path + "1.svg"
        case 2 : return path + "2.svg"
        case 3 : return path + "3.svg"
        case 4 : return path + "4.svg"
        case 5 : return path + "5.svg"
        case 6 : return path + "6.svg"
        case 7 : return path + "7.svg"
        case 8 : return path + "8.svg"
        default:
            console.log('ERROR');
            break;
    }   
}

function verifGagne(){
    var finish = true;
  	for(var i=0;i<T.length;i++){
  		for(var j=0;j<T[i].length;j++){
  			if((T[i][j]==0 || T[i][j]==2) && Tadj[i][j]!=-1){	
  			    finish = false;									
  			}
  		}
  	}
  	if(finish === true){
        var s = sessionStorage.getItem('arme');
        if(!alert("Tu as gagné!\nVoici l'indice:" + s)){
            window.location.href = '../../PageAcceuil.html';
        }
    }												
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function clickTbl(square) {
    if(!stop){
        var x = square.parentNode.parentNode.id;
        var y = square.parentNode.id.substring(6);
        if(T[x][y] == 0){
            reveler(x,y);
            verifGagne();
        }
    }
}