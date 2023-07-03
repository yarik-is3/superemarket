document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('show');
});



document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".banner"); // Получаем все элементы баннера
    let currentBannerIndex = 0; // Индекс текущего баннера

    function showBanner(index) {
        // Скрываем все баннеры
        banners.forEach(function (banner) {
            banner.style.display = "none";
        });

        // Показываем текущий баннер
        banners[index].style.display = "block";
    }

    function switchBanner() {
        // Скрываем текущий баннер
        banners[currentBannerIndex].style.display = "none";

        // Увеличиваем индекс баннера
        currentBannerIndex++;

        // Если индекс превышает количество баннеров, возвращаемся к первому баннеру
        if (currentBannerIndex >= banners.length) {
            currentBannerIndex = 0;
        }

        // Показываем новый баннер
        banners[currentBannerIndex].style.display = "block";
    }

    // Показываем первый баннер
    showBanner(currentBannerIndex);

    // Устанавливаем интервал для переключения баннеров (в данном случае через 5 секунд)
    setInterval(switchBanner, 5000);
});