document.addEventListener("DOMContentLoaded", function() {
    const userNameInput = document.getElementById("userName");
    const btn = document.getElementById("btn");
    const container = document.querySelector(".container");

    btn.addEventListener("click", function() {
        const userName = userNameInput.value.trim();
        
        if (userName === "") {
            alert("Masukkan nama Anda terlebih dahulu.");
            return;
        }
    
        const hololive = [
            { name: "Ayunda Risu", img: "picture/risu.jpeg", link: "https://www.youtube.com/@AyundaRisu"},
            { name: "Airani Iofifteen", img: "picture/iofi.jpeg", link: "https://www.youtube.com/@AiraniIofifteen"},
            { name: "Moona Hoshinova", img: "picture/moona.jpeg", link: "https://www.youtube.com/@MoonaHoshinova"},
            { name: "Anya Melfissa", img: "picture/anya.jpeg", link: "https://www.youtube.com/@AnyaMelfissa"},
            { name: "Kureiji Ollie", img: "picture/ollie.jpeg", link: "https://www.youtube.com/@KureijiOllie"},
            { name: "Pavolia Reine", img: "picture/reine.jpeg", link: "https://www.youtube.com/@PavoliaReine"},
            { name: "Vestia Zeta", img: "picture/zeta.jpeg", link: "https://www.youtube.com/@VestiaZeta"},
            { name: "Kobo Kanaeru", img: "picture/kobo.jpeg", link: "https://www.youtube.com/@KoboKanaeru"},
            { name: "Kaela Kovalskia", img: "picture/kaela.jpeg", link: "https://www.youtube.com/@KaelaKovalskia"}
        ];

        function randomHololive() {
            const index = Math.floor(Math.random() * hololive.length);
            return hololive[index];
        }

        const randomWaifu = randomHololive();
        container.innerHTML = `
            <div>
                <h2>${userName} Waifu Kamu Adalah <br> ${randomWaifu.name}</h2>
            </div>
            <a href="${randomWaifu.link}" target="_blank">
                <img src="${randomWaifu.img}" alt="${randomWaifu.name}">
            </a>
            <button onclick="window.location.reload();">Coba Lagi ?</button>
        `;
    });
});
