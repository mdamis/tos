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

function addExpCard() {
    $("table > tbody").append('<tr><td><select id="card-lvl" class="col-sm-2 form-control"><option disabled selected>Card Rank</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option> <option value="12">12</option></select></td><td><input type="number" class="form-control" placeholder="Quantity" min="0"></td><td><button type="button" class="btn btn-default remove" aria-label="Remove"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></button></td></tr></tr>');   
}

$(document).on("click", "button.remove", function() {
    $(this).closest("tr").remove(); 
});