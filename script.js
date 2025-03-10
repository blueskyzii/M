function countDaysSince(targetDateStr) {
	const [day, month, year] = targetDateStr.split("/").map(Number);
	const targetDate = new Date(year, month - 1, day);

	function updateCountdown() {
		const currentDate = new Date();
		const timeDiff = currentDate - targetDate;

		const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
		const seconds = Math.floor((timeDiff / 1000) % 60);

		document.getElementById("output").innerHTML = `
      <p>after waiting for <strong>${days}d/${hours}h/${minutes}m/${seconds}s</strong> (GMT+7), and finally, I… I'm so happy.</p>
    `;
	}

	updateCountdown();
	setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
	countDaysSince("27/07/2023");
});

function toggleMenu() {
	const overlay = document.querySelector(".overlay");
	const sidePanel = document.querySelector(".side-panel");
	overlay.classList.toggle("active");
	sidePanel.classList.toggle("active");
}

function toggleHamburgerVisibility() {
	const hamburger = document.getElementById("burger");

	if (window.innerWidth >= 1025) {
		hamburger.style.display = "none"; // Sembunyikan di desktop
	} else {
		hamburger.style.display = "block"; // Tampilkan di mobile
	}
}

// Jalankan saat halaman dimuat
toggleHamburgerVisibility();

// Jalankan saat ukuran layar berubah
window.addEventListener("resize", toggleHamburgerVisibility);

function toggleText() {
	const moreText = document.querySelector(".more-text");
	const button = document.getElementById("toggleButton");

	if (moreText.classList.contains("hidden")) {
		moreText.classList.remove("hidden");
		button.textContent = "Tutup";
	} else {
		moreText.classList.add("hidden");
		button.textContent = "Selengkapnya";
	}
}

let sudahLogin = false;
let click;

function stringToBinary(str) {
	let binaryString = "";
	for (let i = 0; i < str.length; i++) {
		binaryString += str.charCodeAt(i).toString(2).padStart(8, "0");
	}
	return binaryString;
}

const correctPassword = "0100110101000001010110010100000100100000010011010100100101010010010000010100111001000100010000010010000001010011010000010101001001001001";

function checkPassword() {
	const input = document.getElementById("password").value;
	const error = document.getElementById("error");
	const overlay = document.getElementById("overlay");

	if (!input) {
		error.textContent = "Please input something.";
		return;
	}

	const inputBinary = stringToBinary(input);

	if (inputBinary === correctPassword) {
		playMusic();
		buttonDarkMode();
		tulisHistory();

		const icon = document.getElementById("darkModeIcon");
		const slider = document.getElementById("buttonDark");

		slider.style.backgroundColor = ["rgb(30, 30, 30)", "#b8b4a0"].includes(slider.style.backgroundColor) ? "#1e1e1e" : "#b8b4a0";
		icon.className = document.getElementById("darkModeToggle").checked ? "fas fa-eye" : "fas fa-eye-slash";
		sudahLogin = true;

		document.addEventListener("DOMContentLoaded", function () {
			cekSlide();
		});

		let hideButton = document.getElementById("hideButton");
		let side = document.getElementById("side");

		if (side) {
			side.style.backgroundColor = "#252525";
		}
		if (hideButton) {
			hideButton.style.display = "block";
		}

		// let heart = new Heart();
		// let onlyFor = "4d617961";

		// if (heart.isEmpty()) {
		//   heart.waitForYou();
		//   heart.fillWithYourLove();
		// } else if (heart.onlyFrom(onlyFor)) {
		//   heart.comeToYou();
		// } else {
		//   heart.rejectOtherLove();
		//   heart.keepThinkingOfYou(onlyFor);
		// }

		const elements = {
			bawah: "#121212",
			// buttonDark: "#1e1e1e",
			tab: "#1e1e1e",
			header: "#121212",
		};

		Object.entries(elements).forEach(([id, color]) => {
			let element = document.getElementById(id);
			if (element) {
				element.style.backgroundColor = color;
			}
		});

		document.querySelectorAll("#a1").forEach((element) => {
			element.style.color = "#e0e0e0";
		});

		document.querySelectorAll("#box").forEach((element) => {
			element.style.backgroundColor = "#252525";
			element.style.color = "#e0e0e0";
		});

		document.querySelectorAll("#warna").forEach((element) => {
			element.style.color = "#e0e0e0";
		});

		const bgElements = ["#story", "#confess-box", "#badan"];
		bgElements.forEach((selector) => {
			let element = document.querySelector(selector);
			if (element) {
				element.style.backgroundColor = "#252525";
				element.style.color = "#e0e0e0";
			}
		});

		// Sembunyikan button-container jika ada
		const button = document.getElementById("buttonClick");
		if (button) button.style.display = "none";

		// Mengubah warna teks untuk elemen dengan ID tertentu
		const textElements = ["#font0", "#font1", "#font2", "#font3", "#font4"];
		textElements.forEach((selector) => {
			let element = document.querySelector(selector);
			if (element) {
				element.style.color = "#e0e0e0";
			}
		});

		overlay.style.display = "none"; // Hide the overlay
		confess.style.display = "flex"; // Show the content

		document.getElementById("motivasiAwal").style.display = "none";
		document.getElementById("mAkhir").style.display = "block";
		document.getElementById("story").style.display = "block";
	} else {
		error.textContent = "failed, wrong person?";
	}
}

// Fungsi untuk mengganti tab
function switchTab(tabElement, tabName, callback) {
	// Hapus status "active" dari semua tab
	const tabs = document.querySelectorAll(".tab");
	tabs.forEach((tab) => tab.classList.remove("active"));

	// Tambahkan status "active" pada tab yang dipilih
	tabElement.classList.add("active");

	// Jalankan fungsi callback untuk tab tertentu
	if (typeof callback === "function") {
		callback(tabName);
	}
}

function showOverlay() {
	document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
	document.getElementById("overlay").style.display = "none";
}

function showHBD() {
	let hbdBox = document.getElementById("hbd-box");
	let hbd = document.getElementById("hbd");
	let confess = document.getElementById("confess");

	if (hbd) {
		hbd.style.display = "flex";
	}

	if (hbdBox) {
		hbdBox.style.backgroundColor = "#252525 ";
		hbdBox.style.color = "#e0e0e0";
	}

	if (confess) {
		confess.style.display = "none";
	}
}

function closeConfess() {
	document.getElementById("hbd").style.display = "none";
}

function clickHome() {
	document.getElementById("home").style.display = "block";
	document.getElementById("gallery").style.display = "none";
	document.getElementById("project").style.display = "none";
}

function clickGallery() {
	document.getElementById("home").style.display = "none";
	document.getElementById("gallery").style.display = "block";
	document.getElementById("project").style.display = "none";
}

function clickProject() {
	document.getElementById("home").style.display = "none";
	document.getElementById("gallery").style.display = "none";
	if (sudahLogin) {
		document.getElementById("project").style.display = "block";
	} else {
		alert("ERROR 404! Coming Soon..");
	}
}

function playMusic() {
	var audio = document.getElementById("myAudio");
	audio.currentTime = 25;
	audio.play();
}

function buttonDarkMode() {
	if (!sudahLogin) {
		const icon = document.getElementById("darkModeIcon");
		const slider = document.getElementById("buttonDark");

		slider.style.backgroundColor = ["rgb(30, 30, 30)", "#1e1e1e"].includes(slider.style.backgroundColor) ? "#b8b4a0" : "#1e1e1e";
		icon.className = document.getElementById("darkModeToggle").checked ? "fas fa-eye-slash" : "fas fa-eye";
	} else {
		const icon = document.getElementById("darkModeIcon");
		const slider = document.getElementById("buttonDark");

		slider.style.backgroundColor = ["rgb(30, 30, 30)", "#1e1e1e"].includes(slider.style.backgroundColor) ? "#b8b4a0" : "#1e1e1e";
		icon.className = document.getElementById("darkModeToggle").checked ? "fas fa-eye" : "fas fa-eye-slash";
	}

	let isDarkMode = document.body.classList.toggle("dark-mode");
	let side = document.getElementById("side");

	if (side) {
		side.style.backgroundColor = isDarkMode ? "#252525" : "";
	}

	const elements = {
		bawah: "#121212",
		tab: "#1e1e1e",
		header: "#121212",
	};

	Object.entries(elements).forEach(([id, color]) => {
		let element = document.getElementById(id);
		if (element) {
			element.style.backgroundColor = isDarkMode ? color : "";
		}
	});

	document.querySelectorAll("#a1").forEach((element) => {
		element.style.color = isDarkMode ? "#e0e0e0" : "";
	});

	document.querySelectorAll("#hamburger").forEach((element) => {
		element.style.backgroundColor = isDarkMode ? "#e0e0e0" : "";
	});

	document.querySelectorAll("#box").forEach((element) => {
		element.style.backgroundColor = isDarkMode ? "#252525" : "";
		element.style.color = isDarkMode ? "#e0e0e0" : "";
	});

	document.querySelectorAll("#warna").forEach((element) => {
		element.style.color = isDarkMode ? "#e0e0e0" : "";
	});

	const bgElements = ["#story", "#confess-box", "#badan", "#form-box", "#input-box", "#auth-box"];
	bgElements.forEach((selector) => {
		let element = document.querySelector(selector);
		if (element) {
			element.style.backgroundColor = isDarkMode ? "#252525" : "";
			element.style.color = isDarkMode ? "#e0e0e0" : "";
		}
	});

	const button = document.getElementById("button-container");
	if (button) button.style.display = isDarkMode ? "none" : "";

	const textElements = ["#font0", "#font1", "#font2", "#font3", "#font4"];
	textElements.forEach((selector) => {
		let element = document.querySelector(selector);
		if (element) {
			element.style.color = isDarkMode ? "#e0e0e0" : "";
		}
	});
}

function tulisHistory() {
	gtag("event", "login_berhasil", {
		event_category: "authentication",
		event_label: "Login Sukses",
	});
}

function cekSlide() {
	let toggleInput = document.querySelector(".toggle-label input");

	function setToggleState(state) {
		toggleInput.checked = state;
	}

	let kondisi = false;

	setToggleState(kondisi);
}

function showForm() {
	document.getElementById("anonym").style.display = "none";
	document.getElementById("form").style.display = "flex";
}

function cancelForm() {
	document.getElementById("anonym").style.display = "block";
	document.getElementById("form").style.display = "none";
}
