const cardData = [
    {
      img: "asset/icon/umum.png",
      title: "Umum"
    },
    {
      img: "asset/icon/otak.png",
      title: "Otak"
    },
    { 
      img: "asset/icon/Jiwa.png",
      title: "Jiwa"
    },
    {
      img: "asset/icon/Kandungan.png",
      title: "Kandungan"
    },
    {
      img: "asset/icon/Anak.png",
      title: "Anak"
    },
    {
      img: "asset/icon/Penyakit Dalam.png",
      title: "Penyakit Dalam"
    },
    {
      img: "asset/icon/THT.png",
      title: "THT"
    },
    {
      img: "asset/icon/Ortopedi.png",
      title: "Ortopedi"
    },
    {
      img: "asset/icon/Paru.png",
      title: "Paru"
    },
    {
      img: "asset/icon/Beda Umum.png",
      title: "Bedah Umum"
    },
    {
      img: "asset/icon/Jantung.png",
      title: "Jantung"
    },
    {
      img: "asset/icon/Mata.png",
      title: "Mata"
    }
  ];

  // Menampilkan card dari array menggunakan perulangan
  for (let i = 0; i < cardData.length; i++) {
    // Membuat sebuah card baru menggunakan elemen HTML
    const card = document.createElement('div');
    card.classList.add("col-md-2", "my-3");  // Menambahkan class col-md-2 untuk mengatur ukuran card

    // Menambahkan isi card menggunakan innerHTML
    card.innerHTML = `
      <div class="card border-0">
        <div class="card-body">
          <img src="${cardData[i].img}" alt="">
          <div>
            <h5 class="card-title">${cardData[i].title}</h5>
          </div>
        </div>
      </div>
    `;

    // Memasukkan card ke dalam row
    document.getElementById('card-row').appendChild(card);
  }
