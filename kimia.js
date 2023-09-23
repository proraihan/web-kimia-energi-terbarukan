// Ambil tombol "Ganti Tema"
const changeThemeButton = document.getElementById("changeTheme");

// Fungsi untuk mengganti tema warna latar belakang
function changeBackgroundColor() {
    const body = document.body;
    const currentBackgroundColor = window.getComputedStyle(body, null).getPropertyValue("background-color");

    // Daftar warna latar belakang yang mungkin
    const backgroundColors = ["#f4f4f4", "#e6f7ff", "#fff2e6"];

    // Cari indeks warna latar belakang saat ini dalam daftar
    const currentIndex = backgroundColors.indexOf(currentBackgroundColor);

    // Tentukan indeks warna latar belakang berikutnya
    const nextIndex = (currentIndex + 1) % backgroundColors.length;

    // Atur warna latar belakang baru
    body.style.backgroundColor = backgroundColors[nextIndex];
}

// Tambahkan event listener ke tombol "Ganti Tema"
changeThemeButton.addEventListener("click", changeBackgroundColor);

// Ambil elemen-elemen konten sumber energi
const solarSection = document.getElementById("solar");
const windSection = document.getElementById("wind");
const hydroSection = document.getElementById("hydro");
const BiogasSection = document.getElementById("Biogas")

// Fungsi untuk menyembunyikan semua elemen konten sumber energi
function hideAllSections() {
    solarSection.style.display = "none";
    windSection.style.display = "none";
    hydroSection.style.display = "none";
}

// Fungsi untuk menampilkan elemen konten sumber energi yang dipilih
function showSection(section) {
    section.style.display = "block";
}

// Atur tampilan awal
hideAllSections();
showSection(solarSection); // Tampilkan konten surya sebagai konten default

// Fungsi untuk mengganti konten saat pengguna mengklik menu navigasi
function changeContent(sectionId) {
    hideAllSections(); // Sembunyikan semua elemen konten
    const section = document.getElementById(sectionId);
    showSection(section); // Tampilkan elemen konten yang dipilih
}

// Tambahkan event listener untuk menu navigasi
document.querySelector("nav").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        const sectionId = e.target.getAttribute("href").substring(1); // Ambil id dari href
        changeContent(sectionId);
        e.preventDefault(); // Cegah aksi bawaan tautan
    }
});
// ... Kode JavaScript sebelumnya ...

// Fungsi untuk menambahkan komentar
function addComment(sectionId) {
    const commentInput = document.getElementById(`${sectionId}CommentInput`);
    const commentText = commentInput.value.trim();

    if (commentText === "") {
        return; // Jangan tambahkan komentar kosong
    }

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = commentText;

    const commentsContainer = document.getElementById(`${sectionId}Comments`);
    commentsContainer.appendChild(commentDiv);

    commentInput.value = ""; // Kosongkan kotak input setelah mengirim komentar
}

// Tambahkan event listener untuk tombol "Kirim Komentar" di setiap bagian
document.getElementById("addSolarComment").addEventListener("click", function () {
    addComment("solar");
});

document.getElementById("addWindComment").addEventListener("click", function () {
    addComment("wind");
});

document.getElementById("addHydroComment").addEventListener("click", function () {
    addComment("hydro");
});

    // Fungsi untuk menggulir halaman ke atas dengan efek smooth
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Munculkan atau sembunyikan tombol "Kembali ke Atas" saat menggulir
    window.onscroll = function () {
        var scrollButton = document.getElementById('back-to-top');
        if (document.documentElement.scrollTop > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    };

    // Fungsi untuk menangani navigasi dengan smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Ambil semua elemen iframe video
const videoFrames = document.querySelectorAll("iframe");

// Fungsi untuk menghentikan semua video
function stopVideos() {
    videoFrames.forEach((frame) => {
        frame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    });
}

// Tambahkan event listener untuk menghentikan video saat halaman dimuat ulang
window.addEventListener("beforeunload", stopVideos);


