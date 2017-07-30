<!--    button r -->
 function MyMove()    { 
//alert("begin");

 if (  document.getElementById("radio1").checked == true ) 
   {
//alert("begin0");

   document.getElementById("radio1").checked = false;
//alert("begin1");

   document.getElementById("radio2").checked = true;  
  document.IVX.img_share.src="./invisto/two.jpg"; 
  document.getElementById("wr1").innerHTML = " –убашка ночна€ ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";


//alert("begin2");
return;
   } 
  
 if (  document.getElementById("radio2").checked == true ) 
   {
   document.getElementById("radio2").checked = false;
   document.getElementById("radio3").checked = true;  
  document.IVX.img_share.src="./invisto/three.jpg"; 
  document.getElementById("wr1").innerHTML = " Ѕатник пл€жный ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
return;
   }  
 
 if (  document.getElementById("radio3").checked == true ) 
   {
   document.getElementById("radio3").checked = false;
   document.getElementById("radio4").checked = true;  
  document.IVX.img_share.src="./invisto/four.jpg"; 
  document.getElementById("wr1").innerHTML = "  —витер домашний ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
return;
   }   

 if (  document.getElementById("radio4").checked == true ) 
   {
   document.getElementById("radio4").checked = false;
   document.getElementById("radio5").checked = true;  
  document.IVX.img_share.src="./invisto/five.jpg"; 
  document.getElementById("wr1").innerHTML = " ѕл€жна€ майка ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
return;
   }
   
 if (  document.getElementById("radio1").checked == false ) 
   {
   document.getElementById("radio1").checked = true;  
  document.IVX.img_share.src="./invisto/one.jpg"; 
//document.IVX.img_share.style= "position: relative; left: 6px;" ; 

  document.getElementById("wr1").innerHTML = " Ѕлузка летн€€ ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
return;
   }   

  }; 

<!--    end br -->
 function MyMove1()    { 
 if (  document.getElementById("radio5").checked == true ) 
   {
   document.getElementById("radio5").checked = false;
   document.getElementById("radio4").checked = true;  
  document.IVX.img_share.src="./invisto/four.jpg"; 
  document.getElementById("wr1").innerHTML = " —витер домашний ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
return;
   }   

 if (  document.getElementById("radio4").checked == true ) 
   {
   document.getElementById("radio4").checked = false;
   document.getElementById("radio3").checked = true;  
  document.IVX.img_share.src="./invisto/three.jpg"; 
  document.getElementById("wr1").innerHTML = "  Ѕатник пл€жный ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
return;
   }   

 if (  document.getElementById("radio3").checked == true ) 
   {
   document.getElementById("radio3").checked = false;
   document.getElementById("radio2").checked = true;  
  document.IVX.img_share.src="./invisto/two.jpg"; 
  document.getElementById("wr1").innerHTML = "  –убашка ночна€ ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
return;
   }   

if (  document.getElementById("radio2").checked == true ) 
   {
   document.getElementById("radio2").checked = false;
   document.getElementById("radio1").checked = true;  
  document.IVX.img_share.src="./invisto/one.jpg"; 
  document.getElementById("wr1").innerHTML = " Ѕлузка летн€€ ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
return;
   } 
  
if (  document.getElementById("radio1").checked == false ) 
   {
   document.getElementById("radio1").checked = true;  
  document.IVX.img_share.src="./invisto/one.jpg"; 
 //document.IVX.img_share.style= "position: relative; left: 4px;" ; 

  document.getElementById("wr1").innerHTML = " Ѕлузка летн€€ ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";
   }   

  }; 
 <!--    end br1 -->

 function MyFunction()    { 
   document.IVX.img_share.src="./invisto/one.jpg"; 
//   alert("begin");
//   document.IVX1.wr1="Ѕлузка летн€€";
    document.getElementById("wr1").innerHTML = " Ѕлузка летн€€ ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>  ";
  // alert("end"); 

  };
 function MyFunction1() { 
   document.IVX.img_share.src="./invisto/two.jpg"; 
  document.getElementById("wr1").innerHTML = " –убашка ночна€ ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>";

  }; 
  function MyFunction2()  { 
  document.IVX.img_share.src="./invisto/three.jpg"; 
  document.getElementById("wr1").innerHTML = " Ѕатник пл€жный ";
 document.getElementById("wr2").innerHTML = "<br>  <br><br><br>  ";

    }; 
 function MyFunction3()  { 
  document.IVX.img_share.src="./invisto/four.jpg"; 
  document.getElementById("wr1").innerHTML = " —витер домашний ";
  document.getElementById("wr2").innerHTML = " <br>  <br><br><br> ";

  };
 function MyFunction4()  { 
  document.IVX.img_share.src="./invisto/five.jpg"; 
document.getElementById("wr1").innerHTML = " ѕл€жна€ майка ";
  document.getElementById("wr2").innerHTML = " <br>  <br><br><br> ";


  };
