

function TalabaBall () {
    const name = document.getElementById("name");
    const BallVa = document.getElementById("Ball");
    const result = document.getElementById("result");
    console.log(typeof BallVa.value)
    let grant = "O'qishga taklif qilindiz"
    const Ball = parseFloat(BallVa.value);

    if(Ball >= 90){
        result.innerHTML = `${name.value}"Grant Asosida"${grant}`;
    }else if (Ball < 90 && Ball >= 80){
        result.innerHTML = `${name.value}"Kantrak Asosida"${grant}`;
    }else if (Ball < 80 && Ball >= 70){
        result.innerHTML = `${name.value}"Super Kantrak"${grant}`;
    }else {
        result.innerHTML = `${name.value}"Oqiwga Tavsiya etilmadingiz"`;
    }


}