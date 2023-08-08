function insertionSort(listData){
    for(let i=1; i<listData.length; i++){
        let temp = listData[i];
        for(var j=i-1; (listData[j]>temp && j>-1); j--){
            listData[j+1] = listData[j];
        }

        listData[j+1] = temp;
    }

    return listData;
}

const arr = [22, 10, 7, 23, 4, 11, 2, 70, 6];

console.log(insertionSort(arr));