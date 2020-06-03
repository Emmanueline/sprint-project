let url = "https://ghibliapi.herokuapp.com/films";

    fetch(url)
    .then(response=>response.json())
    .then((response => {
        console.log(response);


    }))
    .catch(error => alert('Erreur: '+ error))