document.getElementById("formation").addEventListener("change", function () {
    let value = this.value;

    let joueurs = document.querySelectorAll(".terrain > div");

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
        joueurs[6].style.top = " 5px";
        joueurs[6].style.left = "780px";
        //joueur4
        joueurs[7].style.top = "50px";
        joueurs[7].style.left = "540px";
        //joueur3
        joueurs[8].style.left = "300px";
        //joueur2
        joueurs[9].style.top = "-140px";
        joueurs[9].style.left = "50px";
        //joueur1
        joueurs[10].style.top = "40px";
        joueurs[10].style.left = "430px";

    }

    else if (value == "4-4-2") {
        //joueur11
        joueurs[0].style.top = "55px";
        joueurs[0].style.left = "480px";
        // joueur10
        joueurs[1].style.left = "350px";

        // joueur9
        joueurs[2].style.top = "20px";
        joueurs[2].style.left = "650px";

        // joueur8
        joueurs[3].style.left = "520px";
        joueurs[3].style.top = "25px";
        // joueur7
        joueurs[4].style.top = "-25px";
        joueurs[4].style.left = "330px";
        // joueur6
        joueurs[5].style.top = "-140px";
        joueurs[5].style.left = "190px";
        // joueur5
        joueurs[6].style.top = " 5px";
        joueurs[6].style.left = "780px";
        // joueur4

        joueurs[7].style.top = "50px";
        joueurs[7].style.left = "540px";
        // joueur3
        joueurs[8].style.left = "300px";
        // joueur2
        joueurs[9].style.top = "-140px";
        joueurs[9].style.left = "50px";
        // joueur1
        joueurs[10].style.top = "40px";
        joueurs[10].style.left = "430px";

    }
});


// affiche la forme
let form = document.getElementById("form");
function afficheForm() {
    form.style.display = "block";
}
// ajouter le carde

function ajouter() {
    if (!inputRating.value == "" && !inputImgp.value == "" && !inputNom.value == "" && !inputNom.value == "" && !inputPace.value == "" && !inputShooting.value == "" && !inputPassing.value == "" && !inputDribbling.value == "" &&!inputDefending.value==""&&!inputPhysical.value==""&&!inputImgf.value==""&&! inputImgc.value==""  ) {
        event.preventDefault();
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
    else if (inputRating.value == "" ){ inputRating.style.}




}









