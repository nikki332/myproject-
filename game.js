
		var canvas=document.getElementById("canvas");		
		var ctx=canvas.getContext("2d");
		ctx.lineWidth=4;
		//ctx.fillStyle="white";
        //ctx.fillRect(0,0,500,500);
        ctx.fillStyle="#b32400";
        ctx.font='bolder 40px Arial';
        var f=0;
        for(var t=0;t<10;t++)
        {
			ctx.fillText("❤️",10+f,40);
			f=f+50;
	    }
	    ctx.fillText("💔",10+f,40);
	    
		
	var fun1=function(){
		ctx.beginPath();
		ctx.moveTo(20,450); //the setup
		ctx.lineTo(120,450);
		ctx.stroke();
	}
	var fun2=function(){
		ctx.beginPath();
		ctx.moveTo(50,450);
		ctx.lineTo(50,80);
		ctx.stroke();
	}
	var fun3=function()
	{
		ctx.beginPath();
		ctx.moveTo(50,80);
		ctx.lineTo(250,80);
		ctx.stroke();
	}
	var fun4=function()
	{
		ctx.beginPath();
		ctx.moveTo(250,80);
		ctx.lineTo(250,160);
		ctx.stroke();
	}
	var fun5=function(){
		ctx.beginPath();
		ctx.moveTo(250,190);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(250,190,30,0,Math.PI*2,false);
		ctx.stroke(); //face
	}
	var fun6=function(){
		ctx.beginPath();
		ctx.moveTo(250,220); //body length
		ctx.lineTo(250,320);
		ctx.stroke(); 

		}
	var fun7=function()	{
		ctx.beginPath();
		ctx.moveTo(250,320);
		ctx.lineTo(220,390);	//leg1
		ctx.stroke(); 
	}
	var fun8=function(){
		ctx.beginPath();
		ctx.moveTo(250,320);
		ctx.lineTo(280,390);	//leg2
		ctx.stroke(); 
			}
	var fun9=function(){
		ctx.beginPath();
		ctx.moveTo(250,250);
		ctx.lineTo(190,250-30);
		ctx.stroke(); 
			}

	var fun10=function(){
		ctx.beginPath();
		ctx.moveTo(250,250);
		ctx.lineTo(250+60,250-30);
		ctx.stroke();
		ctx.fillText("Game Over", width / 2, height / 2);
		//game code
			}
		var draws=[fun1,fun2,fun3,fun4,fun5,fun6,fun7,fun8,fun9,fun10];
		var count=0;
		var p=0;
		var score=0;
	var words=[["a sweetened frozen food typically eaten as a snack or dessert.","ICECREAM"],["dish of rice with meat, fish, or vegetables and various spices.","BIRYANI"],["a dish of beaten eggs cooked in a frying pan and severed plain or with a savoury or sweet toppings"
,"OMLETTE"]];
	var k=words[Math.floor(Math.random()*words.length)];
	var word=k[1];
	var question=k[0];
	var answerarray=[];
	function showhint()
	{
	document.getElementById("showinghint").innerHTML=k[0];
}
	for(var i=0;i<word.length;i++)
	{
		answerarray[i]="_";
	}
	document.getElementById("showingstatus").innerHTML=answerarray.join(" ");
	var remainingletter=word.length;
    
	function dis(val,id)
	{

		score=0;
		var flag=0;
		
		for(var j=0;j<word.length;j++)
		{
			if(val===word[j])
			{
					answerarray[j]=val;
					remainingletter--;
					document.getElementById("showingstatus").innerHTML=answerarray.join(" ");
					flag=1;
					score+=10;

			}
		}
		if(flag==0)
		{
			draws[p]();
			p++;

			//wclicksound.play();
			crtclicksound.play();
			document.getElementById(id).style.backgroundColor="red";
			count++;
			ctx.clearReact()
			
		}
		else
		{
			crtclicksound.play();
			document.getElementById(id).style.backgroundColor="green";

		}

	}
	function bleh()
	{
		alert("ur score is "+score);
		location.reload();
	}
	

	



