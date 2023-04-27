// Mendefinisikan variabel untuk kontainer postingan blog dan tombol "Muat Lebih Banyak"
const blogPostsContainer = document.getElementById("blog-posts");
const loadMoreButton = document.getElementById("load-more-btn");

// Mengatur halaman yang sedang aktif dan jumlah postingan blog yang ditampilkan pada setiap halaman
let currentPage = 1;
const postsPerPage = 6;

// Fungsi untuk menampilkan postingan blog ke dalam kontainer yang ditentukan sesuai halaman yang diminta
function displayBlogPosts(posts, container, page) {
  const start = postsPerPage * (page - 1);
  const end = start + postsPerPage;
  const paginatedPosts = posts.slice(start, end);

  paginatedPosts.forEach(function (post) {
    // Membuat elemen HTML untuk setiap postingan blog
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
    // Menambahkan elemen HTML ke dalam kontainer postingan blog
    container.appendChild(blogPost);
  });
}

// Fungsi untuk memuat data postingan blog dari API menggunakan metode fetch()
function fetchBlogPosts(page) {
  fetch(`https://6449942fb88a78a8f00b50c0.mockapi.io/blog-posts?page=${page}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Menampilkan data postingan blog di halaman web menggunakan fungsi displayBlogPosts()
      displayBlogPosts(data, blogPostsContainer, currentPage);
      // Menyembunyikan tombol "Muat Lebih Banyak" jika data postingan blog sudah habis
      if (data.length < postsPerPage) {
        loadMoreButton.style.display = "none";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Memuat postingan blog yang pertama kali muncul di halaman web
fetchBlogPosts(currentPage);

// Menambahkan event listener pada tombol "Muat Lebih Banyak" untuk memuat postingan blog berikutnya
loadMoreButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Menambahkan nilai currentPage dengan 1 agar halaman yang dimuat berikutnya adalah halaman berikutnya
  currentPage++;
  fetchBlogPosts(currentPage);
});
