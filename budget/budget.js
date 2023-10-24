function calculerRest() {
    let date = document.getElementById('date').value;
    let typeTrans = document.querySelector('select').value;
    let montantTrans = document.getElementById('mnt').value;
    let descTrans = document.getElementById('des').value;
    let budgetInit = 450000;

    if (typeTrans === '1') { // depense
        restant = budgetInit - montantTrans;
    } 
    else if (typeTrans === '2') { // revenu
        restant = budgetInit + montantTrans;
    }

    if (restant >= 0.4 * budgetInit) {
        alert(`Date: ${date}\nType de transaction: ${typeTrans === '1' ? 'Dépense' : 'Revenu'}\nMontant de la transaction: ${montantTrans}\nDescription de la transaction: ${descTrans}\nMontant restant: ${restant}`);
    } else {
        alert('Transaction non valide: Montant restant insuffisant.');
    }
}