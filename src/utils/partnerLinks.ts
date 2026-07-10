const PARTNER_LINKS: Record<string, string> = {
  'Aviasales': 'https://aviasales.tpk.lu/u9lFIAmF',
  'Ostrovok': 'https://ostrovok.tpk.lu/qm3uUcuL',
  'Travelata': 'https://travelata.tpk.lu/iXthmQlV',
  'Onlinetours': 'https://onlinetours.tpk.lu/9gx8uXiK',
  'Level.Travel': 'https://level.tpk.lu/pEKE6u4T',
  'Туту': 'https://tutu.tpk.lu/35nYuIo5',
  'Tutu': 'https://tutu.tpk.lu/35nYuIo5',
  'Яндекс Путешествия': 'https://yandex.tpk.lu/n2k5ulFQ',
  'Yandex Travel': 'https://yandex.tpk.lu/n2k5ulFQ',
  'Sutochno': 'https://sutochno.tpk.lu/uTSAebHB',
  'Большая Страна': 'https://bolshayastrana.tpk.lu/tDKbPrzA',
  'Cruise Online': 'https://kruiz-online.tpk.lu/ctXuG3FL',
  'Круиз-Онлайн': 'https://kruiz-online.tpk.lu/ctXuG3FL',
  'Localrent': 'https://localrent.tpk.lu/axWJbRm1',
  'EconomyBookings': 'https://economybookings.tpk.lu/ANU2xTqv',
  'QEEQ': 'https://qeeq.tpk.lu/z8sf6b95',
  'SeaRadar': 'https://searadar.tpk.lu/pus6EpES',
  'МирТурБаз': 'https://mirturbaz.tpk.lu/UW7Z9Iw1',
  'MirTurbaz': 'https://mirturbaz.tpk.lu/UW7Z9Iw1',
  'La Voyage': 'https://lavoyage.tpk.lu/PC4ITkPJ',
  'Radical Storage': 'https://radicalstorage.tpk.lu/lkM8cN3r',
  'VIP-Зал': 'https://vip-zal.tpk.lu/gQ8g0epq',
  'EKTA Traveling': 'https://ektatraveling.tpk.lu/9aHvFarq',
  'Sanatoriums': 'https://sanatoriums.tpk.lu/9jud9LjB',
  'Слетать': 'https://sletat.tpk.lu/qOge5Itj',
  'Путёвка': 'https://putevka.tpk.lu/LLOG5aJa',
  'Avito Путешествия': 'https://avito.tpk.lu/vQaFIi9P',
  'Booking.com': 'https://www.booking.com/',
  'Hotels.com': 'https://hotels.com/',
  'Agoda': 'https://www.agoda.com/',
  'Skyscanner': 'https://www.skyscanner.ru/',
  'KAYAK': 'https://www.kayak.ru/',
  'Trip.com': 'https://ru.trip.com/',
  '12Go': 'https://12go.tpk.lu/uTSAebHB',
};

export const getPartnerLink = (partnerName: string, fallbackUrl?: string) => {
  return PARTNER_LINKS[partnerName] || fallbackUrl || '#';
};

export const partnerLinkMap = PARTNER_LINKS;
