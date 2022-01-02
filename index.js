// Code your solutions in this file







function writeCards(cardName1, event) {
    let messages = []
    for (let i = 0; i < cardName1.length; i++) {
        messages.push(`Thank you, ${cardName1[i]}, for the wonderful surprise gift!`);
         
    }
    return messages;
}

console.log(writeCards("bill"))


function countDown(positiveNumber) {
      while (positiveNumber >= 0) {
         console.log(positiveNumber--)   
      }
      return positiveNumber;
          
  }

  console.log(countDown(10));