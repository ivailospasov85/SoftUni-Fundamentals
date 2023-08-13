

function wildZoo(input) {

    let animalsZoo = []
    let arena = []

    for (let element of input) {
        if (element === "EndDay") {
            break;
        }
        let [command, ...tokens] = element.split(" ")
        let [animalName, food, area] = tokens[0].split("-")

        if (command === 'Add:') {
            let findingAnimal = animalsZoo.find((animals) => animals.name === animalName)
            if (findingAnimal) {
                animals.food += Number(food)
            } else {
                animals = {
                    name: animalName,
                    food: +food,
                }
                animalsZoo.push(animals)
            }

            let findingArena = arena.find((a) => a.name === animalName)

            if (findingArena) {
                anyObj.count ++
            }
            else {
                anyObj = {
                    name: animalName,
                    arena: area,
                    count: 1

                }
                arena.push(anyObj)
            }
        }
        else if (command === 'Feed:') {
            let findingAnimal2 = animalsZoo.find((n) => n === animalName)
            if (findingAnimal2) {
                animals.food -= Number(food)
                if (animals.food === 0) {
                    console.log(`${animalName} was successfully fed`);

                    let index = animalsZoo.indexOf(animalName)
                    let indexOfArena = arena.indexOf(animalName)
                    animalsZoo = animalsZoo.splice(index, 1)
                    arena = arena.splice(index, 1)

                }
            }
        }

    }
    console.log(`Animals:`)
    animalsZoo.forEach(element => {
        console.log(`${element.name} -> ${element.food}g`)
    });
    console.log(`Areas with hungry animals:`);


    arena.forEach(element => {
        console.log(`${element.arena}: ${element.count}`);
    });


}

wildZoo((["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"]))


function wildZoo(input) {
    let animalsZoo = [];
    let arena = [];
  
    for (let element of input) {
      if (element === "EndDay") {
        break;
      }
      let [command, ...tokens] = element.split(" ");
      let [animalName, food, area] = tokens[0].split("-");
  
      if (command === "Add:") {
        let findingAnimal = animalsZoo.find((animal) => animal.name === animalName);
        if (findingAnimal) {
          findingAnimal.food += Number(food);
        } else {
          animalsZoo.push({
            name: animalName,
            food: +food,
          });
        }
  
        let findingArena = arena.find((a) => a.name === area);
        if (findingArena) {
          findingArena.count++;
        } else {
          arena.push({
            name: area,
            count: 1,
          });
        }
      } else if (command === "Feed:") {
        let findingAnimal = animalsZoo.find((animal) => animal.name === animalName);
        if (findingAnimal) {
          findingAnimal.food -= Number(food);
          if (findingAnimal.food <= 0) {
            console.log(`${animalName} was successfully fed`);
            animalsZoo = animalsZoo.filter((animal) => animal.food > 0);
            let areaObj = arena.find((a) => a.name === findingAnimal.area);
            if (areaObj) {
              areaObj.count--;
            }
          }
        }
      }
    }
  
    console.log("Animals:");
    animalsZoo.forEach((animal) => {
      console.log(`${animal.name} -> ${animal.food}g`);
    });
  
    console.log("Areas with hungry animals:");
    arena.forEach((a) => {
      if (a.count > 0) {
        console.log(`${a.name}: ${a.count}`);
      }
    });
  }
  
  wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
  ]);
  