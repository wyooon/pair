document.addEventListener("DOMContentLoaded", function() {
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