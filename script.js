const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.getElementById('random-image').src = randomImage;
