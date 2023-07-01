// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input.
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the
// console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.

function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name,
                this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (const i of arr) {
        let [name, age] = i.split(' ')
        let tempCat = new Cat(name, age)
        tempCat.meow()

    }


}

cats(['Mellow 2', 'Tom 5'])