// 구매 버튼 클릭 이벤트
document.getElementById('buy-button').addEventListener('click', () => {
    alert('구매해 주셔서 감사합니다!');
  });
  
  // 리뷰 작성 이벤트 처리
  const reviewForm = document.getElementById('review-form');
  const reviewsList = document.getElementById('reviews-list');
  
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const reviewInput = document.getElementById('review-input');
    const newReview = document.createElement('li');
    newReview.textContent = reviewInput.value;
    reviewsList.appendChild(newReview);
    reviewInput.value = '';
  });
  