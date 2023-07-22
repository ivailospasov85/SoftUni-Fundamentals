// Write a function that receives a single string and replace any sequence of the same letters with a single
// corresponding letter.


function replaceRepeatingCharts(input) {
    let result = []
    let charts = input.split('')

    for (let i = 0; i < charts.length; i++) {
        let chart = charts[i]

        let nextChart = charts[i + 1]
        if (chart !== nextChart) {
            result.push(chart)
        }
    }
    console.log(result.join(''));
}

replaceRepeatingCharts('aaaaabbbbbcdddeeeedssaa')