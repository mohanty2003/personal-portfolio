// Initial File
//Loader Starts
alphabet = new Array("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", "/", "?", "<", ">", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
letter_count = 0;
el = $("#loading");
word = el.html().trim();
finished = false;

el.html(">");
for (var i = 0; i < word.length; i++) {
    el.append("<span>" + word.charAt(i) + "</span>");
}

setTimeout(write, 45);
incrementer = setTimeout(inc, 100);

function write() {
    for (var i = letter_count; i < word.length; i++) {
        var c = Math.floor(Math.random() * 36);
        $("span")[i].innerHTML = alphabet[c];
    }
    if (!finished) {
        setTimeout(write, 5);
    }
}

function inc() {
    $("span")[letter_count].innerHTML = word[letter_count];
    $("span:eq(" + letter_count + ")").addClass("glow");
    letter_count++;
    if (letter_count >= word.length) {
        finished = true;
        setTimeout(reset, 150);
    } else {
        setTimeout(inc, 200);
    }
}

function reset() {
    letter_count = 0;
    finished = false;
    setTimeout(inc, 1000);
    setTimeout(write, 75);
    $("span").removeClass("glow");
}
//Loader Ends