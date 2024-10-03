function tambah(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return 'input harus angka';
  }
  return a + b;
}

function kali(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return 'input harus angka';
  }
  return a * b;
}

function kurang(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return 'input harus angka';
  }
  return a - b;
}

function bagi(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return 'input harus angka';
  }
  if (b === 0) {
      return 'Tidak dapat membagi dengan nol';
  }
  return a / b;
}

module.exports = { tambah, kali, kurang, bagi };
