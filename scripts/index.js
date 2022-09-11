const arrayHighRu = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Ъ','Э','Ю','Я'];
const arrayLowRu = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ь','ы','ъ','э','ю','я'];
const arrayHighEn = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrayLowEn = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const symbols = [' ',',','.',':',';','!','?','-','_','=','+','(',')','[',']','@','`',"'",'"','<','>','|','/','%','$','^','&','*','~','1','2','3','4','5','6','7','8','9','0'];

const caesarButton = () => {
    if (document.getElementById("caesar__operation-choice").value === '1') {
        document.getElementById('result__btn').innerText = 'Encrypt'
    } else if (document.getElementById("caesar__operation-choice").value === '2') {
        document.getElementById('result__btn').innerText = 'Decrypt'
    }
}

const caesarCipher = (text, operation, shift) => {

    let out = ""

    text = document.getElementById('caesar__text-input').value
    operation = document.getElementById('caesar__operation-choice').value
    shift = document.getElementById('caesar__shift-choice').value

    if (operation === "1") {

        for (let i = 0; i < text.length; i++) {
            console.log(text[i])//test
            for (let j = 0; j < symbols.length; j++) {
                if (text[i] === arrayHighEn[j]) {
                    console.log(text[i] === arrayHighEn[j])//test
                    out += arrayHighEn[j + Number(shift)]
                } else if (text[i] === arrayHighRu[j]) {
                    console.log(text[i] === arrayHighRu[j])//test
                    out += arrayHighRu[j + Number(shift)]
                } else if (text[i] === arrayLowEn[j]) {
                    console.log(text[i] === arrayLowEn[j])//test
                    out += arrayLowEn[j + Number(shift)]
                } else if (text[i] === arrayLowRu[j]) {
                    console.log(text[i] === arrayLowRu[j])//test
                    out += arrayLowRu[j + Number(shift)]
                } else if (text[i] === symbols[j]) {
                    console.log(text[i] === symbols[j])//test
                    out += symbols[j]
                } else {}
            }
        }

    }
    if (operation === "2") {
        
        for (let i = 0; i < text.length; i++) {
            console.log(text[i])//test
            for (let j = 0; j < arrayHighEn.length; j++) {
                if (text[i] === arrayHighEn[j]) {
                    console.log(text[i] === arrayHighEn[j])//test
                    out += arrayHighEn[j + Number(shift)]
                } else if (text[i] === arrayHighRu[j]) {
                    console.log(text[i] === arrayHighRu[j])//test
                    out += arrayHighRu[j + Number(shift)]
                } else if (text[i] === arrayLowEn[j]) {
                    console.log(text[i] === arrayLowEn[j])//test
                    out += arrayLowEn[j + Number(shift)]
                } else if (text[i] === arrayLowRu[j]) {
                    console.log(text[i] === arrayLowRu[j])//test
                    out += arrayLowRu[j + Number(shift)]
                } else if (text[i] === symbols[j]) {
                    console.log(text[i] === symbols[j])//test
                    out += symbols[j]
                } else {}
            }
        }
    }

    console.log(out)//test

    return document.getElementById("result__text").innerHTML = out //what if out, 
}