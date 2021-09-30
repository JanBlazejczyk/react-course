const YEAR = 1988;
const checkLeap = require('@stdlib/assert-is-leap-year');

if (checkLeap(YEAR)) {
    console.log(`The year ${YEAR} is leap`);
} else {
    console.log(`The year ${YEAR} is not leap`);
}


