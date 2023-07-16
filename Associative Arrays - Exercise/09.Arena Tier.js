
// Pesho is a pro gladiator, he is struggling to become master of the Arena.
// You will receive several input lines in one of the following formats:
// "{gladiator} -> {technique} -> {skill}"
// "{gladiator} vs {gladiator}"
// The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of
// every gladiator.
// When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add
// his technique or update his skill, only if the current technical skill is lower than the new value.
// If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
// Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and
// the other is demoted from the tier -> remove him.
// If they don't have techniques in common, the duel isn't happening and both continue in the Season.
// You should end your program when you receive the command "Ave Cesar". At that point, you should print the
// gladiators, ordered by total skill in descending order, then ordered by name in ascending order. Foreach gladiator
// prints their technique and skill ordered descending, then ordered by technique name in ascending order.
// Input / Constraints
// You will receive an array of strings as a parameter to your solution.
// • The input comes in the form of commands in one of the formats specified above.
// • Gladiator and technique will always be one-word string, containing no whitespaces.
// • Skill will be an integer in the range [0, 1000].
// • There will be no invalid input lines.
// • The program ends when you receive the command "Ave Cesar".
// Output
// • The output format for each gladiator is:
// "{gladiator}: {totalSkill} skill"
// "- {technique} <!> {skill}"

function gladiatorTournament(input) {
    let gladiators = {};

    function addOrUpdateGladiator(gladiator, technique, skill) {
        if (!gladiators.hasOwnProperty(gladiator)) {
            gladiators[gladiator] = {};
        }

        if (!gladiators[gladiator].hasOwnProperty(technique)) {
            gladiators[gladiator][technique] = skill;
        } else {
            gladiators[gladiator][technique] = Math.max(gladiators[gladiator][technique], skill);
        }
    }

    function duelGladiators(gladiator1, gladiator2) {
        let techniques1 = Object.keys(gladiators[gladiator1]);
        let techniques2 = Object.keys(gladiators[gladiator2]);
        let commonTechniques = techniques1.filter(technique => techniques2.includes(technique));

        if (commonTechniques.length > 0) {
            let totalSkill1 = techniques1.reduce((total, technique) => total + gladiators[gladiator1][technique], 0);
            let totalSkill2 = techniques2.reduce((total, technique) => total + gladiators[gladiator2][technique], 0);

            if (totalSkill1 > totalSkill2) {
                delete gladiators[gladiator2];
            } else if (totalSkill1 < totalSkill2) {
                delete gladiators[gladiator1];
            }
        }
    }

    for (let line of input) {
        if (line === "Ave Cesar") {
            break;
        }

        if (line.includes(" -> ")) {
            let [gladiator, technique, skill] = line.split(" -> ");
            skill = Number(skill);
            addOrUpdateGladiator(gladiator, technique, skill);
        } else if (line.includes(" vs ")) {
            let [gladiator1, gladiator2] = line.split(" vs ");
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                duelGladiators(gladiator1, gladiator2);
            }
        }
    }

    let sortedGladiators = Object.keys(gladiators).sort((a, b) => {
        let totalSkillA = Object.values(gladiators[a]).reduce((total, skill) => total + skill, 0);
        let totalSkillB = Object.values(gladiators[b]).reduce((total, skill) => total + skill, 0);
        return totalSkillB - totalSkillA || a.localeCompare(b);
    });

    for (let gladiator of sortedGladiators) {
        let totalSkill = Object.values(gladiators[gladiator]).reduce((total, skill) => total + skill, 0);
        console.log(`${gladiator}: ${totalSkill} skill`);
        let sortedTechniques = Object.keys(gladiators[gladiator]).sort((a, b) => {
            return gladiators[gladiator][b] - gladiators[gladiator][a] || a.localeCompare(b);
        });
        for (let technique of sortedTechniques) {
            console.log(`- ${technique} <!> ${gladiators[gladiator][technique]}`);
        }
    }
}

gladiatorTournament([
    'Peter -> BattleCry ->400',
    'Alex -> PowerPunch ->300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger ->250',
    'Ave Cesar'
]
);
