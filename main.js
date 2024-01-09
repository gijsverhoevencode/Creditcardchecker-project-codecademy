// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


const validateCred = (arr) => {
    let funcArray = [];
    let checknumber = 0;
    let func2Array = [];
    const summodulo = 10;
    let test2 = [];

    // reverse array loop
    for (let i = arr.length - 1; i >= 0; i--) {
        let revArray = arr[i];
        funcArray.push(revArray);
    }

    // Take and store checknumber (delete it from the array, but store it in checknumber)
    const firstValue = (array) => {
        for (let i = 0; i < array.length; i++) {
            checknumber = array[0];
            return checknumber;
        }
    };
    firstValue(funcArray);
    funcArray.shift();

    // Double elements in array that need to be doubled -> push them in func2Array
    for (let x = 0; x < funcArray.length; x += 2) {
        let double = funcArray[x] * 2;
        if (double > 9) {
            double -= 9;
        }
        func2Array.push(double);
    }

    // Take elements in array that don't need to be doubled -> push them in test2
    for (let j = 1; j < funcArray.length; j += 2) {
        test2.push(funcArray[j]);
    }

    // Sum everything up and check with summodulo
    const sum = func2Array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sum2 = test2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const total = sum + sum2 + checknumber;

    const result = total % summodulo;
    if (result === 0) {
        return true;
    } else {
        return false;
    }
};


const findInvalidCard = (nestedarr) => {
    let input = nestedarr
    let invalidCardsIndexes = []
    let invalidCards = []
    for (let i = 0; i < nestedarr.length; i++){
       let testcred = validateCred(nestedarr[i])
       if (testcred === false) {
        invalidCardsIndexes.push(i)
       } 
    } 
    

    for (j = 0; j < invalidCardsIndexes.length; j++) {
        invalidCards.push(input[j])
    }   return invalidCards
}

// Invalid creditcards to use as input for the invalidcompanies function 
const invalidBatch = findInvalidCard(batch)

// Find invalid companies function -> returns a string with the companies (without duplicates) 
const idInvalidCardCompanies = (IVCards) => {
    let IVCompanies = [];
    for (let i = 0; i < IVCards.length; i++) {
        let testen = IVCards[i]
        if (testen[0] === 3) {
            IVCompanies.push('AMEX')
        } else if (testen[0] === 4) {
            IVCompanies.push('VISA')
        } else if (testen[0] === 5) {
            IVCompanies.push('Mastercard')
        } else if (testen[0] === 6) {
            IVCompanies.push('Discover')
        }
    } 
    
    let uniqueChars = [...new Set(IVCompanies)];
    return uniqueChars
}



// Test functions:
console.log(validateCred(valid1))
console.log(findInvalidCard(batch))
console.log(idInvalidCardCompanies(invalidBatch))





