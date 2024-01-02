function calc(){
    const tab = document.getElementById("tab").value;

    for(let i = 1; i <= 10; i++ ){
        document.write(tab * i + "<br>")
    }
}