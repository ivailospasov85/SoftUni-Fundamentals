// Create  a  program that organizes the daily  feeding of  the  animals  at  the  zoo. You  need  to  keep information  about animals, their daily food limit, and the areas they live in. You will be receiving lines with commands until you receive the "EndDay" message. There are two possible commands:  • "Add: {animal_name}-{needed_food_quantity}-{area}": o Add the animal and the quantity of needed food to your records. It is guaranteed that the names of the animals are unique, and there will never be animals with the same name.  o If the animal already exists, just increase the value of its needed food with the given one. o You should keep track of the animal living in each area. • "Feed: {animalName}-{food}": o If the animal exists, reduce its quantity of needed food with the given food for feeding. o If the animal does not exist, ignore the command. o If its limit reaches 0 or less, the animal is considered successfully fed, and you need to remove it from your records and print the following message: ▪ "{animalName} was successfully fed" You need to know the number of hungry animals there are left in each area. If an animal has a daily food limit above 0, it is considered hungry. In the end, you should print each animal with its quantity of needed food in the following format:  "Animals:" " {animal_name} -> {needed_food_quantity}g" ... " {animal_name} -> {needed_food_quantity}g" Afterward, print only the areas with hungry animals in the following format: "Areas with hungry animals:" " {area_name}: {number_of_hungry_animals}" ... " {area_name}: {number_of_hungry_animals}"

function wildZoo(input){
    
        let animals = {};
        let hungryAnimalsByArea = {};
      
        for (let line of input) {
          if (line === "EndDay") {
            break;
          }
      
          let [command, data] = line.split(": ");
          let [animalName, neededFood, area] = data.split("-");
      
          if (command === "Add") {
            let foodQuantity = parseInt(neededFood);
            if (!animals[animalName]) {
              animals[animalName] = { foodLimit: foodQuantity, area };
              hungryAnimalsByArea[area] = (hungryAnimalsByArea[area] || 0) + 1;
            } else {
              animals[animalName].foodLimit += foodQuantity;
            }
          } else if (command === "Feed") {
            if (animals[animalName]) {
              animals[animalName].foodLimit -= parseInt(neededFood);
              if (animals[animalName].foodLimit <= 0) {
                console.log(`${animalName} was successfully fed`);
                let animalArea = animals[animalName].area;
                delete animals[animalName];
                hungryAnimalsByArea[animalArea]--;
              }
            }
          }
        }
      
        console.log("Animals:");
        Object.entries(animals).forEach(([name, data]) => {
          console.log(` ${name} -> ${data.foodLimit}g`);
        });
      
        console.log("Areas with hungry animals:");
        Object.entries(hungryAnimalsByArea).forEach(([area, count]) => {
          if (count > 0) {
            console.log(` ${area}: ${count}`);
          }
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
