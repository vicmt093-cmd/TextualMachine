/*
=================================================
 TextualMachine
 Main Application Logic

 Connects:
 - index.html
 - phrases.js
 - templates.js

=================================================
*/


// -----------------------------
// Elements
// -----------------------------

const wordInput = document.getElementById("wordInput");

const generateButton = document.getElementById("generate");

const output = document.getElementById("output");

const copyButton = document.getElementById("copy");

const saveButton = document.getElementById("save");

const structureButton = document.getElementById("structure");




// Stores the last generated poem

let currentCreation = null;





// -----------------------------
// Generate Text
// -----------------------------


generateButton.addEventListener(
    "click",
    generateText
);



function generateText() {


    let userWord =
        wordInput.value.trim();



    if (userWord === "") {

        userWord = "existence";

    }



    currentCreation =
        generateFromTemplate(userWord);



    output.innerHTML = `

        <h3>
        ${currentCreation.title}
        </h3>

        <p>
        ${currentCreation.text}
        </p>

    `;


}






// -----------------------------
// Copy Text
// -----------------------------


copyButton.addEventListener(
    "click",
    copyText
);



function copyText() {


    if (!currentCreation) {

        return;

    }



    navigator.clipboard.writeText(
        currentCreation.text
    );


    copyButton.innerText =
        "Copied";


    setTimeout(() => {

        copyButton.innerText =
            "Copy";

    },1500);


}







// -----------------------------
// Save Creation
// -----------------------------


saveButton.addEventListener(
    "click",
    saveText
);



function saveText() {


    if (!currentCreation) {

        return;

    }



    let saved =
        JSON.parse(
            localStorage.getItem(
                "textualMachine"
            )
        ) || [];



    saved.push({

        date:
            new Date().toISOString(),

        title:
            currentCreation.title,

        text:
            currentCreation.text

    });



    localStorage.setItem(

        "textualMachine",

        JSON.stringify(saved)

    );



    saveButton.innerText =
        "Saved";


    setTimeout(() => {

        saveButton.innerText =
            "Save";

    },1500);


}







// -----------------------------
// Reveal Construction
// -----------------------------


structureButton.addEventListener(
    "click",
    revealStructure
);



function revealStructure(){


    if (!currentCreation) {

        return;

    }



    output.innerHTML += `

    <hr>

    <small>

    Generated using:
    <br>
    Template:
    ${currentCreation.title}

    <br><br>

    Phrase fragments selected
    from the TextualMachine library.

    </small>

    `;


}







// -----------------------------
// Keyboard Shortcut
// Press Enter to Generate
// -----------------------------


wordInput.addEventListener(
    "keypress",
    function(event){

        if(event.key === "Enter"){

            generateText();

        }

    }
);
