let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  totalPrice = 0;
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ราคา: ${item.price} บาท`;
    cartList.appendChild(listItem);
    totalPrice += item.price;
  });
  document.getElementById('total-price').textContent = `ราคารวม: ${totalPrice} บาท`;
}

function checkout() {
  alert(`ยอดรวมทั้งหมด: ${totalPrice} บาท\nสั่งซื้อสำเร็จแล้ว!`);
  cartItems = [];
  updateCartDisplay();
}
