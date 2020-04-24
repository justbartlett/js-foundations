
// searches an array and returns an array of all coercive matches
// exact matches (Object.is(..))
// strings (except "" or whitespace-only) can match numbers
// numbers (except 'NaN' and '+/- Infinity') can match strings (watch out for -0)
// null can match undefined and vice versa
// booleans can only match booleans
// objects only match the exact same object

function findAll(val, arr) {

}