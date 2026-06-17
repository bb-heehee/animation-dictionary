export const categories = [
  { id: 'all', name: '전체', icon: '◈' },
  { id: 'enter', name: '진입', icon: '↘' },
  { id: 'exit', name: '퇴장', icon: '↗' },
  { id: 'attention', name: '강조', icon: '◆' },
  { id: 'loading', name: '로딩', icon: '↻' },
  { id: 'transition', name: '전환', icon: '⇄' },
  { id: 'micro', name: '마이크로', icon: '·' },
]

export const animations = [
  // ── Enter ──────────────────────────────
  {
    id: 'fade-in',
    name: 'Fade In',
    nameKo: '페이드 인',
    category: 'enter',
    tags: ['opacity', '기본', '카드', '모달'],
    duration: '0.3s',
    easing: 'ease-out',
    description: '요소가 투명에서 불투명으로 자연스럽게 나타납니다.',
    cssCode: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.3s ease-out both;
}`,
    doList: ['단일 요소 진입 시 사용', '페이지 전환 후 콘텐츠 표시'],
    dontList: ['이미 보이는 요소에 반복 적용', '빠른 인터랙션에 사용 (너무 느림)'],
    useCases: ['카드 콘텐츠', '모달 배경', '페이지 진입'],
  },
  {
    id: 'fade-in-up',
    name: 'Fade In Up',
    nameKo: '아래에서 페이드 인',
    category: 'enter',
    tags: ['opacity', 'transform', '카드', '리스트'],
    duration: '0.4s',
    easing: 'ease-out',
    description: '요소가 아래에서 위로 이동하며 나타납니다. 가장 범용적인 진입 애니메이션.',
    cssCode: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.4s ease-out both;
}`,
    doList: ['카드 리스트 순차 진입 (stagger)', '모달 콘텐츠 진입', '스크롤 기반 등장'],
    dontList: ['상단 네비게이션에 사용', '3개 이상 동시에 사용'],
    useCases: ['카드 리스트', '모달 내부 콘텐츠', '섹션 진입'],
  },
  {
    id: 'fade-in-down',
    name: 'Fade In Down',
    nameKo: '위에서 페이드 인',
    category: 'enter',
    tags: ['opacity', 'transform', '드롭다운', '알림'],
    duration: '0.3s',
    easing: 'ease-out',
    description: '요소가 위에서 아래로 이동하며 나타납니다.',
    cssCode: `@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-down {
  animation: fadeInDown 0.3s ease-out both;
}`,
    doList: ['드롭다운 메뉴 진입', '상단 알림 표시', '툴팁 표시'],
    dontList: ['하단 요소에 사용 (방향이 부자연스러움)', '페이지 전체에 적용'],
    useCases: ['드롭다운', '토스트 알림', '툴팁'],
  },
  {
    id: 'fade-in-left',
    name: 'Fade In Left',
    nameKo: '왼쪽에서 페이드 인',
    category: 'enter',
    tags: ['opacity', 'transform', '사이드바', '슬라이드'],
    duration: '0.35s',
    easing: 'ease-out',
    description: '요소가 왼쪽에서 오른쪽으로 이동하며 나타납니다.',
    cssCode: `@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-left {
  animation: fadeInLeft 0.35s ease-out both;
}`,
    doList: ['사이드 패널 진입', '슬라이드 전환에서 이전 방향'],
    dontList: ['RTL 환경에서 주의', '세로 리스트 아이템에 사용'],
    useCases: ['사이드바', '슬라이드 전환', '탭 콘텐츠'],
  },
  {
    id: 'fade-in-right',
    name: 'Fade In Right',
    nameKo: '오른쪽에서 페이드 인',
    category: 'enter',
    tags: ['opacity', 'transform', '패널', '슬라이드'],
    duration: '0.35s',
    easing: 'ease-out',
    description: '요소가 오른쪽에서 왼쪽으로 이동하며 나타납니다.',
    cssCode: `@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-right {
  animation: fadeInRight 0.35s ease-out both;
}`,
    doList: ['오른쪽 패널 진입', '슬라이드 전환에서 다음 방향'],
    dontList: ['RTL 환경에서 주의', '주요 콘텐츠 영역에 단독 사용'],
    useCases: ['패널', '슬라이드 전환', '탭 콘텐츠'],
  },
  {
    id: 'scale-in',
    name: 'Scale In',
    nameKo: '스케일 인',
    category: 'enter',
    tags: ['opacity', 'transform', 'scale', '모달', '팝업'],
    duration: '0.25s',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    description: '요소가 작은 크기에서 원래 크기로 확대되며 나타납니다. 살짝 탄성감 있는 이징.',
    cssCode: `@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}`,
    doList: ['모달/다이얼로그 진입', '팝업 메뉴', '플로팅 버튼 확장'],
    dontList: ['리스트 아이템에 사용 (과도함)', '전체 페이지에 적용'],
    useCases: ['모달', '팝업 메뉴', '플로팅 액션 버튼'],
  },
  {
    id: 'zoom-in',
    name: 'Zoom In',
    nameKo: '줌 인',
    category: 'enter',
    tags: ['opacity', 'transform', 'scale', '이미지', '갤러리'],
    duration: '0.3s',
    easing: 'ease-out',
    description: '요소가 절반 크기에서 확대되며 나타납니다. Scale In보다 더 극적.',
    cssCode: `@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.zoom-in {
  animation: zoomIn 0.3s ease-out both;
}`,
    doList: ['이미지 라이트박스', '갤러리 확대', '강조 표시'],
    dontList: ['일반 UI 요소에 사용 (과도함)', '자주 반복되는 요소'],
    useCases: ['이미지 뷰어', '갤러리', '풀스크린 전환'],
  },
  {
    id: 'slide-in-up',
    name: 'Slide In Up',
    nameKo: '아래에서 슬라이드 인',
    category: 'enter',
    tags: ['transform', '바텀시트', '모달', '모바일'],
    duration: '0.35s',
    easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
    description: '요소가 화면 아래에서 슬라이드하여 올라옵니다. 바텀시트에 적합.',
    cssCode: `@keyframes slideInUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.slide-in-up {
  animation: slideInUp 0.35s cubic-bezier(0.33, 1, 0.68, 1) both;
}`,
    doList: ['바텀시트', '모바일 모달', '하단 네비게이션 진입'],
    dontList: ['데스크톱 모달에 사용', '작은 요소에 적용'],
    useCases: ['바텀시트', '모바일 액션시트', '하단 패널'],
  },

  // ── Exit ───────────────────────────────
  {
    id: 'fade-out',
    name: 'Fade Out',
    nameKo: '페이드 아웃',
    category: 'exit',
    tags: ['opacity', '기본', '범용'],
    duration: '0.2s',
    easing: 'ease-in',
    description: '요소가 불투명에서 투명으로 자연스럽게 사라집니다.',
    cssCode: `@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.fade-out {
  animation: fadeOut 0.2s ease-in both;
}`,
    doList: ['요소 제거 시 사용', '페이지 전환 전 콘텐츠 숨기기'],
    dontList: ['진입 직후 바로 사용 (깜빡여 보임)', '중요한 정보에 사용'],
    useCases: ['요소 제거', '페이지 전환', '모달 닫기'],
  },
  {
    id: 'fade-out-down',
    name: 'Fade Out Down',
    nameKo: '아래로 페이드 아웃',
    category: 'exit',
    tags: ['opacity', 'transform', '카드', '리스트'],
    duration: '0.25s',
    easing: 'ease-in',
    description: '요소가 아래로 이동하며 사라집니다. fade-in-up의 역방향.',
    cssCode: `@keyframes fadeOutDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(24px);
  }
}

.fade-out-down {
  animation: fadeOutDown 0.25s ease-in both;
}`,
    doList: ['카드 제거 시 사용', 'fade-in-up과 쌍으로 사용'],
    dontList: ['상단 요소에 사용 (부자연스러움)'],
    useCases: ['카드 삭제', '리스트 아이템 제거', '알림 닫기'],
  },
  {
    id: 'fade-out-up',
    name: 'Fade Out Up',
    nameKo: '위로 페이드 아웃',
    category: 'exit',
    tags: ['opacity', 'transform', '토스트', '알림'],
    duration: '0.25s',
    easing: 'ease-in',
    description: '요소가 위로 이동하며 사라집니다.',
    cssCode: `@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-24px);
  }
}

.fade-out-up {
  animation: fadeOutUp 0.25s ease-in both;
}`,
    doList: ['토스트 알림 닫기', 'fade-in-down과 쌍으로 사용'],
    dontList: ['하단 요소에 사용'],
    useCases: ['토스트 닫기', '알림 제거', '배너 닫기'],
  },
  {
    id: 'scale-out',
    name: 'Scale Out',
    nameKo: '스케일 아웃',
    category: 'exit',
    tags: ['opacity', 'transform', 'scale', '모달', '팝업'],
    duration: '0.2s',
    easing: 'ease-in',
    description: '요소가 원래 크기에서 축소되며 사라집니다. scale-in의 역방향.',
    cssCode: `@keyframes scaleOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}

.scale-out {
  animation: scaleOut 0.2s ease-in both;
}`,
    doList: ['모달 닫기', 'scale-in과 쌍으로 사용', '팝업 닫기'],
    dontList: ['리스트 아이템에 사용'],
    useCases: ['모달 닫기', '팝업 닫기', '플로팅 메뉴 축소'],
  },

  // ── Attention ──────────────────────────
  {
    id: 'bounce',
    name: 'Bounce',
    nameKo: '바운스',
    category: 'attention',
    tags: ['transform', '강조', '알림', '배지'],
    duration: '0.6s',
    easing: 'ease',
    description: '요소가 위아래로 통통 튀는 효과. 주의를 끌 때 사용.',
    cssCode: `@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-16px);
  }
  60% {
    transform: translateY(-8px);
  }
}

.bounce {
  animation: bounce 0.6s ease both;
}`,
    doList: ['새 알림 배지 강조', 'CTA 버튼 주의 환기', '에러 표시'],
    dontList: ['반복적으로 사용 (짜증 유발)', '텍스트 콘텐츠에 적용'],
    useCases: ['알림 배지', 'CTA 버튼', '아이콘 강조'],
  },
  {
    id: 'pulse',
    name: 'Pulse',
    nameKo: '펄스',
    category: 'attention',
    tags: ['transform', 'scale', '강조', '상태표시'],
    duration: '1.5s',
    easing: 'ease-in-out',
    iterationCount: 'infinite',
    description: '요소가 부드럽게 커졌다 작아지는 맥박 효과. 진행 중 상태를 표시.',
    cssCode: `@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}

.pulse {
  animation: pulse 1.5s ease-in-out infinite;
}`,
    doList: ['녹화/방송 중 표시', '연결 상태 표시', '선택 유도'],
    dontList: ['다수 요소에 동시 적용', '텍스트에 직접 적용'],
    useCases: ['상태 인디케이터', '녹화 버튼', '라이브 배지'],
  },
  {
    id: 'shake',
    name: 'Shake',
    nameKo: '흔들기',
    category: 'attention',
    tags: ['transform', '에러', '경고', '유효성'],
    duration: '0.5s',
    easing: 'ease',
    description: '요소가 좌우로 빠르게 흔들립니다. 에러/경고를 직관적으로 전달.',
    cssCode: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-4px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(4px);
  }
}

.shake {
  animation: shake 0.5s ease both;
}`,
    doList: ['비밀번호 오류 시 입력 필드', '유효성 검사 실패 피드백'],
    dontList: ['일반 알림에 사용 (공격적)', '반복 사용 (사용자 피로)'],
    useCases: ['로그인 실패', '폼 유효성 에러', '결제 실패'],
  },
  {
    id: 'wiggle',
    name: 'Wiggle',
    nameKo: '흔들흔들',
    category: 'attention',
    tags: ['transform', 'rotate', '재미', '아이콘'],
    duration: '0.5s',
    easing: 'ease-in-out',
    description: '요소가 좌우로 살짝 회전합니다. shake보다 부드럽고 친근한 느낌.',
    cssCode: `@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

.wiggle {
  animation: wiggle 0.5s ease-in-out both;
}`,
    doList: ['알림 벨 아이콘', '빈 상태 일러스트', '재미 요소'],
    dontList: ['심각한 에러에 사용', '큰 요소에 적용'],
    useCases: ['알림 아이콘', '빈 상태', '온보딩 안내'],
  },
  {
    id: 'heartbeat',
    name: 'Heartbeat',
    nameKo: '심장박동',
    category: 'attention',
    tags: ['transform', 'scale', '좋아요', '강조'],
    duration: '1s',
    easing: 'ease-in-out',
    description: '심장이 뛰는 듯한 두 번의 짧은 확대 효과.',
    cssCode: `@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.15); }
  28% { transform: scale(1); }
  42% { transform: scale(1.15); }
  70% { transform: scale(1); }
}

.heartbeat {
  animation: heartbeat 1s ease-in-out both;
}`,
    doList: ['좋아요/하트 버튼 피드백', '중요 알림 강조'],
    dontList: ['지속적으로 반복', '작은 텍스트에 적용'],
    useCases: ['좋아요 버튼', '위시리스트', '관심 표시'],
  },

  // ── Loading ────────────────────────────
  {
    id: 'spin',
    name: 'Spin',
    nameKo: '회전',
    category: 'loading',
    tags: ['transform', 'rotate', '로딩', '스피너'],
    duration: '1s',
    easing: 'linear',
    iterationCount: 'infinite',
    description: '요소가 시계 방향으로 무한 회전합니다.',
    cssCode: `@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spin {
  animation: spin 1s linear infinite;
}`,
    doList: ['로딩 스피너', '새로고침 아이콘', '처리 중 표시'],
    dontList: ['텍스트에 적용', '다수 요소에 동시 사용'],
    useCases: ['로딩 인디케이터', '새로고침', '업로드 진행'],
  },
  {
    id: 'ping',
    name: 'Ping',
    nameKo: '핑',
    category: 'loading',
    tags: ['transform', 'scale', 'opacity', '알림', '상태'],
    duration: '1.5s',
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    iterationCount: 'infinite',
    description: '요소가 확대되며 사라지는 펄스. 새 알림이나 연결 상태 표시.',
    cssCode: `@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}`,
    doList: ['알림 인디케이터 배경', '연결 상태 표시', '관심 유도'],
    dontList: ['주요 UI 요소에 직접 적용', '다수 사용 (산만)'],
    useCases: ['알림 배지 배경', '온라인 상태', '새 메시지 표시'],
  },
  {
    id: 'float',
    name: 'Float',
    nameKo: '플로트',
    category: 'loading',
    tags: ['transform', '대기', '일러스트', '부유'],
    duration: '2s',
    easing: 'ease-in-out',
    iterationCount: 'infinite',
    description: '요소가 위아래로 부드럽게 떠다닙니다. 대기 상태나 일러스트에 적합.',
    cssCode: `@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.float {
  animation: float 2s ease-in-out infinite;
}`,
    doList: ['빈 상태 일러스트', '대기 화면', '마스코트 애니메이션'],
    dontList: ['정보성 UI에 사용', 'CTA 버튼에 적용 (클릭 방해)'],
    useCases: ['빈 상태', '대기 화면', '일러스트 장식'],
  },

  // ── Transition ─────────────────────────
  {
    id: 'flip-x',
    name: 'Flip X',
    nameKo: '가로 플립',
    category: 'transition',
    tags: ['transform', 'perspective', '카드', '전환'],
    duration: '0.5s',
    easing: 'ease-out',
    description: '요소가 가로축을 기준으로 뒤집히며 나타납니다.',
    cssCode: `@keyframes flipX {
  from {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: perspective(400px) rotateY(0);
    opacity: 1;
  }
}

.flip-x {
  animation: flipX 0.5s ease-out both;
}`,
    doList: ['카드 뒤집기 효과', '콘텐츠 전환', '성공/실패 결과 표시'],
    dontList: ['자주 반복', '작은 요소에 적용 (인지 어려움)'],
    useCases: ['카드 플립', '결과 공개', '퀴즈 정답'],
  },
  {
    id: 'flip-y',
    name: 'Flip Y',
    nameKo: '세로 플립',
    category: 'transition',
    tags: ['transform', 'perspective', '카드', '전환'],
    duration: '0.5s',
    easing: 'ease-out',
    description: '요소가 세로축을 기준으로 뒤집히며 나타납니다.',
    cssCode: `@keyframes flipY {
  from {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  to {
    transform: perspective(400px) rotateX(0);
    opacity: 1;
  }
}

.flip-y {
  animation: flipY 0.5s ease-out both;
}`,
    doList: ['카운터/숫자 변경', '타이머 플립', '콘텐츠 교체'],
    dontList: ['일반 페이지 전환', '대형 레이아웃에 적용'],
    useCases: ['플립 카운터', '숫자 변경', '카드 전환'],
  },

  // ── Micro Interaction ─────────────────
  {
    id: 'press',
    name: 'Press',
    nameKo: '누르기',
    category: 'micro',
    tags: ['transform', 'scale', '버튼', '터치'],
    duration: '0.15s',
    easing: 'ease',
    description: '요소가 살짝 눌리는 피드백. 버튼/터치 인터랙션에 사용.',
    cssCode: `@keyframes press {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.95); }
}

.press {
  animation: press 0.15s ease both;
}

/* 또는 CSS transition으로 구현 */
.press-hover:active {
  transform: scale(0.95);
  transition: transform 0.1s ease;
}`,
    doList: ['버튼 클릭 피드백', '카드 터치 피드백', '아이콘 버튼'],
    dontList: ['텍스트 링크에 적용', '비인터랙티브 요소에 사용'],
    useCases: ['버튼', '카드', '아이콘 버튼', '칩/태그'],
  },
  {
    id: 'jelly',
    name: 'Jelly',
    nameKo: '젤리',
    category: 'micro',
    tags: ['transform', 'scale', '재미', '탄성'],
    duration: '0.4s',
    easing: 'ease',
    description: '젤리처럼 찌그러졌다 복원되는 탄성 효과.',
    cssCode: `@keyframes jelly {
  0%, 100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.95, 1.05);
  }
  50% {
    transform: scale(1.05, 0.95);
  }
  75% {
    transform: scale(0.98, 1.02);
  }
}

.jelly {
  animation: jelly 0.4s ease both;
}`,
    doList: ['성공 피드백', '아이템 추가 피드백', '재미있는 인터랙션'],
    dontList: ['공식적인 UI에 사용', '빈번한 액션에 적용'],
    useCases: ['장바구니 추가', '좋아요', '이모지 리액션'],
  },
  {
    id: 'pop',
    name: 'Pop',
    nameKo: '팝',
    category: 'micro',
    tags: ['transform', 'scale', '등장', '피드백'],
    duration: '0.3s',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    description: '요소가 톡 하고 튀어나오는 효과. 빠르고 경쾌한 피드백.',
    cssCode: `@keyframes pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.pop {
  animation: pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}`,
    doList: ['배지/태그 등장', '체크마크 표시', '아이콘 등장'],
    dontList: ['큰 요소에 적용', '다수 동시 사용'],
    useCases: ['체크마크', '배지', '이모지', '알림 숫자'],
  },
]
