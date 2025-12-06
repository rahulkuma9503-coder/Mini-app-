// Initialize Telegram Mini App
const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("joinBtn").addEventListener("click", () => {
    // 🚨 Yahan apna group/bot link daalo
    window.location.href = "https://t.me/YOUR_GROUP_LINK";
});
