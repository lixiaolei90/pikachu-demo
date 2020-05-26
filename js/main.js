! function() {
    let code = ` 
 /*
  * 比卡丘开始出击
  */

 /*
  * 鼻子 我的鼻子
  */

    .nose {

        border: 12px solid;
        border-radius: 20px;
        border-color: black transparent transparent transparent;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
    }

/*
 * 我的大眼睛
 */

    .eye {
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }

    .eye::after {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        top: -1px;
        border: 2px solid #000000;
    }

    .eye.left {
        right: 50%;
        margin-right: 90px;
    }

    .eye.right {
        left: 50%;
        margin-left: 90px;
    }

/*
 * 英俊的脸庞
 */

    .face {
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
    }

    .face.left {
        right: 50%;
        top: 85px;
        margin-right: 116px;
    }

    .face.right {
        left: 50%;
        top: 85px;
        margin-left: 116px;
    }

/*
 * 亲亲唇
 */

    .upperLip {
        height: 25px;
        width: 80px;
        border: 2px solid black;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-15deg);
        position: absolute;
        background: #fde348;
    }

    .upperLip.left {
        right: 50%;
        top: 52px;
    }

    .upperLip.right {
        left: 50%;
        top: 52px;
        transform: scale(-1, 1) rotate(-15deg);

    }

/*
 * 小可爱舌头
 */

    .lowerLip {
        position: absolute;
        bottom: 0;
        width: 300px;
        height: 3500px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        overflow: hidden;
    }

    .lowerLip::after {
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50%
    }
				
	`

    function writeCode(pre, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let timer = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                clearInterval(timer)
            }
        }, 1)
    }
    writeCode('', code)
}.call()