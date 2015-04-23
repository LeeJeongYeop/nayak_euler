window.onload = function(){
	var i=3;
	var x=600851475143;

	while(true){
		var flag=0;
		for(j=2; j<i; j++){  //소수값 구하기
			if(i%j==0){ flag=1; break;}
		}

		if(flag==0){
			while(x%i==0){  //구한 소수값이 최대로 나누기
				x=x/i;	
			}
		}
		if(x==1){ // 몫이 1이면 마지막으로 나눈 소수가 최대 소인수
			var max=i;
			break;
		}
		i++;
	}
	document.getElementById("answer_Area").innerHTML=max;
};