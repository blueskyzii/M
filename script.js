

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
      error.textContent = "Please input your full name."; // Handle empty input
      return;
    }

    // Convert input to binary
    const inputBinary = stringToBinary(input);

    // Compare binary input with binary correct password
    if (inputBinary === correctPasswordBinary) {
      overlay.style.display = "none"; // Hide the overlay
      confess.style.display = "flex"; // Show the content
    } else {
      error.textContent = "Salah (pastikan huruf besar semua atau bukan kamu orangnya).";
    }
}

function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

function closeConfess() {
    document.getElementById('confess').style.display = 'none';
}
