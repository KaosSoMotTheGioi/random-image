// Danh sách các ảnh
const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
    // Thêm nhiều link ảnh khác nếu muốn
];

// Chọn một ảnh ngẫu nhiên từ danh sách
const randomImage = images[Math.floor(Math.random() * images.length)];

// Gán ảnh ngẫu nhiên đó vào thẻ img
document.getElementById('random-image').src = randomImage;
