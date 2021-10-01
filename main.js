function getFlags(){
    var cards=$('.card');
    var i=0;
    var flagS=[];
    var flag;
    for(i=0;i<12;i++){
    flag=$('.card').eq(i).find('img').eq(0).attr('src');
    flagS.push(flag);
    }
    return flagS;
    }
    function getRandomPositions(){
        var i=0;
        var positions=[];
        var RandomNumber=0;
            while(positions.length!=12){
            RandomNumber=Math.floor(Math.random()*12);
            while(positions.includes(RandomNumber) ){
            RandomNumber=Math.floor(Math.random()*12);
            }
            positions.push(RandomNumber);
            }
            return positions;
            }
    var theFlags=getFlags(); 
    var thePositions= getRandomPositions();

