var cardCharacterExp = [500, 2686, 8442, 22860, 24571, 60312, 142150, 209334, 237943, 541023, 985061, 2420348];
var cardClassExp = [385, 2668, 6500, 17602, 18919, 46440, 109455, 161187, 183216, 416587, 758496, 1863667];

function characterExpFromCard(cardLevel, quantity) {
    return cardCharacterExp[cardLevel - 1] * quantity;
}

function classExpFromCard(cardLevel, quantity) {
    return cardClassExp[cardLevel - 1] * quantity;
}

function expFromCards() {
    var characterExp = 0,
        classExp = 0;
    $(".table > tbody > tr").each(function() {
        var level = $(this).find("select").val();
        var quantity = $(this).find("input").val();
        if(level != null && quantity != null) {
            characterExp += characterExpFromCard(level, quantity);
            classExp += classExpFromCard(level, quantity);
        }
    });
    
    alert(characterExp + " " + classExp);
}