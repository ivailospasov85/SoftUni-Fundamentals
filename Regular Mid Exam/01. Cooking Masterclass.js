

function cookingMasterclass(input) {
    let budget = input[0];
    let students = input[1];
    let priceOfPackageFlour = input[2];
    let pricePerSingleEgg = input[3];
    let pricePerSinglePrestige = input[4] ;
    let freePackages = Math.floor(students / 5);

    let neededMoney = (priceOfPackageFlour * (students - freePackages)) +
        (pricePerSingleEgg * 10 * students) +
        pricePerSinglePrestige *(Math.ceil(students*1.20));

    let finalMoney = budget - neededMoney;

    if (finalMoney >= 0) {
        console.log(`Items purchased for ${neededMoney.toFixed(2)}$.`);
    } else {
        let neededMoney2 = Math.abs(finalMoney).toFixed(2);
        console.log(`${neededMoney2}$ more needed.`);
    }
}

cookingMasterclass([100,
    25,
    4.0,
    1.0,
    6.0])
