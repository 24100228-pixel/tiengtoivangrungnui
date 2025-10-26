// Thay thế đường dẫn cục bộ bằng URL bạn cung cấp
const originalImageSrc = 'https://s3.cloud.cmctelecom.vn/tinhte1/2017/12/4205775_C.jpg'; 
const originalImageAlt = 'Di chuột qua ảnh nhỏ để xem ở đây.';
const originalDescriptionText = 'Di chuột qua một ảnh nhỏ bên dưới để xem ảnh lớn và mô tả.';


/**
 * Hàm upDate: Xử lý sự kiện khi chuột di chuyển vào (onmouseover).
 * @param {HTMLElement} previewPic - Phần tử ảnh nhỏ (thumbnail) đang được di chuột qua.
 */
function upDate(previewPic) {
    const newSrc = previewPic.src;
    const newAlt = previewPic.alt;

    const mainImage = document.getElementById('main-image');
    mainImage.src = newSrc;
    mainImage.alt = newAlt;

    const descriptionArea = document.getElementById('image-description');
    descriptionArea.innerHTML = newAlt;
}


/**
 * Hàm unDo: Xử lý sự kiện khi chuột rời khỏi (onmouseleave).
 * Trả ảnh lớn và văn bản về trạng thái ban đầu.
 */
function unDo() {
    const mainImage = document.getElementById('main-image'); 
    mainImage.src = originalImageSrc;
    mainImage.alt = originalImageAlt;

    const descriptionArea = document.getElementById('image-description');
    descriptionArea.innerHTML = originalDescriptionText;
}
