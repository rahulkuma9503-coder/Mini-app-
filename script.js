const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("joinBtn").onclick = () => {
    // Yahan apna link lagao
    window.location.href = "https://t.me/YOUR_GROUP_LINK";
};
