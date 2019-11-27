// Global Variables

function fetchToys() {
    fetch('http://localhost:3000/toys')
        .then(data => data.json())
        .then(renderToys)
        .catch(console.error);
}

function renderToys(arrObjToys) {
    arrObjToys.forEach((objToy) => {
        let divCard = document.createElement("div");
        let h2Name = document.createElement("h2");
        let imgToy = document.createElement("img");
        let pLikes = document.createElement("p");
        let btnLike = document.createElement("button");

        divCard.className = "card";
        h2Name.innerHTML = objToy.name;
        imgToy.src = objToy.image;
        imgToy.className = "toy-avatar";
        pLikes.innerHTML = `${objToy.likes} Likes`;
        btnLike.className = "like-btn";
        btnLike.innerHTML = "Like <3";

        divCard.appendChild(h2Name);
        divCard.appendChild(imgToy);
        divCard.appendChild(pLikes);
        divCard.appendChild(btnLike);

        toysCollection.appendChild(divCard);
    });
}

function createToy(objToy) {
    let formToyData = {
        name: objToy.name,
        image: objToy.image,
        like: 0
    };

    let config = {
        method: "POST",
        headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
        body: JSON.stringify(formToyData)
    };

    fetch('http://localhost:3000/toys', config)
        .then(data => data.json())
        .then(console.log)
        .catch(console.error);
}


const init = () => {
    fetchToys();
    // createToy({
    //     name: "Whenever",
    //     img: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217"
    // });
};

document.addEventListener("DOMContentLoaded", () => {
    init();

    // Event Listeners //

    eventListenerToggleForm();
    eventListenerFormSubmit();
});

// EVENT LISTENERS -------------------------------------------------------------

const eventListenerToggleForm = () => {
    let addToy = false;

    const addBtn = document.querySelector('#new-toy-btn');
    const toyForm = document.querySelector('.container');

    addBtn.addEventListener('click', () => {

        // hide & seek with the form
        addToy = !addToy;

        if (addToy) {
            toyForm.style.display = 'block'
        } else {
            toyForm.style.display = 'none'
        }
    })
};

const eventListenerFormSubmit = () => {
    const formIdAddToy = document.getElementsByClassName("add-toy-form");

    formIdAddToy.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("EEHLLLOO");
    });
};

// Main Div Id's
const toysCollection = document.querySelector("#toy-collection");


// fetch("http://localhost:3000/toys")
//     .then((data) => { return data.json() })
//     .then((arrObjToys) => {
//
//       arrObjToys.forEach((objToy) => {
//         appendToy(objToy);
//       });
//
//     }).catch((error) => { alert(error) });


// EVENT LISTENERS

// const btnLike = document.querySelector(".like-btn");


// toysCollection.addEventListener("click", (event) => {
//
//   let closestParent = event.target.closest(".card");
//
//   if(event.target.className === "like-btn") {
//     let counter = closestParent.querySelector("p");
//     counter.innerText = parseInt(counter.innerText) + 1;
//
//     fetch("http://localhost:3000/toys/${event.target.dataset.id}", {
//       method: "PATCH",
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({
//         likes: counter.innerText
//       })
//       }).then((data) => {return data.json()})
//         .then()
//         .catch((error) => { alert('There was an error: ', error) })
//
//
//
// });


// const btnLike = document.querySelector("#toy-collection");

// log.line();
// log.msg(btnLike);
// log.line();
//
// btnLike.addEventListener("click", () => {
//   alert("HEELLOOO");
// });


