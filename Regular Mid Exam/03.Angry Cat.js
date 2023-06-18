
function angryCat(arr, entryPoint, price) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < entryPoint) {

            if (price === "cheap" && arr[i] < arr[entryPoint]) {
                leftSum += arr[i];
            } else if (price === "expensive" && arr[i] >= arr[entryPoint]) {
                leftSum += arr[i];
            }
        } else if (i > entryPoint) {

            if (price === "cheap" && arr[i] < arr[entryPoint]) {
                rightSum += arr[i];
            } else if (price === "expensive" && arr[i] >= arr[entryPoint]) {
                rightSum += arr[i];
            }
        }
    }

    let result;
    if (leftSum === rightSum) {
        console.log(`Left - ${leftSum}`)
    } else {
        result = Math.max(leftSum, rightSum)
        if (result === leftSum) {
            console.log(`Left - ${result}`);
        } else if (result === rightSum) {
            console.log(`Right - ${(result)}`);
        }
    }
}
angryCat([1, 5, 1],
    1,
    "cheap")
console.log('-----------------------------------------');
angryCat([5, 10, 12, 5, 4, 20],
    3,
    'cheap')
