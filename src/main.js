let btnOk = document.querySelector(".btnOk");

let cnt = 0
btnOk.onclick = () => {
    if (cnt == 0) {
        document.body.style.backgroundColor = "gray";
        cnt ++
    }
    else {
        document.body.style.backgroundColor = "white";
        cnt --
    }
}