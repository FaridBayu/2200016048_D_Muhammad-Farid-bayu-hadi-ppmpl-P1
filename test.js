const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');
describe('Pengujian Fungsi Matematika', function() {
 it('seharusnya mengembalikan 4 saat menambahkan 2 + 2 ', 
    function() {
        expect(tambah(2, 2)).to.equal(4);
    });
 it('seharusnya mengembalikan 6,25 saat mengalikan 2.5 * 2.5', 
    function() {
        expect(kali(2.5, 2.5)).to.equal(6.25);
    });
 it('seharusnya mengembalikan -1 saat mengurangkan 2,5 - 3,5', 
    function() {
        expect(kurang(2.5, 3.5)).to.equal(-1);
    });
 it('seharusnya mengembalikan 2 saat membagikan 6 / 2', 
    function() {
        expect(bagi(6, 3)).to.equal(2);
    });
});
