/*
=================================================
 TextualMachine
 Template Engine

 Templates define how phrase fragments combine.

=================================================
*/


const templates = [

    {
        name: "Reflection",

        structure: [
            "essential",
            "movement",
            "USER",
            "sequence"
        ]
    },


    {
        name: "Transformation",

        structure: [
            "change",
            "usefulness",
            "USER",
            "seeking"
        ]
    },


    {
        name: "Memory",

        structure: [
            "sequence",
            "essential",
            "USER",
            "movement"
        ]
    },


    {
        name: "Philosophical",

        structure: [
            "method",
            "movement",
            "USER",
            "imperfect"
        ]
    },


    {
        name: "Uncertainty",

        structure: [
            "imperfect",
            "change",
            "USER",
            "sequence"
        ]
    },


    {
        name: "Discovery",

        structure: [
            "seeking",
            "phases",
            "USER",
            "usefulness"
        ]
    },


    {
        name: "Existence",

        structure: [
            "essential",
            "sequence",
            "USER",
            "change"
        ]
    },


    {
        name: "Abstract",

        structure: [
            "method",
            "phases",
            "movement",
            "USER"
        ]
    }

];





/*
=================================================
 Generate Text From Template
=================================================
*/


function generateFromTemplate(userWord) {


    const template =
        templates[
            Math.floor(Math.random() * templates.length)
        ];



    let result = [];



    template.structure.forEach(part => {


        if (part === "USER") {

            result.push(userWord);

        } else {

            result.push(
                getRandomPhrase(part)
            );

        }


    });



    return {

        title: template.name,

        text: result.join(" ")

    };


}
