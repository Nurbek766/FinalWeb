document.getElementById("getResult").addEventListener("click", calculate);

let res1 = document.getElementById("res1")
let res2 = document.getElementById("res2")
let sl1 = document.getElementById("sl1")
let sl2 = document.getElementById("sl2")


function calculate(){	
	// Players part
	
	let team1 = document.getElementById("team1").value;
	let team2 = document.getElementById("team2").value;

	var arr1 = team1.split('\n');
	var arr2 = team2.split('\n');


	if(arr1.length==11){
		console.log('1 team players: ')
		arr1.forEach(element => console.log(element));
	}else{
		console.log("There is not enough/more players in 1st team")
	}

	if(arr2.length==11){
		console.log('2 team players: ')
		arr2.forEach(element => console.log(element));
	}else{
		console.log("There is not enough/more players in 2nd team")
	}	
	
	if(arr1.length==11 && arr2.length ==11){
	
	// Score part

	let score1 = document.getElementById("result1").value;
	let score2 = document.getElementById("result2").value;

	score1 = parseInt(score1);
	score2 = parseInt(score2);

	let result = score1 + score2;
	
	function randomArray(m,n){
		let arr = new Array(m);		
		for(let i=0;i<arr.length;i++){
			arr[i]=0;
		}		
		for (let i = 0; i < n; i++){
			arr[(Math.floor((Math.random() * n) )%m)]++;
		}		
		return arr
	}

	if (result<=7){
		score1arr = randomArray(11, score1)
		score2arr = randomArray(11, score2)

		let scored1 = ''

		for(let i =0; i<11; i++){
			if(score1arr[i] !==0){
				scored1 = scored1 + arr1[i] + ' scored ' + score1arr[i] + ' goals, '
				}
		}

		let scoredd1 = scored1.substring(0, scored1.length - 2)
		let result1 = scoredd1 + "."
		
		let scored2 = ''

		for(let i =0; i<11; i++){
			if(score2arr[i] !==0){
				scored2 = scored2 + arr2[i] + ' scored ' + score2arr[i] + ' goals, '
				}
		}

		let scoredd2 = scored2.substring(0, scored2.length - 2)
		let result2 = scoredd2 + "."		

		if(score1<score2){
			if (result1.length >1){
				sl1.innerHTML = result1
			}else{
				sl1.innerHTML = 'Team 1 not scored.'
			}
			
			if (result2.length >1){
				sl2.innerHTML = result2
			}else{
				sl2.innerHTML = 'Team 2 not scored.'
			}
			
			res1.innerHTML = score1 + " - " + score2			
			res2.innerHTML = 'Team 2 won!'
		}
		
		else if(score1==score2){
			if (result1.length >1){
				sl1.innerHTML = result1
			}else{
				sl1.innerHTML = 'Team 1 not scored.'
			}
			
			if (result2.length >1){
				sl2.innerHTML = result2
			}else{
				sl2.innerHTML = 'Team 2 not scored.'
			}
			
			res1.innerHTML = score1 + " - " + score2
			res2.innerHTML = 'Draw!'
		}
		else{
			if (result1.length >1){
				sl1.innerHTML = result1
			}else{
				sl1.innerHTML = 'Team 1 not scored.'
			}
			
			if (result2.length >1){
				sl2.innerHTML = result2
			}else{
				sl2.innerHTML = 'Team 2 not scored.'
			}
			
			res1.innerHTML = score1 + " - " + score2
			res2.innerHTML = 'Team 1 won!'
		}
	
	}

	else{
		res1.innerHTML="Goals are too many!";
	}
	}else{
		console.log('One of the(both of the) command(-s) do(-es)nt have enough players.')
	}

}
