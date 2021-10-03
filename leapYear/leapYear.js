const YEAR = 2000;
// const checkLeap = require('@stdlib/assert-is-leap-year');

const checkLeap = (year) => {
    if (typeof year === "number") {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(`The year ${year} is leap`);
        } else {
            console.log(`The year ${year} is not leap`);
        }
    } else {
        console.log("Year must be a number!");
    }
}

checkLeap(YEAR);


