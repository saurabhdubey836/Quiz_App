function check() {
    var amountCorrect = 0;
    for (var i = 1; i <= 4; i++) {
        var radios = document.getElementsByName('group' + i);

        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == "right" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    alert("Correct Responses: " + amountCorrect);
    if(amountCorrect>=3){
        alert("Great!!");
    }else{
        alert("Brush Up and try later!!");
    }

}
