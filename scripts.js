const giveawayDate = new Date('2024-03-08').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = giveawayDate - now;

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `The give away is in ${day}d ${hour}h ${minutes}m ${seconds}s`;

    if (distance < 10000000) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "The Giveaway has ended"
    }
}, 1000)