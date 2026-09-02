// ─── Dark Triad Data (Bahasa Indonesia) ───────────────────────────────────────

const traits = {
    narc: {
        name: 'Narsisisme',
        letter: 'N',
        color: 'var(--narc)',
        definition: 'Narsisisme subklinis melibatkan kebesaran diri (grandiosity), perasaan berhak (entitlement), dominasi, dan kebutuhan kuat akan kekaguman. Berbeda dengan narsisisme patologis, sifat ini ada dalam spektrum di populasi umum.',
        hi: 'Skormu menunjukkan sifat narsistik yang tinggi — rasa superioritas pribadi yang kuat, keinginan untuk dikagumi, dan kecenderungan untuk memprioritaskan kepentingan dan statusmu sendiri. Dalam dosis sedang, sifat-sifat ini dapat memicu ambisi dan kepercayaan diri. Pada tingkat yang lebih tinggi, ini dapat mengganggu hubungan dan mengurangi empati.',
        mid: 'Sifat narsistikmu berada pada tingkat sedang — kamu memiliki kepercayaan diri yang sehat dan fokus pada diri sendiri, namun ini diimbangi dengan kepedulian tulus terhadap orang lain.',
        lo: 'Sifat narsistikmu rendah — kamu cenderung rendah hati, tidak terlalu terdorong oleh status atau kekaguman, dan merasa nyaman berbagi pengakuan.',
        interpersonal: 'Narsisisme tinggi cenderung bermanifestasi sebagai ekspektasi perlakuan khusus, sensitivitas terhadap kritik, dan kecenderungan untuk mendominasi situasi sosial.',
        research: 'Penelitian mengaitkan narsisisme subklinis dengan kemunculan kepemimpinan, ekstraversi, dan kesuksesan sosial jangka pendek, tetapi juga dengan kepuasan hubungan jangka panjang yang lebih rendah.',
    },
    mach: {
        name: 'Machiavellianisme',
        letter: 'M',
        color: 'var(--mach)',
        definition: 'Dinamai dari Niccolò Machiavelli, sifat ini menangkap orientasi strategis dan manipulatif terhadap orang lain — memprioritaskan kepentingan diri, melihat hubungan secara instrumental, dan nyaman dengan tipu daya jika itu melayani sebuah tujuan.',
        hi: 'Skormu menunjukkan kecenderungan Machiavellian yang tinggi — orientasi strategis dan penuh perhitungan terhadap orang lain, kenyamanan dengan manipulasi, dan kecenderungan melihat hubungan dari kacamata kegunaan. Kamu mungkin operator politik yang terampil, tetapi orang lain mungkin merasa dimanfaatkan alih-alih dihargai.',
        mid: 'Kecenderungan Machiavellian-mu moderat — kamu bisa bersikap strategis saat dibutuhkan tetapi umumnya lebih menyukai interaksi yang jujur.',
        lo: 'Sifat Machiavellian-mu rendah — kamu cenderung berinteraksi secara blak-blakan, tidak menyukai tipu daya, dan memprioritaskan koneksi asli di atas interaksi strategis.',
        interpersonal: 'Machiavellianisme tinggi dikaitkan dengan pendekatan manuver sosial yang sabar dan berdarah dingin, sering kali menyembunyikan niat asli di balik permukaan yang menyenangkan.',
        research: 'Machiavellianisme berkorelasi dengan manipulasi di tempat kerja, kelihaian politik, tingkat keramahan (agreeableness) yang rendah, dan dalam beberapa konteks, kesuksesan karier di lingkungan yang kompetitif.',
    },
    psych: {
        name: 'Psikopati',
        letter: 'P',
        color: 'var(--psych)',
        definition: 'Psikopati subklinis melibatkan impulsivitas, pencarian sensasi, empati rendah, dan ketidakpedulian (callousness). Ini berbeda dari gangguan klinis dan menangkap kecenderungan umum menuju pencarian sensasi dan reaktivitas emosional yang berkurang.',
        hi: 'Skormu mencerminkan sifat psikopat yang tinggi — penurunan sensitivitas terhadap penderitaan orang lain, kenyamanan dengan risiko dan pelanggaran aturan, serta pelepasan emosional (detachment). Sifat-sifat ini dapat menghasilkan ketiadaan rasa takut dan ketegasan, tetapi dengan biaya interpersonal dan etika yang signifikan.',
        mid: 'Sifat psikopatmu moderat — kamu memiliki sedikit kenyamanan dengan risiko dan pelepasan emosional, tetapi ini diimbangi oleh empati yang tulus dan kepedulian prososial.',
        lo: 'Sifat psikopatmu rendah — kamu cenderung sensitif secara emosional, menghindari risiko, dan terlibat secara empatik dengan orang lain.',
        interpersonal: 'Psikopati subklinis tinggi sering kali hadir sebagai pesona yang dikombinasikan dengan kedinginan emosional, kecenderungan melanggar aturan, dan kurangnya rasa bersalah atau penyesalan.',
        research: 'Psikopati subklinis berkorelasi dengan toleransi risiko, pencarian sensasi, kecemasan yang lebih rendah, dan dalam konteks profesional tertentu (misal, bedah, penegakan hukum) — memiliki beberapa keuntungan fungsional.',
    },
};

const questions = [
    // Narcissism
    { trait: 'narc', text: 'Saya tahu saya spesial dan pantas mendapat lebih banyak pengakuan daripada yang biasanya saya dapatkan.' },
    { trait: 'narc', text: 'Saya suka menjadi pusat perhatian dalam suatu kelompok.' },
    { trait: 'narc', text: 'Saya berharap orang lain memperlakukan saya sesuai dengan status saya yang superior.' },
    { trait: 'narc', text: 'Saya merasa mudah memanipulasi orang lain jika itu menguntungkan saya.' },
    { trait: 'narc', text: 'Saya lebih mampu daripada kebanyakan orang yang saya kenal.' },
    { trait: 'narc', text: 'Saya bersikeras untuk mendapatkan rasa hormat yang menjadi hak saya.' },
    { trait: 'narc', text: 'Orang-orang sering melihat saya sebagai pemimpin alami.' },
    { trait: 'narc', text: 'Saya cenderung ingin orang lain mengagumi saya.' },
    { trait: 'narc', text: 'Saya merasa frustrasi ketika orang lain tidak mengenali bakat saya.' },
    // Machiavellianism
    { trait: 'mach', text: 'Saya cenderung memanipulasi orang lain untuk mendapatkan apa yang saya inginkan.' },
    { trait: 'mach', text: 'Saya pernah menggunakan tipu daya atau kebohongan untuk mendapatkan keinginan saya.' },
    { trait: 'mach', text: 'Sanjungan adalah alat yang berguna untuk mendapatkan apa yang Anda inginkan.' },
    { trait: 'mach', text: 'Saya bersedia untuk tidak jujur jika itu membantu saya.' },
    { trait: 'mach', text: 'Saya suka mengetahui kelemahan orang lain sehingga saya dapat menggunakannya.' },
    { trait: 'mach', text: 'Saya pikir orang harus digunakan secara strategis untuk mencapai tujuan Anda.' },
    { trait: 'mach', text: 'Saya menghindari konflik langsung tetapi akan menjatuhkan orang lain bila perlu.' },
    { trait: 'mach', text: 'Saya percaya bahwa tujuan menghalalkan cara dalam sebagian besar situasi.' },
    { trait: 'mach', text: 'Saya tahu cara memainkan situasi sosial untuk keuntungan saya.' },
    // Psychopathy
    { trait: 'psych', text: 'Saya jarang merasa menyesal ketika saya menyakiti seseorang.' },
    { trait: 'psych', text: 'Saya cenderung bertindak impulsif tanpa memikirkan konsekuensinya.' },
    { trait: 'psych', text: 'Saya menikmati mengambil risiko, bahkan ketika ada kemungkinan mendapat masalah.' },
    { trait: 'psych', text: 'Saya tidak terlalu terganggu oleh penderitaan orang lain.' },
    { trait: 'psych', text: 'Saya melanggar aturan secara teratur dan tidak merasa bersalah tentang hal itu.' },
    { trait: 'psych', text: 'Tetap tenang dalam situasi berbahaya datang secara alami kepada saya.' },
    { trait: 'psych', text: 'Saya merasa sulit berempati dengan rasa sakit emosional orang lain.' },
    { trait: 'psych', text: 'Saya bisa bersikap menawan dan meluluhkan hati bahkan ketika saya tidak peduli dengan orang tersebut.' },
    { trait: 'psych', text: 'Saya hidup untuk hari ini dan tidak peduli dengan konsekuensi jangka panjang.' },
];

const state = {
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
};

const dom = {
    startScreen: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz'),
    result: document.getElementById('result'),
    startButton: document.getElementById('start-btn'),
    backButton: document.getElementById('btn-back'),
    nextButton: document.getElementById('btn-next'),
    restartButton: document.getElementById('restart-btn'),
    counter: document.getElementById('q-counter'),
    questionNumber: document.getElementById('q-num'),
    questionText: document.getElementById('q-text'),
    traitBadge: document.getElementById('trait-badge'),
    traitTag: document.getElementById('q-trait-tag'),
    progressFill: document.getElementById('progress-fill'),
    likertButtons: document.getElementById('likert-btns'),
    headline: document.getElementById('res-headline'),
    description: document.getElementById('res-desc'),
    scores: document.getElementById('dark-scores'),
    detail: document.getElementById('result-detail'),
};

document.addEventListener('DOMContentLoaded', function () {
    dom.startButton.addEventListener('click', openQuiz);
    dom.backButton.addEventListener('click', previousQuestion);
    dom.nextButton.addEventListener('click', nextQuestion);
    dom.restartButton.addEventListener('click', restartQuiz);
    updateQuestion();
});

function openQuiz() {
    dom.startScreen.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}

var badgeLabels = { narc: 'NARSISISME', mach: 'MACHIAVELLIANISME', psych: 'PSIKOPATI' };

function updateQuestion() {
    var q = questions[state.currentIndex];
    var t = traits[q.trait];
    var answered = state.answers[state.currentIndex];

    dom.counter.textContent = (state.currentIndex + 1) + ' / ' + questions.length;
    dom.questionNumber.textContent = String(state.currentIndex + 1).padStart(2, '0');
    dom.questionText.textContent = q.text;
    dom.traitBadge.textContent = badgeLabels[q.trait];
    dom.traitBadge.style.color = t.color;
    dom.traitTag.textContent = t.letter;
    dom.traitTag.style.color = t.color;
    dom.progressFill.style.width = (state.currentIndex / questions.length * 100) + '%';
    dom.progressFill.style.background = t.color;
    dom.backButton.disabled = state.currentIndex === 0;
    dom.nextButton.disabled = answered === null;
    dom.nextButton.textContent = state.currentIndex === questions.length - 1 ? 'Lihat hasil →' : 'Lanjut →';

    dom.likertButtons.innerHTML = '';
    for (var score = 1; score <= 5; score++) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'likert-btn';
        btn.textContent = score;
        if (answered === score) {
            btn.classList.add('selected');
            btn.style.background = t.color;
            btn.style.borderColor = t.color;
            btn.style.color = '#fff';
        }
        btn.addEventListener('click', makePick(score));
        dom.likertButtons.appendChild(btn);
    }
}

function makePick(value) {
    return function () {
        state.answers[state.currentIndex] = value;
        dom.nextButton.disabled = false;
        updateSelectedBtn(value);
    };
}

function updateSelectedBtn(value) {
    var t = traits[questions[state.currentIndex].trait];
    document.querySelectorAll('.likert-btn').forEach(function (btn, idx) {
        var score = idx + 1;
        btn.classList.toggle('selected', score === value);
        btn.style.background = score === value ? t.color : '';
        btn.style.borderColor = score === value ? t.color : '';
        btn.style.color = score === value ? '#fff' : '';
    });
}

function nextQuestion() {
    if (state.answers[state.currentIndex] === null) return;
    if (state.currentIndex < questions.length - 1) {
        state.currentIndex += 1;
        updateQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {
    if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        updateQuestion();
    }
}

function computeScores() {
    var totals = { narc: 0, mach: 0, psych: 0 };
    var counts = { narc: 0, mach: 0, psych: 0 };
    questions.forEach(function (q, idx) {
        var ans = state.answers[idx];
        if (ans === null) return;
        totals[q.trait] += ans;
        counts[q.trait] += 1;
    });
    var result = {};
    Object.keys(totals).forEach(function (key) {
        var max = counts[key] * 5;
        result[key] = max > 0 ? Math.round(totals[key] / max * 100) : 0;
    });
    return result;
}

function overallInterpretation(scores) {
    var avg = (scores.narc + scores.mach + scores.psych) / 3;
    if (avg >= 65) return 'Profil Triad Gelap keseluruhanmu tergolong tinggi. Sifat-sifat ini, jika digabungkan, menandakan kecenderungan yang bermakna menuju perilaku yang melayani diri sendiri, strategis, dan berjarak secara emosional. Profil ini dikaitkan dengan keuntungan fungsional tertentu namun juga beban interpersonal yang signifikan.';
    if (avg >= 40) return 'Profil Triad Gelap keseluruhanmu moderat. Kamu memiliki beberapa kecenderungan ini tanpa didefinisikan olehnya — konfigurasi yang umum terjadi pada populasi luas.';
    return 'Profil Triad Gelap keseluruhanmu rendah. Kamu cenderung pada interaksi yang prososial, empatik, dan blak-blakan. Profil ini dikaitkan dengan keramahan (agreeableness) tinggi dan kehangatan emosional.';
}

function showResult() {
    dom.quiz.style.display = 'none';
    dom.result.style.display = 'block';

    var scores = computeScores();

    dom.headline.textContent = 'Triad Gelap';
    dom.description.textContent = overallInterpretation(scores);

    dom.scores.innerHTML = '';
    ['narc', 'mach', 'psych'].forEach(function (key, idx) {
        var score = scores[key];
        var t = traits[key];
        var direction = score >= 65 ? 'hi' : score >= 40 ? 'mid' : 'lo';

        var card = document.createElement('div');
        card.className = 'dark-score-card';
        card.innerHTML =
            '<div>' +
            '  <div class="dark-letter" style="color:' + t.color + '">' + t.letter + '</div>' +
            '</div>' +
            '<div>' +
            '  <div class="dark-name" style="color:' + t.color + '">' + t.name + '</div>' +
            '  <div class="dark-bar-track"><div class="dark-bar-fill" id="dbar-' + key + '" style="width:0%;background:' + t.color + '"></div></div>' +
            '  <div class="dark-pct" style="color:' + t.color + '">' + score + '%</div>' +
            '  <div class="dark-desc">' + t[direction] + '</div>' +
            '</div>';
        dom.scores.appendChild(card);

        setTimeout(function () {
            var bar = document.getElementById('dbar-' + key);
            if (bar) bar.style.width = score + '%';
        }, 120 + idx * 120);
    });

    dom.detail.innerHTML =
        '<div class="detail-section"><div class="detail-label">Apa itu Narsisisme?</div><div class="detail-content">' + traits.narc.definition + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Narsisisme · Pola Interpersonal</div><div class="detail-content">' + traits.narc.interpersonal + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Apa itu Machiavellianisme?</div><div class="detail-content">' + traits.mach.definition + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Machiavellianisme · Pola Interpersonal</div><div class="detail-content">' + traits.mach.interpersonal + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Apa itu Psikopati?</div><div class="detail-content">' + traits.psych.definition + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Psikopati · Pola Interpersonal</div><div class="detail-content">' + traits.psych.interpersonal + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Peringatan Penting</div><div class="detail-content">Ini adalah sifat-sifat subklinis yang ada pada setiap orang dalam derajat tertentu. Skor tinggi pada penilaian ini tidak setara dengan diagnosis gangguan kepribadian, dan tidak boleh ditafsirkan seperti itu. Untuk masalah klinis, konsultasikan dengan profesional kesehatan mental berlisensi.</div></div>';
}

function restartQuiz() {
    state.currentIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    dom.result.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}
