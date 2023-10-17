alert("ahoj!!!!")

function fibCislo(n) {
    if (n < 2) return 1
        return fibCislo(n - 1) + fibCislo(n - 2)

}

function vypocitej() {
    alert(fibCislo(Number(document.getElementById("vstup").value)))
}