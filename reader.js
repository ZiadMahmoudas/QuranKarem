const SURAHS=[{n:1,name:"الفاتحة",ayat:7,type:"مكية",page:1},{n:2,name:"البقرة",ayat:286,type:"مدنية",page:2},{n:3,name:"آل عمران",ayat:200,type:"مدنية",page:50},{n:4,name:"النساء",ayat:176,type:"مدنية",page:77},{n:5,name:"المائدة",ayat:120,type:"مدنية",page:106},{n:6,name:"الأنعام",ayat:165,type:"مكية",page:128},{n:7,name:"الأعراف",ayat:206,type:"مكية",page:151},{n:8,name:"الأنفال",ayat:75,type:"مدنية",page:177},{n:9,name:"التوبة",ayat:129,type:"مدنية",page:187},{n:10,name:"يونس",ayat:109,type:"مكية",page:208},{n:11,name:"هود",ayat:123,type:"مكية",page:221},{n:12,name:"يوسف",ayat:111,type:"مكية",page:235},{n:13,name:"الرعد",ayat:43,type:"مدنية",page:249},{n:14,name:"إبراهيم",ayat:52,type:"مكية",page:255},{n:15,name:"الحجر",ayat:99,type:"مكية",page:262},{n:16,name:"النحل",ayat:128,type:"مكية",page:267},{n:17,name:"الإسراء",ayat:111,type:"مكية",page:282},{n:18,name:"الكهف",ayat:110,type:"مكية",page:293},{n:19,name:"مريم",ayat:98,type:"مكية",page:305},{n:20,name:"طه",ayat:135,type:"مكية",page:312},{n:21,name:"الأنبياء",ayat:112,type:"مكية",page:322},{n:22,name:"الحج",ayat:78,type:"مدنية",page:332},{n:23,name:"المؤمنون",ayat:118,type:"مكية",page:342},{n:24,name:"النور",ayat:64,type:"مدنية",page:350},{n:25,name:"الفرقان",ayat:77,type:"مكية",page:359},{n:26,name:"الشعراء",ayat:227,type:"مكية",page:367},{n:27,name:"النمل",ayat:93,type:"مكية",page:377},{n:28,name:"القصص",ayat:88,type:"مكية",page:385},{n:29,name:"العنكبوت",ayat:69,type:"مكية",page:396},{n:30,name:"الروم",ayat:60,type:"مكية",page:404},{n:31,name:"لقمان",ayat:34,type:"مكية",page:411},{n:32,name:"السجدة",ayat:30,type:"مكية",page:415},{n:33,name:"الأحزاب",ayat:73,type:"مدنية",page:418},{n:34,name:"سبأ",ayat:54,type:"مكية",page:428},{n:35,name:"فاطر",ayat:45,type:"مكية",page:434},{n:36,name:"يس",ayat:83,type:"مكية",page:440},{n:37,name:"الصافات",ayat:182,type:"مكية",page:446},{n:38,name:"ص",ayat:88,type:"مكية",page:453},{n:39,name:"الزمر",ayat:75,type:"مكية",page:458},{n:40,name:"غافر",ayat:85,type:"مكية",page:467},{n:41,name:"فصلت",ayat:54,type:"مكية",page:477},{n:42,name:"الشورى",ayat:53,type:"مكية",page:483},{n:43,name:"الزخرف",ayat:89,type:"مكية",page:489},{n:44,name:"الدخان",ayat:59,type:"مكية",page:496},{n:45,name:"الجاثية",ayat:37,type:"مكية",page:499},{n:46,name:"الأحقاف",ayat:35,type:"مكية",page:502},{n:47,name:"محمد",ayat:38,type:"مدنية",page:507},{n:48,name:"الفتح",ayat:29,type:"مدنية",page:511},{n:49,name:"الحجرات",ayat:18,type:"مدنية",page:515},{n:50,name:"ق",ayat:45,type:"مكية",page:518},{n:51,name:"الذاريات",ayat:60,type:"مكية",page:521},{n:52,name:"الطور",ayat:49,type:"مكية",page:523},{n:53,name:"النجم",ayat:62,type:"مكية",page:526},{n:54,name:"القمر",ayat:55,type:"مكية",page:528},{n:55,name:"الرحمن",ayat:78,type:"مدنية",page:531},{n:56,name:"الواقعة",ayat:96,type:"مكية",page:534},{n:57,name:"الحديد",ayat:29,type:"مدنية",page:537},{n:58,name:"المجادلة",ayat:22,type:"مدنية",page:542},{n:59,name:"الحشر",ayat:24,type:"مدنية",page:545},{n:60,name:"الممتحنة",ayat:13,type:"مدنية",page:549},{n:61,name:"الصف",ayat:14,type:"مدنية",page:551},{n:62,name:"الجمعة",ayat:11,type:"مدنية",page:553},{n:63,name:"المنافقون",ayat:11,type:"مدنية",page:554},{n:64,name:"التغابن",ayat:18,type:"مدنية",page:556},{n:65,name:"الطلاق",ayat:12,type:"مدنية",page:558},{n:66,name:"التحريم",ayat:12,type:"مدنية",page:560},{n:67,name:"الملك",ayat:30,type:"مكية",page:562},{n:68,name:"القلم",ayat:52,type:"مكية",page:564},{n:69,name:"الحاقة",ayat:52,type:"مكية",page:566},{n:70,name:"المعارج",ayat:44,type:"مكية",page:568},{n:71,name:"نوح",ayat:28,type:"مكية",page:570},{n:72,name:"الجن",ayat:28,type:"مكية",page:572},{n:73,name:"المزمل",ayat:20,type:"مكية",page:574},{n:74,name:"المدثر",ayat:56,type:"مكية",page:575},{n:75,name:"القيامة",ayat:40,type:"مكية",page:577},{n:76,name:"الإنسان",ayat:31,type:"مدنية",page:578},{n:77,name:"المرسلات",ayat:50,type:"مكية",page:580},{n:78,name:"النبأ",ayat:40,type:"مكية",page:582},{n:79,name:"النازعات",ayat:46,type:"مكية",page:583},{n:80,name:"عبس",ayat:42,type:"مكية",page:585},{n:81,name:"التكوير",ayat:29,type:"مكية",page:586},{n:82,name:"الانفطار",ayat:19,type:"مكية",page:587},{n:83,name:"المطففين",ayat:36,type:"مكية",page:587},{n:84,name:"الانشقاق",ayat:25,type:"مكية",page:589},{n:85,name:"البروج",ayat:22,type:"مكية",page:590},{n:86,name:"الطارق",ayat:17,type:"مكية",page:591},{n:87,name:"الأعلى",ayat:19,type:"مكية",page:591},{n:88,name:"الغاشية",ayat:26,type:"مكية",page:592},{n:89,name:"الفجر",ayat:30,type:"مكية",page:593},{n:90,name:"البلد",ayat:20,type:"مكية",page:594},{n:91,name:"الشمس",ayat:15,type:"مكية",page:595},{n:92,name:"الليل",ayat:21,type:"مكية",page:595},{n:93,name:"الضحى",ayat:11,type:"مكية",page:596},{n:94,name:"الشرح",ayat:8,type:"مكية",page:596},{n:95,name:"التين",ayat:8,type:"مكية",page:597},{n:96,name:"العلق",ayat:19,type:"مكية",page:597},{n:97,name:"القدر",ayat:5,type:"مكية",page:598},{n:98,name:"البينة",ayat:8,type:"مدنية",page:598},{n:99,name:"الزلزلة",ayat:8,type:"مدنية",page:599},{n:100,name:"العاديات",ayat:11,type:"مكية",page:599},{n:101,name:"القارعة",ayat:11,type:"مكية",page:600},{n:102,name:"التكاثر",ayat:8,type:"مكية",page:600},{n:103,name:"العصر",ayat:3,type:"مكية",page:601},{n:104,name:"الهمزة",ayat:9,type:"مكية",page:601},{n:105,name:"الفيل",ayat:5,type:"مكية",page:601},{n:106,name:"قريش",ayat:4,type:"مكية",page:602},{n:107,name:"الماعون",ayat:7,type:"مكية",page:602},{n:108,name:"الكوثر",ayat:3,type:"مكية",page:602},{n:109,name:"الكافرون",ayat:6,type:"مكية",page:603},{n:110,name:"النصر",ayat:3,type:"مدنية",page:603},{n:111,name:"المسد",ayat:5,type:"مكية",page:603},{n:112,name:"الإخلاص",ayat:4,type:"مكية",page:604},{n:113,name:"الفلق",ayat:5,type:"مكية",page:604},{n:114,name:"الناس",ayat:6,type:"مكية",page:604}];

// ══════════════════════════════════════════════
// ── إعدادات القراء (EveryAyah) ──
// ══════════════════════════════════════════════
const READERS = {
  "alafasy":  { name: "مشاري العفاسي",        path: "Alafasy_128kbps" },
  "basit":    { name: "عبد الباسط عبد الصمد", path: "Abdul_Basit_Murattal_192kbps" },
  "shuraym":  { name: "سعود الشريم",           path: "Saud_ash-Sharim_128kbps" },
  "husary":   { name: "محمود خليل الحصري",     path: "Husary_128kbps" },
  "minshawi": { name: "محمد صديق المنشاوي",    path: "Minshawy_Murattal_128kbps" },
};
const EVERYAYAH_BASE = "https://everyayah.com/data/";

// ══════════════════════════════════════════════
// ── State ──
// ══════════════════════════════════════════════
let currentSurah = 1;
let verses = [];
let isPlaying = false;
let autoNext = true;
let muted = false;
let activeVerseIdx = -1;
let saveTimer = null;

const LS_POS  = "qr_position";
const LS_DONE = "qr_completed";
let savedPos = {};
let completedSurahs = new Set();

const audio = document.getElementById("audioEl");

// ══════════════════════════════════════════════
// ── تنسيق الوقت ──
// ══════════════════════════════════════════════
function fmt(s) {
  if (!s || isNaN(s) || s < 0) return "00:00";
  const h   = Math.floor(s / 3600);
  const m   = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  if (h > 0) return h + ":" + String(m).padStart(2,"0") + ":" + String(sec).padStart(2,"0");
  return String(m).padStart(2,"0") + ":" + String(sec).padStart(2,"0");
}

function pad3(num) { return String(num).padStart(3, "0"); }

// ══════════════════════════════════════════════
// ── Storage ──
// ══════════════════════════════════════════════
function loadStorage() {
  try {
    const p = localStorage.getItem(LS_POS);
    const d = localStorage.getItem(LS_DONE);
    if (p) savedPos = JSON.parse(p);
    if (d) completedSurahs = new Set(JSON.parse(d));
  } catch(e) {}
}

function savePosition() {
  try {
    if (activeVerseIdx >= 0)
      localStorage.setItem(LS_POS, JSON.stringify({ surah: currentSurah, ayah: activeVerseIdx }));
  } catch(e) {}
}

function markSurahDone(n) {
  completedSurahs.add(n);
  try { localStorage.setItem(LS_DONE, JSON.stringify([...completedSurahs])); } catch(e) {}
  const item = document.getElementById("si-" + n);
  if (item) item.classList.add("done-item");
  updateProgressUI();
}

function updateProgressUI() {
  const c = completedSurahs.size;
  document.getElementById("doneCountTxt").textContent = c;
  document.getElementById("miniCircle").style.strokeDashoffset = 107 - (107 * c / 114);
}

// ══════════════════════════════════════════════
// ── Sidebar ──
// ══════════════════════════════════════════════
function buildSidebar(filter = "") {
  const list = document.getElementById("surahList");
  list.innerHTML = "";
  const q = filter.trim();
  SURAHS.forEach(s => {
    if (q && !s.name.includes(q) && !String(s.n).includes(q)) return;
    const el = document.createElement("div");
    el.className = "surah-item" + (s.n === currentSurah ? " active" : "") + (completedSurahs.has(s.n) ? " done-item" : "");
    el.id = "si-" + s.n;
    el.innerHTML = `<span class="s-num">${s.n}</span><span class="s-name">${s.name}</span><span class="s-meta">${s.type}<br>${s.ayat} آية</span><span class="s-check">✓</span>`;
    el.onclick = () => { loadSurah(s.n, true); if (window.innerWidth <= 820) closeSidebar(); };
    list.appendChild(el);
  });
}

function updateSidebarActive(n) {
  document.querySelectorAll(".surah-item").forEach(el => el.classList.remove("active"));
  const el = document.getElementById("si-" + n);
  if (el) { el.classList.add("active"); el.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
}

document.getElementById("searchInput").oninput = e => buildSidebar(e.target.value);

// ══════════════════════════════════════════════
// ── تحميل السورة ──
// ══════════════════════════════════════════════
async function loadSurah(n, autoplay = false, startAyah = 0) {
  currentSurah = n;
  activeVerseIdx = -1;
  verses = [];

  updateSidebarActive(n);
  const s = SURAHS[n - 1];

  // تحديث الواجهة
  document.getElementById("topbarTitle").textContent   = "سورة " + s.name;
  document.getElementById("topbarInfo").textContent    = `${s.type} · ${s.ayat} آية · ص ${s.page}`;
  document.getElementById("progLabel").textContent     = "سورة " + s.name;
  document.getElementById("playerVerseBadge").style.display = "none";
  document.getElementById("progFill").style.width      = "0%";
  document.getElementById("timeElapsed").textContent   = "00:00";
  document.getElementById("timeDuration").textContent  = "00:00";
  document.getElementById("quranContent").innerHTML    = `
    <div class="loading">
      <p>جاري التحميل...</p>
      <div class="loading-dots">
        <span class="loading-dot"></span>
        <span class="loading-dot"></span>
        <span class="loading-dot"></span>
      </div>
    </div>`;

  // اختيار القارئ — بيدعم القيم القديمة (أرقام) والجديدة (أسماء)
  const _rval = document.getElementById("readerSelect").value;
  // لو القيمة رقم قديم، حوّله للـ key الجديد
  const LEGACY = { "7":"alafasy", "2":"basit", "5":"shuraym", "4":"husary", "9":"minshawi" };
  const readerKey  = READERS[_rval] ? _rval : (LEGACY[_rval] || "alafasy");
  const readerPath = READERS[readerKey].path;

  try {
    // ✅ quranapi.pages.dev — بترجع السورة كاملة دفعة واحدة، مفيش pagination، مفيش rate limit
    const res  = await fetch(`https://quranapi.pages.dev/api/${n}.json`);
    const data = await res.json();

    // الـ API بترجع arabic1 (بتشكيل) وليس arabic
    // verseAudio: القارئ 1=Alafasy, 3=Husary, 4=Minshawi, 5=Basit
    const READERS_API_ID = { alafasy:"1", basit:"5", shuraym:"1", husary:"3", minshawi:"4" };
    const apiReaderId = READERS_API_ID[readerKey] || "1";

    const textArray = data.arabic1; // arabic1 = النص بالتشكيل الكامل

    verses = textArray.map((text, i) => {
      const ayahNum = i + 1;
      // verseAudio من الـ API — كل آية عندها URL مباشر
      const apiAudio = data.verseAudio?.[apiReaderId]?.audios?.[i]?.originalUrl;
      const fileName = pad3(n) + pad3(ayahNum) + ".mp3";
      const fallback  = `${EVERYAYAH_BASE}${readerPath}/${fileName}`;
      return {
        text:          text,
        numberInSurah: ayahNum,
        audio:         apiAudio || fallback
      };
    });

    renderSurah();
    playAyah(startAyah, autoplay);

  } catch(e) {
    console.error("Error loading surah:", e);
    document.getElementById("quranContent").innerHTML =
      `<div class="loading"><p>⚠️ تعذر تحميل السورة، تأكد من اتصال الإنترنت.</p></div>`;
  }
}

// ══════════════════════════════════════════════
// ── Render ──
// ══════════════════════════════════════════════
function renderSurah() {
  const s = SURAHS[currentSurah - 1];
  let html = `
    <a href="index.html" class="surah-header">
      <span class="surah-crown"><img src="images/logo.webp" alt="logo"/></span>
      <span class="surah-header-name">سورة ${s.name}</span>
      <div class="surah-header-pills">
        <span class="pill">${s.type}</span>
        <span class="pill">${s.ayat} آية</span>
        <span class="pill">صفحة ${s.page}</span>
      </div>
    </a>`;

  if (currentSurah !== 9)
    html += `<span class="basmala">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>`;

  html += `<div class="verses-container" id="versesContainer">`;
  verses.forEach((v, i) => {
    html += `<span class="verse" id="v-${i}" onclick="seekToVerse(${i})">${v.text}<span class="verse-num">${toAr(v.numberInSurah)}</span> </span>`;
  });
  html += `</div>`;

  document.getElementById("quranContent").innerHTML = html;
}

// ══════════════════════════════════════════════
// ── تشغيل آية ──
// ══════════════════════════════════════════════
function playAyah(idx, autoStart = true) {
  if (!verses[idx]) return;
  activeVerseIdx = idx;

  // تظليل الآية
  document.querySelectorAll(".verse").forEach(el => el.classList.remove("active-verse"));
  const el = document.getElementById("v-" + idx);
  if (el) { el.classList.add("active-verse"); el.scrollIntoView({ behavior: "smooth", block: "center" }); }

  // تحديث بادج الآية
  document.getElementById("playerVerseBadge").style.display = "inline-flex";
  document.getElementById("playerVerseInfo").textContent    = `الآية ${idx + 1} من ${verses.length}`;

  // تشغيل الصوت
  audio.src = verses[idx].audio;
  audio.load();
  if (autoStart || isPlaying) {
    audio.play().catch(() => {});
    isPlaying = true;
    updatePlayBtn();
  }
}

function seekToVerse(idx) {
  if (!verses.length) return;
  playAyah(idx, true);
}

// ══════════════════════════════════════════════
// ── Audio Events ──
// ══════════════════════════════════════════════
audio.addEventListener("ended", () => {
  if (activeVerseIdx < verses.length - 1) {
    // الآية اللي بعدها
    playAyah(activeVerseIdx + 1, true);
  } else {
    // خلصت السورة
    markSurahDone(currentSurah);
    isPlaying = false;
    updatePlayBtn();
    document.getElementById("progFill").style.width = "100%";
    try { localStorage.removeItem(LS_POS); } catch(e) {}
    if (autoNext && currentSurah < 114) {
      setTimeout(() => loadSurah(currentSurah + 1, true), 1000);
    }
  }
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  // شريط التقدم — بيحسب نسبة الآية الحالية جوا السورة كلها
  const verseProgress  = audio.currentTime / audio.duration;
  const overallProgress = (activeVerseIdx + verseProgress) / verses.length;
  document.getElementById("progFill").style.width = (overallProgress * 100) + "%";

  // وقت منقضي تقريبي بناءً على مدة الآية الحالية
  document.getElementById("timeElapsed").textContent = fmt(audio.currentTime);

  if (!saveTimer) {
    saveTimer = setTimeout(() => { savePosition(); saveTimer = null; }, 5000);
  }
});

audio.addEventListener("loadedmetadata", () => {
  // اعرض مدة الآية الحالية
  document.getElementById("timeDuration").textContent = fmt(audio.duration);
});

audio.addEventListener("play",  () => { isPlaying = true;  updatePlayBtn(); });
audio.addEventListener("pause", () => { isPlaying = false; updatePlayBtn(); savePosition(); });

// ══════════════════════════════════════════════
// ── شريط التقدم (ضغطة تقفز لآية) ──
// ══════════════════════════════════════════════
document.getElementById("progTrack").addEventListener("click", e => {
  if (!verses.length) return;
  const rect      = e.currentTarget.getBoundingClientRect();
  const pct       = (e.clientX - rect.left) / rect.width;
  const targetIdx = Math.min(verses.length - 1, Math.floor(pct * verses.length));
  playAyah(targetIdx, true);
});

// ══════════════════════════════════════════════
// ── Controls ──
// ══════════════════════════════════════════════
document.getElementById("playBtn").onclick = () => {
  if (!verses.length) { loadSurah(1, true); return; }
  isPlaying ? audio.pause() : audio.play().catch(() => {});
};

document.getElementById("prevBtn").onclick = () => {
  if (currentSurah > 1) loadSurah(currentSurah - 1, isPlaying);
};

document.getElementById("nextBtn").onclick = () => {
  if (currentSurah < 114) loadSurah(currentSurah + 1, isPlaying);
};

document.getElementById("volSlider").oninput = e => {
  audio.volume = +e.target.value;
  muted = audio.volume === 0;
  document.getElementById("muteBtn").textContent = muted ? "🔇" : "🔊";
};

document.getElementById("muteBtn").onclick = () => {
  muted = !muted;
  audio.muted = muted;
  document.getElementById("muteBtn").textContent = muted ? "🔇" : "🔊";
};

document.getElementById("autoToggle").onclick = () => {
  autoNext = !autoNext;
  document.getElementById("autoToggle").classList.toggle("on", autoNext);
};

document.getElementById("readerSelect").onchange = () => loadSurah(currentSurah, isPlaying, 0);

// ══════════════════════════════════════════════
// ── Sidebar Toggle ──
// ══════════════════════════════════════════════
let sidebarOpen = window.innerWidth > 820;

function closeSidebar() {
  sidebarOpen = false;
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar").classList.add("hidden");
  document.getElementById("main").classList.add("full");
}

document.getElementById("toggleSidebar").onclick = () => {
  sidebarOpen = !sidebarOpen;
  const sb = document.getElementById("sidebar");
  const mn = document.getElementById("main");
  if (window.innerWidth <= 820) {
    sb.classList.toggle("open", sidebarOpen);
  } else {
    sb.classList.toggle("hidden", !sidebarOpen);
    mn.classList.toggle("full", !sidebarOpen);
  }
};

if (window.innerWidth <= 820) {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("main").classList.add("full");
}

// ══════════════════════════════════════════════
// ── Resume Toast ──
// ══════════════════════════════════════════════
function showResumeToast(pos) {
  const s = SURAHS[pos.surah - 1];
  document.getElementById("toastMsg").textContent = "متابعة سورة " + s.name;
  document.getElementById("toastSub").textContent = "توقفت عند الآية " + (pos.ayah + 1);
  const toast = document.getElementById("resumeToast");
  toast.classList.add("show");
  document.getElementById("toastResume").onclick  = () => { toast.classList.remove("show"); loadSurah(pos.surah, false, pos.ayah); };
  document.getElementById("toastDismiss").onclick = () => toast.classList.remove("show");
  setTimeout(() => toast.classList.remove("show"), 9000);
}

// ══════════════════════════════════════════════
// ── Helpers ──
// ══════════════════════════════════════════════
function updatePlayBtn() {
  document.getElementById("playBtn").textContent = isPlaying ? "⏸" : "▶";
  const d = document.getElementById("verseDot");
  if (d) d.style.animationPlayState = isPlaying ? "running" : "paused";
}

function toAr(n) {
  return String(n).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
}

window.addEventListener("beforeunload", () => {
  if (isPlaying || activeVerseIdx >= 0) savePosition();
});

// ══════════════════════════════════════════════
// ── Init ──
// ══════════════════════════════════════════════
loadStorage();
buildSidebar();
updateProgressUI();

if (savedPos && savedPos.surah) {
  loadSurah(savedPos.surah, false)
    .then(() => setTimeout(() => showResumeToast(savedPos), 700))
    .catch(() => loadSurah(1));
} else {
  loadSurah(1, false);
}

// ── Service Worker ──
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(r => console.log("SW registered:", r.scope))
      .catch(e => console.log("SW failed:", e));
  });
}