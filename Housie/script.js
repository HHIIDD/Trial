
function callNumber() {
    var number = Math.ceil(Math.random() * 90);
    return number;
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    var call = callNumber();
    reciever(call);
});

// Method to collect the previous 5 values and display them.....

function reciever(call) {
    var PrevFive = [0, 0 ,0 ,0 ,0];
    for(var i = 0; i < 5; i ++) {
        if (PrevFive[i] === call){
            
            //Call again
            var newCall = callNumber();
            reciever(newCall);
    
        }else{
            
            //Display
            
            document.querySelector('.display').textContent = call;
            document.querySelector('._' + call).classList.add('called');
            
            //Add to the array
            
            PrevFive.push(call);
        }
    }
}