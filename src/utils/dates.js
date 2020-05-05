const moment = require('moment/moment.js');

export const initialDate = () => moment().add(1, 'days').format('YYYY-MM-DD[T]HH:mm');

export const differenceInDate = (date) => Math.abs(moment().diff(date, 'milliseconds'));
