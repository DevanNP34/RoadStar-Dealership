document.getElementById('brand-filter').addEventListener('change', function () {
    const selectedBrand = this.value.toUpperCase();
    const cards = document.querySelectorAll('.explore-card');

    cards.forEach(card => {
        const brand = card.querySelector('p').textContent.toUpperCase();
        if (selectedBrand === "" || brand === selectedBrand) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});