let url = "https://ghibliapi.herokuapp.com/films";

    

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    let section = document.getElementById('section');
    let inputButton = document.getElementById('bouton');
    let title = document.getElementById('title');
    let release_date = document.getElementById('release_date');
    let src = '';
    let image = document.getElementById('img');

    inputButton.addEventListener('click', function() {
        image.setAttribute("src","");
        src= '';
        fetch(url)
        .then(response=>response.json()) 
        .then((response => { let random = getRandomInt(20)
            // console.log(response[random]);
            title.innerText = response[random].title
            release_date.innerText = response[random].release_date
            section.innerText = response[random].description



                if( response[random].title == "Castle in the Sky")
            { 
                src="img/Castle_in_the_sky.jpg";
    
            }else if(response[random].title == "Grave of the Fireflies"){
                src="img/Grave_of_the_Fireflies.jpg"
            }
            else if(response[random].title == "My Neighbor Totoro"){
                src="img/totoro.jpg"
            }
            else if(response[random].title == "Kiki's Delivery Service"){
                src="img/Kiki.png"
            }
            else if(response[random].title == "Only Yesterday"){
                src="img/Only_Yesterday.jpg"
            }
            else if(response[random].title == "Porco Rosso"){
                src="img/Porco_Rosso.jpg"
            }
            else if(response[random].title == "Pom Poko"){
                src="img/Pompoko.jpg"
            }
            else if(response[random].title == "Whisper of the Heart"){
                src="img/Whisper_of_the_Heart.jpg"
            }
            else if(response[random].title == "Princess Mononoke"){
                src="img/Mononoke.jpg"
            }
            else if(response[random].title == "My Neighbors the Yamadas"){
                src="img/yamadas.jpg"
            }
            else if(response[random].title == "Spirited Away"){
                src="img/Spirited_Away.jpg"
            }
            else if(response[random].title == "The Cat Returns"){
                src="img/The_Cat_Returns.jpg"
            }
            else if(response[random].title == "Howl's Moving Castle"){
                src="img/Howl_Moving_Castle.jpg"
            }
            else if(response[random].title == "Tales from Earthsea"){
                src="img/Earthsea.jpg"
            }
            else if(response[random].title == "Ponyo"){
                src="img/Ponyo.jpg"
            }
            else if(response[random].title == "Arrietty"){
                src="img/Arrietty.jpg"
            }
            else if(response[random].title == "From Up on Poppy Hill"){
                src="img/Poppy_Hill.jpg"
            }
            else if(response[random].title == "The Wind Rises"){
                src="img/The_Wind_Rises.jpg"
            }
            else if(response[random].title == "The Tale of the Princess Kaguya"){
                src="img/Kaguya.jpg"
            }
            else if(response[random].title == "When Marnie Was There"){
                src="img/When_Marnie_Was_There.jpg"
            }
            image.setAttribute('src', src);
    
        }))
        .catch(error => alert('Erreur: '+ error))})


