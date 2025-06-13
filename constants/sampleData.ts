export const GAME_DATA = [
  {
    id: '1',
    homeTeam: '롯데 자이언츠',
    awayTeam: '삼성 라이온즈',
    homeScore: 3,
    awayScore: 7,
    logo: 'https://example.com/lotte.png', // 실제 경로로 바꿔주세요
    gameEnded: true,
  },
  {
    id: '2',
    homeTeam: '키움 히어로즈',
    awayTeam: '두산 베어스',
    homeScore: 5,
    awayScore: 5,
    logo: 'https://example.com/kiwoom.png',
    gameEnded: false,
  },
  {
    id: '3',
    homeTeam: 'LG 트윈스',
    awayTeam: 'SSG 랜더스',
    homeScore: 4,
    awayScore: 1,
    logo: 'https://example.com/lg.png',
    gameEnded: true,
  },
  {
    id: '4',
    homeTeam: '한화 이글스',
    awayTeam: 'KT 위즈',
    homeScore: 2,
    awayScore: 8,
    logo: 'https://example.com/hanwha.png',
    gameEnded: true,
  },
  {
    id: '5',
    homeTeam: 'NC 다이노스',
    awayTeam: 'KIA 타이거즈',
    homeScore: 6,
    awayScore: 3,
    logo: 'https://example.com/nc.png',
    gameEnded: true,
  },
];

export const GAME_DETAIL_DATA = {
  '1': {
    date: '2025-06-12',
    time: '18:30',
    venue: '수원',
    teams: {
      home: {
        name: 'KT 위즈',
        score: 7,
        hits: 15,
        errors: 2,
        baseOnBalls: 5,
        innings: [2, 4, 0, 0, 0, 0, 0, 1, 0, 0], // 10회까지
      },
      away: {
        name: '롯데 자이언츠',
        score: 12,
        hits: 17,
        errors: 0,
        baseOnBalls: 7,
        innings: [0, 0, 4, 1, 1, 0, 1, 0, 0, 5],
      },
    },
    result: {
      win: '김원중',
      lose: '박영현',
      save: '최준용',
    },
    mvp: {
      name: '전준우',
      team: '롯데',
      description: '1사 만루서 밀어내기 4구',
      image: 'https://example.com/jeon-junwoo.png',
    },
    summary: {
      hits: { lotte: 17, kt: 15 },
      homeRuns: { lotte: 0, kt: 2 },
      strikeOuts: { lotte: 11, kt: 10 },
      steals: { lotte: 1, kt: 0 },
      doublePlays: { lotte: 0, kt: 1 },
      errors: { lotte: 0, kt: 2 },
    },
  },
};
