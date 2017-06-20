  //First Step: Title:What do you stand for? 
$(function(){
  //begin list of choices
    var characterChoice = {
      hero : ["Commander Detox", "Lightbringer", "Bearded Destiny", "Lord Fancypants", "Froodoo, the one who avoids copyright infringement", "Bringer of potato chips", "Justice Itself", "The Sweetness"],
      villain : ["Captain Extinction", "Annihilator of Dreams", "Supreme Lord of Darkness", "Dark Lord", "Merciless Eating Machine", "Skull Basher", "Prime Evil", "Richard Nixon Reincarnated", "Destroyer of Worlds", "El Patron", "Doctor Collosus"],
      between : ["Egg Salad Eater", "Captain Indecisive", "Hansel, you're so hot right now", "Lord McLordy Lord", "Time Turner", "Mysterious Stranger", "The Googler", "The Flatulent One"]
    };
    var vehicleChoice = {

      land : ["in your rusty jeep", "in an old soviet tank", "on your dirt Bike", "on a mono-rail", "on a charter Bus", "on a segway", "riding a unicycle", "on the back of an aggressive silver back gorilla", "on a pair of rocket powered rollerskates", "on your enchanted pogo-stick", "in a brand new Tesla Model S", "in a Dodge Caravan", "wearing a bubble ball"],
      air : ["in a fighter jet", "on a blimp", "strapped to a hydraulic jet-pack", "tied to a weather balloon", "using your own ability to flap your arms really fast hummingbird style", "with many strings tied to a group of wild seagulls", "in a replica of the spirit of st. louis"],
      sea : ["on your personal cruise ship", "on a small piece of drift wood", "on your jet ski", "on the back of a dolphin", "on a torpedo", "inside a hovercraft", "on your personal blue whale that also acts as your sidekick, whaleguy", "wearing a life jacket and floaties"]
    };
    var objectChoice = {

      food : ["baja fish tacos", "traditional scottish haggis", "slightly rotting tuna", "live grasshoppers", "hamburgers", "chickpeas that are far too salty", "very strong coffee", "wheat flour", "an addiction to chipotle sauce", "cat food", "a large glass of kentucky bourbon", "an entire deep fried meat lovers pizza", "a brick of cheese, which you must now eat every five hours to retain your powers"],
      object : ["a magic table cloth", "a solid steel wrench", "an antique flint-lock pistol", "wearing a toupee", "an enchanted drumstick", "the original pair of air jordans", "a live electric eel", "a fender guitar missing all the strings"],
      secret : ["miles davis' solo on 'so what'", "talcum powder", "the last red smartie", "any kind of soap", "an inconvieniently large piece of petrified wood", "an old, stale timbit", "a copy of fifty shades of grey", "a collection of toenail clippings"]
    };
    var weaknessChoice = {
      activity : ["jogging", "bowling", "playing ping pong", "fishing with nothing but your bare hands", "having your photo taken", "being in direct sunlight", "drinking cold beer. Warm beer is acceptible", "any water sports", "sleeping for longer than four hours", "being tickled"],
      weapon : ["being stabbed", "taking a direct shot from a cannon", "having ice cubes thrown at you", "being shot by a large calibre revolver", "being hit by multiple baseball bats", "getting slapped twice consecutively"],
      circumstance : ["getting kicked in the groin", "having to work out to recordings of richard simmons", "being touched by any elderly people", "anything involving a roller disco", "any time you try to cut hair on your body", "using any kind of soap", "looking directly into other peoples eyes", "using any technology created after 1987"]
    };

    //choices end

    //random index generation
    function randomSelection (array) {
      var randomNumber = Math.floor(Math.random() * array.length);
      return array[randomNumber];
    };


    $('form').on('submit', function(e){
      e.preventDefault();
      //store selected input value in variables
      var userChoiceOfChar = $('input[name=identity]:checked').val();
      var userChoiceOfVehicle = $('input[name=vehicle]:checked').val();
      var userChoiceOfObject = $('input[name=power]:checked').val();
      var userChoiceOfWeakness = $('input[name=weakness]:checked').val();


      //store array of characters in variable
      var arrayOfCharacters = characterChoice[userChoiceOfChar];
      //call randomSelection function on array to generate random character name
      var randomCharacter = randomSelection(arrayOfCharacters);

      //store array of vehicles in variable
      var arrayOfVehicles = vehicleChoice[userChoiceOfVehicle];
      //call randomSelection function on array to generate random vehicle
      var randomVehicle = randomSelection(arrayOfVehicles);

      //store array of objects of power in variable
      var arrayOfObjectsOfPower = objectChoice[userChoiceOfObject];
      //call randomSelection function on array to generate random object
      var randomObjectOfPower = randomSelection(arrayOfObjectsOfPower);

      //store array of weaknesses in variable
      var arrayOfWeaknessChoice = weaknessChoice[userChoiceOfWeakness];
      //called randomSelection function on the arrayOfWeaknessChoice to generate random string from within the array
      var randomWeakness = randomSelection(arrayOfWeaknessChoice);  


      $('.submit').on('click', function(){
        $('.resultContainer').html(`<h2>Forget who you were. Long has there been prophesy of your coming. Your destiny is thus, to be reborn as <span class="choiceGen">${randomCharacter}</span>. born to travel the world <span class="choiceGen">${randomVehicle}</span>. You owe all of your great power to <span class="choiceGen">${randomObjectOfPower}</span>. Unfortunately, your single greatest weakness is <span class="choiceGen">${randomWeakness}</span>. It will kill you instantly, so heed this warning! The fate of the world now rests solely on your shoulders. Good luck, <span class="choiceGen">${randomCharacter}</span>.</h2>`).fadeIn('slow');
        $('.hideButton').removeClass('hideButton');
      })
      //on the click of the reset button, reset all radio buttons to unchecked and get rid of any html in the submit container

    }); //closing form submit

    //create an array that will represent the number of slides
    var slides = ['.slide0', '.slide1', '.slide2', '.slide3', '.slide4']
    //start a counter that will iterate over the slides array to determine what slide the user is on
    var counter = 0;

    function hidePreviousSlide() {
      var currentSlide = slides[counter]; // .slide0
      $(currentSlide).removeClass('current');
      $(currentSlide).addClass('hide');
    }

    function showNextSlide() {
      var nextSlide = slides[counter]; // .slide1
      $(nextSlide).removeClass('initial');
      $(nextSlide).addClass('current');
      $(nextSlide).removeClass('hide');
    }

    function resetSlideShow() {
      $(slides[counter]).addClass('hide');
      $(slides[counter]).removeClass('current');
      counter = 0;
      $(slides[counter]).addClass('current');
      $(slides[counter]).removeClass('hide');
    }

    $('input[type=radio]').on('change', function(){
      // get the current slide
      hidePreviousSlide();
      counter++;
      showNextSlide();
    });




    $('.reset').on('click', function(e){
      e.preventDefault;
      $('input[name="identity"]').prop('checked', false);
      $('input[name="power"]').prop('checked', false);
      $('input[name="vehicle"]').prop('checked', false);
      $('input[name="weakness"]').prop('checked', false);
      //clear submitted text
      $('.resultContainer').removeClass('load').html(''); //fade out and remove inserted h2
      //reset theme music
      $('.themeMusic').addClass('hideButton');
      //hide buttons
      $('.reset').addClass('hideButton');
      resetSlideShow();
    });//reset button

    //create an object that will hold our arrays of music
    var musicObject = {
     
      goodMusic : ['music/goodtheme1-cut.mp3', 'music/goodtheme2.mp3', 'music/goodtheme3.mp3'],

      badMusic : ['music/eviltheme-cut.mp3', 'music/eviltheme2.mp3'],

      betweenMusic : ['music/betweentheme-cut.mp3', 'music/betweentheme2.mp3']

    };
      // var randomMusicSelection = randomSelection()

      //store song in selectedSong function 
    var selectRandomSong = function(){
      var userChoiceOfIdentity = $('input[name=identity]:checked').val();
      if (userChoiceOfIdentity === 'hero') {
        // $('audio').attr('src', randomSelection(musicObject.goodMusic));
        var songChoice = randomSelection(musicObject.goodMusic);
        return songChoice;
      }
      else if (userChoiceOfIdentity === 'villain') {
        var songChoice = randomSelection(musicObject.badMusic);
        return songChoice;
        // $('audio').attr('src', randomSelection(musicObject.badMusic));  
      }
      else {
        var songChoice = randomSelection(musicObject.betweenMusic);
        return songChoice;
        // $('audio').attr('src', randomSelection(musicObject.betweenMusic));
      }
    };



    $('.themeMusic').on('click', function(){
      $('audio').attr('src', selectRandomSong() );
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        $('audio.musicHere')[0].play();
      } else {
        $('audio.musicHere')[0].pause();
      }
    });


});//end of onload function












