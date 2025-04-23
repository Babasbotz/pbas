document.getElementById('generate').addEventListener('click', function() {
    const nama = document.getElementById('nama').value;
    const produk = document.getElementById('produk').value;
    const durasi = document.getElementById('durasi').value;
    const tanggal = document.getElementById('tanggal').value;
    const payment = document.getElementById('payment').value;

    document.getElementById('invoice-nama').textContent = nama;
    document.getElementById('invoice-produk').textContent = produk;
    document.getElementById('invoice-durasi').textContent = durasi;
    document.getElementById('invoice-tanggal').textContent = tanggal;
    document.getElementById('invoice-payment').textContent = payment;
});

document.getElementById('save-image').addEventListener('click', function() {
    const invoice = document.getElementById('invoice');
    
    html2canvas(invoice).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'invoice.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
