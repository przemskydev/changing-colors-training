(() => {

    /*sorry for the chaos ~P*7 */
    const body = document.querySelector('body'),
            button = document.querySelector("#btn"),
            col10 = document.querySelector('.col-10');
    

    const rgbHistoryArray = [];
    const hexHistoryArray = [];

    //push into array rgb color history
    const historyRgbColors = (num1, num2, num3) => {

        rgbHistoryArray.push(`rgb(${num1},${num2},${num3})`);
        // console.log(rgbHistoryArray);

    }

    //create elem with rgb color code
    const createElemRgb = (num1, num2, num3) => {

        const rgbValue = document.createElement('section');
        rgbValue.innerHTML = `<h3 class="createElem">rgb(${num1}, ${num2}, ${num3})</h3><br>`
        const subEl = col10.querySelector(".createElem");

        if (typeof subEl != 'undefined' && subEl != null) {
            subEl.innerHTML = `<h3 class="createElem">rgb(${num1}, ${num2}, ${num3})</h3>`
        } else {
            col10.appendChild(rgbValue);
        }

    };

    //create elem with hex color code
    const createHexElem = (val1, val2, val3) => {

        const hexValue = document.createElement('section');
        hexValue.innerHTML = `<h3 class="createElemHex">HEX: #${val1}${val2}${val3}</h3><br>`
        const subEl = col10.querySelector(".createElemHex");

        if (typeof subEl != 'undefined' && subEl != null) {
            subEl.innerHTML = `<h3 class="createElemHex">HEX: #${val1}${val2}${val3}</h3>`
        } else {
            col10.appendChild(hexValue);
        }

    }

    //change bg color
    const changeColor = (num1, num2, num3) => {

        body.style.backgroundColor = `rgb(${num1},${num2},${num3})`;

        createElemRgb(num1, num2, num3);

    };

    //random number to set rgb color and convert to hex code
    const numRandom = () => {

        let num1 = (Math.floor(Math.random() * 256)),
            num2 = (Math.floor(Math.random() * 256)),
            num3 = (Math.floor(Math.random() * 256));

        changeColor(num1, num2, num3);

        changeToHex(num1, num2, num3);

        historyRgbColors(num1, num2, num3)

    };

    //push hex code colors into array
    const historyHexArray = (val1, val2, val3) => {
        hexHistoryArray.push(`#${val1}${val2}${val3}`);
        // console.log(hexHistoryArray)
    }

    //convert to correct hex code form values from array
    const hexConverter = (arr) => {

        let firstValue = arr.slice(0, 2),
            secondValue = arr.slice(2, 4),
            thirdValue = arr.slice(4, 7);

        let fv = firstValue.join(''),
            sv = secondValue.join(''),
            tv = thirdValue.join('');

        historyHexArray(fv, sv, tv);
        createHexElem(fv, sv, tv);

    }

    //convert rgb colors to hex with switch
    const colorConver = (arr) => {

        let numArr = arr;
        let switchToHex = [];

        for (let i = 0; i < numArr.length; i++) {
            switch (numArr[i]) {
                case 0:
                    switchToHex.push(0);
                    break;
                case 1:
                    switchToHex.push(1);
                    break;
                case 2:
                    switchToHex.push(2);
                    break;
                case 3:
                    switchToHex.push(3);
                    break;
                case 4:
                    switchToHex.push(4);
                    break;
                case 5:
                    switchToHex.push(5);
                    break;
                case 6:
                    switchToHex.push(6);
                    break;
                case 7:
                    switchToHex.push(7);
                    break;
                case 8:
                    switchToHex.push(8);
                    break;
                case 9:
                    switchToHex.push(9);
                    break;
                case 10:
                    switchToHex.push('A');
                    break;
                case 11:
                    switchToHex.push('B');
                    break;
                case 12:
                    switchToHex.push('C');
                    break;
                case 13:
                    switchToHex.push('D');
                    break;
                case 14:
                    switchToHex.push('E');
                    break;
                case 15:
                    switchToHex.push('F');
                    break;
                default:
                    console.log(`Wrong wrong WROONGG!! :O`);
            }
        }

        hexConverter(switchToHex);

    };

    //change from rgb values to hex values
    const changeToHex = (num1, num2, num3) => {

        let hexCode = [num1, num2, num3],
            n1,
            n2,
            toHexCodeArr = [];

        for (let i = 0; i < hexCode.length; i++) {
            n1 = Math.floor(hexCode[i] / 16);
            n2 = (hexCode[i] / 16 - Math.floor(hexCode[i] / 16)) * 16;

            toHexCodeArr.push(n1, n2);

        }

        colorConver(toHexCodeArr);
    }

    //start event and the whole circus
    button.addEventListener("click", () => {
        numRandom();
    })
})();