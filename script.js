let url = "https://ghibliapi.herokuapp.com/films";

    

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    let section = document.getElementById('section');
    let inputButton = document.getElementById('bouton');
    let title = document.getElementById('title');
    let release_date = document.getElementById('release_date');

    console.log(inputButton)
    inputButton.addEventListener('click', function() {fetch(url)
        .then(response=>response.json()) 
        .then((response => { let random = getRandomInt(20)
            console.log(response[random]);
            title.innerText = response[random].title
            release_date.innerText = response[random].release_date
            section.innerText = response[random].description
    
        }))
        .catch(error => alert('Erreur: '+ error))})


