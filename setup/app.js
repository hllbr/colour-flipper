const colors = [
    "green",
    "red",
    "rgba(133,122,200)",
    "#f15025"];
    const btn = document.getElementById('btn');
    const color = document.querySelector('.color');


    btn.addEventListener('click', function () {
    //touchme butobuba basıldığında arkaplan rengini değiştireceğim alan
    //console.log(document.body);//for test
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);//for test
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


    function getRandomNumber(){

        return Math.round(Math.random()*colors.length);
    }
