const images = [
    'https://example.com/image1.gif',
    'https://example.com/image2.gif',
    'https://example.com/image3.gif'
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.getElementById('random-image').src = randomImage;
