// let blogPosts = [
//     {
//       image: "asset/blog1.jpeg",
//       title: "5 Cara Turunkan Kolesterol dengan Cepat, Ganti Daging dengan Ikan",
//       text: "Di momen Idulfitri, menyantap menu khas Lebaran yang banyak mengandung santan dan lemak, dapat meningkatkan kolesterol tubuh jika dikonsumsi berlebihan."
//     },
//     {
//       image: "asset/blog2.jpg",
//       title: "5 Tips Agar Tak Batal Puasa di Tengah Cuaca Ekstrem",
//       text: "Berpuasa di tengah cuaca panas yang cukup ekstrem terasa sangat menyiksa. Apalagi, akhir-akhir ini cuaca di Jakarta dan sekitarnya juga terasa semakin panas."
//     },
//     {
//       image: "asset/image1.png",
//       title: "Indonesia Diterjang Panas Mendidih, Ini Wanti-wanti Kemenkes Biar Tubuh Tetap Sehat",
//       text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
//     },
//     {
//         image: "asset/image1.png",
//         title: "13 Buah Pelancar ASI yang Bagus untuk Booster Alami",
//         text: "Selama masa menyusui, ibu mungkin akan mengonsumsi banyak makanan yang"
//       },
//       {
//         image: "asset/image1.png",
//         title: "10 Cara Mengendalikan Emosi dengan Tepat saat Marah",
//         text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
//       },
//       {
//         image: "asset/image1.png",
//         title: "13 Buah Pelancar ASI yang Bagus untuk Booster Alami",
//         text: "Selama masa menyusui, ibu mungkin akan mengonsumsi banyak makanan yang"
//       },
//       {
//         image: "asset/image1.png",
//         title: "10 Cara Mengendalikan Emosi dengan Tepat saat Marah",
//         text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
//       },  {
//         image: "asset/image1.png",
//         title: "13 Buah Pelancar ASI yang Bagus untuk Booster Alami",
//         text: "Selama masa menyusui, ibu mungkin akan mengonsumsi banyak makanan yang"
//       },
//       {
//         image: "asset/image1.png",
//         title: "10 Cara Mengendalikan Emosi dengan Tepat saat Marah",
//         text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
//       },
//     {
//       image: "asset/image1.png",
//       title: "13 Buah Pelancar ASI yang Bagus untuk Booster Alami",
//       text: "Selama masa menyusui, ibu mungkin akan mengonsumsi banyak makanan yang"
//     },
//     {
//       image: "asset/image1.png",
//       title: "10 Cara Mengendalikan Emosi dengan Tepat saat Marah",
//       text: "Ketika marah, setiap orang dapat menunjukkan emosinya dengan cara yang berbeda-beda."
//     }
//   ];

//   // Loop untuk membuat kartu blog
// const blogPostsContainer = document.getElementById("blog-posts");
// const postsPerPage = 6; // jumlah kartu blog yang ditampilkan per halaman
// let currentPage = 1; // halaman saat ini

// // fungsi untuk menampilkan kartu blog pada halaman tertentu
// function displayBlogPosts(posts, container, page) {
//   const start = postsPerPage * (page - 1);
//   const end = start + postsPerPage;
//   const paginatedPosts = posts.slice(start, end);

//   paginatedPosts.forEach(function (post) {
//     const blogPost = document.createElement("div");
//     blogPost.classList.add("col-md-4");
//     blogPost.innerHTML = `
//       <div class="card border-0">
//         <img src="${post.image}" class="card-img-top" alt="${post.title}">
//         <div class="card-body px-0">
//           <h5 class="card-title">${post.title.length > 65 ? post.title.slice(0, 65) + '...' : post.title}</h5>
//           <p class="card-text mt-3">${post.text.length > 80 ? post.text.slice(0, 80) + '...' : post.text}</p>
//           <button class="btn btn-outline-primary">Lihat Semuanya</button>
//         </div>
//       </div>
//     `;
//     container.appendChild(blogPost);
//   });
// }


// // menampilkan kartu blog pada halaman saat ini
// displayBlogPosts(blogPosts, blogPostsContainer, currentPage);

// // tambahkan event listener pada tombol "Load More" untuk memuat lebih banyak kartu blog
// const loadMoreButton = document.getElementById("load-more-btn");
// loadMoreButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   currentPage++;
//   displayBlogPosts(blogPosts, blogPostsContainer, currentPage);
// });

const blogPostsContainer = document.getElementById("blog-posts");
const loadMoreButton = document.getElementById("load-more-btn");

let currentPage = 1;
const postsPerPage = 6;

function displayBlogPosts(posts, container, page) {
  const start = postsPerPage * (page - 1);
  const end = start + postsPerPage;
  const paginatedPosts = posts.slice(start, end);

  paginatedPosts.forEach(function (post) {
    const blogPost = document.createElement("div");
    blogPost.classList.add("col-md-4");
    blogPost.innerHTML = `
      <div class="card border-0">
        <img src="${post.image}" class="card-img-top" alt="${post.title}">
        <div class="card-body px-0">
          <h5 class="card-title">${post.title.length > 65 ? post.title.slice(0, 65) + '...' : post.title}</h5>
          <p class="card-text mt-3">${post.text.length > 80 ? post.text.slice(0, 80) + '...' : post.text}</p>
          <button class="btn btn-outline-primary">Lihat Semuanya</button>
        </div>
      </div>
    `;
    container.appendChild(blogPost);
  });
}

function fetchBlogPosts(page) {
  fetch(`https://6449942fb88a78a8f00b50c0.mockapi.io/blog-posts?page=${page}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayBlogPosts(data, blogPostsContainer, currentPage);
      if (data.length < postsPerPage) {
        loadMoreButton.style.display = "none";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetchBlogPosts(currentPage);

loadMoreButton.addEventListener("click", function (event) {
  event.preventDefault();
  currentPage++;
  fetchBlogPosts(currentPage);
});
