document.getElementById('product').addEventListener('change', function () {
    const sewabotGroupLinkContainer = document.getElementById('sewabot-group-link-container');
    if (this.value.startsWith('sewabot')) {
        sewabotGroupLinkContainer.style.display = 'block';
    } else {
        sewabotGroupLinkContainer.style.display = 'none';
    }
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Data berhasil disimpan!');
});
