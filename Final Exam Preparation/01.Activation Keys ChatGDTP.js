

function activationKeys(input) {
    let activationKey = input.shift();
    let element = input.shift();

    while (element !== "Generate") {
        let commands = element.split(">>>");

        switch (commands[0]) {
            case "Contains":
                if (activationKey.includes(commands[1])) {
                    console.log(`${activationKey} contains ${commands[1]}`);
                } else {
                    console.log("Substring not found!");
                }
                break;

            case "Flip":
                let startIndex = Number(commands[2]);
                let endIndex = Number(commands[3]);
                let substring = activationKey.substring(startIndex, endIndex);

                if (commands[1] === "Upper") {
                    activationKey = activationKey.replace(substring, substring.toUpperCase());
                } else if (commands[1] === "Lower") {
                    activationKey = activationKey.replace(substring, substring.toLowerCase());
                }
                console.log(activationKey);
                break;

            case "Slice":
                let startSliceIndex = Number(commands[1]);
                let endSliceIndex = Number(commands[2]);
                let slicedPart = activationKey.slice(startSliceIndex, endSliceIndex);

                activationKey = activationKey.replace(slicedPart, "");
                console.log(activationKey);
                break;
        }

        element = input.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);
}

activationKeys
    (["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])


