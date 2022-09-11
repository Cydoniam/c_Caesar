const arrayHighRu = ['АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ']
const arrayLowRu = ['абвгдеёжзийклмнопрстуфхцчшщьыъэюя']
const arrayHighEn = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const arrayLowEn = ['abcdefghijklmnopqrstuvwxyz']

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

    // if (operation === 1) {
        
        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < arrayHighRu.length; j++) {
                if (text[i] === arrayHighRu[j]) {
                    out += text[i + shift] 
                }
            }
            // out += text.charCodeAt(i)
            // out += arrayHighEn[i].charCodeAt()
            // for(let j = 0; j < arrayHighRu.length;) {
            // }
    

            // str = (arrayHighEn[i - shift] === undefined) ? (arrayHighEn[i - shift - arrayHighEn.length]) : (arrayHighEn[i - shift])
            // out = out.concat(str) 

        }

    // }
    // if (operation === 2) {
        
    // }

    console.log(out)

    return out
}