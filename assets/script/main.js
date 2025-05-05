document.addEventListener("DOMContentLoaded", function () {
    // бургер
    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav");

    burgerMenu.addEventListener("click", function () {
        this.classList.toggle("active");
        nav.classList.toggle("active");
    });
    // аккордеон
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
    // слайдер
    const sliderTrack = document.querySelector(".slider-track");
    const sliderItems = document.querySelectorAll(".slider-item");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;
    const itemsCount = sliderItems.length;

    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % itemsCount;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + itemsCount) % itemsCount;
        updateSlider();
    });

    // прокрутка слайдера
    let slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % itemsCount;
        updateSlider();
    }, 3000);

    // вкладки
    const tabHeaders = document.querySelectorAll(".tab-header");
    const tabContents = document.querySelectorAll(".tab-content");

    tabHeaders.forEach((tab) => {
        tab.addEventListener("click", () => {
            const tabId = tab.getAttribute("data-tab");
            tabHeaders.forEach((header) => header.classList.remove("active"));
            tabContents.forEach((content) =>
                content.classList.remove("active")
            );
            tab.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
