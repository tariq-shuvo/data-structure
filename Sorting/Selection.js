function selectionSort(listData) {
    for(let i=0; i<listData.length-1; i++){
        minIndex = i;
        for(let j=i+1; j<listData.length; j++){
            if(listData[minIndex]>listData[j]){
                minIndex = j;
            }

            if(minIndex != i){
                let temp = listData[i];
                listData[i] = listData[minIndex];
                listData[minIndex] = temp; 
            }
        }
    }

    return listData; 
}

const arr = [22, 10, 7, 23, 4, 11, 2, 70, 6];

console.log(selectionSort(arr));