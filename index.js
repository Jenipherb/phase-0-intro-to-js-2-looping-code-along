// Code your solutions in this file
const messages = []
function writeCards(name, event){
    for (let i = 0; i <name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
function countDown (){
    
    var countdown = 10;{
        while (countdown >= 0){
            console.log(countdown);
            countdown = countdown - 1;
        }
        
    }
}