function helloConsole() {
    var staticText = 'Made with ❤️ by Demiweb';
    var staticUrl = '> https://demiweb.pro/';
    var hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        var title = '%c';

        for (var i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        var title = 'demiweb';
        var banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        var styler = [];

        var symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();

var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();



//cursor following block

var box = document.getElementById("cursor-id");
var cursorBg = [...document.querySelectorAll('.back-cursor > div')];

function changePosCur(x, y, e) {
    cursorBg.forEach((btn) => {
        btn.style.left = x;
        btn.style.top = y;
    })
}

window.addEventListener('mousemove', function (e) {
    var pos = e.pageX;
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
    // cursorBg.forEach((btn) => {
    //     btn.style.left = e.clientX + "px";
    //     btn.style.top = e.clientY + "px";
    // })


    // if (e.target.closest('.cursor-js')) {
    //     box.classList.add('go-cur');
    //     var cur = e.target.closest('.cursor-js').dataset.cursor;
    //     box.querySelector('.cursor-text').innerHTML = cur;
    // } else {
    //     box.classList.remove('go-cur');
    //     box.querySelector('.cursor-text').innerHTML = '';
    //
    // }
});

//change image
var numberIm = 0;
var amountImg = 85;

var canvCont = document.querySelector('.canvas-cont');
function canvasStarts() {
    if (canvCont) {

        function checkScrolledCanvas() {
            var scrollTop = html.getBoundingClientRect().top * (-1);

            var maxScrollTop = html.offsetHeight - window.innerHeight;
            var scrollFraction = scrollTop / maxScrollTop;
            // console.log(scrollTop + ' log scrolltop - ' + scrollFraction)
            var frameIndex = Math.min(
                frameCount - 1,
                Math.ceil(scrollFraction * frameCount)
            );
            requestAnimationFrame(() => updateImage(frameIndex + 1))

        }

        var canvasInner = document.querySelector('.canvas-bl');
        var contextCanvas = canvasInner.getContext("2d");
        var frameCount = 84;
        var currentFrame = index => (
            `./img/canv/${index.toString()}.png`
        );
        var preloadImages = () => {
            for (var i = 0; i < frameCount; i++) {
                var imgCanvas = new Image();
                imgCanvas.src = currentFrame(i);
            }
        }
        var html = canvCont;
        var imgCanvas = new Image();
        imgCanvas.src = currentFrame(0);
        canvasInner.width=1920;
        canvasInner.height=1080;
        imgCanvas.onload=function(){
            contextCanvas.drawImage(imgCanvas, 0, 0);
        }


        var updateImage = index => {
            if (index < 0) {
                index = 0;
            }
            imgCanvas.src = currentFrame(index);
            contextCanvas.drawImage(imgCanvas, 0, 0);
        }
        checkScrolledCanvas();
        window.addEventListener('scroll', () => {
            checkScrolledCanvas();
            });


        preloadImages()
    }
}
canvasStarts();


//change image


//cursor2
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
        var n = document.createElement("div");
        n.className = "";
        document.body.querySelector('.back-cursor').appendChild(n);
        return n;
    }());
};
// The Dot.prototype.draw() method sets the position of
// the object's <div> node
Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 9; i++) {
    var d = new Dot();
    dots.push(d);
}

// This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
        y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .82;
        y += (nextDot.y - dot.y) * .82;

    });
}

addEventListener("mousemove", function (event) {
    //event.preventDefault();
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();


//cursor2


//animations all
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

function makeGsap() {
    if (window.innerWidth > 1179) {

        new ScrollMagic.Scene({triggerElement: ".stp"})
            .setTween(".stp", {y: "-46%", ease: Linear.easeNone, triggerHook: 0.5, duration: "120%"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".stp2"})
            .setTween(".stp2", {y: "29%", ease: Linear.easeNone, triggerHook: 0.3, duration: "100%"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".stp3"})
            .setTween(".stp3", {y: "-24%", ease: Linear.easeNone, triggerHook: 0.4, duration: "130%"})
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "body.home main .footer"})
            .setTween("body.home main .footer", {y: "54%", ease: Linear.easeNone, triggerHook: 0.4, duration: "110%"})
            .addTo(controller);


        new ScrollMagic.Scene({triggerElement: ".our-work .container"})
            .setTween(".our-work .container .our-work__container", {
                y: "22%",
                ease: Linear.easeNone,
                triggerHook: 0.5,
                duration: "90%"
            })

            // .addIndicators()
            .addTo(controller);
    }
}

// makeGsap();
//animations all

window.addEventListener('mousemove', () => {

})
window.addEventListener('mouseover', (e) => {
    if (e.target.closest('.cursor-js')) {
        box.classList.add('go-cur');
        var cur = e.target.closest('.cursor-js').dataset.cursor;
        box.querySelector('.cursor-text').innerHTML = cur;
    }
    if (e.target.closest('.footer')) {
        document.querySelector('.back-cursor').classList.add('opac')

    }
})
window.addEventListener('mouseout', (e) => {

    // console.log('out')
    if (e.target.closest('.cursor-js')) {
        box.classList.remove('go-cur');
        box.querySelector('.cursor-text').innerHTML = '';
    }
    if (e.target.closest('.footer')) {
        document.querySelector('.back-cursor').classList.remove('opac')
    }
})

//cursor following block
//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 100;
            })
        })
    }
}

addCoutingDelay();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    el.style.animationDelay = el.dataset.animDelay + 'ms';
                    el.style.animationDuration = el.dataset.animDuration + 'ms';
                    el.style.animationName = el.dataset.anim;

                    el.classList.add('done')
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        }
    }
}

scrollAnimations();

//scroll about page

var profT = document.querySelector('.prof-team')

function scrollProf() {
    if (profT) {
        var scrollTopT = profT.getBoundingClientRect().top;
        var profTH = profT.offsetHeight / 6;
        var limit = (profT.offsetHeight - profTH) * -1;
        console.log(scrollTopT + ' scrollTop + ' + profTH);
        if (scrollTopT < limit) {
            profT.classList.add('hide');
            profT.nextElementSibling.classList.add('unhide')
        } else {
            profT.classList.remove('hide');
            profT.nextElementSibling.classList.remove('unhide')


        }
        var maxScrollTop = profT.offsetHeight - window.innerHeight;


    }
}
window.addEventListener('scroll', () => {
    scrollProf();
})
scrollProf();

//scroll about page

var animt = document.querySelectorAll('.anim-t')

function scrollText() {
    if (animt.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    el.classList.add('done')
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animt.forEach(animate => {
            observer.observe(animate)
        })

    }
}

scrollText();

//anim stage all
var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})
        if (window.innerWidth > 991) {
            animStage.forEach((animate, k) => {
                observer.observe(animate);
            })
        }
    }
}

scrollAnimationsStage();


$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);
});

window.onload = () => {

    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);
}
var tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//show seo
var hiddenCarr = [...document.querySelectorAll('.show-text')];


function openHideText() {
    if (hiddenCarr.length) {
        hiddenCarr.forEach((btn) => {
            var hidden = btn.dataset.hidden;
            var show = btn.dataset.show;
            btn.addEventListener('click', () => {
                if (btn.closest('.text-section').classList.contains('visible')) {
                    btn.closest('.text-section').classList.remove('visible');
                    btn.innerHTML = hidden;
                } else {
                    btn.closest('.text-section').classList.add('visible');
                    btn.innerHTML = show;
                }
            })
        })
    }
}

openHideText();

//open hide menu childs

var menuChild = [...document.querySelectorAll('.menu-item-has-children > a')];

function controlChildMenu() {
    if (menuChild.length) {
        menuChild.forEach((btn) => {

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (document.querySelector('.menu-item-has-children.open')) {
                    if (document.querySelector('.menu-item-has-children.open') !== btn.closest('li')) {
                        document.querySelector('.menu-item-has-children.open').classList.remove('open');
                    }
                }
                btn.closest('li').classList.toggle('open');
            })
        })
    }
}

controlChildMenu();

//open hide lang
//parallax

var rellax = new Rellax('.rellax-h', {});
$('.rellax-v').paroller();

//parallax
var menuLang = [...document.querySelectorAll('.lang > span')];

function controlLang() {
    if (menuLang.length) {
        menuLang.forEach((btn) => {

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                btn.closest('.lang').classList.toggle('open');
            })
        })
    }
}

controlLang();

var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');
var backdrop = document.querySelector('.backdrop');

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColored(rec) {
    var n1 = randomNumber(0, 8);
    var n2 = randomNumber(0, 8);
    var n3 = randomNumber(0, 8);
    rec.forEach((btn, k) => {
        btn.classList.remove('gr');
    })
    rec.forEach((btn2, l) => {
        if (l === n1 || l === n2 || l === n3) {
            btn2.classList.add('gr');
        }
    })
}

function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {
            var rects = [...document.querySelectorAll('svg rect')];
            setInterval(() => {
                changeColored(rects)
            }, 1700);

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

//line indicator function

var lineInd = document.querySelector('.line-menu');
var headerMenu = [...document.querySelectorAll('.header-menu ul li')]
var headerMenRect = document.querySelector('.header-menu').getBoundingClientRect();
var brb = headerMenu[1].getBoundingClientRect();
var offset = headerMenRect.right - brb.right;

// console.log(offset);
function lineCur() {
    var cur = document.querySelector('.header-menu ul li.current-menu-item');
    var rightRect2 = cur.getBoundingClientRect().right;
    var width2 = cur.offsetWidth;
    var offSet2 = headerMenRect.right - rightRect2;
    if (cur) {
        lineInd.style.setProperty('--r', `${offSet2}px`);
        lineInd.style.setProperty('--w', `${width2}px`);

    } else {
        lineInd.style.setProperty('--r', `${0}px`);
        lineInd.style.setProperty('--w', `${0}px`);

    }
}

window.addEventListener('resize', () => {
    changeLinePos();
    headerMenRect = document.querySelector('.header-menu').getBoundingClientRect();
    brb = headerMenu[0].getBoundingClientRect();
    offset = headerMenRect.right - brb.right;
});

var classAnim = "animated";
var hoverBtns = document.querySelectorAll(".btn");
var hoverBtns_SPAN = [];

hoverBtns.forEach((element, index) => {
    var addAnimation = false;


    // If The span element for this element does not exist in the array, add it.
    if (!hoverBtns_SPAN[index])
        hoverBtns_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
        hoverBtns[index].style.setProperty('--x', `${e.clientX - element.getBoundingClientRect().left}px`);
        hoverBtns[index].style.setProperty('--y', `${e.clientY - element.getBoundingClientRect().top}px`);

        // Add an animation-class to animate via CSS.
        if (addAnimation) element.classList.add(classAnim);
    });

    element.addEventListener("mouseout", e => {
        hoverBtns[index].style.setProperty('--x', `${e.clientX - element.getBoundingClientRect().left}px`);
        hoverBtns[index].style.setProperty('--y', `${e.clientY - element.getBoundingClientRect().top}px`);
    });
});

function changeLinePos() {
    if (headerMenu.length) {

        lineCur();
        headerMenu.forEach((btn) => {
            var rightRect = btn.getBoundingClientRect().right;
            var width = btn.offsetWidth;
            var offSet = headerMenRect.right - rightRect;
            btn.addEventListener('mouseover', () => {
                lineInd.style.setProperty('--r', `${offSet}px`);
                lineInd.style.setProperty('--w', `${width}px`);

            })
            btn.addEventListener('mouseout', () => {
                lineCur();
            })
        })
    }
}

changeLinePos();



//video modal control

var videoCont = [...document.querySelectorAll('.video-js')];
var videoModal = [...document.querySelectorAll('.video-modal')];

function controlVideo() {
    if (videoCont.length) {
        videoCont.forEach((btn, k) => {
            var vid = btn.querySelector('video');
            var srcVid = vid.src;
            var posterVid = vid.poster;
            var modVid = videoModal[0].querySelector('video');
            var modSrc = modVid.src;
            var modPoster = modVid.poster;
            // console.log(srcVid);
            btn.addEventListener('click', () => {
                videoModal[0].querySelector('video').src = srcVid;
                modPoster = posterVid;
                videoModal[0].classList.add('opened');
                document.body.classList.add('no-scroll');

            });
            videoModal[0].addEventListener('click', () => {
                videoModal[0].classList.remove('opened');
                document.body.classList.remove('no-scroll');
                videoModal[0].querySelector('video').src = '';
                modPoster = '';

            })
            modVid.addEventListener('click', (e) => {
                e.stopPropagation();
            })
            videoModal[0].querySelector('.close-video').addEventListener('click', () => {
                videoModal[0].classList.remove('opened');
                document.body.classList.remove('no-scroll');
                videoModal[0].querySelector('video').src = '';
                modPoster = '';
            })
        })
    }
}

controlVideo();
//video modal control

//typed
function ifGotTyped() {
    if (document.querySelector('.bg-typed pre.txt + pre')) {
        var typed = new Typed('.bg-typed pre.txt + pre', {
            strings: [`${document.querySelector('.bg-typed pre.txt').innerHTML}`],
            typeSpeed: 7,
            showCursor: false,
            startDelay: 200,
            loop: false,
        });
    }
}

ifGotTyped();

//typed

//click out work

var headWork = [...document.querySelectorAll('.single-our-work__head')];

function openWorkHead() {
    if (headWork.length) {
        headWork.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.single-our-work').classList.toggle('open');
            })
        })
    }
}

openWorkHead();

//click out work
//marquee
var marqueeContent = document.querySelector(".marquee-cont");

function marqqueFnc() {
    if (marqueeContent) {
        var root = document.documentElement;
        var marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");



        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (var i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }
}

marqqueFnc();


//modals

//marquee


