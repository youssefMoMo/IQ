// ==================== NeuroMind IQ Test - script.js (نسخة محسّنة) ====================

const questionsData = {
  "questions": [
    {"id":1,"domain":"visual","difficulty":"easy","q":"أي شكل يُكمل التسلسل؟ ▲ ▼ ▲ ▼ ؟","opts":["▲","▼","◆","●"],"correct":0},
    {"id":2,"domain":"numerical","difficulty":"easy","q":"أكمل المتتالية: 2, 4, 8, 16, ؟","opts":["24","30","32","36"],"correct":2},
    {"id":3,"domain":"verbal","difficulty":"easy","q":"الكتاب بالنسبة للقراءة كالملعقة بالنسبة لـ ؟","opts":["الطبق","الطعام","الأكل","الشوكة"],"correct":1},
    {"id":4,"domain":"logical","difficulty":"easy","q":"إذا كان كل أ هي ب، وكل ب هي ج، فكل أ هي ؟","opts":["ج","ليست ج","بعض ج","لا شيء"],"correct":0},
    {"id":5,"domain":"speed","difficulty":"easy","q":"ما العدد المختلف: 3, 6, 9, 12, 14, 18","opts":["3","14","18","12"],"correct":1},
    {"id":6,"domain":"visual","difficulty":"easy","q":"إذا قُلب المربع رأساً على عقب، فأين تقع الزاوية العلوية اليمنى؟","opts":["سفلى يمين","سفلى يسار","علوى يسار","مركز"],"correct":1},
    {"id":7,"domain":"numerical","difficulty":"easy","q":"ما حاصل ضرب: 7 × 8 × 0 × 5 ؟","opts":["280","0","56","35"],"correct":1},
    {"id":8,"domain":"verbal","difficulty":"easy","q":"الضوء بالنسبة للعمى كالصوت بالنسبة لـ ؟","opts":["الضوضاء","السمع","الصمم","الموسيقى"],"correct":2},
    {"id":9,"domain":"logical","difficulty":"easy","q":"إذا كانت العبارة \"بعض الطيور تطير\" صحيحة، فأي العبارات التالية صحيحة دائماً؟","opts":["كل الطيور تطير","بعض الطيور لا تطير","طائر واحد يطير","لا شيء مما سبق"],"correct":3},
    {"id":10,"domain":"speed","difficulty":"easy","q":"رتّب من الأكبر للأصغر: 0.5, 0.25, 0.75, 0.1","opts":["0.75,0.5,0.25,0.1","0.5,0.75,0.25,0.1","0.1,0.25,0.5,0.75","0.75,0.25,0.5,0.1"],"correct":0},
    {"id":11,"domain":"visual","difficulty":"medium","q":"في شبكة 3×3، إذا تحركت النقطة قطرياً من أعلى اليمين إلى أسفل اليسار، فكم خطوة؟","opts":["2","3","4","1"],"correct":1},
    {"id":12,"domain":"numerical","difficulty":"medium","q":"ما العدد التالي: 1, 1, 2, 3, 5, 8, ؟","opts":["11","13","15","10"],"correct":1},
    {"id":13,"domain":"verbal","difficulty":"medium","q":"إذا كانت \"السعادة\" نقيض \"الحزن\"، فما نقيض \"الوفرة\"؟","opts":["الفقر","النقص","العوز","الندرة"],"correct":3},
    {"id":14,"domain":"logical","difficulty":"medium","q":"إذا A→B و B→C، فإن عدم C يعني بالضرورة ؟","opts":["عدم A","عدم B","A صحيحة","لا يمكن الجزم"],"correct":0},
    {"id":15,"domain":"speed","difficulty":"medium","q":"كم مرة يظهر الرقم 3 في الأعداد من 1 إلى 100؟","opts":["19","20","21","10"],"correct":1},
    {"id":16,"domain":"visual","difficulty":"medium","q":"شكلان متطابقان يدوران بزاوية 90° عكس عقارب الساعة. كم درجة إزاحة الزاوية بعد 4 دورات؟","opts":["360°","180°","270°","0°"],"correct":3},
    {"id":17,"domain":"numerical","difficulty":"medium","q":"إذا كان 3x + 7 = 22، فما قيمة x؟","opts":["3","5","7","4"],"correct":1},
    {"id":18,"domain":"verbal","difficulty":"medium","q":"الطبيب:المستشفى :: القاضي:؟","opts":["المحكمة","السجن","المحاماة","القانون"],"correct":0},
    {"id":19,"domain":"logical","difficulty":"medium","q":"أي الاستنتاجات منطقية؟ كل القطط ثدييات. بعض الثدييات تحب الماء. إذن:","opts":["كل القطط تحب الماء","بعض القطط قد تحب الماء","لا قطط تحب الماء","جميع الثدييات قطط"],"correct":1},
    {"id":20,"domain":"speed","difficulty":"medium","q":"ما العدد المفقود: 4, 9, 16, 25, ?, 49","opts":["30","36","40","34"],"correct":1},
    {"id":21,"domain":"visual","difficulty":"hard","q":"في مكعب ثلاثي الأبعاد، إذا تم طلاء جميع أوجهه ثم قُطّع إلى 27 مكعباً صغيراً، فكم مكعب له وجهان فقط مطليان؟","opts":["8","12","6","18"],"correct":1},
    {"id":22,"domain":"numerical","difficulty":"hard","q":"ما مجموع الأعداد من 1 إلى 100؟","opts":["5000","5050","5100","4950"],"correct":1},
    {"id":23,"domain":"verbal","difficulty":"hard","q":"إذا كانت \"المعرفة قوة\" و\"القوة مسؤولية\"، فإن المعرفة تستلزم بالضرورة ؟","opts":["الثروة","المسؤولية","السيطرة","الحرية"],"correct":1},
    {"id":24,"domain":"logical","difficulty":"hard","q":"إذا كانت P صحيحة فقط إذا كانت Q خاطئة، و Q صحيحة فقط إذا كانت R صحيحة، و R خاطئة، فما قيمة P؟","opts":["صحيحة","خاطئة","غير محددة","صحيحة أحياناً"],"correct":0},
    {"id":25,"domain":"speed","difficulty":"hard","q":"كم مضلعاً خماسياً منتظماً يمكن رسمه داخل مضلع عشاري دون تقاطع أضلاع؟","opts":["5","10","3","2"],"correct":1},
    {"id":26,"domain":"visual","difficulty":"hard","q":"إذا قُطعت دائرة إلى 8 أجزاء متساوية، ورتّبت على خط مستقيم مع الحفاظ على الترتيب الدائري، فكم درجة زاوية الجزء الأول والأخير مجتمعين؟","opts":["45°","90°","180°","135°"],"correct":0},
    {"id":27,"domain":"numerical","difficulty":"hard","q":"ما قيمة: log₂(64) + √144 - 3! ؟","opts":["12","14","10","16"],"correct":1},
    {"id":28,"domain":"verbal","difficulty":"hard","q":"ما العلاقة المنطقية الأقوى؟ الشمس:النظام الشمسي :: ؟","opts":["النجم:المجرة","القمر:الكواكب","الأرض:الكون","المجرة:الثقب الأسود"],"correct":0},
    {"id":29,"domain":"logical","difficulty":"hard","q":"إذا كان كل A هو B، ولا يوجد B هو C، فأي العبارات التالية غير صحيحة؟","opts":["لا A هو C","بعض C ليس B","كل B هو A","بعض A ليس C"],"correct":2},
    {"id":30,"domain":"speed","difficulty":"hard","q":"ما العدد التالي في المتتالية: 2, 6, 12, 20, 30, ؟","opts":["40","42","44","38"],"correct":1}
  ]
};

const i18n = {
  ar: {
    title: "NeuroMind",
    subtitle: "اختبار ذكاء علمي متقدم • مجاني 100% • فوري • بدون تسجيل",
    start: "ابدأ الاختبار الآن",
    skip: "تخطي",
    review: "مراجعة قبل التسليم",
    resultTitle: "نتيجة اختبارك",
    iqLabel: "IQ Score",
    download: "💾 تحميل شهادة النتيجة",
    restart: "🔄 إعادة الاختبار",
    finalDisclaimer: "النتائج تعتمد على التوزيع الطبيعي المعياري (μ=100, σ=15). الدقة ±5 نقاط.",
    domainBreakdown: "توزيع المجالات المعرفية",
    disclaimer: "⚠️ هذا المقياس استرشادي علمي ولا يغني عن التقييم السريري المتخصص."
  },
  en: {
    title: "NeuroMind",
    subtitle: "Advanced Scientific IQ Test • 100% Free • Instant • No Signup",
    start: "Start Test Now",
    skip: "Skip",
    review: "Review Answers",
    resultTitle: "Your Result",
    iqLabel: "IQ Score",
    download: "💾 Download Certificate",
    restart: "🔄 Retake Test",
    finalDisclaimer: "Results based on normal distribution (μ=100, σ=15). Accuracy ±5 points.",
    domainBreakdown: "Cognitive Domain Breakdown",
    disclaimer: "⚠️ This is a scientific screening tool and does not replace clinical assessment."
  }
};

let state = {
  current: 0,
  lang: 'ar',
  answers: {},
  questionTimes: {},
  skipped: new Set(),
  timer: 60,
  interval: null,
  qStartTime: 0,
  started: false
};

const els = {};

function initElements() {
  els.startBtn = document.getElementById('startBtn');
  els.quizScreen = document.getElementById('quiz');
  els.questionText = document.getElementById('questionText');
  els.optionsGrid = document.getElementById('optionsGrid');
  els.qCount = document.getElementById('qCount');
  els.timerEl = document.getElementById('timer');
  els.progressCircle = document.getElementById('progressCircle');
  els.skipBtn = document.getElementById('skipBtn');
  els.reviewBtn = document.getElementById('reviewBtn');
  els.iqScore = document.getElementById('iqScore');
  els.percentile = document.getElementById('percentile');
  els.interpretation = document.getElementById('interpretation');
  els.domainChart = document.getElementById('domainChart');
  els.downloadCert = document.getElementById('downloadCert');
  els.restartBtn = document.getElementById('restartBtn');
  els.langToggle = document.getElementById('langToggle');
  els.certCanvas = document.getElementById('certCanvas');
  els.screens = document.querySelectorAll('.screen');
}

function showScreen(id) {
  els.screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function translate() {
  const t = i18n[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t[el.dataset.i18n]) el.textContent = t[el.dataset.i18n];
  });
}

function updateProgress(percent) {
  const circle = els.progressCircle;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

function loadQuestion() {
  const q = questionsData.questions[state.current];
  els.questionText.textContent = q.q;
  els.qCount.textContent = `${state.current + 1}/${questionsData.questions.length}`;
  
  updateProgress(((state.current) / questionsData.questions.length) * 100);
  
  els.optionsGrid.innerHTML = '';
  const labels = state.lang === 'ar' ? ['أ', 'ب', 'ج', 'د'] : ['A', 'B', 'C', 'D'];
  
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${labels[i]}. ${opt}`;
    btn.onclick = () => selectAnswer(i);
    if (state.answers[state.current] === i) btn.classList.add('selected');
    els.optionsGrid.appendChild(btn);
  });

  els.skipBtn.disabled = false; // تفعيل زر Skip من البداية
  
  resetTimer();
  state.qStartTime = Date.now();
}

function selectAnswer(idx) {
  state.answers[state.current] = idx;
  state.questionTimes[state.current] = Date.now() - state.qStartTime;
  
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  
  clearInterval(state.interval);
  setTimeout(nextQuestion, 400);
}

function nextQuestion() {
  if (state.current < questionsData.questions.length - 1) {
    state.current++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function resetTimer() {
  clearInterval(state.interval);
  state.timer = 60;
  els.timerEl.textContent = state.timer;
  els.timerEl.style.color = 'var(--accent)';
  
  state.interval = setInterval(() => {
    state.timer--;
    els.timerEl.textContent = state.timer;
    
    if (state.timer <= 10) els.timerEl.style.color = 'var(--danger)';
    
    if (state.timer <= 0) {
      clearInterval(state.interval);
      if (state.questionTimes[state.current] === undefined) {
        state.questionTimes[state.current] = 60000;
      }
      nextQuestion();
    }
  }, 1000);
}

// === دالة Skip محسّنة ===
function skipQuestion() {
  state.skipped.add(state.current);
  state.questionTimes[state.current] = Date.now() - state.qStartTime;
  
  // تأثير بصري عند التخطي
  els.questionText.style.opacity = '0.5';
  setTimeout(() => {
    els.questionText.style.opacity = '1';
    nextQuestion();
  }, 200);
}

// === دالة Review محسّنة ===
function reviewAnswers() {
  const answered = Object.keys(state.answers).length;
  const total = questionsData.questions.length;
  const skipped = state.skipped.size;
  
  const msg = state.lang === 'ar' ? 
    `📊 ملخص الإجابات:\n\n✅ أجبت على: ${answered} من ${total}\n⏭️ تخطيت: ${skipped} أسئلة\n\nهل تريد المتابعة لإنهاء الاختبار؟` :
    `📊 Summary:\n\n✅ Answered: ${answered} of ${total}\n⏭️ Skipped: ${skipped} questions\n\nDo you want to continue and finish the test?`;
  
  if (confirm(msg)) {
    finishQuiz();
  }
}

function calculateIQ() {
  let raw = 0;
  const domainScores = { visual: 0, numerical: 0, verbal: 0, logical: 0, speed: 0 };
  const domainCounts = { visual: 0, numerical: 0, verbal: 0, logical: 0, speed: 0 };

  questionsData.questions.forEach((q, i) => {
    domainCounts[q.domain]++;
    if (state.answers[i] === q.correct) {
      raw++;
      domainScores[q.domain]++;
    }
  });

  let timeBonus = 0;
  Object.keys(state.questionTimes).forEach(idx => {
    const time = state.questionTimes[idx];
    if (time < 15000) timeBonus += 0.5;
    else if (time > 30000) timeBonus -= 0.3;
  });

  const mean = 15;
  const sd = 5;
  const adjustedRaw = raw + timeBonus;
  const z = (adjustedRaw - mean) / sd;
  
  let iq = 100 + 15 * z;
  iq = Math.round(Math.max(55, Math.min(145, iq)));

  const percentile = Math.round(100 * (1 - 0.5 * Math.exp(-z * z / 2)));

  const domainNames = state.lang === 'ar' ? 
    { visual: "بصري", numerical: "عددي", verbal: "لفظي", logical: "منطقي", speed: "سرعة" } :
    { visual: "Visual", numerical: "Numerical", verbal: "Verbal", logical: "Logical", speed: "Speed" };
  
  const domains = Object.keys(domainScores).map(d => ({
    name: domainNames[d],
    score: Math.round((domainScores[d] / domainCounts[d]) * 100)
  }));

  let interp = "";
  if (iq < 85) interp = state.lang === 'ar' ? "🔻 أقل من المتوسط" : "🔻 Below Average";
  else if (iq < 100) interp = state.lang === 'ar' ? "🔸 متوسط" : "🔸 Average";
  else if (iq < 115) interp = state.lang === 'ar' ? "🔹 فوق المتوسط" : "🔹 Above Average";
  else if (iq < 130) interp = state.lang === 'ar' ? "🔼 متفوق" : "🔼 Superior";
  else interp = state.lang === 'ar' ? "⭐ عبقري/استثنائي" : "⭐ Genius/Exceptional";

  return { iq, percentile, interp, domains, raw: adjustedRaw };
}

function finishQuiz() {
  clearInterval(state.interval);
  showScreen('result');
  
  const res = calculateIQ();
  
  els.iqScore.textContent = res.iq;
  els.percentile.textContent = state.lang === 'ar' ? 
    `النسبة المئوية: ${res.percentile}%` : 
    `Percentile: ${res.percentile}%`;
  els.interpretation.textContent = res.interp;

  els.domainChart.innerHTML = res.domains.map(d => `
    <div class="domain-bar">
      <div><div class="fill" style="height:0%"></div></div>
      <span>${d.name}</span>
    </div>
  `).join('');

  setTimeout(() => {
    document.querySelectorAll('.domain-bar .fill').forEach((el, i) => {
      el.style.height = `${res.domains[i].score}%`;
    });
  }, 200);

  els.downloadCert.onclick = () => generateCertificate(res);
}

function generateCertificate(res) {
  const canvas = els.certCanvas;
  const ctx = canvas.getContext('2d');
  const isAr = state.lang === 'ar';
  
  ctx.fillStyle = '#0a0a1a';
  ctx.fillRect(0, 0, 800, 400);
  
  const gradient = ctx.createLinearGradient(0, 0, 800, 10);
  gradient.addColorStop(0, '#6c5ce7');
  gradient.addColorStop(1, '#00cec9');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 800, 10);
  
  ctx.font = 'bold 32px Cairo, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(isAr ? 'شهادة اختبار الذكاء' : 'IQ Test Certificate', 400, 60);
  
  ctx.font = '48px serif';
  ctx.fillText('🧠', 400, 110);
  
  ctx.font = 'bold 72px Cairo, sans-serif';
  ctx.fillStyle = '#00cec9';
  ctx.fillText(`${res.iq}`, 400, 200);
  
  ctx.font = '20px Cairo, sans-serif';
  ctx.fillStyle = '#e0e0ff';
  ctx.fillText(isAr ? 'درجة الذكاء (IQ)' : 'IQ Score', 400, 240);
  
  ctx.font = '16px Cairo, sans-serif';
  ctx.fillStyle = '#8888aa';
  ctx.fillText(`${res.interp} | ${isAr ? 'النسبة المئوية' : 'Percentile'}: ${res.percentile}%`, 400, 275);
  ctx.fillText(new Date().toLocaleDateString(isAr ? 'ar-EG' : 'en-US'), 400, 300);
  
  ctx.font = '12px Cairo, sans-serif';
  ctx.fillStyle = '#555577';
  ctx.fillText(isAr ? 'أداة فحص استرشادية - ليست تشخيصاً سريرياً' : 'Screening tool only - Not a clinical diagnosis', 400, 350);

  const link = document.createElement('a');
  link.download = `NeuroMind_IQ_${res.iq}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function init() {
  initElements();
  translate();
  
  if (els.startBtn) {
    els.startBtn.onclick = () => {
      state.started = true;
      showScreen('quiz');
      loadQuestion();
    };
  }
  
  if (els.skipBtn) {
    els.skipBtn.onclick = skipQuestion;
  }
  
  if (els.reviewBtn) {
    // تغيير وظيفة زر Review
    els.reviewBtn.onclick = reviewAnswers;
  }
  
  if (els.restartBtn) {
    els.restartBtn.onclick = () => location.reload();
  }
  
  if (els.langToggle) {
    els.langToggle.onclick = () => {
      state.lang = state.lang === 'ar' ? 'en' : 'ar';
      document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = state.lang;
      translate();
      if (state.started && els.questionText) loadQuestion();
    };
  }
  
  if (els.downloadCert) {
    els.downloadCert.onclick = () => {
      alert(state.lang === 'ar' ? 'أكمل الاختبار أولاً!' : 'Complete the test first!');
    };
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state.started && state.current < 29) {
      console.log('User left tab during test');
    }
  });

  window.addEventListener('beforeunload', () => {
    if (state.started) {
      localStorage.setItem('neuromind_state', JSON.stringify({
        current: state.current,
        answers: state.answers,
        lang: state.lang
      }));
    }
  });

  const saved = localStorage.getItem('neuromind_state');
  if (saved && !state.started) {
    // يمكن تفعيل ميزة الاستعادة لاحقاً
  }
}

document.addEventListener('DOMContentLoaded', init);