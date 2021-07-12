function Bogosort(N){
    
    function getRandom() {
        const max = 100;
        const min = 1;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function createArray(N){
        let randomArray = [];
        for (let i = 0 ; i < N; i++){
            randomArray.push(getRandom());
        };
        return randomArray;
    };
    const startTime = Date.now();

    arr = createArray(N);
    
    const isSorted = function(arr){
        
        for(let i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            };
        };
        return true;
    };

    function shuffle(arr){
        let count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        };

        return arr;
    }

   function sort(arr){
        let sorted = false;
        attempts = 0;
        sorted = isSorted(arr);
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
            attempts ++;
        }
        return [arr, attempts];
    }

    const [sortedArray, tries] = sort(arr);
    const finalTime = Date.now() - startTime;
    return[sortedArray,finalTime, tries];
}
module.exports = Bogosort;
