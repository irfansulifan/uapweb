function TambahBarang() {
    // Mengambil nilai dari input
    var Kode = document.getElementById('Kode').value;
    var Barang = document.getElementById('Barang').value;
    var Harga = parseFloat(document.getElementById('Harga').value);
  
    // Melakukan operasi atau manipulasi data sesuai kebutuhan
    var totalBelanja = parseFloat(document.getElementById('totalBelanja').innerHTML.replace('Rp ', '')) || 0;
    totalBelanja += Harga;
  
    // Menampilkan hasil pada elemen dengan id "totalBelanja"
    document.getElementById('totalBelanja').innerHTML = 'Rp ' + totalBelanja.toFixed(2);
  
    // Menambahkan detail barang pada elemen dengan id "detailBelanja"
    document.getElementById('detailBelanja').innerHTML += `
      <p>Kode Barang: ${Kode}, Nama Barang: ${Barang}, Harga: Rp ${Harga.toFixed(2)}</p>
    `;
  }