// ─── Attachment Style Data (Bahasa Indonesia) ─────────────────────────────────

const styles = {
    secure: {
        name: 'Aman',
        full: 'Kelekatan Aman (Secure)',
        color: 'var(--secure)',
        tagline: 'Nyaman dengan keintiman maupun kemandirian dalam porsi yang seimbang.',
        description: 'Kamu telah mengembangkan hubungan yang stabil dan saling percaya dengan kedekatan. Kamu bisa bergantung pada orang lain tanpa takut kehilangan jati diri, dan membiarkan orang lain bergantung padamu tanpa merasa tercekik.',
        inRelationships: 'Kamu mengomunikasikan kebutuhan secara terbuka, menoleransi konflik tanpa membuat malapetaka, dan bisa menyendiri tanpa rasa cemas. Pasangan sering menggambarkanmu sebagai sosok yang membumi dan hangat.',
        origin: 'Biasanya berakar dari pengasuhan awal yang secara konsisten responsif — tidak sempurna, tetapi bisa diandalkan kehadirannya dan selaras.',
        growth: 'Terus tawarkan dasar aman yang sama kepada orang lain. Kaji ulang luka lama bukan untuk menjadi goyah, melainkan untuk memahaminya — hal-hal tersebut telah membentuk kapasitasmu untuk berbelas kasih.',
    },
    anxious: {
        name: 'Cemas',
        full: 'Kelekatan Cemas (Anxious-Preoccupied)',
        color: 'var(--anxious)',
        tagline: 'Mendambakan kedekatan, namun takut ditinggalkan.',
        description: 'Kamu sangat mendambakan kedekatan dan keintiman, tetapi sering sibuk memikirkan apakah pasanganmu benar-benar mencintai dan menghargaimu. Tanda-tanda jarak kecil bisa terasa mengancam dan menggoyahkan.',
        inRelationships: 'Kamu mungkin sering mencari validasi/penentraman, menebak-nebak arti diam, dan berosilasi antara menempel lekat dan mendorong menjauh. Intensitas emosionalmu itu nyata — begitu juga kerinduanmu akan cinta yang aman.',
        origin: 'Sering berakar dari pengasuhan awal yang tidak konsisten — pengasuh yang kadang selaras dan kadang absen — meninggalkan anak yang tidak yakin kapan cinta akan tersedia.',
        growth: 'Berlatih menenangkan diri sendiri sebelum mencari validasi eksternal. Perhatikan cerita yang kamu buat sendiri tentang diam atau jarak — seringkali itu adalah cerita lama yang mendahului hubunganmu saat ini.',
    },
    avoidant: {
        name: 'Menghindar',
        full: 'Kelekatan Menghindar (Dismissive-Avoidant)',
        color: 'var(--avoidant)',
        tagline: 'Menghargai kemandirian, tidak nyaman dengan kedekatan emosional.',
        description: 'Kamu telah belajar untuk memprioritaskan kemandirian dan merasa tidak nyaman dengan terlalu banyak kedekatan atau ketergantungan. Kamu menghargai otonomi dan cenderung menekan atau meminimalkan kebutuhan emosional.',
        inRelationships: 'Kamu mungkin menarik diri saat keadaan menjadi terlalu intens secara emosional, menyepelekan pentingnya hubungan, dan merasa lega dengan adanya jarak. Ini bukan ketidakpedulian — ini adalah bentuk perlindungan diri yang dipelajari.',
        origin: 'Sering berakar dari pengalaman awal di mana kebutuhan emosional diabaikan, diremehkan, atau ditolak — membuat anak belajar bahwa membutuhkan orang lain itu berbahaya.',
        growth: 'Berlatih menoleransi ketidaknyamanan dari kedekatan emosional dalam porsi kecil. Perhatikan dorongan otomatis untuk menarik diri — itu adalah refleks, bukan kebenaran tentang apa yang kamu butuhkan.',
    },
    disorganized: {
        name: 'Disorganisasi',
        full: 'Kelekatan Disorganisasi (Fearful-Avoidant)',
        color: 'var(--disorganized)',
        tagline: 'Menginginkan kedekatan sekaligus menakutinya.',
        description: 'Kamu mengalami paradoks mendasar: kamu sangat menginginkan keintiman, tetapi kedekatan juga terasa menakutkan atau tidak aman. Ini menciptakan pola tarik-ulur dan kebingungan dalam hubungan.',
        inRelationships: 'Kamu mungkin berosilasi antara mengidealkan pasangan dan mendorong mereka menjauh, merasa kewalahan oleh intensitas emosional, dan sulit mempercayai bahkan orang yang kamu cintai.',
        origin: 'Sering dikaitkan dengan pengalaman awal ketakutan dalam hubungan pengasuhan — di mana orang yang seharusnya memberikan rasa aman juga merupakan sumber ancaman atau ketidakpastian.',
        growth: 'Pola ini termasuk yang paling bisa diperbaiki dengan dukungan profesional. Terapi — terutama pendekatan somatik atau relasional — dapat secara bertahap membantu menyambung kembali asosiasi antara kedekatan dan rasa aman.',
    },
};

const questions = [
    // Secure
    { style: 'secure', text: 'Saya merasa mudah untuk terbuka secara emosional dengan orang-orang yang saya sayangi.' },
    { style: 'secure', text: 'Saya merasa nyaman bergantung pada orang lain dan membiarkan mereka bergantung pada saya.' },
    { style: 'secure', text: 'Saya tidak terlalu khawatir ditinggalkan atau tidak dicintai.' },
    { style: 'secure', text: 'Saya bisa mengomunikasikan kebutuhan saya dengan jelas tanpa takut ditolak.' },
    { style: 'secure', text: 'Konflik dalam hubungan tidak terasa sebagai malapetaka — saya bisa menyelesaikannya.' },
    { style: 'secure', text: 'Saya merasa sama nyamannya dengan keintiman maupun waktu sendirian.' },
    { style: 'secure', text: 'Saya umumnya percaya bahwa orang-orang terdekat akan ada saat saya membutuhkan mereka.' },
    // Anxious
    { style: 'anxious', text: 'Saya sering khawatir bahwa orang yang saya sayangi tidak mencintai saya sebesar saya mencintai mereka.' },
    { style: 'anxious', text: 'Saya merasa gugup atau tertekan saat pasangan atau teman dekat tidak merespons dengan cepat.' },
    { style: 'anxious', text: 'Saya butuh banyak validasi/penentraman bahwa saya dicintai dan dihargai.' },
    { style: 'anxious', text: 'Saya kadang merasa bahwa orang lain menjauh justru ketika saya ingin lebih dekat.' },
    { style: 'anxious', text: 'Suasana hati saya dalam suatu hubungan sangat dipengaruhi oleh suasana hati orang tersebut.' },
    { style: 'anxious', text: 'Pikiran akan ditinggalkan atau ditolak terasa tak tertahankan.' },
    { style: 'anxious', text: 'Saya menjadi sangat sibuk memikirkan hubungan saya bahkan ketika semuanya tampak baik-baik saja.' },
    // Avoidant
    { style: 'avoidant', text: 'Saya lebih suka tidak bergantung pada orang lain atau membiarkan mereka terlalu bergantung pada saya.' },
    { style: 'avoidant', text: 'Saat orang menjadi terlalu dekat secara emosional, saya merasa tidak nyaman dan ingin menjauh.' },
    { style: 'avoidant', text: 'Saya merasa lebih mudah fokus pada pekerjaan atau proyek daripada kebutuhan emosional.' },
    { style: 'avoidant', text: 'Saya sering merasa lebih nyaman sendirian daripada dalam hubungan dekat.' },
    { style: 'avoidant', text: 'Saat pasangan menginginkan kedekatan lebih, saya merasakan dorongan kuat untuk menarik diri.' },
    { style: 'avoidant', text: 'Saya meremehkan seberapa besar pengaruh hubungan saya terhadap keadaan emosi saya.' },
    { style: 'avoidant', text: 'Saya menghargai kemandirian di atas segalanya.' },
    // Fearful-Avoidant
    { style: 'disorganized', text: 'Saya ingin keintiman tapi merasa takut atau kewalahan saat terlalu dekat dengan seseorang.' },
    { style: 'disorganized', text: 'Saya mendapati diri saya bergantian antara mendorong orang menjauh dan sangat menginginkan mereka dekat.' },
    { style: 'disorganized', text: 'Saya kesulitan mempercayai orang, bahkan mereka yang sangat saya sayangi.' },
    { style: 'disorganized', text: 'Kedekatan dalam hubungan bisa terasa menenangkan sekaligus mengancam secara bersamaan.' },
    { style: 'disorganized', text: 'Saya kadang berperilaku dengan cara yang menyabotase hubungan yang sebenarnya saya inginkan.' },
    { style: 'disorganized', text: 'Saya merasa sangat sulit memprediksi bagaimana perasaan saya dalam hubungan dekat dari waktu ke waktu.' },
    { style: 'disorganized', text: 'Pengalaman masa lalu dilukai oleh orang yang saya percayai membuat saya sulit terbuka.' },
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
    resHeader: document.getElementById('res-header'),
    headline: document.getElementById('res-headline'),
    description: document.getElementById('res-desc'),
    scores: document.getElementById('attach-scores'),
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

var styleLabels = {
    secure: 'AMAN',
    anxious: 'CEMAS',
    avoidant: 'MENGHINDAR',
    disorganized: 'KETAKUTAN',
};

function updateQuestion() {
    var q = questions[state.currentIndex];
    var s = styles[q.style];
    var answered = state.answers[state.currentIndex];

    dom.counter.textContent = (state.currentIndex + 1) + ' / ' + questions.length;
    dom.questionNumber.textContent = String(state.currentIndex + 1).padStart(2, '0');
    dom.questionText.textContent = q.text;
    dom.traitBadge.textContent = styleLabels[q.style];
    dom.traitBadge.style.color = s.color;
    dom.traitTag.textContent = q.style.charAt(0).toUpperCase();
    dom.traitTag.style.color = s.color;
    dom.progressFill.style.width = (state.currentIndex / questions.length * 100) + '%';
    dom.progressFill.style.background = s.color;
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
            btn.style.background = s.color;
            btn.style.borderColor = s.color;
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
    var s = styles[questions[state.currentIndex].style];
    document.querySelectorAll('.likert-btn').forEach(function (btn, idx) {
        var score = idx + 1;
        btn.classList.toggle('selected', score === value);
        btn.style.background = score === value ? s.color : '';
        btn.style.borderColor = score === value ? s.color : '';
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
    var totals = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 };
    var counts = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 };
    questions.forEach(function (q, idx) {
        var ans = state.answers[idx];
        if (ans === null) return;
        totals[q.style] += ans;
        counts[q.style] += 1;
    });
    var result = {};
    Object.keys(totals).forEach(function (key) {
        var max = counts[key] * 5;
        result[key] = max > 0 ? Math.round(totals[key] / max * 100) : 0;
    });
    return result;
}

function topStyle(scores) {
    var best = 'secure';
    Object.keys(scores).forEach(function (key) {
        if (scores[key] > scores[best]) best = key;
    });
    return best;
}

function showResult() {
    dom.quiz.style.display = 'none';
    dom.result.style.display = 'block';

    var scores = computeScores();
    var top = topStyle(scores);
    var s = styles[top];

    dom.resHeader.style.background = s.color;
    dom.headline.textContent = s.full;
    dom.description.textContent = s.tagline;

    var order = Object.keys(scores).sort(function (a, b) {
        return scores[b] - scores[a];
    });

    dom.scores.innerHTML = '';
    order.forEach(function (key, idx) {
        var pct = scores[key];
        var row = document.createElement('div');
        row.className = 'attach-score-row';
        row.innerHTML =
            '<div class="attach-score-label" style="color:' + styles[key].color + '">' + styles[key].full + '</div>' +
            '<div class="attach-bar-track"><div class="attach-bar-fill" id="abar-' + key + '" style="width:0%;background:' + styles[key].color + '"></div></div>' +
            '<div class="attach-pct">' + pct + '%</div>';
        dom.scores.appendChild(row);
        setTimeout(function () {
            var bar = document.getElementById('abar-' + key);
            if (bar) bar.style.width = pct + '%';
        }, 80 + idx * 80);
    });

    dom.detail.innerHTML =
        '<div class="detail-section"><div class="detail-label">Ikhtisar</div><div class="detail-content">' + s.description + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Dalam Hubungan</div><div class="detail-content">' + s.inRelationships + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Akar Perkembangan</div><div class="detail-content">' + s.origin + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Jalan ke Depan</div><div class="detail-content">' + s.growth + '</div></div>';
}

function restartQuiz() {
    state.currentIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    dom.result.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}
