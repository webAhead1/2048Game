function getEmptyCells(numbers){
    const array=[];
    for(let i=0 ; i<4 ; i++){
        for(let j=0; j<4 ; j++){
            if(numbers[i][j]===0){
                array.push({row: i, col: j});
            }
        }
    }
    return array;    
}

function addRandomCell(numbers){
    const nums= [...numbers];
    const arr=getEmptyCells(numbers);
    let cord = Math.floor(Math.random() * arr.length);
    
    nums[arr[cord].row][arr[cord].col]=2;
    return nums;
}

export default addRandomCell;