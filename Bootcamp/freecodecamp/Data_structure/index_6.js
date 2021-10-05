//add key value pairs to an object
 

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };
  // add a property

tekkenCharacter['hair color'] = 'dyed orange';
tekkenCharacter.origin = 'South Korea';

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
console.log(tekkenCharacter);