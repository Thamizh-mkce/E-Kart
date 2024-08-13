document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart-button');

    addToCartButton.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

function changeImage(imageSrc) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageSrc;
}
