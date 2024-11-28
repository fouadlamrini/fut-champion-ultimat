document.getElementById("formation").addEventListener("change", function() {
    let value = this.value;
    
    let joueurs = document.querySelectorAll(".terrain > div");

    if(value == "4-3-3") {
        //joueur11
        joueurs[0].style.top = "50px";
        joueurs[0].style.left=  "220px";
 //joueur10
        joueurs[1].style.left="650px";
 //joueur9
        joueurs[2].style.top="-100px";
        joueurs[2].style.left="420px";
 //joueur8
        
        joueurs[3].style.left="430px";
        joueurs[3].style.top="-20px";
 //joueur7
        joueurs[4].style.top="-20px";
        joueurs[4].style.left="600px";
 //joueur6
        joueurs[5].style.top="-75px";
        joueurs[5].style.left="250px";
 //joueur5
        joueurs[6].style.top=" 5px";
        joueurs[6].style.left="780px";
 //joueur4
        joueurs[7].style.top="50px";
        joueurs[7].style.left="540px";
         //joueur3
        joueurs[8].style.left="300px";
 //joueur2
        joueurs[9].style.top="-140px";
        joueurs[9].style.left="50px";
         //joueur1
        joueurs[10].style.top="40px";
        joueurs[10].style.left="430px";

    }

    else if(value == "4-4-2") {
        //joueur11
        joueurs[0].style.top = "55px"; 
        joueurs[0].style.left=  "480px";
 // joueur10
        joueurs[1].style.left="350px";
       
// joueur9
        joueurs[2].style.top="20px";
        joueurs[2].style.left="650px";

// joueur8
        joueurs[3].style.left="520px";
        joueurs[3].style.top="25px";
// joueur7
        joueurs[4].style.top="-25px";
        joueurs[4].style.left="330px";
// joueur6
        joueurs[5].style.top="-140px";
        joueurs[5].style.left="190px";
// joueur5
        joueurs[6].style.top=" 5px"; 
        joueurs[6].style.left="780px";
// joueur4
        
        joueurs[7].style.top="50px"; 
        joueurs[7].style.left="540px";
// joueur3
        joueurs[8].style.left="300px";
 // joueur2
        joueurs[9].style.top="-140px";
        joueurs[9].style.left="50px";
// joueur1
        joueurs[10].style.top="40px";
        joueurs[10].style.left="430px";

    }
});





let currentBoxId = null;

function showForm(boxId) {
    currentBoxId = boxId;
    
    document.getElementById('form').style.display = 'block';
}

function closeForm() {
    document.getElementById('form').style.display = 'none';
}

function addContent() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const stats = document.getElementById('stats').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    if (!name || !number || !stats || !imageFile) {
        alert('il faut remplir tout les champs');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const box = document.getElementById(`box${currentBoxId}`);
        box.innerHTML = `
            <div class="card">
                <img src="${e.target.result}" id="fotoProfil">
                <p>nom:${name}</p>
                <p>numero: ${number}</p>
                <p>statistique: ${stats}</p>
            </div>
        `;
    };
    reader.readAsDataURL(imageFile);

    closeForm();
}


