let joueurs = document.querySelectorAll(".terrain > div");
document.getElementById("formation").addEventListener("change", function () {
    let value = this.value;

   

    if (value == "4-3-3") {
        //joueur11
        joueurs[0].style.top = "50px";
        joueurs[0].style.left = "220px";
        //joueur10
        joueurs[1].style.left = "650px";
        //joueur9
        joueurs[2].style.top = "-100px";
        joueurs[2].style.left = "420px";
        //joueur8

        joueurs[3].style.left = "430px";
        joueurs[3].style.top = "-20px";
        //joueur7
        joueurs[4].style.top = "-20px";
        joueurs[4].style.left = "600px";
        //joueur6
        joueurs[5].style.top = "-75px";
        joueurs[5].style.left = "250px";
        //joueur5
        joueurs[6].style.top = "3.3%";
        joueurs[6].style.left = "88%";
        //joueur4
        joueurs[7].style.top = "7.7%";
        joueurs[7].style.left = "63%";
        //joueur3
        joueurs[8].style.left = "32%";
        //joueur2
        joueurs[9].style.top = "-20%";
        joueurs[9].style.left = "5%";
        //joueur1
        joueurs[10].style.top = "5%";
        joueurs[10].style.left = "48%";

    }

    else if (value == "4-4-2") {
        //joueur11
        joueurs[0].style.top = "8%";
        joueurs[0].style.left = "57%";
        // joueur10
        joueurs[1].style.left = "40%";

        // joueur9
        joueurs[2].style.top = "3%";
        joueurs[2].style.left = "80%";

        // joueur8
        joueurs[3].style.left = "60%";
        joueurs[3].style.top = "2.8%";
        // joueur7
        joueurs[4].style.top = "-5%";
        joueurs[4].style.left = "37%";
        // joueur6
        joueurs[5].style.top = "-20%";
        joueurs[5].style.left = "15%";
        // joueur5
        joueurs[6].style.top = "3.3%";
        joueurs[6].style.left = "88%";
        // joueur4

        joueurs[7].style.top = "7.7%";
        joueurs[7].style.left = "63%";
        // joueur3
        joueurs[8].style.left = "32%";
        // joueur2
        joueurs[9].style.top = "-20%";
        joueurs[9].style.left = "5%";
        // joueur1
        joueurs[10].style.top = "5%";
        joueurs[10].style.left = "48%";

    }
});


// affiche la forme
let form = document.getElementById("form");
function afficheForm() {

    form.style.display = "block";
}

// ajouter le carde

function ajouter() {event.preventDefault();
    document.getElementById("inputRating").style.borderBlockColor="";
    document.getElementById("inputImgp").style.borderBlockColor="";
    document.getElementById("inputNom").style.borderBlockColor="";
    document.getElementById("inputPace").style.borderBlockColor="";
    document.getElementById("inputShooting").style.borderBlockColor="";
    document.getElementById("inputPassing").style.borderBlockColor="";
    document.getElementById("inputDribbling").style.borderBlockColor="";
    document.getElementById("inputDefending").style.borderBlockColor="";
    document.getElementById("inputPhysical").style.borderBlockColor="";
    document.getElementById("inputImgf").style.borderBlockColor="";
    document.getElementById("inputImgc").style.borderBlockColor="";
    if (!inputRating.value == "" && !inputImgp.value == "" && !inputNom.value == "" &&  !inputPace.value == "" && !inputShooting.value == "" && !inputPassing.value == "" && !inputDribbling.value == "" &&!inputDefending.value==""&&!inputPhysical.value==""&&!inputImgf.value==""&&! inputImgc.value==""  ) {
        
        let allCard = document.getElementById("allCard");
        let inputRating = document.getElementById("inputRating").value;
        let select = document.getElementById("select").value;
        let inputImgp = document.getElementById("inputImgp").value;
        let inputNom = document.getElementById("inputNom").value;
        let inputPace = document.getElementById("inputPace").value;
        let inputShooting = document.getElementById("inputShooting").value;
        let inputPassing = document.getElementById("inputPassing").value;
        let inputDribbling = document.getElementById("inputDribbling").value;
        let inputDefending = document.getElementById("inputDefending").value;
        let inputPhysical = document.getElementById("inputPhysical").value;
        let inputImgf = document.getElementById("inputImgf").value;
        let inputImgc = document.getElementById("inputImgc").value;
        allCard.innerHTML += ` <div class="card">
            <div class="rating">
                <p id="rating">${inputRating}</p>
                <p id="position">${select}</p>
            </div>
            <img id="imgp" src="${inputImgp}" alt="">
            <div class="nom">
                <p id="nom">${inputNom}</p>
            </div>
            <div class="statistique">
                <div class="pace">
                    <p class="s">PAC</p>
                    <p class="s" id="pace">${inputPace}</p>
                </div>
                <div class="shooting">
                    <p class="s">SHO</p>
                    <p class="s" id="shooting">${inputShooting}</p>
                </div>
                <div class="passing">
                    <p class="s">PAS</p>
                    <p class="s" id="passing">${inputPassing}</p>
                </div>
                <div class="dribbling">
                    <p class="s">DRI</p>
                    <p class="s" id="dribbling">${inputDribbling}</p>
                </div>
                <div class="defending">
                    <p class="s">DEF</p>
                    <p class="s " id="defending">${inputDefending}</p>
                </div>
                <div class="physical">
                    <p class="s">PHY</p>
                    <p class="s" id="physical">${inputPhysical}</p>
                </div>
            </div>
            <div class="logo">
                <img src="${inputImgf}" alt="" id="imgf">
                <img src="${inputImgc}" alt="" id="imgc">
               
            </div>
        </div>`
        document.getElementById("inputRating").value = "";
        document.getElementById("inputImgp").value = "";
        document.getElementById("inputPace").value = "";
        document.getElementById("inputNom").value = "";
        document.getElementById("inputShooting").value = "";
        document.getElementById("inputPassing").value = "";
        document.getElementById("inputDribbling").value = "";
        document.getElementById("inputDefending").value = "";
        document.getElementById("inputPhysical").value = "";
        document.getElementById("inputImgf").value = "";
        document.getElementById("inputImgc").value = "";
    }
    if (inputRating.value == "" ){ document.getElementById("inputRating").style.borderBlockColor="red";
    }
      if (inputImgp.value == "" ){ document.getElementById("inputImgp").style.borderBlockColor="red";
    }
      if (inputNom.value == "" ){ document.getElementById("inputNom").style.borderBlockColor="red";
    }
      if (inputPace.value == "" ){ document.getElementById("inputPace").style.borderBlockColor="red";
    }
      if (inputShooting.value == "" ){ document.getElementById("inputShooting").style.borderBlockColor="red";
    }
      if (inputPassing.value == "" ){ document.getElementById("inputPassing").style.borderBlockColor="red";
    }
      if (inputDribbling.value == "" ){ document.getElementById("inputDribbling").style.borderBlockColor="red";
    }
      if (inputDefending.value == "" ){ document.getElementById("inputDefending").style.borderBlockColor="red";
    }
      if (inputPhysical.value == "" ){ document.getElementById("inputPhysical").style.borderBlockColor="red";
    }
      if (inputImgf.value == "" ){ document.getElementById("inputImgf").style.borderBlockColor="red";
    } 
     if (inputImgc.value == "" ){ document.getElementById("inputImgc").style.borderBlockColor="red";
    }




}
// annuler la forme de l'ajoute
function annuler(){
  event.preventDefault();
  form.style.display = "none";
}






// ajoute les joueurs dans le terrain




let selectionJoueur = null;
joueurs.forEach(function (joueur) {
    joueur.addEventListener("click", function () {
        selectionJoueur = joueur;
        joueur.style.backgroundColor="yellow";
        
    });
});

document.querySelectorAll(".allCard .card").forEach(function (card) {
    card.addEventListener("click", function () {

        if (selectionJoueur) {
            const cardClone = card.cloneNode(true);
            selectionJoueur.innerHTML = "";  
            selectionJoueur.appendChild(cardClone); 
            cardClone.style.transform = "scale(0.5)"; 
            selectionJoueur = null; 
        } else {
            alert("il faut choisir le joueur");  
        }
    });
});






