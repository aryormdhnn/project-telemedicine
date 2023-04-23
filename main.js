let blogPosts = [
    {
      image: "asset/image1.png",
      title: "10 Penyebab Mudah Lelah, Bukan Hanya Kurang Istirahat!",
      text: "Mulai dari kekurangan nutrisi hingga gagal jantung, berikut adalah sederet kemungkinan penyebab"
    },
    {
      image: "asset/image1.png",
      title: "13 Buah Pelancar ASI yang Bagus untuk Booster Alami",
      text: "Selama masa menyusui, ibu mungkin akan mengonsumsi banyak makanan yang"
    },
    {
      image: "asset/image1.png",
      title: "10 Cara Mengendalikan Emosi dengan Tepat saat Marah",
      text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
    },
    {
        image: "asset/image1.png",
        title: "13 Buah Pelancar ASI yang Bagus untuk Booster Alami",
        text: "Selama masa menyusui, ibu mungkin akan mengonsumsi banyak makanan yang"
      },
      {
        image: "asset/image1.png",
        title: "10 Cara Mengendalikan Emosi dengan Tepat saat Marah",
        text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
      },
      {
        image: "asset/image1.png",
        title: "13 Buah Pelancar ASI yang Bagus untuk Booster Alami",
        text: "Selama masa menyusui, ibu mungkin akan mengonsumsi banyak makanan yang"
      },
      {
        image: "asset/image1.png",
        title: "10 Cara Mengendalikan Emosi dengan Tepat saat Marah",
        text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
      },  {
        image: "asset/image1.png",
        title: "13 Buah Pelancar ASI yang Bagus untuk Booster Alami",
        text: "Selama masa menyusui, ibu mungkin akan mengonsumsi banyak makanan yang"
      },
      {
        image: "asset/image1.png",
        title: "10 Cara Mengendalikan Emosi dengan Tepat saat Marah",
        text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
      }
  ];

  // Loop untuk membuat kartu blog
  const blogPostsContainer = document.getElementById("blog-posts");
  blogPosts.forEach(function (post) {
    const blogPost = document.createElement("div");
    blogPost.classList.add("col-md-4");
    blogPost.innerHTML = `
      <div class="card border-0">
        <img src="${post.image}" class="card-img-top" alt="${post.title}">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text mt-3">${post.text}</p>
          <button class="btn btn-primary">Lihat Semuanya</button>
        </div>
      </div>
    `;
    blogPostsContainer.appendChild(blogPost);
  });

  