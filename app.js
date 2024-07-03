document.addEventListener("DOMContentLoaded", function() { // Elemen HTML, CSS dan JS dimuat
    const userNameInput = document.getElementById("userName"); // Mengambil Data Dari Html
    const btn = document.getElementById("btn");
    const container = document.querySelector(".container");

    userNameInput.addEventListener("keydown", (event) => { // Fungsi Key (Enter) agar bisa menginput
        if (event.key === "Enter") {
            handleButtonClick();
        }
    });

    btn.addEventListener("click", handleButtonClick); // Event dimana saat button di Click akan memproses Command dibawah
    
    function handleButtonClick() {
        const userName = userNameInput.value.trim(); // Mengambil Value(Nilai) dari Input yang sudah diubah menjadi Const
        
        if (userName === "") { // Jika Username kosong akan mendapat Alert
            alert("Masukkan nama Anda terlebih dahulu.");
            return; 
        }
    
        fetch('hololive.json') // Mengambil data dari Server
          .then(response => { // Server akan merespon
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Jika Server tidak merespon akan membuat pengumuman eror
            }
            return response.json(); // Jika merespon User bisa mengakses nya
        })
        .then(data => {
            const randomWaifu = randomHololive(data);  // Mengambil data dari server lalu memasukkan nya kedalam HTML
            container.innerHTML = `
                <div class="random">
                    <h3>${userName} Waifu Kamu Adalah</h3>
                    <h2>${randomWaifu.name}</h2>
                </div>
                <a href="${randomWaifu.link}" target="_blank">
                    <img src="${randomWaifu.img}" alt="${randomWaifu.name}">
                </a>
                <button onclick="window.location.reload();">Coba Lagi ?</button>
                `;
            })
          .catch(error => { // Jika Pengambilan data eror maka akan membuat sebuah pengumuman
            console.error('There has been a problem with your fetch operation:', error);
          });
    }
    function randomHololive(data) { // Fungsi yang dimana akan mengambil Random data dari server lalu dimasukkan kedalam Variabel data
        const index = Math.floor(Math.random() * data.length);
        return data[index];
    }
});
