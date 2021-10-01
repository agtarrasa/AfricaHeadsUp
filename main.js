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
            function setTheBoard(theFlags,thePositions){
                var flag='',vector='';
                for(var i=0;i<12;i++){
                flag=theFlags[thePositions[i]];
                vector=flag.split('/');
                flag=vector[vector.length-1];
                flag=flag.replace('Flag_of_','').replace('.png','');
                $('.card').eq(i).find('img').eq(0).
                attr('src',theFlags[thePositions[i]]);
                $('.card').eq(i).find('img').eq(0).
                attr('id',flag+'-'+i);
                }
            }
            function getRotated(){
                var cardsRotated=
                $('div[class="card rotate"]').length;
                return cardsRotated;   
               }
               function RotateCard() {
                var chosenCountry='', cardNumber=0, cardOptions='',randomIndex='';
                var tmpOptions=[];
                if(getRotated()==0){
                    console.log('rotate this card');
                    chosenCountry=$(this).find('img').attr('id');
                    console.log('picked country '+chosenCountry);
                    $(this).addClass('rotate');
                    cardNumber=parseInt(chosenCountry.split('-')[1]);
                    console.log('number card '+cardNumber);
                    if(theOptions[cardNumber].length<3){
                        theOptions[cardNumber].push(chosenCountry.split('-')[0]);

                        }
                        addOptions(cardNumber);
                        cardOptions=theOptions[cardNumber];
                        console.log('card option '+cardOptions);
                        randomIndex=zeroToRandom();
                        console.log('random index '+randomIndex);
                        tmpOptions.push(cardOptions[randomIndex[0]]);
                        tmpOptions.push(cardOptions[randomIndex[1]]);
                        tmpOptions.push(cardOptions[randomIndex[2]]);
                        console.log('opciones tmp '+tmpOptions);
                        $('#'+'optionscard-'+cardNumber).find('label').eq(0).html(fitSaoTome(tmpOptions[0]));
                        $('#'+'optionscard-'+cardNumber).find('label').eq(1).html(fitSaoTome(tmpOptions[1]));
                        $('#'+'optionscard-'+cardNumber).find('label').eq(2).html(fitSaoTome(tmpOptions[2]));
                        
                        $('#'+'optionscard-'+cardNumber).find('input').eq(0).attr('value',tmpOptions[0]);                
                        $('#'+'optionscard-'+cardNumber).find('input').eq(1).attr('value',tmpOptions[1]);                
                        $('#'+'optionscard-'+cardNumber).find('input').eq(2).attr('value',tmpOptions[2]);
                        
                        cleanRadios(cardNumber);


                    



                }

               }
               function generate2Random(){
                var i=0;
                var positions=[];
                var RandomNumber=0;
                while(positions.length!=2){
                RandomNumber=Math.floor(Math.random()*12);
                while(positions.includes(RandomNumber) ){
                RandomNumber=Math.floor(Math.random()*12);
                }
                positions.push(RandomNumber);
                }
                return positions;
                }
                function optionMatrix(theFlags){
                    var options=[];
                    var opInt=[];
                    var positions='',flag='';
                    var i=0,j=0;
                    for(i=0;i<12;i++){
                    positions=generate2Random();
                    while(positions.includes(thePositions[i])){
                    positions=generate2Random();
                    }
                    opInt=[];
                    for(j=0;j<2;j++){
                    flag=theFlags[positions[j]].
                    replace(document.URL,'').replace('img/flags/Flag_of_','').
                    replace('.png','');

                    opInt.push(flag);
                    }
                    options.push(opInt);
                    }
                    return options;
                    }
                    function addOptions(cardNumber){
                        var htmlClon='';
                        var card=$('.card').eq(cardNumber);
                        if($('.card').eq(cardNumber).find('div').length==0){
                        var hijo=card.find('img').eq(0);
                        var flag=hijo.attr('src');
                        hijo.css('visibility','hidden');
                        flagoptns=$('#flagOptions');
                        flagoptns=flagoptns.clone();

                        flagoptns.attr('class','front-face');
                        flagoptns.attr('id','optionscard-'+cardNumber);
                        flagoptns.css('background-image','url('+flag+')');

                        flagoptns.css('background-repeat','no repeat');
                        flagoptns.css('height','205px');
                        flagoptns.css('background-size','100% 100%');

                        flagoptns.css('display','flex');
                        flagoptns.css('flex-direction','column');
                        flagoptns.css('justify-content','space-between');

                        console.log(htmlClon);
                        console.log('Flag Options'+flagoptns.get(0).outerHTML);
                        card.append(flagoptns.get(0).outerHTML);

                        }
                        }
                        function cleanRadios(cardNumber){
                            var card=$('#'+'optionscard-'+cardNumber);
                            var options=card.find('input').length;
                            var i=0;
                            for(i=0;i<options;i++){
                            card.find('input')[i].checked=false;
                            }
                            }
                            function cleanDivAnswers(){
                                $('.correctNotCorrect').eq(0).text('');
                                $('.correctNotCorrect').eq(1).text('');
                                $('.correctNotCorrect').eq(2).text('');
                            }
                            function zeroToRandom(){
                                var i=0;
                            var positions=[];
                            var RandomNumber=0;
                            while(positions.length!=3){
                            RandomNumber=Math.floor(Math.random()*3);
                            while(positions.includes(RandomNumber) ){
                            RandomNumber=Math.floor(Math.random()*3);
                            }
                            positions.push(RandomNumber);
                            }
                            return positions;
                            }
                            function fitSaoTome(country){
                                if(country.indexOf('Sao')!=-1){
                                    return 'Sao_Tome_<br>And_Prince';
                                }else{return country;}
                                }

    var theFlags=getFlags(); 
    var thePositions= getRandomPositions();
    setTheBoard(theFlags,thePositions);
    const board = document.querySelectorAll('.card');
    board.forEach(card => 
        card.addEventListener('click', RotateCard));
    var theOptions = optionMatrix(theFlags); 

