const form = document.querySelector('#form');
const qr = document.querySelector('#qrcode');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.querySelector('#input').value;
  const size = document.querySelector('#size').value;
  console.log(size);
  if (input === '') {
    alert('Please enter a URL');
  } else {
    genarateQRcode(input, size);
  }
});

const genarateQRcode = (input, size) => {
  const qrcode = new QRCode('qrcode', {
    text: input,
    width: size,
    height: size,
  });
};
