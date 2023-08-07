function bubbleSort(listOfData){
    for(let i=0; i < listOfData.length - 1; i++){
        for(let j=0; j < listOfData.length - i; j++){
            if(listOfData[j] > listOfData[j+1]){
                let temp = listOfData[j];
                listOfData[j] = listOfData[j+1];
                listOfData[j+1] = temp;
            }
        }
    }

    return listOfData;
}


const arr = [22, 10, 7, 23, 4, 11, 2, 70, 6];

console.log(bubbleSort(arr));