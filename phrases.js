/*
=================================================
 TextualMachine
 Phrase Library

 Original phrase fragments modernised from
 Trav's early JavaScript poetry experiment.

=================================================
*/


const phrases = {


    essential: [

        "essential usefulness",
        "its edge sustains",
        "condition",
        "underlines the loss",
        "proves basic",
        "withstanding basic",
        "is remote from",
        "almost new situation",
        "likely to order basic"

    ],



    emphasis: [

        "far of",
        "proof",
        "might be destroyed",
        "to prove",
        "buried",
        "takes the emphasis",
        "almost new",
        "order emphasis",
        "as for that"

    ],



    phases: [

        "to the phases",
        "wasting some",
        "in direct communication",
        "distant",
        "other",
        "makes wasteful",
        "necessary practicality",
        "underline of weird loss",
        "it remaining"

    ],



    method: [

        "higher method",
        "as order",
        "sort of",
        "not important",
        "to the phases",
        "remains wasteful",
        "however it is buried",
        "to be that",
        "other things"

    ],



    seeking: [

        "eventually",
        "seek",
        "to love",
        "it is special",
        "cultivate the causes",
        "present",
        "of that seeking",
        "which in its loss supports",
        "several states presently"

    ],



    usefulness: [

        "distant usefulness",
        "substantial usefulness",
        "important usefulness",
        "search procedure",
        "definite space",
        "not to waste",
        "distant condition",
        "used condition",
        "high contrary"

    ],



    imperfect: [

        "ungrammatical",
        "discontinuous later",
        "be pleased",
        "enquiry knowledge",
        "physical sensibility",
        "intend",
        "incorrect",
        "incomplete"

    ],



    movement: [

        "beyond recall",
        "distinction",
        "intrinsically",
        "connecting medium",
        "distinguished increase",
        "motion",
        "beginning",
        "rank",
        "extent"

    ],



    sequence: [

        "faraway retrospective",
        "project to exist",
        "request at",
        "executive agency",
        "knowledge motion",
        "be supported",
        "the cause of",
        "remember",
        "uninterrupted sequence"

    ],



    change: [

        "moves here",
        "nearly to change",
        "it must be",
        "change with us",
        "for this purpose",
        "are its designation",
        "a certain inscription",
        "with its base and parts",
        "its partial significance"

    ]

};





/*
=================================================
 Utility Functions
=================================================
*/


function getRandomPhrase(category) {

    const collection = phrases[category];

    return collection[
        Math.floor(Math.random() * collection.length)
    ];

}



function getRandomCategory() {

    const categories = Object.keys(phrases);

    return categories[
        Math.floor(Math.random() * categories.length)
    ];

}
