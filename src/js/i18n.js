const I18N_DEFAULT_LOCALE = 'en';
const I18N_SUPPORTED_LOCALES = ['en', 'ja', 'ko'];
const I18N_STORAGE_KEY = 'charasort_locale';

/**
 * @typedef {{
 *   students: Record<string, Record<string, unknown>>,
 *   localization: Record<string, unknown>,
 *   schoolByKey: Record<string, string>,
 *   schoolNameToKey: Map<string, string>,
 *   englishLookup: ({
 *     exactToId: Map<string, string>,
 *     normalizedToId: Map<string, string>,
 *     devNameToId: Map<string, string>,
 *   } | null),
 * }} SchaleLocaleData
 */

const NAME_ALIASES = {
  'Sunohara Shun (kid)': 'Shun (Small)',
  'Tacihbana Hikari': 'Tachibana Hikari',
  'Tacihbana Nozomi': 'Tachibana Nozomi',
};

const EXTRA_CHARACTER_TRANSLATIONS = {
  ja: {
    'Arata': 'アラタ',
    'Arona': 'アロナ',
    'Asagiri Suou': 'アサギリスオウ',
    'Ein': 'アイン',
    'GSC President': 'GSC会長',
    'Habu Azami': 'ハブアザミ',
    'Haine': 'ハイネ',
    'Hatami Erika': 'ハタミエリカ',
    'Hiromi': 'ヒロミ',
    'Iwabitsu Ayumu': 'イワビツアユム',
    'Kazemaki Mai': 'カゼマキマイ',
    'Kawaru Shinon': 'カワルシノン',
    'Kiyosumi Akira': 'キヨスミアキラ',
    'Kinui Rena': 'キヌイレナ',
    'Kokuriko': 'コクリコ',
    'Konoka': 'コノカ',
    'Kurihama Akemi': 'クリハマアケミ',
    'Kurumi': 'クルミ',
    'Kuchinashi Yume': 'クチナシユメ',
    'Kuzunoha': 'クズノハ',
    'Kyouyama Kazusa': 'キョウヤマカズサ',
    'Malkuth': 'マルクト',
    'Mirai': 'ミライ',
    'Nanakado Ayame': 'ナナカドアヤメ',
    'Nanagami Rin': 'ナナガミリン',
    'Niko': 'ニコ',
    'Ohr': 'オール',
    'Oki Aoi': 'オキアオイ',
    'Otogi': 'オトギ',
    'Plana': 'プラナ',
    'Professor Smug': 'スマッグ教授',
    'Shichido Yukino': 'シチドユキノ',
    'Shiina Tsumugi': 'シイナツムギ',
    'Shintani Kai': 'シンタニカイ',
    'Shiranui Kaya': 'シラヌイカヤ',
    'Sof': 'ソフ',
    'Sora': 'ソラ',
    'Sumomo': 'スモモ',
    'Tachiki Maia': 'タチキマイア',
    'Urushibara Kaguya': 'ウルシバラカグヤ',
    'Yabuki Shuro': 'ヤブキシュロ',
    'Yuraki Momoka': 'ユラキモモカ',
  },
  ko: {
    'Arata': '아라타',
    'Arona': '아로나',
    'Asagiri Suou': '아사기리 스오우',
    'Ein': '아인',
    'GSC President': '총학생회장',
    'Habu Azami': '하부 아자미',
    'Haine': '하이네',
    'Hatami Erika': '하타미 에리카',
    'Hiromi': '히로미',
    'Iwabitsu Ayumu': '이와비츠 아유무',
    'Kazemaki Mai': '카제마키 마이',
    'Kawaru Shinon': '카와루 시논',
    'Kiyosumi Akira': '키요스미 아키라',
    'Kinui Rena': '키누이 레나',
    'Kokuriko': '코쿠리코',
    'Konoka': '코노카',
    'Kurihama Akemi': '쿠리하마 아케미',
    'Kurumi': '쿠루미',
    'Kuchinashi Yume': '쿠치나시 유메',
    'Kuzunoha': '쿠즈노하',
    'Kyouyama Kazusa': '쿄야마 카즈사',
    'Malkuth': '말쿠트',
    'Mirai': '미라이',
    'Nanakado Ayame': '나나카도 아야메',
    'Nanagami Rin': '나나가미 린',
    'Niko': '니코',
    'Ohr': '오르',
    'Oki Aoi': '오키 아오이',
    'Otogi': '오토기',
    'Plana': '프라나',
    'Professor Smug': '히죽히죽 교수',
    'Shichido Yukino': '시치도 유키노',
    'Shiina Tsumugi': '시이나 츠무기',
    'Shintani Kai': '신타니 카이',
    'Shiranui Kaya': '시라누이 카야',
    'Sof': '소프',
    'Sora': '소라',
    'Sumomo': '스모모',
    'Tachiki Maia': '타치키 마이아',
    'Urushibara Kaguya': '우루시바라 카구야',
    'Yabuki Shuro': '야부키 슈로',
    'Yuraki Momoka': '유라키 모모카',
  },
};

const EXTRA_SCHOOL_TRANSLATIONS = {
  ja: {
    Millenium: 'ミレニアムサイエンススクール',
    Wildhunt: 'ワイルドハント芸術学院',
  },
  ko: {
    Millenium: '밀레니엄 사이언스 스쿨',
    Wildhunt: '와일드헌트 예술학원',
  },
};

let activeLocale = I18N_DEFAULT_LOCALE;
/** @type {Record<string, string>} */
let activeMessages = {};
/** @type {Set<(locale: string) => void>} */
const localeListeners = new Set();
/** @type {Map<string, SchaleLocaleData | null>} */
const schaleCache = new Map();

/**
 * @param {string} inputLocale
 */
function normalizeLocale(inputLocale) {
  const candidate = String(inputLocale || '').toLowerCase();
  if (candidate.startsWith('ja') || candidate.startsWith('jp')) {
    return 'ja';
  }
  if (candidate.startsWith('ko')) {
    return 'ko';
  }
  return I18N_DEFAULT_LOCALE;
}

/**
 * @param {unknown} value
 */
function normalizeKey(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

/**
 * @param {string} template
 * @param {unknown[]} values
 */
function interpolateMessage(template, values) {
  return values.reduce((text, value) => {
    return text.replace('${}', String(value));
  }, template);
}

/** @type {(strings: TemplateStringsArray, ...values: unknown[]) => string} */
function translateTemplate(strings, ...values) {
  const key = strings.join('${}');
  const template = Object.prototype.hasOwnProperty.call(activeMessages, key)
    ? activeMessages[key]
    : key;
  return interpolateMessage(template, values);
}

/**
 * @param {string} message
 * @param {...unknown} values
 */
function translateMessage(message, ...values) {
  const template = Object.prototype.hasOwnProperty.call(activeMessages, message)
    ? activeMessages[message]
    : message;
  return interpolateMessage(template, values);
}

/**
 * @param {Record<string, unknown> | null | undefined} student
 * @param {string} [locale='en']
 */
function buildDisplayName(student, locale = 'en') {
  const familyName = String(student?.FamilyName || '').trim();
  const personalName = String(student?.PersonalName || '').trim();

  if (familyName && personalName) {
    if (locale === 'ja') {
      return `${familyName}${personalName}`;
    }
    return `${familyName} ${personalName}`;
  }

  return String(student?.Name || '').trim();
}

/**
 * @param {Record<string, unknown> | null | undefined} student
 */
function buildEnglishVariants(student) {
  const variants = new Set();
  const displayName = buildDisplayName(student, 'en');
  if (displayName) {
    variants.add(displayName);
  }

  const shortName = String(student?.Name || '').trim();
  if (shortName) {
    variants.add(shortName);
  }

  const familyName = String(student?.FamilyName || '').trim();
  const personalName = String(student?.PersonalName || '').trim();
  if (familyName && personalName) {
    variants.add(`${familyName} ${personalName}`);
    variants.add(`${personalName} ${familyName}`);
  }

  return [...variants];
}

/**
 * @param {Record<string, unknown> | null | undefined} localization
 * @param {string} schoolKey
 */
function resolveSchoolName(localization, schoolKey) {
  return localization?.SchoolLong?.[schoolKey]
    || localization?.School?.[schoolKey]
    || schoolKey;
}

/**
 * @param {string} path
 */
async function loadJson(path) {
  try {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    return null;
  }
}

/**
 * @param {string} locale
 */
async function loadMessages(locale) {
  const parsed = await loadJson(`src/i18n/${locale}.json`);
  if (parsed && typeof parsed === 'object') {
    return parsed;
  }
  return {};
}

/** @type {(localization: Record<string, unknown> | null | undefined) => { schoolByKey: Record<string, string>, schoolNameToKey: Map<string, string> }} */
function buildSchoolLookup(localization) {
  const schoolByKey = {};
  const schoolNameToKey = new Map();

  const schoolKeys = new Set([
    ...Object.keys(localization?.School || {}),
    ...Object.keys(localization?.SchoolLong || {}),
  ]);

  schoolKeys.forEach((key) => {
    const label = resolveSchoolName(localization, key);
    schoolByKey[key] = label;
    schoolNameToKey.set(label, key);
    schoolNameToKey.set(normalizeKey(label), key);
  });

  return { schoolByKey, schoolNameToKey };
}

/** @type {(students: Record<string, Record<string, unknown>> | null | undefined) => { exactToId: Map<string, string>, normalizedToId: Map<string, string>, devNameToId: Map<string, string> }} */
function buildEnglishStudentLookup(students) {
  const exactToId = new Map();
  const normalizedToId = new Map();
  const devNameToId = new Map();

  Object.entries(students || {}).forEach(([id, student]) => {
    buildEnglishVariants(student).forEach((variant) => {
      if (!exactToId.has(variant)) {
        exactToId.set(variant, id);
      }
      const normalized = normalizeKey(variant);
      if (normalized && !normalizedToId.has(normalized)) {
        normalizedToId.set(normalized, id);
      }
    });

    const devName = normalizeKey(String(student?.DevName || ''));
    if (devName && !devNameToId.has(devName)) {
      devNameToId.set(devName, id);
    }
  });

  return { exactToId, normalizedToId, devNameToId };
}

/** @type {(locale: string) => SchaleLocaleData | null} */
function getSchaleData(locale) {
  return schaleCache.get(locale) || null;
}

/** @type {(lookup: { exactToId: Map<string, string>, normalizedToId: Map<string, string>, devNameToId: Map<string, string> }, englishName: string, alias: string, imageStem: string) => string | undefined} */
function resolveCharacterId(lookup, englishName, alias, imageStem) {
  return lookup.exactToId.get(englishName)
    || lookup.exactToId.get(alias)
    || lookup.normalizedToId.get(normalizeKey(englishName))
    || lookup.normalizedToId.get(normalizeKey(alias))
    || lookup.devNameToId.get(normalizeKey(imageStem));
}

/** @type {(locale: string) => Promise<SchaleLocaleData | null>} */
async function loadSchaleLocale(locale) {
  if (schaleCache.has(locale)) {
    return schaleCache.get(locale);
  }

  const students = await loadJson(`src/i18n/student.${locale}.min.json`);
  const localization = await loadJson(`src/i18n/localization.${locale}.min.json`);

  if (!students || !localization) {
    schaleCache.set(locale, null);
    return null;
  }

  const schoolLookup = buildSchoolLookup(localization);
  const englishLookup = locale === 'en' ? buildEnglishStudentLookup(students) : null;

  const loaded = {
    students,
    localization,
    schoolByKey: schoolLookup.schoolByKey,
    schoolNameToKey: schoolLookup.schoolNameToKey,
    englishLookup,
  };

  schaleCache.set(locale, loaded);
  return loaded;
}

/**
 * @param {string} nextLocale
 */
async function setLocale(nextLocale) {
  const normalizedLocale = normalizeLocale(nextLocale);
  activeMessages = await loadMessages(normalizedLocale);
  activeLocale = normalizedLocale;

  await loadSchaleLocale('en');
  await loadSchaleLocale(activeLocale);

  localStorage.setItem(I18N_STORAGE_KEY, activeLocale);
  document.documentElement.lang = activeLocale;

  localeListeners.forEach(listener => {
    listener(activeLocale);
  });

  return activeLocale;
}

/**
 * @param {string} englishName
 * @param {string} [imagePath='']
 */
function translateCharacterName(englishName, imagePath = '') {
  const fallback = EXTRA_CHARACTER_TRANSLATIONS[activeLocale]?.[englishName] || englishName;

  if (activeLocale === 'en') {
    return englishName;
  }

  const enData = getSchaleData('en');
  const targetData = getSchaleData(activeLocale);
  if (!enData || !targetData || !enData.englishLookup) {
    return fallback;
  }

  const alias = NAME_ALIASES[englishName] || englishName;
  const imageStem = String(imagePath || '').replace(/\\/g, '/').split('/').pop().replace(/\.[^.]+$/, '');

  const id = resolveCharacterId(enData.englishLookup, englishName, alias, imageStem);

  if (!id || !targetData.students[id]) {
    return fallback;
  }

  const localized = buildDisplayName(targetData.students[id], activeLocale);
  return localized || fallback;
}

/**
 * @param {string} englishLabel
 * @param {string} [schoolKey='']
 */
function translateSchoolName(englishLabel, schoolKey = '') {
  if (activeLocale === 'en') {
    return englishLabel;
  }

  const enData = getSchaleData('en');
  const targetData = getSchaleData(activeLocale);
  if (!enData || !targetData) {
    return translateMessage(englishLabel);
  }

  let resolvedKey = schoolKey;

  if (resolvedKey && EXTRA_SCHOOL_TRANSLATIONS[activeLocale]?.[resolvedKey]) {
    return EXTRA_SCHOOL_TRANSLATIONS[activeLocale][resolvedKey];
  }
  if (!resolvedKey) {
    resolvedKey = enData.schoolNameToKey.get(englishLabel)
      || enData.schoolNameToKey.get(normalizeKey(englishLabel))
      || '';
  }

  if (!resolvedKey) {
    return translateMessage(englishLabel);
  }

  return targetData.schoolByKey[resolvedKey] || translateMessage(englishLabel);
}

function detectLocale() {
  const fromStorage = localStorage.getItem(I18N_STORAGE_KEY);
  if (fromStorage) {
    return normalizeLocale(fromStorage);
  }

  const preferred = navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;
  return normalizeLocale(preferred);
}

async function initLocale() {
  return setLocale(detectLocale());
}

/**
 * @param {(locale: string) => void} listener
 * @returns {() => void}
 */
function onLocaleChange(listener) {
  localeListeners.add(listener);
  return () => {
    localeListeners.delete(listener);
  };
}

function getLocale() {
  return activeLocale;
}

window.i18n = {
  t: translateTemplate,
  tr: translateMessage,
  initLocale,
  setLocale,
  getLocale,
  onLocaleChange,
  translateCharacterName,
  translateSchoolName,
  supportedLocales: I18N_SUPPORTED_LOCALES.slice(0),
};
