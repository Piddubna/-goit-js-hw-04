// const profile = {
// username: 'Jacob',
// playTime: 300,

// changeUsername(newName) {
//     this.username = newName;
// },

// updatePlayTime(hours) {
//     this.playTime += hours;
// },

// getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
// },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername('Marco');
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"


function add(... args) {

let total = 0;
for (const arg of args) {
    total += arg;
}
return total;
}


add(15, 27)  //42
add(12, 4, 11, 48) //75
add(32, 6, 13, 19, 8) //78

console.log(add(15, 27));  //42
console.log(add(12, 4, 11, 48)); //75
console.log(add(32, 6, 13, 19, 8)); //78        