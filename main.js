let greet = document.getElementById('greeting');
let user = document.getElementById('username');
let btn = document.getElementById('submit');
let quotes = document.getElementById('quotes');
let quote = document.getElementById('get-quote');
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let card = document.querySelector('.class');

// Cards
let q0 = document.getElementById('quote0');
let q1 = document.getElementById('quote1');
let q2 = document.getElementById('quote2');
let q3 = document.getElementById('quote3');
let q4 = document.getElementById('quote4');
let q5 = document.getElementById('quote5');
let q6 = document.getElementById('quote6');
let q7 = document.getElementById('quote7');
let q8 = document.getElementById('quote8');
let q9 = document.getElementById('quote9');
let q10 = document.getElementById('quote10');
let qEleven = document.getElementById('quote11');
let q12 = document.getElementById('quote12');
let q13 = document.getElementById('quote13');
let q14 = document.getElementById('quote14');
let q15 = document.getElementById('quote15');
let q16 = document.getElementById('quote16');
let q17 = document.getElementById('quote17');
let q18 = document.getElementById('quote18');
let q19 = document.getElementById('quote19');
let q20 = document.getElementById('quote20');

// Time
let today = new Date()
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let timeHours = today.getHours();

// Array of Cards
let cards = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, qEleven, q12, q13, q14, q15, q16, q17, q18, q19, q20 ];


// CLICK EVENTS
quote.addEventListener('click', getQuote);
btn.addEventListener('click', greetUser);



// This function displays the quote cards randomly.
// It checks if the the number selected from the random method is equivalent to the number in the if function
// If it is equivalent then it displays the card div of that number
// Else the card will be displayed as none
function getQuote(e){
    //alert(cards.length);
    quoteCard = Math.floor(Math.random()*cards.length+1);
    console.log(quoteCard);
    if (quoteCard == 0){
        q0.style.display = 'block';
    } else{
        q0.style.display = 'none';
    }
    if (quoteCard == 1){
        q1.style.display = 'block';
    } else{
        q1.style.display = 'none';
    }
    if (quoteCard == 2){
        q2.style.display = 'block';
    } else{
        q2.style.display = 'none';
    }
    if (quoteCard == 3){
        q3.style.display = 'block';
    } else{
        q3.style.display = 'none';
    }
    if (quoteCard == 4){
        q4.style.display = 'block';
    } else{
        q4.style.display = 'none';
    }
    if (quoteCard == 5){
        q5.style.display = 'block';
    } else{
        q5.style.display = 'none';
    }
    if (quoteCard == 6){
        q6.style.display = 'block';
    } else{
        q6.style.display = 'none';
    }
    if (quoteCard == 7){
        q7.style.display = 'block';
    } else{
        q7.style.display = 'none';
    }
    if (quoteCard == 8){
        q8.style.display = 'block';
    } else{
        q8.style.display = 'none';
    }
    if (quoteCard == 9){
        q9.style.display = 'block';
    } else{
        q9.style.display = 'none';
    }
    if (quoteCard == 10){
        q10.style.display = 'block';
    } else{
        q10.style.display = 'none';
    }
    if (quoteCard == 11){
        qEleven.style.display = 'block';
    } else{
        qEleven.style.display = 'none';
    }
    if (quoteCard == 12){
        q12.style.display = 'block';
    } else{
        q12.style.display = 'none';
    }
    if (quoteCard == 13){
        q13.style.display = 'block';
    } else{
        q13.style.display = 'none';
    }
    if (quoteCard == 14){
        q14.style.display = 'block';
    } else{
        q14.style.display = 'none';
    }
    if (quoteCard == 15){
        q15.style.display = 'block';
    } else{
        q15.style.display = 'none';
    }
    if (quoteCard == 16){
        q16.style.display = 'block';
    } else{
        q16.style.display = 'none';
    }
    if (quoteCard == 17){
        q17.style.display = 'block';
    } else{
        q17.style.display = 'none';
    }
    if (quoteCard == 18){
        q18.style.display = 'block';
    } else{
        q18.style.display = 'none';
    }
    if (quoteCard == 19){
        q19.style.display = 'block';
    } else{
        q19.style.display = 'none';
    }
    if (quoteCard == 20){
        q20.style.display = 'block';
    } else{
        q20.style.display = 'none';
    }
}

// This function takes the username inputted in the form
// And greets the user
function greetUser(e){
    if(user.value === '' || user.value == null){
        alert("Please enter your name"); 
    } else if(timeHours < 11){
        console.log(timeHours);
        let uN = user.value;
        greet.textContent = "Good morning, " +uN+ "!";
    }else if(timeHours > 11 && timeHours < 15){
        console.log(timeHours);
        let uN = user.value;
        greet.textContent = "Good afternoon, " +uN+ "!";
        sun.style.backgroundColor = "orange";
    } else if(timeHours > 15 && timeHours < 18){
        console.log(timeHours);
        let uN = user.value;
        greet.textContent = "Good evening, " +uN+ "!";
        sun.style.backgroundColor = "orange";
    } else if(timeHours > 18){
        console.log(timeHours);
        let uN = user.value;
        greet.textContent = "Good night, " +uN+ "!";
        sun.style.display = 'none';
        moon.style.display = 'block';
        document.body.backgroundColor = 'black';
        card.style.border = 'solid 2px rgb(24, 188, 243)';
        card.style.backgroundColor = 'black';
        card.style.color = 'rgb(24, 188, 243)';


    } else {
        console.log('More than 12')
    }
    
}

