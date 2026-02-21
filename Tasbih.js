const ADHKAR = [
  {label:"سُبْحَانَ اللهِ",text:"سُبْحَانَ اللهِ",defaultTarget:33},
  {label:"الْحَمْدُ لِلَّهِ",text:"الْحَمْدُ لِلَّهِ",defaultTarget:33},
  {label:"اللهُ أَكْبَرُ",text:"اللهُ أَكْبَرُ",defaultTarget:33},
  {label:"لَا إِلَهَ إِلَّا اللهُ",text:"لَا إِلَهَ إِلَّا اللهُ",defaultTarget:100},
  {label:"أَسْتَغْفِرُ اللهَ",text:"أَسْتَغْفِرُ اللهَ",defaultTarget:100},
  {label:"سُبْحَانَ اللهِ وَبِحَمْدِهِ",text:"سُبْحَانَ اللهِ وَبِحَمْدِهِ",defaultTarget:100},
  {label:"سُبْحَانَ اللهِ الْعَظِيمِ",text:"سُبْحَانَ اللهِ الْعَظِيمِ",defaultTarget:99},
  {label:"الصلاة على النبي ﷺ",text:"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",defaultTarget:10},
  {label:"حسبي الله",text:"حَسْبِيَ اللهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ",defaultTarget:7},
];

// State
let count = 0;
let target = 33;
let currentDhikrIdx = 0;
let sessionTotal = 0;
let history = JSON.parse(localStorage.getItem('tasbih_history')||'[]');
let savedCounts = JSON.parse(localStorage.getItem('tasbih_state')||'{}');

function toAr(n){return String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);}

// Build pills
const pillsContainer = document.getElementById('dhikrPills');
ADHKAR.forEach((d,i)=>{
  const pill = document.createElement('div');
  pill.className = 'dhikr-pill'+(i===0?' active':'');
  pill.textContent = d.label;
  pill.onclick=()=>selectDhikr(i);
  pillsContainer.appendChild(pill);
});

function selectDhikr(i){
  // Save current
  savedCounts[currentDhikrIdx] = count;
  localStorage.setItem('tasbih_state', JSON.stringify(savedCounts));

  currentDhikrIdx = i;
  document.querySelectorAll('.dhikr-pill').forEach((p,pi)=>p.classList.toggle('active',pi===i));
  document.getElementById('dhikrText').style.opacity='0';
  setTimeout(()=>{
    document.getElementById('dhikrText').textContent = ADHKAR[i].text;
    document.getElementById('dhikrText').style.opacity='1';
  },200);

  // Restore count
  count = savedCounts[i]||0;
  target = ADHKAR[i].defaultTarget;
  // Sync target select
  const sel = document.getElementById('targetSelect');
  for(let o of sel.options){if(+o.value===target){sel.value=target;break;}}
  updateDisplay();
}

function setCustomDhikr(){
  const val = document.getElementById('customInput').value.trim();
  if(!val)return;
  // Add custom pill or update last custom
  const existing = ADHKAR.findIndex(d=>d.isCustom);
  if(existing>=0){ADHKAR[existing]={label:val.slice(0,14)+'...',text:val,defaultTarget:target,isCustom:true};}
  else{ADHKAR.push({label:val.slice(0,14)+'...',text:val,defaultTarget:target,isCustom:true});}
  // Rebuild pills
  pillsContainer.innerHTML='';
  ADHKAR.forEach((d,i)=>{
    const pill=document.createElement('div');
    pill.className='dhikr-pill'+(i===currentDhikrIdx?' active':'');
    pill.textContent=d.label;
    pill.onclick=()=>selectDhikr(i);
    pillsContainer.appendChild(pill);
  });
  selectDhikr(ADHKAR.length-1);
  document.getElementById('customInput').value='';
}

function setTarget(){
  target = +document.getElementById('targetSelect').value;
  updateDisplay();
}

function tick(){
  count++;
  sessionTotal++;
  document.getElementById('sessionDisplay').textContent='الجلسة: '+toAr(sessionTotal);

  // Animate
  const btn = document.getElementById('counterBtn');
  btn.classList.remove('pulse-anim');
  void btn.offsetWidth;
  btn.classList.add('pulse-anim');

  // Vibrate on mobile
  if(navigator.vibrate) navigator.vibrate(30);

  if(count>=target){
    completeCycle();
  } else {
    updateDisplay();
  }
}

function completeCycle(){
  // Add to history
  const dhikr = ADHKAR[currentDhikrIdx];
  const item = {text:dhikr.text,count:count,time:new Date().toLocaleTimeString('ar-EG',{hour:'2-digit',minute:'2-digit'})};
  history.unshift(item);
  if(history.length>20)history.pop();
  localStorage.setItem('tasbih_history',JSON.stringify(history));
  renderHistory();

  // Show done banner
  const banner = document.getElementById('doneBanner');
  document.getElementById('doneBannerText').textContent = `${toAr(count)} × ${ADHKAR[currentDhikrIdx].label}`;
  banner.classList.add('show');

  // Done animation on circle
  const btn = document.getElementById('counterBtn');
  btn.classList.remove('done-anim');
  void btn.offsetWidth;
  btn.classList.add('done-anim');

  // Ring fill to full (green)
  document.getElementById('ringFill').style.stroke='#52b788';
  document.getElementById('ringFill').style.strokeDashoffset='0';

  // Auto dismiss banner + reset
  setTimeout(()=>{
    banner.classList.remove('show');
    document.getElementById('ringFill').style.stroke='url(#ringGrad)';
    count=0;
    savedCounts[currentDhikrIdx]=0;
    localStorage.setItem('tasbih_state',JSON.stringify(savedCounts));
    updateDisplay();
  },2200);
}

function undo(){
  if(count>0){count--;sessionTotal=Math.max(0,sessionTotal-1);document.getElementById('sessionDisplay').textContent='الجلسة: '+toAr(sessionTotal);updateDisplay();}
}

function resetCounter(){
  count=0;
  savedCounts[currentDhikrIdx]=0;
  localStorage.setItem('tasbih_state',JSON.stringify(savedCounts));
  updateDisplay();
}

function updateDisplay(){
  document.getElementById('counterNum').textContent = toAr(count);
  document.getElementById('counterOf').textContent = 'من '+toAr(target);
  // Ring
  const circumference = 703.7;
  const ratio = Math.min(count/target,1);
  document.getElementById('ringFill').style.strokeDashoffset = circumference*(1-ratio);
  // Save
  savedCounts[currentDhikrIdx]=count;
  localStorage.setItem('tasbih_state',JSON.stringify(savedCounts));
}

function renderHistory(){
  const list = document.getElementById('historyList');
  if(history.length===0){list.innerHTML='<div style="text-align:center;color:rgba(253,246,227,.25);font-size:.85rem;padding:12px;">لا يوجد سجل بعد</div>';return;}
  list.innerHTML='';
  history.slice(0,8).forEach(h=>{
    const el=document.createElement('div');
    el.className='history-item';
    el.innerHTML=`<span class="h-dhikr">${h.text.slice(0,30)}${h.text.length>30?'...':''}</span><span class="h-count">${toAr(h.count)} مرة</span><span class="h-time">${h.time}</span>`;
    list.appendChild(el);
  });
}

// Keyboard support
// document.addEventListener('keydown',e=>{if(e.code==='Space'||e.code==='Enter'){e.preventDefault();tick();}if(e.code==='KeyR')resetCounter();});

// Init
count = savedCounts[0]||0;
target = ADHKAR[0].defaultTarget;
updateDisplay();
renderHistory();