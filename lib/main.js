function getLyrics(number){
    var lyric = '';
    if(number>1){
        lyric += number +' bottles of beer on the wall, '+ number+ ' bottles of beer.\n';
        if(number-1!=1){
             lyric += 'Take one down and pass it around, '+(number-1)+' bottles of beer on the wall.\n'
        }else {
             lyric += 'Take one down and pass it around, '+(number-1)+' bottle of beer on the wall.\n'
        }
       
        return lyric;
    }
    else {
        lyric += number +' bottle of beer on the wall, '+ number+ ' bottle of beer.\n';
        lyric += 'Take one down and pass it around, '+'no more'+' bottles of beer on the wall.\n'
        return lyric;
    }
}

function main(number){
    var all = number;
    var result = '';
    while(number){
        result += getLyrics(number);
        number--;
    }
    result += 'No more bottles of beer on the wall, no more bottles of beer.\n'+
        'Go to the store and buy some more, '+all+' bottles of beer on the wall.\n'
    return result;
}

module.exports = main;
