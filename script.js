

function toggleMenu() {
    const overlay = document.querySelector('.overlay');
    const sidePanel = document.querySelector('.side-panel');
    overlay.classList.toggle('active');
    sidePanel.classList.toggle('active');
}

function toggleText() {
    const moreText = document.querySelector('.more-text');
    const button = document.getElementById('toggleButton');

    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        button.textContent = "Tutup";
    } else {
        moreText.classList.add('hidden');
        button.textContent = "Selengkapnya";
    }
}

document.getElementById('translateButton').addEventListener('click', function() {
    var translatedText = document.getElementById('translatedText');
    translatedText.style.display = translatedText.style.display === 'none' ? 'block' : 'none';
});

// Menampilkan notifikasi pop-up setelah beberapa detik
window.onload = function() {
    setTimeout(function() {
        document.getElementById('notificationPopup').classList.add('show');
    }, 2000); // tampil setelah 2 detik
};

// Fungsi untuk scroll ke bawah dan menyembunyikan notifikasi
function scrollToStory() {
    document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('notificationPopup').classList.remove('show');
}