document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById("popupOverlay");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    document.querySelector(".tri1").addEventListener("click", function() {
        window.location.href = "tereial.html";
    });

    document.querySelector(".tri2").addEventListener("click", function() {
        window.location.href = "serendipity.html";
    });

    // 캐릭터 카드의 정보 데이터
    const characterData = {
        Anima: {
            title: "<span style='color: #6D7FF5;'>A</span>nima izaiah",
            subTitle: "아니마 아이제이어",
            description: "Cornua | Pugna | Male | 186cm, 80kg",
            text: "오티움 기사단 전투부 푸냐의 제 3부대 대장이고, 암튼 잘생겼고, ㅈㄴ 짱 쎄고 멋있고 제비고 대단한 단나사마임 맨손으로 돌도 부수고 칼 맞아도 멀쩡한 세계관상의 금강불괴 그것이 코르누아... <br><br> 그리고 여기다가는 마리 니베이아 앤이랑 각각 관계가 어떤지 써둘까",
            footer: "여기다가 진짜 뭐 써야 하냐 아이디어 있는 사람 제발 plz",
            image: "anima.png",
            bgClass: "anima-bg",
            imgShadow: "anima-shadow",
            subTitleColorClass: "anima-subtitle-color",
            descriptionColorClass: "anima-description-color",
            textColorClass: "anima-text-color"
        },
        Mari: {
            title: "<span style='color: #FF9999;'>M</span>ari Aiyana",
            subTitle: "마리 아이아나",
            description: "Sanitasia | Medicus | Female | 162cm, 55kg",
            text: "어쩌고 저쩌고 설명 나중에 적을게요 뭐 적어야함? 착하고요 거지고요 힐러고요 소녀고요 에휴... 모르겠다 나도",
            footer: "여기다가 진짜 뭐 써야 하냐 아이디어 있는 사람 제발 plz",
            image: "mari.png",
            bgClass: "mari-bg",
            imgShadow: "mari-shadow",
            subTitleColorClass: "mari-subtitle-color",
            descriptionColorClass: "mari-description-color",
            textColorClass: "mari-text-color"
        },
        Anne: {
            title: "<span style='color: #6b12a9;'>E</span><span style='color: #342d3b'>narulphne P. Aisha</span>",
            subTitle: "에나룰프네 파나세아 아이샤",
            description: "Cornua | Obrepo | Female | 176cm, 62kg",
            text: "존나 공주 존나 귀족이고 존나 공설미인이고 관운장이고 은교고 다 부수고 개 아름다우시고 우아하시고",
            footer: "여기다가 진짜 뭐 써야 하냐 아이디어 있는 사람 제발 plz",
            image: "anne.png",
            bgClass: "anne-bg",
            imgShadow: "anne-shadow",
            subTitleColorClass: "anne-subtitle-color",
            descriptionColorClass: "anne-description-color",
            textColorClass: "anne-text-color"
        },
        Nevaeh: {
            title: "<span style='color: #A5D6A7;'>N</span>evaeh",
            subTitle: "니베이아",
            description: "Gladiusia | Pugna | Female | 176cm, 72kg",
            text: "엑소고 빅스고 섹시머신이고 ㅈㄴ 소드마스터 무협지 상여자 미쳤고 아 몰라 나중에 적겠습니다 이러쿵 저러쿵 텍스트 채우는 중",
            footer: "여기다가 진짜 뭐 써야 하냐 아이디어 있는 사람 제발 plz",
            image: "nevaeh.png",
            bgClass: "nevaeh-bg",
            imgShadow: "nevaeh-shadow",
            subTitleColorClass: "nevaeh-subtitle-color",
            descriptionColorClass: "nevaeh-description-color",
            textColorClass: "nevaeh-text-color"
        }
    };

    // 태그 클릭 시 팝업 열기 및 내용 설정
    document.querySelectorAll(".tag").forEach(tag => {
        tag.addEventListener("click", function() {
            const characterId = this.closest(".character-card").id; // id 값 가져오기
            console.log("characterId:", characterId); // 디버깅용 콘솔 출력
            const data = characterData[characterId];

            if (data) {
                // 팝업 내용 설정
                document.querySelector(".ptitle").innerHTML = data.title;
                document.querySelector(".pstitle").textContent = data.subTitle;
                document.querySelector(".pstitle").className = "pstitle"; // 기존 클래스 초기화 후 추가
                document.querySelector(".pstitle").classList.add(data.subTitleColorClass || "");

                document.querySelector(".pdescription").textContent = data.description;
                document.querySelector(".pdescription").className = "pdescription"; // 기존 클래스 초기화 후 추가
                document.querySelector(".pdescription").classList.add(data.descriptionColorClass || "");

                document.querySelector(".ptext").innerHTML = data.text;
                document.querySelector(".ptext").className = "ptext"; // 기존 클래스 초기화 후 추가
                document.querySelector(".ptext").classList.add(data.textColorClass || "");

                document.querySelector(".pfooter").textContent = data.footer;
                document.querySelector(".characterimg img").src = data.image;

                // 기존 배경색 및 그림자 클래스 제거하고 새로운 클래스 추가
                popup.className = "popup"; // 기존 클래스 초기화
                popup.classList.add(data.bgClass);

                const characterImg = document.querySelector(".characterimg img");
                characterImg.className = ""; // 기존 그림자 클래스 초기화
                characterImg.classList.add(data.imgShadow);

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
