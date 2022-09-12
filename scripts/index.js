/* 
    ~
    ~ author Cydoniam
    ~
    ~ This is JavaScript code for encrypting and decrypting any text
    ~
*/

//  Used arrays
const arrayHighRu = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ы','Ъ','Э','Ю','Я'];
const arrayLowRu = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ь','ы','ъ','э','ю','я'];
const arrayHighEn = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrayLowEn = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const symbols = [' ',',','.',':',';','!','?','-','_','=','+','(',')','[',']','@','\n','`',"'",'"','<','>','|','/','%','$','^','&','*','~','1','2','3','4','5','6','7','8','9','0'];

//  JavaScript code to change button title
const caesarButton = () => {
    if (document.getElementById("caesar__operation-choice").value === '1') {
        document.getElementById('result__btn').innerText = 'Encrypt'
    } else if (document.getElementById("caesar__operation-choice").value === '2') {
        document.getElementById('result__btn').innerText = 'Decrypt'
    }
}

//  Main script
const caesarCipher = (text, operation, shift) => {

    let out = ""

    //  Get input data
    text = document.getElementById('caesar__text-input').value
    operation = document.getElementById('caesar__operation-choice').value
    shift = document.getElementById('caesar__shift-choice').value

    // If the encryption operation is selected, then we take each character of the input text and check for each character from the arrays
    if (operation === "1") {

        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < symbols.length; j++) {
                if (text[i] === arrayHighEn[j]) {
                    out += arrayHighEn[(j + Number(shift)) % arrayHighEn.length]
                } else if (text[i] === arrayHighRu[j]) {
                    out += arrayHighRu[(j + Number(shift)) % arrayHighRu.length]
                } else if (text[i] === arrayLowEn[j]) {
                    out += arrayLowEn[(j + Number(shift)) % arrayLowEn.length]
                } else if (text[i] === arrayLowRu[j]) {
                    out += arrayLowRu[(j + Number(shift)) % arrayLowRu.length]
                } else if (text[i] === symbols[j]) {
                    out += symbols[j]
                } else {}
            }
        }

    } else if (operation === "2") {
        
        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < symbols.length; j++) {
                if (text[i] === arrayHighEn[j]) {
                    out += arrayHighEn[(((j - Number(shift)) % arrayHighEn.length) + arrayHighEn.length) % arrayHighEn.length]
                } else if (text[i] === arrayHighRu[j]) {
                    out += arrayHighRu[(((j - Number(shift)) % arrayHighRu.length) + arrayHighRu.length) % arrayHighRu.length]
                } else if (text[i] === arrayLowEn[j]) {
                    out += arrayLowEn[(((j - Number(shift)) % arrayLowEn.length) + arrayLowEn.length) % arrayLowEn.length]
                } else if (text[i] === arrayLowRu[j]) {
                    out += arrayLowRu[(((j - Number(shift)) % arrayLowRu.length) + arrayLowRu.length) % arrayLowRu.length]
                } else if (text[i] === symbols[j]) {
                    out += symbols[j]
                } else {}
            }
        }
    } else {}

    //  Return data
    return document.getElementById("result__text").innerHTML = out
}