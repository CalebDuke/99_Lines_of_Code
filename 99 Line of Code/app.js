
var friends = ['Jeanie', 'Dalton', 'Bekah', 'Zach', 'Chris'];

function countLines() {
    for (let i = 0; i < friends.length; i++) {
        for (let num = 99; num > 0; num--) {
            if (num > 1) {
                console.log(num + " lines of code in a file");
                console.log(num + "lines of code,");
                console.log(friends[i] + " " + "strikes one out, clears it all out,");
                console.log((num--) + " lines of code in a file.");
                // console.log(friends[i] + ' has ' + num + ' lines of code in the file')
            } else {
                console.log(num + " line of code in a line");
                console.log(num + " line of code,");
                console.log(friends[i] + " " + "strikes one out, clears it all out,");
                console.log(num + " line of code in a file.");
                // console.log(friends[i] + ' has ' + num + ' line of code in the file')
            }
        }
    }
}

countLines()

// var numbers = ["1", "2", "3"]
// var animals = [" dog", " cat", " horse"]

// function example() {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < animals.length; j++) {
//             console.log(numbers[i] + animals[j])
//         }
//     }
// }

// example();

// function name() {
//     var count = 99;
//     while (count > 0) {
//         if (count == 1) {
//             var word = "line"
//         }
//         console.log(count + " lines of code in a line");
//         console.log(count + " " + word + " of code,");
//         console.log(name + "strikes one out, clears it all out,");
//         count = count - 1;
//         if (count > 0) {
//             if (count == 1) {
//                 var word = "line"
//             }
//             console.log(count + " " + word + " of code in a line.");
//         } else {
//             if (count < 1) {
//                 var word = "lines"
//             }
//             console.log("No more " + word + " of code in a line.");
//         }
//     }
// } 