var counter = 0;
function slide(){
    counter++;
    if(counter==1){
    var ss = document.getElementById("kid").src="Images/kid2.jpg";
    }
    else if(counter==2){
        document.getElementById("kid").src="Images/kid3.jpg";
    }
    else if(counter==3){
        document.getElementById("kid").src="Images/kid4.jpg";
    }
    else if(counter==4){
        document.getElementById("kid").src="Images/kid5.jpg";
    }
    else if(counter==5){
        document.getElementById("kid").src="Images/kid6.jpg";
    }
}