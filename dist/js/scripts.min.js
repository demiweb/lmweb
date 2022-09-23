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
        canvasInner.width = 1920;
        canvasInner.height = 1080;
        imgCanvas.onload = function () {
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

//category filter

let tagsCat = [...document.querySelectorAll('.dev-hero__tags a')];
let projCat = [...document.querySelectorAll('.our-projects__list .single-project')];


function changeActiveCat() {
    if (tagsCat.length) {
        tagsCat.forEach((btn, k) => {
            if (btn.classList.contains('active')) {
                let data = btn.dataset.cat;
                let needProj = '';
                if (data === 'all') {
                    needProj = projCat;
                } else {
                    needProj = [...document.querySelectorAll(`.single-project.${data}`)];
                }

                needProj.forEach((blc) => {
                    blc.style.display = 'flex';
                    setTimeout(() => {
                        blc.style.opacity = '1';
                    }, 200);
                })
            }
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let data = btn.dataset.cat;

                let needProj = [...document.querySelectorAll(`.single-project.${data}`)];
                if (btn.classList.contains('active')) {

                } else {
                    if (data === 'all') {
                        needProj = projCat;
                        tagsCat.forEach((btn2) => {
                            btn2.classList.remove('active');
                        });
                        btn.classList.add('active');
                        needProj.forEach((blc) => {
                            blc.style.display = 'flex';
                            setTimeout(() => {
                                blc.style.opacity = '1';
                            }, 300);
                        })
                    } else {
                        tagsCat.forEach((btn2) => {
                            btn2.classList.remove('active');
                        });
                        btn.classList.add('active');
                        projCat.forEach((blc2) => {
                            blc2.style.opacity = '0';
                            setTimeout(() => {
                                blc2.style.display = 'none';
                            }, 300);
                        });
                        setTimeout(() => {
                            needProj.forEach((blc) => {
                                blc.style.display = 'flex';
                                setTimeout(() => {
                                    blc.style.opacity = '1';
                                }, 300);
                            })
                        }, 300);
                    }


                }


            })
        })
    }
}

changeActiveCat();
//category filter


//change image

//scroll notebook

let noteBg = document.querySelector('.conts-notes');

function showNoteHide() {

}

//scroll notebook


//animations all

//swipers

var prodGallery = [...document.querySelectorAll('.our-team__slider.js-slider')];

function prodSlider() {
    if (!prodGallery.length) {

    } else {

        function U(t, e) {
            return t.transformEl ? e.find(t.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) : e
        }

        prodGallery.forEach((sld) => {

            let sldCont = sld.querySelector('.our-team__slider-cont');
            let sldNext = sld.querySelector('.slides-btn__next');
            let sldPrev = sld.querySelector('.slides-btn__prev');
            let t = 0;
            if (window.innerWidth < 769) {
                t = 0;
            } else {
                t = 5;
            }
            const swiper2 = new Swiper(sldCont, {
                init: 1,
                effect: "cards",
                perspective: false,
                allowTouchMove: 0,
                watchSlidesProgress: true,
                virtualTranslate: true,
                loopedSlides: 3,
                preventInteractionOnTransition: false,
                speed: 300,
                loop: true,
                pagination: {
                    el: ".our-member__bot .numbs",
                    type: "fraction",
                },
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                on: {
                    setTranslate: e => {
                        const {slides: s} = e, i = {slideShadows: 1, transformEl: null};
                        for (let e = 0; e < s.length; e += 1) {
                            const o = s.eq(e), n = o[0].progress, r = Math.min(Math.max(n, -6), 4),
                                a = o[0].swiperSlideOffset;
                            let h = -Math.abs(Math.round(n)) + s.length, l = t ? 20 * (0 - r) - a : 1 - r - a,
                                c = t ? 0 : "".concat(10 * -(0 - r), "px"), d = 1 + .05 * r;
                            r < 0 ? l = "".concat(l, "px") : r > 0 ? (l = "".concat(l, "px"), c = "200vh", d = .5, h = s.length + 1) : l = "".concat(l, "px");
                            const u = "".concat(r < 0 ? 1 + (1 - d) * r : 1 - (1 - d) * r),
                                m = "translate3d(".concat(l, ", ").concat(c, ", 0px) scale(").concat(u, ")");
                            o[0].style.zIndex = h, U(i, o).transform(m);
                        }
                    }, setTransition: (t, e) => {
                        t.slides.transition(e), function (t) {
                            const {swiper: e, duration: s, transformEl: i, allSlides: o} = t, {slides: n, activeIndex: r, $wrapperEl: a} = e;
                            if (e.params.virtualTranslate && 0 !== s) {
                                let t, s = !1;
                                t = o ? i ? n.find(i) : n : i ? n.eq(r).find(i) : n.eq(r), t.transitionEnd((() => {
                                    if (s) return;
                                    if (!e || e.destroyed) return;
                                    s = !0, e.animating = !1;
                                    const t = ["webkitTransitionEnd", "transitionend"];
                                    for (let e = 0; e < t.length; e += 1) a.trigger(t[e])
                                }))
                            }
                        }({swiper: t, duration: e, transformEl: null})
                    }
                }

            });

            sld.addEventListener('click', () => {
                sld.querySelector('.slides-btn__next').click();
            });
        })
    }
}

prodSlider();

//scroll slider

var scroGallery = [...document.querySelectorAll('.our-partners-slider.js-slider')];

function scroSlider() {
    if (!scroGallery.length) {

    } else {
        scroGallery.forEach((sld) => {
            let sldCont = sld.querySelector('.our-partners__cont');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,

                autoplay: false,
                spaceBetween: 15,

                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    1390: {
                        slidesPerView: 'auto',
                        spaceBetween: 180,
                    },
                    1110: {
                        slidesPerView: 'auto',
                        spaceBetween: 90,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },

                }


            });
        })
    }
}

scroSlider();

//scroll slider
//swipers
//animations all

//image 3d rotating


// $('.cardBottom').mouseleave(function(){
//     $('.card').addClass('restore');
// });
function obj_hover_rotate($hover_obj, $wrap_obj, $move_obj) {
    $($hover_obj).mousemove(function (ev) {
        // var clientHeight = $(window).height;
        // var clientWidth = $(window).width;
        // $('.card').removeClass('restore')
        var oEvent = ev || event;


        var cardWidth = parseInt($($wrap_obj).css('width'));
        var cardHeight = parseInt($($wrap_obj).css('height'));
        var cardLeft = window.innerWidth / 2;

        var cardTop = parseInt(document.querySelector($wrap_obj).getBoundingClientRect().top);

        // console.log(oEvent.clientX + ' left = ' + cardTop);
        var centerDisX = oEvent.clientX - cardLeft;
        var centerDisY = oEvent.clientY - cardTop;
        // console.log(centerDisX)


        //$('.txt').val(centerDisX + ", "+ centerDisY);
        var degX = (Math.abs(centerDisY) / (cardHeight / 2)) * 8;
        var degY = (Math.abs(centerDisX) / (cardWidth / 2)) * 18;
        //$('.txt').val(degX + ", "+ degY);

        if (centerDisY < 0 && centerDisX < 0) {
            $($move_obj).css({'transform': 'translate(0, 0) rotateX(' + degX + 'deg) rotateY(-' + degY + 'deg)'});
        }
        if (centerDisY < 0 && centerDisX > 0) {
            $($move_obj).css({'transform': 'translate(0, 0) rotateX(' + degX + 'deg) rotateY(' + degY + 'deg)'});
        }
        if (centerDisY > 0 && centerDisX < 0) {
            $($move_obj).css({'transform': 'translate(0, 0) rotateX(-' + degX + 'deg) rotateY(-' + degY + 'deg)'});
        }
        if (centerDisY > 0 && centerDisX > 0) {
            $($move_obj).css({'transform': 'translate(0, 0) rotateX(-' + degX + 'deg) rotateY(' + degY + 'deg)'});
        }
    });
}


function ifGetRotatingImage() {
    if (document.querySelector('.dev-tools__pic')) {
        obj_hover_rotate("body", ".dev-tools__pic", ".img-rot");

    } else {

    }
}

// ifGetRotatingImage();
//image 3d rotating
//dev-tool

const cardTool = [...document.querySelectorAll(".dev-tool")];
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 23;

function goHoverCardTool() {
    if (cardTool.length) {
        cardTool.forEach((btn) => {
            if (!motionMatchMedia.matches) {
                btn.addEventListener("mousemove", handleHover);
                btn.addEventListener("mouseleave", resetStyles);
            }
        })
    }
}

goHoverCardTool()

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms
 */
function handleHover(e, btn) {
    const {clientX, clientY, currentTarget} = e;
    const {clientWidth, clientHeight, offsetLeft, offsetTop} = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = ((vertical * THRESHOLD - THRESHOLD / 0.8) + 368).toFixed(2);

    e.target.closest('.dev-tool').style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e, btn) {
    e.target.closest('.dev-tool').style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}


//dev-tool
//text repeating
const getHeight = el => {
    const computedStyle = getComputedStyle(el);

    let elementHeight = el.clientHeight;  // height with padding
    elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    return elementHeight;
}

class RepeatTextScrollFx {
    // DOM elements
    DOM = {
        // main element ([data-text-rep])
        el: null,
        // all text spans except the last one (this will be the centered one and doesn't translate
        words: null,
    }
    totalWords = 9;
    tyIncrement = 14;
    delayIncrement = 0.08;
    scrollTimeline;
    observer;

    /**
     * Constructor.
     * @param {NodeList} Dom_el - main element ([data-text-rep])
     */
    constructor(Dom_el) {
        this.DOM.el = Dom_el;
        this.layout();
        this.setBoundaries();
        this.createScrollTimeline();
        this.createObserver();

        window.addEventListener('resize', () => this.setBoundaries());
    }

    /**
     * Creates the text spans inside the main element
     */
    layout() {
        const halfWordsCount = Math.floor(this.totalWords / 2);
        let innerHTML = '';

        for (let i = 0; i < this.totalWords; ++i) {

            let ty;
            let delay;

            if (i === this.totalWords - 1) {
                ty = 0;
                delay = 0;
            } else if (i < halfWordsCount) {
                ty = halfWordsCount * this.tyIncrement - this.tyIncrement * i;
                delay = this.delayIncrement * (halfWordsCount - i) - this.delayIncrement

            } else {
                ty = -1 * (halfWordsCount * this.tyIncrement - (i - halfWordsCount) * this.tyIncrement);
                delay = this.delayIncrement * (halfWordsCount - (i - halfWordsCount)) - this.delayIncrement
            }

            innerHTML += `<span data-delay="${delay}" data-ty="${ty}">${this.DOM.el.innerHTML}</span>`;
        }

        this.DOM.el.innerHTML = innerHTML;
        this.DOM.el.classList.add('text-rep');

        this.DOM.words = [...this.DOM.el.querySelectorAll('span')].slice(0, -1);
    }

    /**
     * sets the padding bottom and margin top given the amount that the words will translate up/down
     */
    setBoundaries() {
        // Set up the margin top and padding bottom values
        const paddingBottomMarginTop = getHeight(this.DOM.el) * Math.floor(this.totalWords / 2) * this.tyIncrement / 100;
        gsap.set(this.DOM.el, {
            marginTop: paddingBottomMarginTop,
            paddingBottom: paddingBottomMarginTop
        });
    }

    /**
     * gsap animation timeline
     * translates the text spans when the element enters the viewport
     */
    createScrollTimeline() {
        this.scrollTimeline = gsap.timeline({paused: true})

            .to(this.DOM.words, {
                duration: 1,
                ease: 'none',
                startAt: {opacity: 0},
                opacity: 1,
                yPercent: (_, target) => target.dataset.ty,
                delay: (_, target) => target.dataset.delay
            }, 0)
            .to(this.DOM.words, {
                duration: 1,
                ease: 'none',
                opacity: 0,
                yPercent: 0,
                delay: (_, target) => target.dataset.delay
            });
    }

    /**
     * Intersection Observer
     * Updates the timeline progress when the element is in the viewport
     */
    createObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px',
            threshold: 0
        };

        // credits: from https://medium.com/elegant-seagulls/parallax-and-scroll-triggered-animations-with-the-intersection-observer-api-and-gsap3-53b58c80b2fa
        this.observer = new IntersectionObserver(entry => {
            if (entry[0].intersectionRatio > 0) {

                if (!this.isLoaded) {
                    this.isLoaded = true;
                }
                gsap.ticker.add(this.progressTween);

            } else {

                if (this.isLoaded) {
                    gsap.ticker.remove(this.progressTween);
                } else {
                    this.isLoaded = true;
                    // add and remove immediately
                    gsap.ticker.add(this.progressTween, true);
                }

            }
        }, observerOptions);

        this.progressTween = () => {
            // Get scroll distance to bottom of viewport.
            const scrollPosition = (window.scrollY + window.innerHeight);
            // Get element's position relative to bottom of viewport.
            const elPosition = (scrollPosition - this.DOM.el.offsetTop);
            // Set desired duration.
            const durationDistance = (window.innerHeight + this.DOM.el.offsetHeight);
            // Calculate tween progresss.
            const currentProgress = (elPosition / durationDistance);
            // Set progress of gsap timeline.
            this.scrollTimeline.progress(currentProgress);
        }

        this.observer.observe(this.DOM.el);
    }
}

document.querySelectorAll('.dev-tools__word p').forEach(textEl => {
    new RepeatTextScrollFx(textEl);
});

//text repeating

window.addEventListener('mousemove', () => {

});
window.addEventListener('mouseover', (e) => {
    if (e.target.closest('.cursor-js')) {
        box.classList.add('go-cur');
        var cur = e.target.closest('.cursor-js').dataset.cursor;
        box.querySelector('.cursor-text').innerHTML = cur;
    }
    if (e.target.closest('.footer')) {
        document.querySelector('.back-cursor').classList.add('opac')

    }
});
window.addEventListener('mouseout', (e) => {

    // console.log('out')
    if (e.target.closest('.cursor-js')) {
        box.classList.remove('go-cur');
        box.querySelector('.cursor-text').innerHTML = '';
    }
    if (e.target.closest('.footer')) {
        document.querySelector('.back-cursor').classList.remove('opac')
    }
});

//cursor following block

//cursors follow btn


var mArea = [...document.querySelectorAll('.btn-r-c')];

// --- BUTTON
function gsapBtnMagnet() {
    if (mArea.length) {
        mArea.forEach((btn) => {
            let btn2 = btn.querySelector('.btn-round');
            $(btn).mouseleave(function (e) {
                TweenMax.to(this, 0.3, {});
                TweenMax.to(btn2, 0.3, {scale: 1, x: 0, y: 0});
            });

            $(btn).mouseenter(function (e) {
                TweenMax.to(this, 0.3, {});
                TweenMax.to(btn2, 0.3, {scale: 1});
            });

            $(btn).mousemove(function (e) {
                callParallax(e, btn2);
            });

            function callParallax(e, targ) {
                parallaxIt(e, targ, 80);
            }

            function parallaxIt(e, target, movement) {
                var $this = $(btn2);
                var relX = e.pageX - $this.offset().left;
                var relY = e.pageY - $this.offset().top;

                TweenMax.to(target, 0.3, {
                    x: (relX - $this.width() / 2) / $this.width() * movement,
                    y: (relY - $this.height() / 2) / $this.height() * movement,
                    ease: Power2.easeOut
                });
            }
        })
    }
}

gsapBtnMagnet();

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
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

var reviewBg = document.querySelectorAll('.review-bg');

function scrollRevBg() {
    if (reviewBg.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target;
                if (entry.isIntersecting) {


                    [...el.querySelectorAll('path')].forEach((btn) => {
                        btn.classList.add('done');
                    });
                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            reviewBg.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            reviewBg.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollRevBg();

var bgHides = document.querySelectorAll('.bg-hides')

function scrollBg() {
    if (bgHides.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {


                    el.classList.add('done');
                    entry.target.closest('.father-hides').classList.add('hide-text')
                    entry.target.closest('.father-hides').classList.add('always')
                    observer.unobserve(entry.target);
                } else {
                    el.classList.remove('done');
                    entry.target.closest('.father-hides').classList.remove('hide-text')

                }

            })
        }, {threshold: .45})
        if (window.innerWidth > 991) {
            bgHides.forEach(animate => {
                observer.observe(animate)
            })
        } else {

        }
    }
}

scrollBg();

//scroll our-section

var ourSec = [...document.querySelectorAll('.our-section')];

function ourSecScroll() {
    if (ourSec.length) {
        ourSec.forEach((btn) => {
            let h = btn.offsetHeight;

            let btnToTop = btn.getBoundingClientRect().bottom;
            let part = 140 - ((btnToTop / h) * 100);
            let dp = btn.querySelector('.drop-lines');

            console.log(part);
            console.log(btnToTop);
            let lines = btn.querySelectorAll('.line');

            if (part >= 100) {
                part = 100;
                lines.forEach((ln, k) => {
                    setTimeout(() => {
                        ln.style.height = `${part}%`;
                    }, k * 40)

                });

                dp.style.setProperty('--wid', '100%');
            } else {
                part = 140 - ((btnToTop / h) * 100);
                lines.forEach((ln, k) => {
                    setTimeout(() => {
                        ln.style.height = `${part}%`;
                    }, k * 40)
                });

                dp.style.setProperty('--wid', '0');
            }
        })
    }
}

ourSecScroll();
window.addEventListener('scroll', () => {
    ourSecScroll();
})

//scroll our-section

//scroll about page
//anim canvas words
var jsAnimBlocks = [...document.querySelectorAll('.anim-w')];
var jsAnimTrig = [...document.querySelectorAll('.single-trig')];

function inViewport(el) {
    var elH = el.getBoundingClientRect().height,
        H = window.innerHeight,
        r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
    return Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H));
}

var resScrl = 1;
window.onscroll = function (e) {
    // print "false" if direction is down and "true" if up
    if (this.oldScroll > this.scrollY) {
        resScrl = -1;
    } else {
        resScrl = 1;
    }
    this.oldScroll = this.scrollY;
};


var Visible3 = function (target, k) {
    if (!jsAnimBlocks.length) {

    } else {


        var btmToDown = target.getBoundingClientRect().bottom - window.innerHeight;
        var topToTop = target.getBoundingClientRect().top;
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };
        // console.log('el = ' + k + ' targetPos: top: ' + target.getBoundingClientRect().top + ' window.height = ' + window.innerHeight);
        if (btmToDown < 0 && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            topToTop > 0) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            jsAnimBlocks[k].classList.add('done');
            jsAnimBlocks[k].classList.remove('hide');
            jsAnimBlocks[k].classList.remove('hideBot');
            if (k === 0) {
                document.querySelector('.prof-team__info').classList.add('hide');
            }
            setTimeout(() => {
                // jsAnimBlocks[k].classList.add('done');
                // if (target.previousElementSibling) {
                //     jsAnimBlocks[k].previousElementSibling.classList.add('hide');
                //
                // }
                // jsAnimBlocks[k].classList.remove('hide');

            }, 60)


        } else {

            if (resScrl >= 1) {
                jsAnimBlocks[k].classList.add('hide');
                jsAnimBlocks[k].classList.remove('hideBot');

            } else {
                jsAnimBlocks[k].classList.add('hideBot');
                jsAnimBlocks[k].classList.remove('hide');
                if (jsAnimBlocks[0].classList.contains('done')) {
                    document.querySelector('.prof-team__info').classList.remove('hide');
                }

            }
            // print "false" if direction is down and "true" if up


            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimTrig.forEach((el, k) => {
        setTimeout(() => {
            Visible3(el, k);
        }, k * 30)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimTrig.forEach((el, k) => {
    setTimeout(() => {
        Visible3(el, k);
    }, k * 30)
});

//anim canvas words


var profT = document.querySelector('.prof-team')

function scrollProf() {
    if (profT) {
        var scrollTopT = profT.getBoundingClientRect().top;
        var profTH = profT.offsetHeight / 6;
        var limit = (profT.offsetHeight - profTH) * -1;
        // console.log(scrollTopT + ' scrollTop + ' + profTH);
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

//smooth try


//smooth try

$(".btn-go-dwn").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".dev-hero__bot").offset().top
    }, 500);
});

function checkMatrixCanvas() {
    if ([...document.querySelectorAll('.matrix-canvas')].length) {
        let canvasMatrix = document.querySelector('.matrix-canvas'),
            ctx = canvasMatrix.getContext('2d');
        canvasMatrix.width = window.innerWidth;
        canvasMatrix.height = window.innerHeight;
        let fontSize = 10,
            columns = canvasMatrix.width / fontSize;
        let drops = [];
        for (var i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        if (window.innerWidth < 800) {
            fontSize = 18;
            columns = canvasMatrix.width / fontSize;
            for (var i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        }

        //canvas matrix

        var lettersMatrix = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
        lettersMatrix = lettersMatrix.split('');

        function draws2() {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, canvasMatrix.width, canvasMatrix.height);
            for (var i = 0; i < drops.length; i++) {
                var text = lettersMatrix[Math.floor(Math.random() * lettersMatrix.length)];
                ctx.fillStyle = '#00FFCC';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;
                if (drops[i] * fontSize > canvasMatrix.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }

        setInterval(draws2, 37);


//canvas matrix

    }
}

checkMatrixCanvas();

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
        }, {threshold: .4})

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

var whiBgBlc = [...document.querySelectorAll('.white-bg')];

var whiteBlcFn = function (target) {
    if (whiBgBlc.length) {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top - 50,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.top && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            setTimeout(() => {
                document.querySelector('.header').classList.add('white');
            }, 60)


        } else {
            document.querySelector('.header').classList.remove('white');
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
}
window.addEventListener('scroll', function () {
    whiBgBlc.forEach((el, k) => {
        setTimeout(() => {
            whiteBlcFn(el);
        }, k * 30)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

whiBgBlc.forEach((el, k) => {
    setTimeout(() => {
        whiteBlcFn(el);
    }, k * 30)
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
let cardsImages = [...document.querySelectorAll('.single-project .card')];

function cardsMovement() {
    if (cardsImages.length) {
        cardsImages.forEach((btn, k) => {
            let topTop = btn.getBoundingClientRect().top - window.innerHeight;
            let botTop = btn.getBoundingClientRect().bottom;
            // console.log(topTop + ' bot = ' + botTop + ' height ' + window.innerHeight)
            if (topTop <= 0 && botTop >= 0) {
                let trans = botTop / 11;
                if ((k + 1) % 2 === 0) {

                    if (btn.querySelector('img')) {
                        if (window.innerWidth < 600) {
                            trans = trans / 2;
                        }
                        btn.querySelector('img').style.transform = `translate(0, -${trans}px)`;
                    } else {

                        btn.querySelector('svg').style.transform = `translate(0, -${trans}px)`;
                    }
                } else {
                    trans = -trans;
                    if (btn.querySelector('img')) {
                        if (window.innerWidth < 600) {
                            trans = trans / 2;
                        }
                        btn.querySelector('img').style.transform = `translate(0, ${-trans * 1.5}px)`;
                    } else {

                        btn.querySelector('svg').style.transform = `translate(0, ${-trans * 1.5}px)`;
                    }


                }
            }
        })
    }
}

let paralls = [...document.querySelectorAll('.paralls')];

function parallsRoll() {
    if (paralls.length) {
        paralls.forEach((btn, k) => {
            let topTop = btn.getBoundingClientRect().top - window.innerHeight;
            let botTop = btn.getBoundingClientRect().bottom;
            // console.log(topTop + ' bot = ' + botTop + ' height ' + window.innerHeight)
            if (topTop <= 0 && botTop >= 0) {
                let trans = botTop / 11;
                if ((k + 1) % 2 === 0) {

                    if (btn.querySelector('img')) {
                        if (window.innerWidth < 600) {
                            trans = trans / 2;
                        }
                        btn.querySelector('img').style.transform = `translate(0, -${trans}px)`;
                    } else {

                        btn.querySelector('svg').style.transform = `translate(0, -${trans}px)`;
                    }
                } else {
                    trans = -trans;
                    if (btn.querySelector('img')) {
                        if (window.innerWidth < 600) {
                            trans = trans / 2;
                        }
                        btn.querySelector('img').style.transform = `translate(0, ${-trans * 1.5}px)`;
                    } else {

                        btn.querySelector('svg').style.transform = `translate(0, ${-trans * 1.5}px)`;
                    }


                }
            }
        })
    }
}

parallsRoll();
cardsMovement();
window.addEventListener('scroll', () => {
    cardsMovement();
    parallsRoll();
})

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

//change colored sqr
function randomNumber2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColored2(rec) {
    var n1 = randomNumber(0, 15);
    var n2 = randomNumber(0, 15);
    var n3 = randomNumber(0, 15);
    rec.forEach((btn, k) => {
        btn.classList.remove('gr');
    })
    rec.forEach((btn2, l) => {
        if (l === n1 || l === n2 || l === n3) {
            btn2.classList.add('gr');
        }
    })
}

let sqrBurg = [...document.querySelectorAll('.dev-hero__sqr')]

function burgerControl2() {
    if (sqrBurg.length) {
        sqrBurg.forEach((btn) => {
            var rects = [...document.querySelectorAll('svg path')];
            setInterval(() => {
                changeColored2(rects)
            }, 1400);

        })
    }
}

burgerControl2();

//change colored sqr
//line indicator function

var lineInd = document.querySelector('.line-menu');
var headerMenu = [...document.querySelectorAll('.header-menu ul li')]
var headerMenRect = document.querySelector('.header-menu').getBoundingClientRect();
var brb = headerMenu[1].getBoundingClientRect();
var offset = headerMenRect.right - brb.right;

// console.log(offset);
function lineCur() {
    if(document.querySelector('.header-menu ul li.current-menu-item')) {
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


let startReview = [...document.querySelectorAll('.single-quiz')];
let backQuiz = [...document.querySelectorAll('.get-back-quiz')];
let reviewSteps = [...document.querySelectorAll('.review-step')];
let overQuiz = [...document.querySelectorAll('.btn--over-quiz')];
let reviewLine = [...document.querySelectorAll('.single-quiz-line')];

function starProcessReview() {
    if (startReview.length) {
        startReview.forEach((btn) => {
            let step = btn.closest('.review-step').dataset.step;
            let next = btn.closest('.review-step').dataset.next;

            btn.addEventListener('click', (e) => {
                if (next === 'end') {
                    let fromL = step - 1;
                    reviewLine[0].closest('.quiz-line').classList.add('done');
                    reviewLine[fromL].classList.add('done');
                    reviewLine[fromL].classList.remove('visible');

                } else {
                    let fromL = step - 1;
                    reviewLine[fromL].classList.add('done');
                    reviewLine[step].classList.add('visible');
                    reviewLine[fromL].classList.remove('visible');
                }
                // e.stopPropagation();
                // e.preventDefault();


                document.querySelector(`.review-step--${step}`).classList.remove('visible');
                document.querySelector(`.review-step--${next}`).classList.add('visible');


            })
        });
        overQuiz.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.closest('.quiz-form').classList.add('hide');
                document.querySelector('.review-thanks').classList.add('visible');
            })
        });

        backQuiz.forEach((back) => {
            back.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let step = back.closest('.review-step').dataset.step;
                let prev = back.closest('.review-step').dataset.prev;
                reviewLine[0].closest('.quiz-line').classList.remove('done');
                reviewLine[prev - 1].classList.add('visible');
                document.querySelector(`.review-step--${step}`).classList.remove('visible');
                document.querySelector(`.review-step--${prev}`).classList.add('visible');

            })
        });
        reviewLine.forEach((btn2, k) => {
            btn2.addEventListener('click', () => {
                if (btn2.classList.contains('done')) {
                    reviewLine.forEach((btn3) => {
                        btn3.classList.remove('visible');
                    });
                    reviewSteps.forEach((btn4) => {
                        btn4.classList.remove('visible');
                    });
                    reviewSteps[k].classList.add('visible');
                    btn2.classList.add('visible');
                }
            })
        })
    }
}

starProcessReview();

let ourDateBlock = [...document.querySelectorAll('.date-js-format')];

function getCurrentDateFormat() {
    if (ourDateBlock.length) {
        ourDateBlock.forEach((btn) => {
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            let d = btn.querySelector('.djf-d');
            let m = btn.querySelector('.djf-m');
            let y = btn.querySelector('.djf-y');
            btn.innerHTML = dateObj.toLocaleDateString('pt-PT');
            // d.innerHTML = day;
            // m.innerHTML = month;
            // y.innerHTML = year;
        })
    }
}

getCurrentDateFormat();



