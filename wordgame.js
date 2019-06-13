/*var word = "love";
while(true){
var answer = prompt(word);
if(word[word.length-1] === answer[0]){
//when correct
word = answer;
alert('correct! keep going');
}else{
// when wrong
alert('worng! put a right answer');
}
}*/

var body = document.body;
    var word = document.createElement('div');
    word.textContent = 'love'; // textContent is for the text inside of tags
    document.body.append(word);
    
    var form = document.createElement('form');
    document.body.append(form);

    var input = document.createElement('input');
    form.append(input);
    
    var button = document.createElement('button');
    form.append(button);
    button.textContent = 'Assign';
    
    var result = document.createElement('div');
    document.body.append(result);
    
    form.addEventListener('submit', function callBack(e) {
       e.preventDefault();
        if(word.textContent[word.textContent.length-1] === input.value[0]){
            // value is for text from input
            result.textContent = 'Good job';
            word.textContent = input.value;
            input.value = '';
            input.focus(); // for better UX
            }
            else{
                result.textContent = 'Put a different word'
                input.value = '';
                 input.focus(); 
            
                // when wrong
            }
    }); // callback function
    



/* for(var word = "love"; true;){
    var answer = prompt(word);
    if(word[word.length-1] === answer[0]){
    //when correct
    word = answer;
    alert('correct! keep going');
    }
    else{
    // when wrong
    alert('worng! put a right answer'); 
    }
} */
