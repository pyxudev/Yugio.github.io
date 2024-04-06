const http = require('http');
const fs = require('fs');

exports.handler = async (event) => {
    const html = `
    <html>
        <head>
            <meta http-equiv="content-type" charset="UTF-8">
            <link href="http://fonts.googleapis.com/earlyaccess/notosansjp.css">
            <title>先攻はいただくぜ！</title>
            <link rel="icon" href="https://www.gingagensokyo.com/icon/anime/duelmonsters/osiris.png">
        </head>
        <body>
            <div class="screen" onclick="random()">
                <span class="vis">タップしてスタート</span>
                <div class="top">
                </div>
                <div class="bottom">
                </div>
            </div>
        </body>
    </html>
    
    <style>
        body {
            font-family: 'Noto Sans JP', sans-serif;
        }
        .screen {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
        .inv {
            display: none;
        }
        .top {
            height: 50%;
            transform: scaleX(-1) scaleY(-1);
            display: block;
        }
        .bottom {
            height: 50%;
            display: block;
        }
        .red {
            background-color: red;
        }
        .blue {
            background-color: blue;
        }
        p {
            text-align: center;
            font-weight: bold;
            font-size: 5.0em;
            color: white;
            margin: 0;
            padding-top: 100px;
        }
    </style>
    
    <script>
        function random() {
            var ini_text = document.getElementsByClassName("vis")[0];
            var inv = document.getElementsByClassName("inv")[0];
            var top = document.getElementsByClassName("top")[0];
            var bot = document.getElementsByClassName("bottom")[0];
            if (inv != null) {
                window.location.reload();
            }
            else {
                ini_text.classList.add("inv");
                var math = Math.random();
                if (math < 0.5) {
                    top.classList.add("blue");
                    bot.classList.add("red");
                }
                else if (math > 0.5) {
                    top.classList.add("red");
                    bot.classList.add("blue");
                }
    
                var red = document.getElementsByClassName("red")[0];
                var blue = document.getElementsByClassName("blue")[0];
                var new_red = document.createElement("p");
                var new_blue = document.createElement("p");
                new_red.textContent = "先攻";
                new_blue.textContent = "後攻";
                red.appendChild(new_red); 
                blue.appendChild(new_blue);
                new_red.classList.add("text_1");
                new_blue.classList.add("text_2");
            }
        }
    </script>
    `;
    
    // TODO implement
    const response = {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html',
        },
        body: html,
    };
    return response;
};
