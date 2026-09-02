// ─── Big Five (Bahasa Indonesia) ─────────────────────────────────────────────

const traitData = {
    O: { name: 'Keterbukaan', color: 'var(--O)' },
    C: { name: 'Ketelitian', color: 'var(--C)' },
    E: { name: 'Ekstraversi', color: 'var(--E)' },
    A: { name: 'Keramahan', color: 'var(--A)' },
    N: { name: 'Neurotisisme', color: 'var(--N)' },
};

const questions = [
    // Openness
    { trait: 'O', text: 'Saya memiliki imajinasi yang vivid dan suka menjelajahi ide-ide abstrak.', reverse: false },
    { trait: 'O', text: 'Saya menikmati mengunjungi galeri seni, museum, atau mengalami bentuk seni baru.', reverse: false },
    { trait: 'O', text: 'Saya lebih menyukai rutinitas daripada hal baru — lebih suka bertahan dengan apa yang sudah terbukti berhasil.', reverse: true },
    { trait: 'O', text: 'Saya penasaran terhadap banyak hal berbeda dan suka belajar.', reverse: false },
    { trait: 'O', text: 'Saya merasa diskusi filosofis atau teoritis sangat menarik.', reverse: false },
    // Conscientiousness
    { trait: 'C', text: 'Saya selalu menyelesaikan tugas dengan tuntas dan tepat waktu.', reverse: false },
    { trait: 'C', text: 'Saya cenderung meninggalkan sesuatu berantakan atau tidak terorganisir.', reverse: true },
    { trait: 'C', text: 'Saya membuat rencana dan menaatinya daripada berimprovisasi.', reverse: false },
    { trait: 'C', text: 'Saya adalah seseorang yang bisa diandalkan orang lain untuk menyelesaikan hal-hal.', reverse: false },
    { trait: 'C', text: 'Saya sering bertindak impulsif tanpa memikirkan konsekuensinya.', reverse: true },
    // Extraversion
    { trait: 'E', text: 'Saya merasa berenergi dan hidup saat berada di sekitar banyak orang.', reverse: false },
    { trait: 'E', text: 'Saya cenderung mengambil inisiatif dan memimpin dalam situasi sosial.', reverse: false },
    { trait: 'E', text: 'Saya lebih menyukai malam tenang di rumah daripada pergi ke acara sosial.', reverse: true },
    { trait: 'E', text: 'Saya banyak bicara dan mudah memulai percakapan.', reverse: false },
    { trait: 'E', text: 'Saya sering merasa kesepian atau kurang stimulasi saat sendirian terlalu lama.', reverse: false },
    // Agreeableness
    { trait: 'A', text: 'Saya benar-benar peduli dengan kesejahteraan dan perasaan orang lain.', reverse: false },
    { trait: 'A', text: 'Saya cenderung kompetitif dan skeptis terhadap motif orang lain.', reverse: true },
    { trait: 'A', text: 'Saya bersedia mengorbankan kepentingan pribadi untuk membantu orang lain.', reverse: false },
    { trait: 'A', text: 'Saya sabar dan pemaaf, bahkan saat orang lain membuat kesalahan.', reverse: false },
    { trait: 'A', text: 'Saya cenderung berdebat atau tidak setuju dengan orang daripada bekerja sama.', reverse: true },
    // Neuroticism
    { trait: 'N', text: 'Saya banyak mengkhawatirkan hal-hal yang mungkin salah.', reverse: false },
    { trait: 'N', text: 'Saya tetap tenang dan jarang merasa stres.', reverse: true },
    { trait: 'N', text: 'Suasana hati saya bisa berubah dengan cepat tergantung apa yang terjadi di sekitar.', reverse: false },
    { trait: 'N', text: 'Saya sering merasa cemas atau tegang tanpa alasan yang jelas.', reverse: false },
    { trait: 'N', text: 'Saya pulih dengan cepat dari kemunduran dan situasi sulit.', reverse: true },
];

const traitDescriptions = {
    O: {
        hi: 'Kamu sangat imajinatif, penasaran, dan terbuka terhadap pengalaman baru. Kamu menyukai ide, seni, dan hal-hal baru — kemungkinan besar tertarik pada upaya kreatif dan pemikiran abstrak.',
        lo: 'Kamu praktis, konvensional, dan membumi. Kamu lebih menyukai hal yang familiar dan konkret daripada abstrak, dan menemukan kenyamanan dalam rutinitas dan tradisi.',
        mid: 'Kamu menyeimbangkan keingintahuan dengan kepraktisan — terbuka terhadap ide baru ketika berguna, tetapi tidak gelisah mencari kebaruan demi kebaruan itu sendiri.',
    },
    C: {
        hi: 'Kamu terorganisir, disiplin, dan sangat dapat diandalkan. Kamu menetapkan tujuan, membuat rencana, dan menyelesaikannya — orang lain mempercayaimu untuk menyelesaikan sesuatu.',
        lo: 'Kamu fleksibel, spontan, dan berjiwa bebas. Kamu lebih suka mengalir daripada mengikuti jadwal atau aturan yang kaku.',
        mid: 'Kamu cukup terorganisir — mampu disiplin saat dibutuhkan, tetapi tidak kaku soal struktur.',
    },
    E: {
        hi: 'Kamu ramah, asertif, dan bersemangat dengan kehadiran orang lain. Kamu mencari interaksi sosial dan berkembang di lingkungan yang ramai.',
        lo: 'Kamu pendiam, reflektif, dan mendapat energi dari kesendirian. Kamu lebih menyukai kedalaman daripada keluasan dalam hubungan, dan mengisi ulang energi saat sendirian.',
        mid: 'Kamu ambivert — nyaman dalam situasi sosial tetapi sama senangnya sendirian. Kamu beradaptasi dengan baik di keduanya.',
    },
    A: {
        hi: 'Kamu hangat, kooperatif, dan sangat empatik. Kamu menghargai harmoni dan benar-benar peduli dengan orang-orang di sekitarmu.',
        lo: 'Kamu langsung, kompetitif, dan skeptis. Kamu memprioritaskan kejujuran dan hasil daripada harmoni sosial, dan tidak menghindari konflik.',
        mid: 'Kamu selektif dalam kooperasi — baik kepada orang yang dekat denganmu, tetapi asertif saat diperlukan.',
    },
    N: {
        hi: 'Kamu mengalami emosi secara intens dan sensitif terhadap stres. Kamu mungkin sering khawatir, tetapi sensitivitas ini juga membuatmu penuh pengertian dan empatik.',
        lo: 'Kamu stabil secara emosional dan tangguh. Kamu menangani stres dengan tenang dan tidak berlama-lama pada emosi negatif.',
        mid: 'Kamu memiliki reaktivitas emosional yang moderat — kamu merasakan stres tetapi mengelolanya dengan cukup baik.',
    },
};

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
    traitCards: document.getElementById('trait-cards'),
};

document.addEventListener('DOMContentLoaded', init);

function init() {
    dom.startButton.addEventListener('click', openQuiz);
    dom.backButton.addEventListener('click', previousQuestion);
    dom.nextButton.addEventListener('click', nextQuestion);
    dom.restartButton.addEventListener('click', restartQuiz);
    updateQuestion();
}

function openQuiz() {
    dom.startScreen.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}

function updateQuestion() {
    var question = questions[state.currentIndex];
    var trait = traitData[question.trait];
    var answeredValue = state.answers[state.currentIndex];

    dom.counter.textContent = (state.currentIndex + 1) + ' / 25';
    dom.questionNumber.textContent = String(state.currentIndex + 1).padStart(2, '0');
    dom.questionText.textContent = question.text;
    dom.traitBadge.textContent = trait.name.toUpperCase();
    dom.traitBadge.style.color = trait.color;
    dom.traitTag.textContent = question.trait;
    dom.traitTag.style.color = trait.color;
    dom.progressFill.style.width = (state.currentIndex / questions.length * 100) + '%';
    dom.progressFill.style.background = trait.color;
    dom.backButton.disabled = state.currentIndex === 0;
    dom.nextButton.disabled = answeredValue === null;
    dom.nextButton.textContent = state.currentIndex === questions.length - 1 ? 'Lihat hasil →' : 'Lanjut →';

    dom.likertButtons.innerHTML = '';
    for (var score = 1; score <= 5; score++) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'likert-btn';
        button.textContent = score;
        if (answeredValue === score) {
            button.classList.add('selected');
            button.style.background = trait.color;
            button.style.borderColor = trait.color;
            button.style.color = '#fff';
        }
        button.addEventListener('click', makePick(score));
        dom.likertButtons.appendChild(button);
    }
}

function makePick(value) {
    return function () {
        state.answers[state.currentIndex] = value;
        dom.nextButton.disabled = false;
        updateSelectedButton(value);
    };
}

function updateSelectedButton(value) {
    var trait = traitData[questions[state.currentIndex].trait];
    document.querySelectorAll('.likert-btn').forEach(function (button, index) {
        var score = index + 1;
        button.classList.toggle('selected', score === value);
        button.style.background = score === value ? trait.color : '';
        button.style.borderColor = score === value ? trait.color : '';
        button.style.color = score === value ? '#fff' : '';
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
    var totals = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    var counts = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    questions.forEach(function (question, index) {
        var answer = state.answers[index];
        if (answer === null) return;
        var value = question.reverse ? 6 - answer : answer;
        totals[question.trait] += value;
        counts[question.trait] += 1;
    });
    var result = {};
    Object.keys(totals).forEach(function (trait) {
        var max = counts[trait] * 5;
        result[trait] = Math.round(totals[trait] / max * 100);
    });
    return result;
}

function getHeadline(scores) {
    var dominant = 'O';
    Object.keys(scores).forEach(function(k) {
        if (scores[k] > scores[dominant]) dominant = k;
    });
    var labels = {
        O: 'Jiwa yang penasaran dan terbuka terhadap pengalaman.',
        C: 'Teliti, dapat diandalkan, dan terorganisir.',
        E: 'Bersemangat, suka bergaul, dan penuh energi.',
        A: 'Hangat, empatik, dan berorientasi pada harmoni.',
        N: 'Sensitif secara emosional dan penuh kesadaran diri.',
    };
    return labels[dominant];
}

function showResult() {
    dom.quiz.style.display = 'none';
    dom.result.style.display = 'block';
    var scores = computeScores();

    dom.headline.textContent = getHeadline(scores);
    dom.description.textContent = 'Setiap sifat dinilai pada spektrum 0–100. Tidak ada skor yang baik atau buruk — hanya potret jujur tentang siapa dirimu.';

    dom.traitCards.innerHTML = '';
    var order = ['O', 'C', 'E', 'A', 'N'];

    order.forEach(function (traitKey, index) {
        var score = scores[traitKey];
        var trait = traitData[traitKey];
        var direction = score >= 65 ? 'hi' : score <= 35 ? 'lo' : 'mid';
        var description = traitDescriptions[traitKey][direction];

        var card = document.createElement('div');
        card.className = 'trait-card';
        card.style.borderLeftColor = trait.color;

        card.innerHTML =
            '<div>' +
            '  <div class="trait-letter-big" style="color:' + trait.color + '">' + traitKey + '</div>' +
            '</div>' +
            '<div>' +
            '  <div class="trait-name" style="color:' + trait.color + '">' + trait.name + '</div>' +
            '  <div class="trait-bar-track">' +
            '    <div class="trait-bar-fill" id="bar-' + traitKey + '" style="width:0%;background:' + trait.color + '"></div>' +
            '  </div>' +
            '  <div class="trait-pct" style="color:' + trait.color + '">' + score + '%</div>' +
            '  <div class="trait-desc">' + description + '</div>' +
            '</div>';

        dom.traitCards.appendChild(card);

        setTimeout(function () {
            var bar = document.getElementById('bar-' + traitKey);
            if (bar) bar.style.width = score + '%';
        }, 120 + index * 120);
    });
}

function restartQuiz() {
    state.currentIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    dom.result.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}
