document.addEventListener("DOMContentLoaded", function (event) {
    // array with texts to type in typewriter
    var dataText = "Hi.\n My name is\n Valentin\n This is my portfolio \n Enjoy :)";
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i) {
        // chekc if text isn't finished yet
        if (i < text.length + 1) {
            // add next character to h1
            var content = $(".typing-effect").html();
            if (content === undefined) {
                content = ""
            }
            var newChar = text.charAt(i - 1);
            if (newChar === "\n") {
                $(".typing-effect").html(content + "<br><span>");

                setTimeout(function () {
                    typeWriter(text, i + 1);
                }, 250);

            }
            else {
                $(".typing-effect").html(content + newChar);
                // wait for a while and call this function again for next character
                setTimeout(function () {
                    typeWriter(text, i + 1);
                }, 60);
            }
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == "undefined") {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }

        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText, 0)

        }
    }
    // start the text animation
    StartTextAnimation(0);
});
