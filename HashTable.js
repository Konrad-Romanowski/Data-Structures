//Simple hash table that handles collisions with Separate Chaining
class HashTable {
    constructor(_size = 41) {
        this.keyMap = new Array(_size);
    }

    hash(_key) {
        let keyAsString = _key.toString();
        let total = 0;
        let PRIME_NUMBER = 8191;
        for(let i = 0; i < Math.min(keyAsString.length,100); i++) {
            let char = keyAsString[i];
            let charCode = char.charCodeAt();
            total = (total * PRIME_NUMBER + charCode) % this.keyMap.length;
        }
        return total;
    }

    set(_key,_value) {
        const hashedKey = this.hash(_key);

        if(!this.keyMap[hashedKey]) this.keyMap[hashedKey] = new Array();

        //If the given key already exist in the hash table - update it's value
        for(let i = 0; i < this.keyMap[hashedKey].length; i++) {
            if(this.keyMap[hashedKey][i][0] === _key) {
                this.keyMap[hashedKey][i][1] = _value;
                return;
            }
        }
        this.keyMap[hashedKey].push([_key,_value]);
    }

    get(_key) {
        const hashedKey = this.hash(_key);
        const tableCell = this.keyMap[hashedKey];
        
        if(!tableCell) return;
        let value;

        for(let i = 0; i < tableCell.length; i++) {
            if(tableCell[i][0] === _key) value = tableCell[i][1]; 
        }
        return value;
    }

    keys() {
        let keysArray = [];

        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                keysArray.push(...this.keyMap[i]);
            }
        }

        for(let i = 0; i < keysArray.length; i++) {
            keysArray[i] = keysArray[i][0];
        }

        return keysArray;
    }

    values() {
        let valuesArray = [];

        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                valuesArray.push(...this.keyMap[i]);
            }
        }

        for(let i = 0; i < valuesArray.length; i++) {
            valuesArray[i] = valuesArray[i][1];
        }

        return valuesArray;
    }

}