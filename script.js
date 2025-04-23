const productSelect = document.getElementById('product');
const groupLinkField = document.getElementById('group-link-field');

productSelect.addEventListener('change', () => {
  const value = productSelect.value;
  if (value.startsWith('sewabot')) {
    groupLinkField.classList.remove('hidden');
  } else {
    groupLinkField.classList.add('hidden');
  }
});

document.getElementById('payment-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Data berhasil disimpan!');
});
