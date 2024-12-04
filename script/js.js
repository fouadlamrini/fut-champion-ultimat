let joueurs = document.querySelectorAll(".terrain > div");
document.getElementById("formation").addEventListener("change", function () {
    let value = this.value;

    if (value == "4-3-3") {
        //joueur11
        joueurs[0].style.top = "8%";
        joueurs[0].style.left = "25%";
        //joueur10
        joueurs[1].style.left = "71%";
        //joueur9
        joueurs[2].style.top = "-12%";
        joueurs[2].style.left = "49%";
        //joueur8

        joueurs[3].style.left = "48%";
        joueurs[3].style.top = "-5%";
        //joueur7
        joueurs[4].style.top = "-3%";
        joueurs[4].style.left = "68%";
        //joueur6
        joueurs[5].style.top = "-10.5%";
        joueurs[5].style.left = "28%";
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

function formationDefault() {
    joueurs[0].style.top = "8%";
    joueurs[0].style.left = "25%";
    //joueur10
    joueurs[1].style.left = "71%";
    //joueur9
    joueurs[2].style.top = "-12%";
    joueurs[2].style.left = "49%";
    //joueur8

    joueurs[3].style.left = "48%";
    joueurs[3].style.top = "-5%";
    //joueur7
    joueurs[4].style.top = "-3%";
    joueurs[4].style.left = "68%";
    //joueur6
    joueurs[5].style.top = "-10.5%";
    joueurs[5].style.left = "28%";
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
formationDefault();

// affiche la forme
let form = document.getElementById("form");
function afficheForm() {

    form.style.display = "block";
    document.querySelector(".btn-form button:nth-child(1)").textContent = "ajouter";
    document.querySelector(".btn-form button:nth-child(1)").onclick = ajouter;
    
   
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
        let inputNom = document.getElementById("inputNom").value.split(" ")[0];
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
    }
    else {
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


// active le mode de supprission
document.querySelector(".button button:nth-child(2)").addEventListener("click", modeSupprimer);
function modeSupprimer() {
    const deleteBtn = document.querySelector(".button button:nth-child(2)");
    
    // cahnger l'etat de button de suprimer

    // syntax: elemnt.classList("class-x");
//  classList.contains(""): verifier si element contient la classe qui s'apelle class-x
    if (deleteBtn.classList.contains("delete-mode")) {
        deleteBtn.classList.remove("delete-mode");
        deleteBtn.textContent = "supprimer";
    } else {
        deleteBtn.classList.add("delete-mode");
        deleteBtn.textContent = "Mode suppression";
    }
}
// active le mode de modification
document.querySelector(".button button:nth-child(3)").addEventListener("click", modeModification);
function modeModification() {
    const modifierBTN = document.querySelector(".button button:nth-child(3)");
    
    // cahnger l'etat de button de modifier
    if (modifierBTN.classList.contains("modifier-mode")) {
        modifierBTN.classList.remove("modifier-mode");
        modifierBTN.textContent = "modifier";
    } else {
        modifierBTN.classList.add("modifier-mode");
        modifierBTN.textContent = "Mode modification";
    }
}

// ajout un variable pour stocker la carte qu'il va modifier
let cardToEdit = null;

// Event Delegation (pour donner evenment pour chaque childrent il suffit de donne un evenment pour le parent)
// il y'a deux methode foreach pour donne evenment pour chack element ou bien un evenment pour parent


document.getElementById("allCard").addEventListener("click", function(event) {
    // syntax element.closest(selector)   
    // cherche sur un element qui contient a selector (class id tag) commence par element si ne trouve pas passe a son parent....


    const card = event.target.closest(".card");
    if (!card) return;

    
    if (document.querySelector(".button .delete-mode")) {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette carte ?")) {
            card.remove();
        }
        return;
    } 

   
    if (document.querySelector(".btn-form button:nth-child(1)").textContent === "modifier") {

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

        cardToEdit = card;
        document.getElementById("inputRating").value = card.querySelector("#rating").textContent;
        document.getElementById("select").value = card.querySelector("#position").textContent;
        document.getElementById("inputImgp").value = card.querySelector("#imgp").src;
        document.getElementById("inputNom").value = card.querySelector("#nom").textContent;
        document.getElementById("inputPace").value = card.querySelector("#pace").textContent;
        document.getElementById("inputShooting").value = card.querySelector("#shooting").textContent;
        document.getElementById("inputPassing").value = card.querySelector("#passing").textContent;
        document.getElementById("inputDribbling").value = card.querySelector("#dribbling").textContent;
        document.getElementById("inputDefending").value = card.querySelector("#defending").textContent;
        document.getElementById("inputPhysical").value = card.querySelector("#physical").textContent;
        document.getElementById("inputImgf").value = card.querySelector("#imgf").src;
        document.getElementById("inputImgc").value = card.querySelector("#imgc").src;
        
        form.style.display = "block";
    } else if (selectionJoueur) {
      // ajoute les joueurs dans le terrain
  
      selectionJoueur.appendChild(card); 
      card.style.transform = "scale(0.7)"; 
        selectionJoueur = null; 
    }
    //   else if (document.querySelector(".joueur1").querySelector(".select").value!="GK"){

    //     alert("ce n'est pas un GK")
    // }
    
    else {
        alert("il faut choisir le joueur");  
    }


   
});


//afficher la forme de modification
function showEditForm() {
    const form = document.getElementById("form");
    document.querySelector(".btn-form button:nth-child(1)").textContent = "modifier";
    document.querySelector(".btn-form button:nth-child(1)").onclick = updateCard;
}

document.querySelector(".button button:nth-child(3)").onclick = function() {
    document.querySelector(".btn-form button:nth-child(1)").textContent = "modifier";
    document.querySelector(".btn-form button:nth-child(1)").onclick = miseAjour;
};

// mise a jour de la carte
function miseAjour(event) {
    event.preventDefault();
    
    if (!cardToEdit) return;
    
    
    cardToEdit.querySelector("#rating").textContent = document.getElementById("inputRating").value;
    cardToEdit.querySelector("#position").textContent = document.getElementById("select").value;
    cardToEdit.querySelector("#imgp").src = document.getElementById("inputImgp").value;
    cardToEdit.querySelector("#nom").textContent = document.getElementById("inputNom").value.split(" ")[0];
    cardToEdit.querySelector("#pace").textContent = document.getElementById("inputPace").value;
    cardToEdit.querySelector("#shooting").textContent = document.getElementById("inputShooting").value;
    cardToEdit.querySelector("#passing").textContent = document.getElementById("inputPassing").value;
    cardToEdit.querySelector("#dribbling").textContent = document.getElementById("inputDribbling").value;
    cardToEdit.querySelector("#defending").textContent = document.getElementById("inputDefending").value;
    cardToEdit.querySelector("#physical").textContent = document.getElementById("inputPhysical").value;
    cardToEdit.querySelector("#imgf").src = document.getElementById("inputImgf").value;
    cardToEdit.querySelector("#imgc").src = document.getElementById("inputImgc").value;
    
    // 
    form.style.display = "none";
    cardToEdit = null;
    document.querySelector(".btn-form button:nth-child(1)").textContent = "ajouter";
    document.querySelector(".btn-form button:nth-child(1)").onclick = ajouter;
    
  
}



 


















let carte=document.querySelector(".card").addEventListener("click",function(){

console.log(carte.querySelector("#nom").textContent);
})

































   





