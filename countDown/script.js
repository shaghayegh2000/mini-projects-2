const countdown = document.querySelector(".countdown");

setInterval(() => {
    const deadline = new Date(2023, 9, 30, 12, 49, 50);
    const current = new Date();

    const diff = deadline - current;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
    <div>${days}</div>
    <div>${hours}</div>
    <div>${minutes}</div>
    <div>${seconds}</div>
`;
}, 1000);
