function countDaysSince(targetDateStr) {
  // Parse tanggal yang telah ditentukan (format: DD/MM/YYYY)
  const [day, month, year] = targetDateStr.split('/').map(Number);
  const targetDate = new Date(year, month - 1, day);
  
  // Ambil tanggal saat ini
  const currentDate = new Date();
  
  // Hitung selisih waktu dalam milidetik
  const timeDiff = currentDate - targetDate;
  
  // Konversi ke hari
  const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
  // Tampilkan hasil dalam elemen HTML
  document.getElementById("output").innerHTML = `
      <p>Day-${daysPassed}. Waiting for you..<br>I don't know hari ke berapa tapi setidaknya aku memulai dari hari spesialmu.</p>
  `;
}

// Contoh pemanggilan fungsi
document.addEventListener("DOMContentLoaded", function() {
  countDaysSince("27/12/2024");
});


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

// Convert string to binary
function stringToBinary(str) {
    let binaryString = '';
    for (let i = 0; i < str.length; i++) {
      binaryString += str.charCodeAt(i).toString(2).padStart(8, '0'); // convert char to binary
    }
    return binaryString;
  }

  const correctPasswordBinary = "0100110101000001010110010100000100100000010011010100100101010010010000010100111001000100010000010010000001010011010000010101001001001001";

  function checkPassword() {
    const input = document.getElementById("password").value; // Get input value
    const error = document.getElementById("error");
    const overlay = document.getElementById("overlay");

    if (!input) {
      error.textContent = "Please input something."; // Handle empty input
      return;
    }

    // Convert input to binary
    const inputBinary = stringToBinary(input);

    // Compare binary input with binary correct password
    if (inputBinary === correctPasswordBinary) {
      overlay.style.display = "none"; // Hide the overlay
      confess.style.display = "flex"; // Show the content
      document.getElementById('story').style.display = 'block';
    } else {
      error.textContent = "Salah (all caps or maybe wrong person).";
    }
}

// Fungsi untuk mengganti tab
function switchTab(tabElement, tabName, callback) {
  // Hapus status "active" dari semua tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Tambahkan status "active" pada tab yang dipilih
  tabElement.classList.add('active');

  // Jalankan fungsi callback untuk tab tertentu
  if (typeof callback === 'function') {
      callback(tabName);
  }
}

function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}

function closeConfess() {
    document.getElementById('confess').style.display = 'none';
}

function clickHome() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('gallery').style.display = 'none';
}

function clickGallery() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('gallery').style.display = 'block';
}