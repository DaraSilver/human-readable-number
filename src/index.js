module.exports = function toReadable (number) {
    const abc = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    const abcc = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        0: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

 
   if (number <= 9 ) {
        if (number == 0) {
            return 'zero'
        } else {
        return abc[number]
        }
    } else if (number <= 99) {
        let str = '';
        if (abcc.hasOwnProperty(number)) {
            return abcc[number]
        } else {
            let num = String(number)
                str= abcc[Number(num[0])] + ' ' + abc[Number(num[1])]
            return str.trim();
        }


    } else {
        let hundredsStr = '';
        let num1 = String(number);
        if (abcc.hasOwnProperty(Number(num1.slice(1,3))) && Number(num1[1]) !== 0 ) {
            hundredsStr = abc[Number(num1[0])] + ' hundred ' + abcc[Number(num1.slice(1,3))] 
        } else {
            if (Number(num1[1]) === 0) {
                hundredsStr = abc[Number(num1[0])] + ' hundred ' + abc[Number(num1[2])];
            
            } else {
                hundredsStr = abc[Number(num1[0])] + ' hundred ' + abcc[Number(num1[1])] + ' ' + abc[Number(num1[2])]
            };
        }
        return hundredsStr.trim();
    }


    
  
}
