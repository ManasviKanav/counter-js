const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //we need to target the body of the html by clicking on the button
    //get random number b/w 0 to 3 (for array colors)

    const randomNumber = getRandomnumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    //.textContent property to display the color on the screen

})

function getRandomnumber(){
    return Math.floor(Math.random()*colors.length);
}
//if you use math.random by itself, ie nottell it from where the random numbers are to be chosen, the numbers would be in between 0 and 1, but it never will actually give 1 similarly , we are choosing b/w 1 to 4 but we'll never get a 4 ,therefore we use floor - it rounds down to integer before it , the numbers we get will be between 0 and 3..


