document.addEventListener("DOMContentLoaded", function() {
    const userNameInput = document.getElementById("userName");
    const btn = document.getElementById("btn");
    const container = document.querySelector(".container");

    userNameInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            handleButtonClick();
        }
    });

    btn.addEventListener("click", handleButtonClick);
    
    function handleButtonClick() {
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
            { name: "Kaela Kovalskia", img: "picture/kaela.jpeg", link: "https://www.youtube.com/@KaelaKovalskia"},
            { name: "Amelia Watson", img: "holo_en/amelia.jpeg", link: "https://www.youtube.com/@WatsonAmelia"},
            { name: "Cecilia Immergreen", img: "holo_en/cecilia.jpeg", link: "https://www.youtube.com/@holoen_ceciliaimmergreen"},
            { name: "Ceres Fauna", img: "holo_en/ceres.jpeg", link: "https://www.youtube.com/@CeresFauna"},
            { name: "Elizabeth Rose", img: "holo_en/elizabeth.png", link: "https://www.youtube.com/@holoen_erbloodflame"},
            { name: "Fuwamoco", img: "holo_en/fuwamoco.jpeg", link: "https://www.youtube.com/@FUWAMOCOch"},
            { name: "Gawr Gura", img: "holo_en/gura.jpeg", link: "https://www.youtube.com/@GawrGura"},
            { name: "Hakos Baelz", img: "holo_en/baelz.jpeg", link: "https://www.youtube.com/@HakosBaelz"},
            { name: "Irys", img: "holo_en/irys.jpeg", link: "https://www.youtube.com/@IRyS"},
            { name: "Koeseki Bijou", img: "holo_en/koeseki.jpeg", link: "https://www.youtube.com/@KosekiBijou"},
            { name: "Mori calliope", img: "holo_en/mori.jpeg", link: "https://www.youtube.com/@MoriCalliope"},
            { name: "Nanashi Mumei", img: "holo_en/nanshi.jpeg", link: "https://www.youtube.com/@NanashiMumei"},
            { name: "Nerissa Ravencroft", img: "holo_en/nerissa.jpeg", link: "https://www.youtube.com/@NerissaRavencroft"},
            { name: "Ninomae Ina'is", img: "holo_en/ninomae.jpeg", link: "https://www.youtube.com/@NinomaeInanis"},
            { name: "Ouro Kronii", img: "holo_en/ouro.jpeg", link: "https://www.youtube.com/@OuroKronii"},
            { name: "Gigi Murin", img: "holo_en/murin.jpeg", link: "https://www.youtube.com/@holoen_gigimurin"},
            { name: "Raora Panthera", img: "holo_en/raora.jpeg", link: "https://www.youtube.com/@holoen_raorapanthera"},
            { name: "Shiori Novella", img: "holo_en/shiori.jpeg", link: "https://www.youtube.com/@ShioriNovella"},
            { name: "Takanashi Kiara", img: "holo_en/takanahi.jpeg", link: "https://www.youtube.com/@TakanashiKiara"},
            { name: "Tsukumo Sana", img: "holo_en/sana.jpeg", link: "https://www.youtube.com/@TsukumoSana"},
            { name: "Akai Haato", img: "holo_jp/akai.jpeg", link: "https://www.youtube.com/@AkaiHaato"},
            { name: "Aki Rosenthal", img: "holo_jp/aki.jpeg", link: "https://www.youtube.com/results?search_query=aki+rosenthal"},
            { name: "AZki", img: "holo_jp/azki.jpeg", link: "https://www.youtube.com/@AZKi"},
            { name: "Hoshimachi Suisei", img: "holo_jp/suisei.jpeg", link: "https://www.youtube.com/@HoshimachiSuisei"},
            { name: "Natsuiro Matsuri", img: "holo_jp/Natsuiro.jpeg", link: "https://www.youtube.com/@NatsuiroMatsuri"},
            { name: "Roboco San", img: "holo_jp/roboco.jpeg", link: "https://www.youtube.com/@Robocosan"},
            { name: "Sakura Miko", img: "holo_jp/sakura.jpeg", link: "https://www.youtube.com/@SakuraMiko"},
            { name: "Shirakami Fubuki", img: "holo_jp/shirakami.jpeg", link: "https://www.youtube.com/@ShirakamiFubuki"},
            { name: "Tokino Sora", img: "holo_jp/tokino.jpeg", link: "https://www.youtube.com/@TokinoSora"},
            { name: "Peko Mama SSR <3", img :"holo_jp/peko.jpeg", link: "https://www.youtube.com/results?search_query=peko+mama"},
            { name: "Inugami Korone", img: "holo_jp/inugami.jpeg", link: "https://www.youtube.com/@InugamiKorone"},
            { name: "Minato Aqua", img: "holo_jp/minato.jpeg", link: "https://www.youtube.com/@MinatoAqua"},
            { name: "Murasaki Shion", img: "holo_jp/murasaki.jpeg", link: "https://www.youtube.com/@MurasakiShion"},
            { name: "Nakiri Ayame", img: "holo_jp/nakiri.jpeg", link: "https://www.youtube.com/@NakiriAyame"},
            { name: "Nekomata Okayu", img: "holo_jp/nekomata.jpeg", link: "https://www.youtube.com/@NekomataOkayu"},
            { name: "Ookami Mio", img: "holo_jp/ookami.jpeg", link: "https://www.youtube.com/@OokamiMio"},
            { name: "Ooozara Subaru", img: "holo_jp/ooozara.jpeg", link: "https://www.youtube.com/@OozoraSubaru"},
            { name: "Yuzuki Choco", img: "holo_jp/yuzuki.jpeg", link: "https://www.youtube.com/@YuzukiChoco"},
            { name: "Amane Kanata", img: "holo_jp/amane.jpeg", link: "https://www.youtube.com/@AmaneKanata"},
            { name: "Himemori Luna", img: "holo_jp/himemori.jpeg", link: "https://www.youtube.com/@HimemoriLuna"},
            { name: "Houshou Marine", img: "holo_jp/marine.jpeg", link: "https://www.youtube.com/@HoushouMarine"},
            { name: "Shiranui Flare", img: "holo_jp/shiranui.jpeg", link: "https://www.youtube.com/@ShiranuiFlare"},
            { name: "Shirogane Noel", img: "holo_jp/shirogane.jpeg", link: "https://www.youtube.com/@ShiroganeNoel"},
            { name: "Tokoyami Towa", img: "holo_jp/tokoyami.jpeg", link: "https://www.youtube.com/@TokoyamiTowa"},
            { name: "Tsunomaki Watame", img: "holo_jp/tsunomaki.jpeg", link: "https://www.youtube.com/@TsunomakiWatame"},
            { name: "Usada Pekora", img: "holo_jp/pekora.jpeg", link: "https://www.youtube.com/@usadapekora"},
            { name: "Hakui Koyori", img: "holo_jp/hakui.jpeg", link: "https://www.youtube.com/@HakuiKoyori"},
            { name: "Kazama Iroha", img: "holo_jp/kazama.jpeg", link: "https://www.youtube.com/@kazamairoha"},
            { name: "La+Darkness", img: "holo_jp/laplace.jpeg", link: "https://www.youtube.com/@LaplusDarknesss"},
            { name: "Momosuzu Nene", img: "holo_jp/momosuzu.jpeg", link: "https://www.youtube.com/@MomosuzuNene"},
            { name: "Omaru Polka", img: "holo_jp/omaru.jpeg", link: "https://www.youtube.com/@OmaruPolka"},
            { name: "Sakamoto Chloe", img: "holo_jp/sakamoto.jpeg", link: "https://www.youtube.com/@SakamataChloe"},
            { name: "Shishiro Botan", img: "holo_jp/botan.jpeg", link: "https://www.youtube.com/@ShishiroBotan"},
            { name: "Takane Lui", img: "holo_jp/takane.jpeg", link: "https://www.youtube.com/@TakaneLui"},
            { name: "Yukihana Lamy", img: "holo_jp/yukihana.jpeg", link: "https://www.youtube.com/@YukihanaLamy"}
        ];

        function randomHololive() {
            const index = Math.floor(Math.random() * hololive.length);
            return hololive[index];
        }

        const randomWaifu = randomHololive();
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
    }        
});
