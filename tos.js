var CHARACTER_EXP = [8, 272, 462, 702, 990, 1326, 1691, 2200, 2640, 3120, 3640, 4200, 4800, 5406, 6084, 1755, 4510, 7138, 9765, 12502, 15288, 18156, 21147, 24696, 28014, 31380, 34844, 38464, 42174, 46036, 49980, 54750, 58950, 63294, 67703, 72252, 76941, 81685, 86565, 92610, 97796, 103024, 108384, 113778, 119400, 7752, 19635, 30174, 40221, 50172, 59890, 69690, 79560, 89369, 100162, 110236, 120582, 130944, 141310, 151932, 162676, 173672, 185982, 197259, 208637, 220255, 231966, 243764, 255794, 268056, 282048, 294670, 307360, 320274, 333248, 346442, 359856, 373320, 389250, 403025, 417012, 431211, 445622, 460062, 474895, 20757, 52060, 79296, 104954, 129556, 153648, 177400, 200990, 225295, 248814, 272118, 295400, 318861, 342280, 365645, 389382, 414918, 438816, 462848, 487008, 511290, 535921, 560428, 585280, 612796, 637928, 663390, 688940, 714818, 740776, 766804, 793156, 822784, 849592, 876460, 903640, 931128, 958664, 986508, 1014388, 1046410, 1074700, 1103290, 1132184, 1161372, 1190580, 1220084, 1249600, 1283832, 1314000, 97312, 243312, 369224, 486600, 599168, 710648, 817540, 922676, 1026608, 1129304, 1231336, 1332352, 1433584, 1538840, 1639440, 1739864, 1840408, 1940728, 2041468, 2141940, 2242800, 2350624, 2452136, 2553976, 2655808, 2758304, 2860752, 2963496, 3066864, 3179432, 3283936, 3388320, 3493664, 3598864, 3705024, 3811376, 3918296, 4036232, 4144128, 4252560, 4361536, 4471024, 4581072, 4691216, 4802288, 4926096, 5038368, 5151152, 5264032, 5377776, 220800, 550736, 836336, 1100528, 1352560, 1595920, 1833296, 2065456, 2294336, 2519872, 2749328, 2970960, 3190752, 3409440, 3627056, 3843504, 4059200, 4274544, 4499744, 4714736, 4929264, 5143744, 5358192, 5572992, 5787232, 6002256, 6230768, 6446368, 6662176, 6878240, 7094560, 7311552, 7528704, 7746560, 7981408, 8200864, 8420000, 8640192, 8860992, 9082336, 9304224, 9526720, 9769600, 9993504, 10218400, 10443776, 10670144, 10896512, 11124320, 11375104, 704736, 1756064, 2657696, 3494048, 4289440, 5056768, 5802432, 6544320, 7261056, 7967328, 8664480, 9353952, 10036736, 10714176, 11387328, 12078400, 12745472, 13408832, 14070272, 14729024, 15386304, 16042368, 16696704, 17381696, 18035648, 18688896, 19341824, 19994304, 20647168, 21299392, 21952448, 22644928, 23299008, 23954176, 24609216, 25265344, 25921984, 26579456, 27237952, 27944192, 28605440, 29267584, 29931136, 30595456, 31261184, 31927680, 32649984, 33320064, 33991936, 34665088, 852096, 2121728, 3209088, 4215936, 5180672, 6103296, 6998656, 7873280, 8729984, 9572864, 10403968, 11224704, 12055424, 12860928, 13660544, 14453888];
var TOTAL_CHARACTER_EXP = [8, 280, 742, 1444, 2434, 3760, 5451, 7651, 10291, 13411, 17051, 21251, 26051, 31457, 37541, 39296, 43806, 50944, 60709, 73211, 88499, 106655, 127802, 152498, 180512, 211892, 246736, 285200, 327374, 373410, 423390, 478140, 537090, 600384, 668087, 740339, 817280, 898965, 985530, 1078140, 1175936, 1278960, 1387344, 1501122, 1620522, 1628274, 1647909, 1678083, 1718304, 1768476, 1828366, 1898056, 1977616, 2066985, 2167147, 2277383, 2397965, 2528909, 2670219, 2822151, 2984827, 3158499, 3344481, 3541740, 3750377, 3970632, 4202598, 4446362, 4702156, 4970212, 5252260, 5546930, 5854290, 6174564, 6507812, 6854254, 7214110, 7587430, 7976680, 8379705, 8796717, 9227928, 9673550, 10133612, 10608507, 10629264, 10681324, 10760620, 10865574, 10995130, 11148778, 11326178, 11527168, 11752463, 12001277, 12273395, 12568795, 12887656, 13229936, 13595581, 13984963, 14399881, 14838697, 15301545, 15788553, 16299843, 16835764, 17396192, 17981472, 18594268, 19232196, 19895586, 20584526, 21299344, 22040120, 22806924, 23600080, 24422864, 25272456, 26148916, 27052556, 27983684, 28942348, 29928856, 30943244, 31989654, 33064354, 34167644, 35299828, 36461200, 37651780, 38871864, 40121464, 41405296, 42719296, 42816608, 43059920, 43429144, 43915744, 44514912, 45225560, 46043100, 46965776, 47992384, 49121688, 50353024, 51685376, 53118960, 54657800, 56297240, 58037104, 59877512, 61818240, 63859708, 66001648, 68244448, 70595072, 73047208, 75601184, 78256992, 81015296, 83876048, 86839544, 89906408, 93085840, 96369776, 99758096, 103251760, 106850624, 110555648, 114367024, 118285320, 122321552, 126465680, 130718240, 135079776, 139550800, 144131872, 148823088, 153625376, 158551472, 163589840, 168740992, 174005024, 179382800, 179603600, 180154336, 180990672, 182091200, 183443760, 185039680, 186872976, 188938432, 191232768, 193752640, 196501968, 199472928, 202663680, 206073120, 209700176, 213543680, 217602880, 221877424, 226377168, 231091904, 236021168, 241164912, 246523104, 252096096, 257883328, 263885584, 270116352, 276562720, 283224896, 290103136, 297197696, 304509248, 312037952, 319784512, 327765920, 335966784, 344386784, 353026976, 361887968, 370970304, 380274528, 389801248, 399570848, 409564352, 419782752, 430226528, 440896672, 451793184, 462917504, 474292608, 474997344, 476753408, 479411104, 482905152, 487194592, 492251360, 498053792, 504598112, 511859168, 519826496, 528490976, 537844928, 547881664, 558595840, 569983168, 582061568, 594807040, 608215872, 622286144, 637015168, 652401472, 668443840, 685140544, 702522240, 720557888, 739246784, 758588608, 778582912, 799230080, 820529472, 842481920, 865126848, 888425856, 912380032, 936989248, 962254592, 988176576, 1014756032, 1041993984, 1069938176, 1098543616, 1127811200, 1157742336, 1188337792, 1219598976, 1251526656, 1284176640, 1317496704, 1351488640, 1386153728, 1387005824, 1389127552, 1392336640, 1396552576, 1401733248, 1407836544, 1414835200, 1422708480, 1431438464, 1441011328, 1451415296, 1462640000, 1474695424, 1487556352, 1501216896, 1515670784];

var TOTAL_CLASS_EXP = [0, 58, 267, 653, 1231, 2011, 3004, 4217, 5657, 7330, 9243, 11399, 13804, 16462, 19377, 19377, 22101, 31896, 49925, 76901, 113360, 159739, 216407, 283688, 361869, 451211, 551952, 664312, 788494, 924690, 924690, 940694, 998226, 1104122, 1262573, 1476728, 1749146, 2082002, 2477195, 2936415, 3461191, 4052922, 4712898, 5442318, 6242303, 6242303, 6300279, 6508691, 6892308, 7466305, 8242092, 9228944, 10434734, 11866340, 13529890, 15430922, 17574501, 19965301, 22607666, 25505659, 25505659, 25751492, 26635214, 28261844, 30695734, 33985265, 38169762, 43282615, 49352983, 56406849, 64467699, 73557011, 83694595, 94898883, 107187099, 107187099, 107722729, 109648210, 113192362, 118495398, 125662731, 134780043, 145920087, 159146399, 174515579, 192078811, 211882891, 233970987, 258383227, 285157179, 285157179, 286804549, 292726505, 303626801, 319936671, 341980323, 370021275, 404283283, 444961755, 492230795, 546247787, 607156667, 675090171, 750171835, 832517051];

var CARD_CHARACTER_EXP = [500, 2686, 8442, 22860, 24571, 60312, 142150, 209334, 237943, 541023, 985061, 2420348];
var CARD_CLASS_EXP = [385, 2668, 6500, 17602, 18919, 46440, 109455, 161187, 183216, 416587, 758496, 1863667];

function characterExpFromCard(cardLevel, quantity) {
    return CARD_CHARACTER_EXP[cardLevel - 1] * quantity;
}

function classExpFromCard(cardLevel, quantity) {
    return CARD_CLASS_EXP[cardLevel - 1] * quantity;
}

function totalCharacterExpFromLevel(characterLevel, progression) {
    if(characterLevel) {
        var totalCharacterExp = TOTAL_CHARACTER_EXP[characterLevel - 2];
        if(characterLevel <= TOTAL_CHARACTER_EXP.length && progression) {
            var nextLevelExp = CHARACTER_EXP[characterLevel - 1];
            totalCharacterExp += Math.round(nextLevelExp * progression / 100);
        }
        return totalCharacterExp;
    }
    return 0;
}

function totalClassExpFromRankAndLevel(classRank, classLevel, progression) {
    if (classRank && classLevel) {
        var totalClassExp = TOTAL_CLASS_EXP[(parseInt(classRank) - 1) * 15 + parseInt(classLevel) - 1];
        if(classLevel != 15 && progression) {
            var nextLevelExp = TOTAL_CLASS_EXP[(parseInt(classRank) - 1) * 15 + parseInt(classLevel)] - totalClassExp;
            totalClassExp += Math.round(nextLevelExp * progression / 100);
        }
        return totalClassExp;
    } else {
        return 0;
    }
}

function classRankAndLevelFromExp(exp) {
    var index = 0;
    for (var i = 0; i < TOTAL_CLASS_EXP.length; i++) {
        if (exp < TOTAL_CLASS_EXP[i]) {
            break;
        }
        index++;
    }
    var newClass = {};
    newClass.classRank = Math.floor(index / 15) + 1;
    newClass.classLevel = index % 15;

    return newClass;
}

function characterLevelFromExp(exp) {
    for (var i = 0; i < CHARACTER_EXP.length; i++) {
        if (exp < TOTAL_CHARACTER_EXP[i]) {
            return i + 1;
        }
    }
}

function expFromCards() {
    var characterExp = 0,
        classExp = 0;
    $(".table > tbody > tr").each(function () {
        var level = $(this).find("select").val();
        var quantity = $(this).find("input").val();
        if (level != null && quantity != null) {
            characterExp += characterExpFromCard(level, quantity);
            classExp += classExpFromCard(level, quantity);
        }
    });

    var exp = {};
    exp.characterExp = characterExp;
    exp.classExp = classExp;

    return exp;
}

function fillResults() {
    $("#results > .panel-body").empty();

    var totalCharacterExp = totalCharacterExpFromLevel($("#character-level").val(), $("#character-level-progression").val());
    var totalClassExp = totalClassExpFromRankAndLevel($("#class-rank").val(), $("#class-level").val(), $("#class-level-progression").val());
    $("#results > .panel-body").append('<p>Total Character EXP : ' + totalCharacterExp + '<br>Total Class EXP : ' + totalClassExp + '</p>');
    var exp = expFromCards();
    $("#results > .panel-body").append('<p>Character EXP from cards : ' + exp.characterExp + '<br>Class Exp from cards : ' + exp.classExp + '</p>');
    var newCharacterLevel = characterLevelFromExp(totalCharacterExp + exp.characterExp);
    $("#results > .panel-body").append('<p>Character level after using your cards : ' + newCharacterLevel + '</p>');
    var newClass = classRankAndLevelFromExp(totalClassExp + exp.classExp);
    $("#results > .panel-body").append('<p>Class rank after using your cards : ' + newClass.classRank + '<br>Class level after using your cards : ' + newClass.classLevel + '</p>');
}

function addExpCard() {
    $("table > tbody").append('<tr><td><select id="card-lvl" class="col-sm-2 form-control"><option disabled selected>Card Rank</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option> <option value="12">12</option></select></td><td><input type="number" class="form-control" placeholder="Quantity" min="0"></td><td><button type="button" class="btn btn-default remove" aria-label="Remove"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></button></td></tr></tr>');
}

$(document).on("click", "button.remove", function () {
    $(this).closest("tr").remove();
});

$("#character-level-progression").change(function() {
    var progression = Math.round(parseFloat($(this).val()) * 10) / 10;
    if(progression > 100) {
        progression = 100;
    }
    if(progression < 0) {
        progression = 0;
    }
    $(this).val(progression);
    var characterProgressBar = $("#character-progress");
    characterProgressBar.text(progression + "%");
    characterProgressBar.attr("style", "width: " + progression + "%;")
});

$("#class-level-progression").change(function() {
    var progression = Math.round(parseFloat($(this).val()) * 10) / 10;
    if(progression > 100) {
        progression = 100;
    }
    if(progression < 0) {
        progression = 0;
    }
    $(this).val(progression);
    var classProgressBar = $("#class-progress");
    classProgressBar.text(progression + "%");
    classProgressBar.attr("style", "width: " + progression + "%;")
});

$(document).on({
    mouseenter: function() {
        $(this).toggleClass("btn-danger"); 
    },
    mouseleave : function() {
        $(this).toggleClass("btn-danger"); 
    }
}, ".remove");