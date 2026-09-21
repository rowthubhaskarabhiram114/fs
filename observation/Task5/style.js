const nameField  = document.getElementById('pname');
const qtyField   = document.getElementById('qty');
const priceField = document.getElementById('unitPrice');
const summaryLine = document.getElementById('summary');
const totalLine   = document.getElementById('grandTotal');
// Convert a field value to a safe non-negative number
function readNumber(field) {
  const value = parseFloat(field.value);
  if (isNaN(value) || value < 0) {
    return 0;
  }
  return value;
}
// Recalculate and show the total price
function updateTotal() {
  const quantity = Math.floor(readNumber(qtyField));
  const price    = readNumber(priceField);
  const total    = quantity * price;
  const product  = nameField.value.trim() || 'Product';
  summaryLine.textContent = product + ': ' + quantity + ' x Rs. ' + price.toFixed(2);
  totalLine.textContent   = 'Total: Rs. ' + total.toFixed(2);
}
// Update the result whenever any field changes
[nameField, qtyField, priceField].forEach(function (field) {
  field.addEventListener('input', updateTotal);
});
// Show the initial result on page load
updateTotal()