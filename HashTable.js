class HashTable {
    constructor(size = 7){
        this.dataMap = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
    set(key, value){
        const index = this._hash(key);
        if(!this.dataMap[index]){
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);

        return this;
    }

    get(key){
        const index = this._hash(key);
        
        if(this.dataMap[index]){
            for(let i =0; i < this.dataMap[index].length; i++){
                if(this.dataMap[index][i][0]===key){
                    return this.dataMap[index][i][1];
                }
            }
        }

        return undefined;
    }

    keys(){
        let allKeys = [];

        for(let i = 0; i < this.dataMap.length; i++){
            if(this.dataMap[i]){
                for(let j = 0; j < this.dataMap[i].length; j++){
                    keys.push(this.dataMap[i][j][0])            
                }
            }
        }

        return allKeys;
    }
}

const obj = new HashTable();

obj.set('bolts', 1400);
obj.set('washers', 50);
obj.set('lumber', 70);

console.log(obj.get('bolts'))
console.log(obj.keys())