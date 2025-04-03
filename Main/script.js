document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const videoCards = document.querySelectorAll(".video-card");

    // Filtering Functionality
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            videoCards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                    setTimeout(() => card.classList.add("fade-in"), 100);
                } else {
                    card.classList.remove("fade-in");
                    setTimeout(() => card.style.display = "none", 200);
                }
            });
        });
    });

    // Fullscreen and Mute/Unmute Functionality
    videoCards.forEach(card => {
        const video = card.querySelector("video");

        // Create Mute/Unmute Button
        const muteButton = document.createElement("button");
        muteButton.classList.add("mute-btn");
        muteButton.innerHTML = "🔊"; 
        card.appendChild(muteButton);

        // Toggle Mute/Unmute
        muteButton.addEventListener("click", function () {
            if (video.muted) {
                video.muted = false;
                muteButton.innerHTML = "🔊"; 
            } else {
                video.muted = true;
                muteButton.innerHTML = "🔇"; 
            }
        });

        // Fullscreen Video
        video.addEventListener("click", function () {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        });
    });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
    this.classList.toggle("active");
});

const toggleThemeBtn = document.getElementById("themeToggle");

// Check local storage for saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

// Toggle theme on button click
toggleThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    // Save preference
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});
