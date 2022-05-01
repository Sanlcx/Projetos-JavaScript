function calculateTip(event) {
    event.preventDefault();
    console.log(event);
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPpl = document.getElementById('numOfPpl').value;
    let total = bill * serviceQual / numOfPpl;
    total = total.toFixed(2);
    if (numOfPpl <= 1) {
        numOfPpl = 1
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    if (bill < 0) {
        alert('O valor não pode ser negativo.')
        return;
    }

    document.getElementById('tip').innerHTML = total;
    document.getElementById("totalTip").style.display = "block";
    
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("tipsForm").addEventListener('submit', calculateTip);