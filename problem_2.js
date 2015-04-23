window.onload = function(){
	var before = 0;
	var pivo = 1;
	var total = 0;

	while(pivo<=4000000){
		if(pivo==1){
			before = pivo;
			pivo = 2;
		}else{
			pivo=(before+pivo);
			before = pivo-before;
		}
		if(pivo%2==0){
			total+=pivo;
		}
	}

	document.getElementById("answer_Area").innerHTML=total;
};