// ─── Enneagram (Bahasa Indonesia) ────────────────────────────────────────────

const types = {
    1: {
        name: 'Sang Reformer',
        tagline: 'Berprinsip · Bertujuan · Terkendali · Perfeksionis',
        color: 'var(--T1)',
        motivation: 'Menjadi baik, memiliki integritas, dan hidup sesuai standar tertinggi mereka.',
        fear: 'Salah, korup, jahat, atau cacat.',
        desire: 'Menjadi baik, memiliki integritas, dan seimbang.',
        growth: 'Pada kondisi terbaik mereka, Tipe 1 bersikap penerimaan, fleksibel, dan bijaksana. Mereka memahami bahwa dunia tidak sempurna dan tetap memilih untuk memperbaikinya dengan kesabaran dan keanggunan.',
        stress: 'Di bawah tekanan, Tipe 1 bisa menjadi murung, tidak rasional, dan bertindak dengan cara yang bertentangan dengan nilai-nilai mereka sendiri — mencerminkan aspek kurang sehat dari Tipe 4.',
        center: 'Naluri',
    },
    2: {
        name: 'Sang Penolong',
        tagline: 'Peduli · Interpersonal · Murah Hati · Posesif',
        color: 'var(--T2)',
        motivation: 'Dicintai, mengekspresikan perasaan, dan dibutuhkan orang lain.',
        fear: 'Tidak dicintai, tidak diinginkan, atau dianggap tidak layak dicintai.',
        desire: 'Merasakan cinta yang tulus dan tanpa syarat.',
        growth: 'Pada kondisi terbaik mereka, Tipe 2 bersifat altruistik sejati, matang secara emosional, dan nurturing tanpa mengharapkan timbal balik.',
        stress: 'Di bawah tekanan, Tipe 2 bisa menjadi agresif, dominan, dan kontroling — mencerminkan aspek kurang sehat dari Tipe 8.',
        center: 'Perasaan',
    },
    3: {
        name: 'Sang Pencapai',
        tagline: 'Adaptif · Berprestasi · Ambisius · Sadar Citra',
        color: 'var(--T3)',
        motivation: 'Merasa berharga, sukses, dan dikagumi.',
        fear: 'Tidak berharga atau tidak memiliki nilai intrinsik.',
        desire: 'Merasa berharga dan berarti.',
        growth: 'Pada kondisi terbaik mereka, Tipe 3 bersikap autentik, menawan, dan menginspirasi. Mereka berprestasi karena kecintaan, bukan untuk mendapat persetujuan.',
        stress: 'Di bawah tekanan, Tipe 3 bisa menjadi tidak terlibat, menarik diri, dan apatis — mencerminkan aspek kurang sehat dari Tipe 9.',
        center: 'Perasaan',
    },
    4: {
        name: 'Sang Individualis',
        tagline: 'Ekspresif · Dramatis · Introspektif · Temperamental',
        color: 'var(--T4)',
        motivation: 'Mengekspresikan individualitas, menciptakan identitas, dan menemukan makna.',
        fear: 'Tidak memiliki identitas atau keistimewaan pribadi.',
        desire: 'Menemukan diri dan makna — menciptakan identitas yang autentik.',
        growth: 'Pada kondisi terbaik mereka, Tipe 4 sangat kreatif, jujur secara emosional, dan penuh welas asih. Mereka mengubah penderitaan pribadi menjadi makna universal.',
        stress: 'Di bawah tekanan, Tipe 4 bisa terlalu terlibat dalam kehidupan orang lain, klinging, dan cenderung menjadi martir — mencerminkan aspek kurang sehat dari Tipe 2.',
        center: 'Perasaan',
    },
    5: {
        name: 'Sang Investigator',
        tagline: 'Perseptif · Inovatif · Tertutup · Terisolasi',
        color: 'var(--T5)',
        motivation: 'Menjadi mampu, kompeten, dan tidak kewalahan oleh dunia.',
        fear: 'Tidak berguna, tidak berdaya, atau tidak kompeten.',
        desire: 'Menjadi mampu dan kompeten.',
        growth: 'Pada kondisi terbaik mereka, Tipe 5 adalah visioner, berhati terbuka, dan inovatif. Mereka berbagi pengetahuan dengan murah hati dari kelimpahan.',
        stress: 'Di bawah tekanan, Tipe 5 bisa menjadi tidak fokus, hiperaktif, dan mencari stimulasi secara kompulsif — mencerminkan aspek kurang sehat dari Tipe 7.',
        center: 'Pikiran',
    },
    6: {
        name: 'Sang Loyalis',
        tagline: 'Berkomitmen · Berorientasi Keamanan · Menarik · Curiga',
        color: 'var(--T6)',
        motivation: 'Memiliki rasa aman, bimbingan, dan dukungan.',
        fear: 'Kehilangan dukungan, bimbingan, atau rasa aman.',
        desire: 'Memiliki keamanan dan dukungan yang bisa diandalkan.',
        growth: 'Pada kondisi terbaik mereka, Tipe 6 mandiri, berani, dan sangat dapat dipercaya. Mereka memimpin dengan loyalitas sekaligus pemikiran independen.',
        stress: 'Di bawah tekanan, Tipe 6 bisa menjadi kompetitif, sombong, dan meremehkan orang lain — mencerminkan aspek kurang sehat dari Tipe 3.',
        center: 'Pikiran',
    },
    7: {
        name: 'Sang Antusias',
        tagline: 'Spontan · Serbaguna · Ambisius · Mudah Teralihkan',
        color: 'var(--T7)',
        motivation: 'Merasa puas dan bahagia, memiliki kebutuhan yang terpenuhi.',
        fear: 'Kekurangan atau terjebak dalam rasa sakit.',
        desire: 'Bahagia, puas, dan menemukan kepuasan sejati.',
        growth: 'Pada kondisi terbaik mereka, Tipe 7 penuh kegembiraan, bersyukur, dan sangat hadir di masa kini. Mereka menemukan kelimpahan dalam momen, bukan mengejar pengalaman masa depan.',
        stress: 'Di bawah tekanan, Tipe 7 bisa menjadi perfeksionis, kritis, dan keras terhadap diri sendiri dan orang lain — mencerminkan aspek kurang sehat dari Tipe 1.',
        center: 'Pikiran',
    },
    8: {
        name: 'Sang Penantang',
        tagline: 'Percaya Diri · Tegas · Berkemauan · Konfrontatif',
        color: 'var(--T8)',
        motivation: 'Mandiri, membuktikan kekuatan, dan menolak kelemahan.',
        fear: 'Disakiti atau dikontrol oleh orang lain.',
        desire: 'Melindungi diri sendiri dan tetap memegang kendali.',
        growth: 'Pada kondisi terbaik mereka, Tipe 8 bersifat pemurah, heroik, dan sangat protektif terhadap orang-orang yang mereka cintai. Mereka menggunakan kekuatan mereka untuk melayani orang lain.',
        stress: 'Di bawah tekanan, Tipe 8 bisa menjadi menarik diri, tertutup, dan terisolasi secara emosional — mencerminkan aspek kurang sehat dari Tipe 5.',
        center: 'Naluri',
    },
    9: {
        name: 'Sang Pendamai',
        tagline: 'Reseptif · Menenangkan · Mudah Puas · Pasif',
        color: 'var(--T9)',
        motivation: 'Memiliki ketenangan pikiran, menciptakan harmoni, dan menolak gangguan.',
        fear: 'Kehilangan koneksi dan perpecahan.',
        desire: 'Memiliki stabilitas batin dan ketenangan pikiran.',
        growth: 'Pada kondisi terbaik mereka, Tipe 9 sangat hadir, dinamis, dan mampu menampung semua perspektif tanpa kehilangan suara mereka sendiri.',
        stress: 'Di bawah tekanan, Tipe 9 bisa menjadi cemas, khawatir, dan cenderung berpikir negatif — mencerminkan aspek kurang sehat dari Tipe 6.',
        center: 'Naluri',
    },
};

const questions = [
    // Tipe 1
    { type: 1, text: 'Saya memiliki rasa benar dan salah yang kuat, dan merasa terdorong untuk bertindak sesuai itu.' },
    { type: 1, text: 'Saya sering memperhatikan apa yang tidak sempurna atau salah, bahkan ketika orang lain tidak.' },
    { type: 1, text: 'Saya memegang standar yang sangat tinggi untuk diri sendiri dan merasa bersalah ketika gagal memenuhinya.' },
    { type: 1, text: 'Saya percaya sebagian besar masalah bisa diselesaikan jika orang-orang hanya melakukan hal yang benar.' },
    // Tipe 2
    { type: 2, text: 'Saya menemukan kepuasan mendalam dalam memenuhi kebutuhan orang lain dan hadir untuk mereka.' },
    { type: 2, text: 'Saya sering merasakan apa yang dibutuhkan orang lain sebelum mereka mengatakannya.' },
    { type: 2, text: 'Saya sulit meminta bantuan sendiri, tetapi mudah memberikannya.' },
    { type: 2, text: 'Hubungan-hubunganku sangat penting bagi rasa jati diriku.' },
    // Tipe 3
    { type: 3, text: 'Saya sangat termotivasi oleh kesuksesan dan diakui atas pencapaian saya.' },
    { type: 3, text: 'Saya mudah beradaptasi dengan audiens yang berbeda dan tahu cara mempresentasikan diri dengan baik.' },
    { type: 3, text: 'Saya sangat peduli dengan bagaimana saya dipersepsikan oleh orang lain.' },
    { type: 3, text: 'Saya sering merasa gelisah atau tidak puas kecuali saya membuat kemajuan.' },
    // Tipe 4
    { type: 4, text: 'Saya sering merasa berbeda dari orang lain — seolah saya berada di dunia yang tidak sepenuhnya dilihat orang lain.' },
    { type: 4, text: 'Saya memiliki kerinduan mendalam terhadap sesuatu yang terasa hilang atau baru saja di luar jangkauan.' },
    { type: 4, text: 'Saya menghargai autentisitas dan kedalaman di atas konvensi sosial.' },
    { type: 4, text: 'Saya tertarik pada melankoli, keindahan, dan pengalaman emosional yang intens.' },
    // Tipe 5
    { type: 5, text: 'Saya lebih suka mengamati dan memahami sebelum terlibat.' },
    { type: 5, text: 'Saya butuh banyak waktu sendirian untuk mengisi ulang energi dan berpikir.' },
    { type: 5, text: 'Saya lebih nyaman dengan ide dan sistem daripada dengan emosi.' },
    { type: 5, text: 'Saya meneliti dan mengumpulkan pengetahuan sebelum berkomitmen pada apapun.' },
    // Tipe 6
    { type: 6, text: 'Saya sering mengantisipasi apa yang bisa salah dan merencanakan sesuai itu.' },
    { type: 6, text: 'Saya sangat menghargai loyalitas — dalam diri saya sendiri maupun orang-orang di sekitar saya.' },
    { type: 6, text: 'Saya sering meragukan apakah saya bisa mempercayai penilaian saya sendiri.' },
    { type: 6, text: 'Saya merasa paling aman ketika saya memiliki sistem atau orang yang bisa diandalkan.' },
    // Tipe 7
    { type: 7, text: 'Saya bersemangat dengan pengalaman, ide, dan kemungkinan baru.' },
    { type: 7, text: 'Saya cepat berpindah dari hal-hal yang terasa membatasi atau menyakitkan.' },
    { type: 7, text: 'Saya cenderung memiliki banyak proyek dan minat yang sedang berjalan sekaligus.' },
    { type: 7, text: 'Saya percaya hidup harus dipenuhi dengan kegembiraan dan pengalaman bermakna.' },
    // Tipe 8
    { type: 8, text: 'Saya lebih suka memegang kendali dan merasa frustrasi ketika tidak bisa.' },
    { type: 8, text: 'Saya langsung dan konfrontatif — saya lebih suka mengatakannya daripada mengisyaratkannya.' },
    { type: 8, text: 'Saya memiliki rasa keadilan yang kuat dan akan berjuang untuk orang-orang yang saya lindungi.' },
    { type: 8, text: 'Saya merasa paling hidup ketika terlibat dalam tantangan atau perjuangan yang bermakna.' },
    // Tipe 9
    { type: 9, text: 'Saya berusaha keras untuk menghindari konflik dan menjaga harmoni.' },
    { type: 9, text: 'Saya kadang kehilangan jejak prioritas sendiri karena menuruti keinginan orang lain.' },
    { type: 9, text: 'Saya mudah melihat berbagai sisi dari suatu masalah tanpa merasa kuat tentang satu sisi manapun.' },
    { type: 9, text: 'Saya sangat menginginkan kedamaian — dalam diri saya sendiri maupun dalam hubungan-hubungan saya.' },
];

// ─── State ───────────────────────────────────────────────────────────────────

const state = {
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
};

// ─── DOM ─────────────────────────────────────────────────────────────────────

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
    resTypeBadge: document.getElementById('res-type-badge'),
    headline: document.getElementById('res-headline'),
    description: document.getElementById('res-desc'),
    breakdown: document.getElementById('enneagram-breakdown'),
    detail: document.getElementById('result-detail'),
    typeChips: document.getElementById('type-chips'),
    circle: document.getElementById('enneagram-circle'),
};

document.addEventListener('DOMContentLoaded', function () {
    buildChips();
    buildCircle();
    dom.startButton.addEventListener('click', openQuiz);
    dom.backButton.addEventListener('click', previousQuestion);
    dom.nextButton.addEventListener('click', nextQuestion);
    dom.restartButton.addEventListener('click', restartQuiz);
    updateQuestion();
});

function buildChips() {
    for (var i = 1; i <= 9; i++) {
        var span = document.createElement('span');
        span.className = 'ocean-chip';
        span.style.color = 'var(--T' + i + ')';
        span.textContent = i + ' · ' + types[i].name.replace('Sang ', '');
        dom.typeChips.appendChild(span);
    }
}

function buildCircle() {
    for (var i = 1; i <= 9; i++) {
        var cell = document.createElement('div');
        cell.className = 'enn-cell';
        cell.innerHTML =
            '<span class="enn-num" style="color:var(--T' + i + ')">' + i + '</span>' +
            '<span class="enn-name">' + types[i].name.replace('Sang ', '') + '</span>';
        dom.circle.appendChild(cell);
    }
}

function openQuiz() {
    dom.startScreen.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}

function updateQuestion() {
    var q = questions[state.currentIndex];
    var t = types[q.type];
    var answered = state.answers[state.currentIndex];

    dom.counter.textContent = (state.currentIndex + 1) + ' / ' + questions.length;
    dom.questionNumber.textContent = String(state.currentIndex + 1).padStart(2, '0');
    dom.questionText.textContent = q.text;
    dom.traitBadge.textContent = 'TIPE ' + q.type;
    dom.traitBadge.style.color = t.color;
    dom.traitTag.textContent = q.type;
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
    var t = types[questions[state.currentIndex].type];
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
    var totals = {};
    var counts = {};
    for (var i = 1; i <= 9; i++) { totals[i] = 0; counts[i] = 0; }
    questions.forEach(function (q, idx) {
        var ans = state.answers[idx];
        if (ans === null) return;
        totals[q.type] += ans;
        counts[q.type] += 1;
    });
    var scores = {};
    for (var i = 1; i <= 9; i++) {
        var max = counts[i] * 5;
        scores[i] = max > 0 ? Math.round(totals[i] / max * 100) : 0;
    }
    return scores;
}

function topType(scores) {
    var best = 1;
    for (var i = 2; i <= 9; i++) {
        if (scores[i] > scores[best]) best = i;
    }
    return best;
}

function showResult() {
    dom.quiz.style.display = 'none';
    dom.result.style.display = 'block';

    var scores = computeScores();
    var top = topType(scores);
    var t = types[top];

    dom.resTypeBadge.textContent = 'Tipe ' + top;
    dom.resTypeBadge.style.color = t.color;
    dom.headline.textContent = t.name;
    dom.description.textContent = t.tagline;

    var order = Object.keys(scores).map(Number).sort(function (a, b) { return scores[b] - scores[a]; });

    dom.breakdown.innerHTML = '';
    order.forEach(function (typeNum, idx) {
        var score = scores[typeNum];
        var row = document.createElement('div');
        row.className = 'enn-score-row';
        row.innerHTML =
            '<div class="enn-score-num" style="color:var(--T' + typeNum + ')">' + typeNum + '</div>' +
            '<div class="enn-score-label" style="color:var(--T' + typeNum + ')">' + types[typeNum].name + '</div>' +
            '<div class="enn-bar-track"><div class="enn-bar-fill" id="ebar-' + typeNum + '" style="width:0%;background:var(--T' + typeNum + ')"></div></div>' +
            '<div class="enn-pct">' + score + '%</div>';
        dom.breakdown.appendChild(row);
        setTimeout(function () {
            var bar = document.getElementById('ebar-' + typeNum);
            if (bar) bar.style.width = score + '%';
        }, 80 + idx * 80);
    });

    dom.detail.innerHTML =
        '<div class="detail-section"><div class="detail-label">Motivasi Inti</div><div class="detail-content">' + t.motivation + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Ketakutan Dasar</div><div class="detail-content">' + t.fear + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Keinginan Dasar</div><div class="detail-content">' + t.desire + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Pada Kondisi Terbaik</div><div class="detail-content">' + t.growth + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Di Bawah Tekanan</div><div class="detail-content">' + t.stress + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Pusat Kecerdasan</div><div class="detail-content">Pusat ' + t.center + '</div></div>';
}

function restartQuiz() {
    state.currentIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    dom.result.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}
