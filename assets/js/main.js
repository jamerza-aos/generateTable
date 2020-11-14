const zeilenFeld = document.getElementById('zeilenFeld')
const spaltenFeld = document.getElementById('spaltenFeld')
const result = document.getElementById('result')

const generateTable = () => {
    result.innerHTML = ""
    const zeilen = zeilenFeld.value
    const spalten = spaltenFeld.value
    let table = document.createElement('table')
    for (let r = 0; r <= zeilen; r++) {
        let row = table.insertRow(r)
        for (let s = 0; s <= spalten; s++) {
            let cell = row.insertCell(s)
            let cellText = `${r + 1}.${s + 1}`
            cell.append(cellText)
        }
    }
    result.append(table)
}