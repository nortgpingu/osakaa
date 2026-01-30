import { Accommodation, DailyPlan } from './types';

export const TRIP_START_DATE = '2026-02-11';
export const TRIP_END_DATE = '2026-02-19';

export const FLIGHT_INFO = {
  outbound: {
    date: '2026-02-11',
    time: '14:40 - 17:55',
    description: '去程航班'
  },
  inbound: {
    date: '2026-02-19',
    time: '11:30 - 13:50',
    description: '回程航班'
  }
};

export const ACCOMMODATIONS: Accommodation[] = [
  {
    date: '2026-02-11',
    name: 'HATAGO INN 關西機場',
    subName: 'ハタゴイン関西空港',
    location: '大阪',
    url: 'https://maps.app.goo.gl/MT8TnZ8oaFrfkuSbA?g_st=ipc'
  },
  {
    date: '2026-02-12',
    name: '京都宮津美居溫泉度假酒店',
    subName: 'Mercure Kyoto Miyazu',
    location: '京都',
    url: 'https://maps.app.goo.gl/3SZhPn8AheqhYG3P8?g_st=ic'
  },
  {
    date: '2026-02-13',
    name: 'Green Rich Hotel Tottori Ekimae',
    subName: 'グリーンリッチホテル鳥取駅前',
    location: '鳥取',
    url: 'https://maps.app.goo.gl/qr55npTNcgJCyqd8A?g_st=ipc'
  },
  {
    date: '2026-02-14',
    name: 'The OneFive Garden Kurashiki',
    subName: 'ザ・ワンファイブガーデン倉敷',
    location: '倉敷',
    url: 'https://maps.app.goo.gl/VJBdSAt5Sj6zp4dU7?g_st=ic'
  },
  {
    date: '2026-02-15',
    name: '東橫INN 高松站前',
    subName: '東横INN高松駅前',
    location: '高松',
    url: 'https://maps.app.goo.gl/775LGmzj7GMh3J676?g_st=ic'
  },
  {
    date: '2026-02-16',
    name: '神戶 西神東方飯店',
    subName: '神戸 西神オリエンタルホテル',
    location: '神戶',
    url: 'https://maps.app.goo.gl/nGGcXvDpDYkbPX1v6?g_st=ic'
  },
  {
    date: '2026-02-17',
    name: '關西機場華盛頓酒店',
    subName: '関西エアポートワシントンホテル',
    location: '大阪',
    url: 'https://maps.app.goo.gl/C3fbMMABRxUWF6u17?g_st=ic'
  },
  {
    date: '2026-02-18',
    name: '關西機場華盛頓酒店',
    subName: '(續住)',
    location: '大阪',
    url: 'https://maps.app.goo.gl/C3fbMMABRxUWF6u17?g_st=ic'
  },
  {
    date: '2026-02-19',
    name: '關西機場華盛頓酒店',
    subName: '(Check-out)',
    location: '大阪',
    url: 'https://maps.app.goo.gl/C3fbMMABRxUWF6u17?g_st=ic'
  }
];

export const INITIAL_ITINERARY: DailyPlan[] = ACCOMMODATIONS.map(acc => {
  const activities = [];
  if (acc.date === '2026-02-11') {
    activities.push({
      id: 'flight-out',
      title: '去程航班起飛',
      note: '抵達關西機場 17:55'
    });
  }
  
  if (acc.date === '2026-02-12') {
    activities.push({
      id: 'dinner-kyoto-0212',
      title: '飯店內享用晚餐',
      note: '京都宮津美居溫泉度假酒店',
      category: '食' as const
    });
  }

  if (acc.date === '2026-02-19') {
    activities.push({
      id: 'flight-in',
      title: '回程航班起飛',
      note: '抵達 13:50'
    });
  }
  return {
    date: acc.date,
    accommodation: acc,
    activities: activities
  };
});