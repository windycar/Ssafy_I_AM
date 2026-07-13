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

// 🌙 4. 다크 모드 토글 기능
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️'; // 다크모드일 때는 해 아이콘으로 변경
  } else {
    themeToggle.textContent = '🌙'; // 라이트모드일 때는 달 아이콘으로 변경
  }
});

// 🔍 5. 갤러리 이미지 클릭 시 모달 확대 기능
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

// 6. 팬 방명록 기능 (브라우저에 저장)
const guestbookForm = document.getElementById('guestbook-form');
const guestbookList = document.getElementById('guestbook-list');
const guestbookEmpty = document.getElementById('guestbook-empty');
const guestbookKey = 'kia-tigers-fan-wall';

function getGuestbookMessages() {
  try {
    return JSON.parse(localStorage.getItem(guestbookKey)) || [];
  } catch {
    return [];
  }
}

function renderGuestbook() {
  const messages = getGuestbookMessages();
  guestbookList.innerHTML = '';
  guestbookEmpty.hidden = messages.length > 0;

  messages.forEach((message, index) => {
    const item = document.createElement('article');
    item.className = 'guestbook-item';
    const name = document.createElement('strong');
    name.textContent = message.name;
    const content = document.createElement('p');
    content.textContent = message.content;
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'guestbook-delete';
    deleteButton.textContent = '삭제';
    deleteButton.setAttribute('aria-label', `${message.name} 메시지 삭제`);
    deleteButton.addEventListener('click', () => {
      const updatedMessages = getGuestbookMessages();
      updatedMessages.splice(index, 1);
      localStorage.setItem(guestbookKey, JSON.stringify(updatedMessages));
      renderGuestbook();
    });
    item.append(name, content, deleteButton);
    guestbookList.append(item);
  });
}

guestbookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(guestbookForm);
  const name = formData.get('name').trim();
  const content = formData.get('message').trim();
  if (!name || !content) return;

  const messages = getGuestbookMessages();
  messages.unshift({ name, content });
  localStorage.setItem(guestbookKey, JSON.stringify(messages.slice(0, 10)));
  guestbookForm.reset();
  renderGuestbook();
});

renderGuestbook();

// 7. 다이나믹 타격 미니 게임 기능
const pitchBtn = document.getElementById('pitch-btn');
const hitBtn = document.getElementById('hit-btn');
const ball = document.getElementById('baseball');
const bat = document.getElementById('bat');
const strikeZone = document.getElementById('strike-zone');
const gameMessage = document.getElementById('game-message');

let isPitching = false;
let pitchTimeout;
let resetTimeout;

pitchBtn.addEventListener('click', () => {
  if (isPitching) return;
  isPitching = true;
  
  gameMessage.textContent = '투구했습니다!';
  gameMessage.style.color = 'white';
  pitchBtn.disabled = true;
  hitBtn.disabled = false;
  
  // 공 위치 초기화 및 던지기 애니메이션 (왼쪽에서 오른쪽으로)
  ball.style.transition = 'none';
  ball.style.left = '-40px';
  ball.style.top = '50%';
  ball.style.transform = 'translateY(-50%) scale(1)';
  
  setTimeout(() => {
    ball.style.transition = 'left 1s cubic-bezier(0.1, 0.4, 0.8, 1)'; // 날아오는 속도 조절
    ball.style.left = 'calc(100% + 40px)'; 
  }, 50);

  // 1.2초 후 헛스윙 처리 (공이 밖으로 나간 후)
  pitchTimeout = setTimeout(() => {
    if (isPitching) {
      gameMessage.textContent = '스트라이크! (루킹)';
      endTurn();
    }
  }, 1200);
});

hitBtn.addEventListener('click', () => {
  if (!isPitching) return;
  
  // 방망이 스윙 애니메이션 실행
  bat.classList.add('swing');
  setTimeout(() => bat.classList.remove('swing'), 200);
  
  // 충돌(타이밍) 판정 로직
  const ballRect = ball.getBoundingClientRect();
  const zoneRect = strikeZone.getBoundingClientRect();
  
  // 공과 스트라이크 존의 중심 x좌표 계산
  const ballCenter = ballRect.left + (ballRect.width / 2);
  const zoneCenter = zoneRect.left + (zoneRect.width / 2);
  
  // 타격 판정 범위 설정 (존을 기준으로 약간의 여유 허용)
  if (ballCenter > zoneRect.left - 20 && ballCenter < zoneRect.right + 20) {
    clearTimeout(pitchTimeout); // 루킹 타이머 취소
    ball.style.transition = 'none'; // 타격 순간 공 멈춤
    
    // 중심과의 거리에 따라 타격 결과 결정 (정확히 가운데 맞출수록 홈런)
    const distance = Math.abs(ballCenter - zoneCenter);
    
    if (distance < 12) {
      gameMessage.textContent = '🔥 홈런!!! 🔥';
      gameMessage.style.color = '#ff6c83';
      // 홈런 연출: 공이 하늘로 날아가는 효과
      ball.style.transition = 'all 0.5s ease-out';
      ball.style.top = '-50px';
      ball.style.transform = 'scale(2)';
    } else if (distance < 25) {
      gameMessage.textContent = '3루타! ⚾⚾⚾';
    } else if (distance < 40) {
      gameMessage.textContent = '2루타! ⚾⚾';
    } else {
      gameMessage.textContent = '1루타! ⚾';
    }
    
    endTurn();
  } else {
    // 타이밍을 못 맞췄을 때
    clearTimeout(pitchTimeout);
    gameMessage.textContent = '헛스윙! 스트라이크!';
    endTurn();
  }
});

function endTurn() {
  isPitching = false;
  hitBtn.disabled = true;
  
  clearTimeout(resetTimeout);
  resetTimeout = setTimeout(() => {
    pitchBtn.disabled = false;
    gameMessage.textContent = '대기 중...';
    gameMessage.style.color = 'white';
    
    // 공 위치 리셋
    ball.style.transition = 'none';
    ball.style.left = '-40px';
    ball.style.top = '50%';
    ball.style.transform = 'translateY(-50%)';
  }, 2000); // 2초 후 재시작 가능
}