/* document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    // 태그 클릭 시 팝업 열기
    document.querySelectorAll(".tag").forEach(tag => {
        tag.addEventListener("click", function() {
            popupOverlay.style.display = "block";
            popup.style.display = "block";
        });
    });

    // 팝업 닫기
    closeBtn.addEventListener("click", function() {
        popupOverlay.style.display = "none";
        popup.style.display = "none";
    });

    // 배경 클릭 시 팝업 닫기
    popupOverlay.addEventListener("click", function() {
        popupOverlay.style.display = "none";
        popup.style.display = "none";
    });
});

*/


document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    // 캐릭터 카드의 정보 데이터
    const characterData = {
        Anima: {
            title: "<span style='color: #6D7FF5;'>A</span>nima izaiah",
            subTitle: "아니마 아이제이어",
            description: "Cornua | Pugna | Male | 186cm, 80kg",
            text: "오티움 기사단 전투부 푸냐의 제 3부대 대장이고, 암튼 잘생겼고, ㅈㄴ 짱 쎄고 멋있고 제비고 대단한 단나사마임 맨손으로 돌도 부수고 칼 맞아도 멀쩡한 세계관상의 금강불괴 그것이 '코르누아' <br><br> 그리고 여기다가는 마리 니베이아 앤이랑 각각 관계가 어떤지 써둘까",
            footer: "여기다가 진짜 뭐 써야 하냐 아이디어 있는 사람 제발 plz",
            image: "anima.png",
            bgClass: "anima-bg"
        },
        Mari: {
            title: "<span style='color: #FF9999;'>M</span>ari name",
            subTitle: "마리 이름",
            description: "Another class | Role | Female | 165cm, 50kg",
            text: "마리는 온화하고 상냥한 성격을 가진 인물입니다. 자주 꽃을 꺾어 친구들에게 주고, 따뜻한 미소로 모두에게 힘이 되는 캐릭터입니다. 그녀의 친구들은 마리의 이러한 따뜻한 성격 덕분에 그녀를 항상 신뢰합니다.",
            footer: "마리와 관련된 추가 정보",
            image: "mari.png",
            bgClass: "mari-bg"
        },
        Anne: {
            title: "<span style='color: #FFDD57;'>A</span>nne name",
            subTitle: "앤 이름",
            description: "Mage | Sorcerer | Female | 170cm, 55kg",
            text: "앤은 강력한 마법사로, 냉철한 성격을 가지고 있습니다. 그녀의 능력은 단순한 마법 이상으로, 고대의 비밀을 다루고 있습니다. 그녀는 비밀스러운 과거와 독특한 마법 지식을 가지고 있으며, 위험한 임무에 자주 참여합니다.",
            footer: "앤의 마법과 관련된 정보",
            image: "anne.png",
            bgClass: "anne-bg"
        },
        Nevaeh: {
            title: "<span style='color: #A5D6A7;'>N</span>evaeh name",
            subTitle: "네바에 이름",
            description: "Warrior | Protector | Male | 190cm, 90kg",
            text: "네바에는 보호자 역할을 맡고 있으며, 항상 팀원들을 지키는 강력한 전사입니다. 그는 무뚝뚝하지만, 친구들에게 깊은 애정을 가지고 있으며, 상황이 어려울 때도 포기하지 않는 불굴의 의지를 보여줍니다.",
            footer: "네바에의 전투력과 팀에 대한 충성심",
            image: "nevaeh.png",
            bgClass: "nevaeh-bg"
        }
    };

    // 태그 클릭 시 팝업 열기 및 내용 설정
    document.querySelectorAll(".tag").forEach(tag => {
        tag.addEventListener("click", function() {
            const characterId = this.closest(".character-card").id;
            const data = characterData[characterId];

            if (data) {
                // 팝업 내용 설정
                document.querySelector(".ptitle").innerHTML = data.title;
                document.querySelector(".pstitle").textContent = data.subTitle;
                document.querySelector(".pdescription").textContent = data.description;
                document.querySelector(".ptext").innerHTML = data.text;
                document.querySelector(".pfooter").textContent = data.footer;
                document.querySelector(".characterimg img").src = data.image;

                // 기존 배경색 클래스 제거하고 새로운 클래스 추가
                popup.classList.remove("anima-bg", "mari-bg", "anne-bg", "nevaeh-bg");
                popup.classList.add(data.bgClass);

                // 팝업 보이기
                popupOverlay.classList.add("active");
                popup.classList.add("active");
            } else {
                console.error("캐릭터 데이터를 찾을 수 없습니다:", characterId);
            }
        });
    });

    // 팝업 닫기
    closeBtn.addEventListener("click", function() {
        popupOverlay.classList.remove("active");
        popup.classList.remove("active");
    });

    // 배경 클릭 시 팝업 닫기
    popupOverlay.addEventListener("click", function() {
        popupOverlay.classList.remove("active");
        popup.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    // 태그 클릭 시 팝업 열기
    document.querySelectorAll(".tag").forEach(tag => {
        tag.addEventListener("click", function() {
            popupOverlay.classList.add("active");
            popup.style.display = "block";
        });
    });

    // 팝업 닫기
    closeBtn.addEventListener("click", function() {
        popupOverlay.classList.remove("active");
        popup.style.display = "none";
    });

    // 배경 클릭 시 팝업 닫기
    popupOverlay.addEventListener("click", function() {
        popupOverlay.classList.remove("active");
        popup.style.display = "none";
    });
});
