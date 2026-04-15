// ... (كل الكود القديم زي ما هو لحد دالة calculateIQ)

function calculateIQ() {
  let raw = 0;
  const domainScores = { visual:0, numerical:0, verbal:0, logical:0, speed:0 };
  const domainCounts = { visual:0, numerical:0, verbal:0, logical:0, speed:0 };

  questionsData.questions.forEach((q, i) => {
    domainCounts[q.domain]++;
    if (state.answers[i] === q.correct) {
      raw++;
      domainScores[q.domain]++;
    }
  });

  // Normalization
  const mean = 15;
  const sd = 5;
  const z = (raw - mean) / sd;
  let iq = 100 + 15 * z;
  iq = Math.round(Math.max(55, Math.min(145, iq)));

  const percentile = Math.round(100 * (1 - 0.5 * Math.exp(-z*z/2)));
  
  const domainNames = state.lang === 'ar' ? 
    { visual:"بصري", numerical:"عددي", verbal:"لفظي", logical:"منطقي", speed:"سرعة" } :
    { visual:"Visual", numerical:"Numerical", verbal:"Verbal", logical:"Logical", speed:"Speed" };
  
  const domains = Object.keys(domainScores).map(d => ({
    name: domainNames[d],
    score: Math.round((domainScores[d]/domainCounts[d])*100)
  }));

  let interp = "";
  if(iq < 85) interp = state.lang === 'ar' ? "🔻 أقل من المتوسط" : "🔻 Below Average";
  else if(iq < 100) interp = state.lang === 'ar' ? "🔸 متوسط" : "🔸 Average";
  else if(iq < 115) interp = state.lang === 'ar' ? "🔹 فوق المتوسط" : "🔹 Above Average";
  else if(iq < 130) interp = state.lang === 'ar' ? "🔼 متفوق" : "🔼 Superior";
  else interp = state.lang === 'ar' ? "⭐ عبقري/استثنائي" : "⭐ Genius/Exceptional";

  return { iq, percentile, interp, domains, raw };
}

// ... (باقي الكود زي ما هو)