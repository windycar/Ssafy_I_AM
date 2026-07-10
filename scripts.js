// 1. 랜덤 응원 한마디 기능
const cheers = [
  '최강 KIA, 오늘도 끝까지 함께 갑니다!',
  '호랑이의 포효는 9회말에도 멈추지 않는다.',
  '한 점씩, 한 타석씩. 승리를 향해!',
  '오늘의 함성도 광주에서 가장 뜨겁게!',
  '승리의 순간까지, KIA 타이거즈 파이팅!'
];

document.getElementById('cheer-button').addEventListener('click', () => {
  const textElement = document.getElementById('cheer-text');
  const randomIndex = Math.floor(Math.random() * cheers.length);
  textElement.textContent = cheers[randomIndex];
});

// 2. 상단 스크롤 진행률 표시 기능
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progressIndicator = document.getElementById('progress');
  progressIndicator.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
});

// 3. 스크롤 시 요소 서서히 나타나기 기능 (IntersectionObserver)
const observerOptions = {
  threshold: 0.14
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 한 번 등장한 요소는 감시 해제 (성능 최적화)
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// 🌙 4. 다크 모드 토글 기능 추가
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️'; // 다크모드일 때는 해 아이콘으로 변경
  } else {
    themeToggle.textContent = '🌙'; // 라이트모드일 때는 달 아이콘으로 변경
  }
});

// 🔍 5. 갤러리 이미지 클릭 시 모달 확대 기능 추가
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const galleryImages = document.querySelectorAll('.shot img');

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10); // 부드러운 스케일 업 효과
  });
});

// 모달 영역 클릭 시 닫기
modal.addEventListener('click', () => {
  modal.classList.remove('open');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300); // 애니메이션 시간 대기 후 숨김
});