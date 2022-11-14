function finder(array) {
   return array.result===`W`;
}

function superbowlWin(array) {
   let winYear = array.find(finder);
   if (winYear===undefined){
    return undefined
} else {
    return winYear.year
}
}