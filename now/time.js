const { format } = require('date-fns');

const today = format(new Date(), 'dd.MM.yyyy H:m');

console.log(today);