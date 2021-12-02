
    var enterButton = document.getElementById('enterButton');
    var output = document.getElementById('outputTxt');
    var remiaing=document.getElementById("numbr");
      var msg2 = document.getElementById("msg2");
      var msg3 = document.getElementById("msg3");
    var randomNumber = Math.floor(Math.random()*100)+1;
    var nbr=0;
    var guesses = [];

    
    
    function random(){
      // alert(randomNumber)
      var input = document.getElementById('number').value;
      if(input>100 || input<1)
      {
          alert("Please enter a number between 1 and 100.")
      }
      else if(input == randomNumber){
          if(nbr <=3)
          {
            guesses.push(input)
            output.innerHTML="Well done, you are genius!!! "+ ", "+ " it was "+ randomNumber;
            msg3.textContent = "You guessed it in " +
            nbr + " guesses";
     
          }
          else{
            guesses.push(input)
            output.innerHTML="BINGO!!! "+ ", "+ " the number was  "+ randomNumber;
            msg3.textContent = "You guessed it in " +
            nbr + " guesses";
          }     
        }
        else if(input>randomNumber ){
          guesses.push(input)
          output.innerHTML="your guess is too high.";
          msg3.textContent = "guessed numbers are: " +
          guesses;
          nbr++;
          remiaing.innerHTML=nbr;
        }
        else if(input<randomNumber){
          guesses.push(input)
          output.innerHTML="your guess is too low.";
          msg3.textContent = "guessed numbers are: " +
          guesses;
          nbr++;
          remiaing.innerHTML=nbr;
        }
        
        if(nbr==10){
          output.innerHTML="GAME OVER";
          alert("GAME OVER (click F5 to restart)");
          msg2.textContent = "YOU LOSE";
          document.location.reload();
          nbr=10;
          remiaing.innerHTML=nbr;
        }
      }
   
      //btn.addEventListener('click', random);
     
    
