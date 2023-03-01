function Calcular(){
    const input = document.getElementById("input").value;

    for(let i = 1; i <= 10; i++){
        document.write(input * i + "<br>")
    }
}