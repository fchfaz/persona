// ─── Attachment Style Data ────────────────────────────────────────────────────

const styles = {
    secure: {
        name: 'Secure',
        full: 'Secure Attachment',
        color: 'var(--secure)',
        tagline: 'Comfortable with intimacy and independence in equal measure.',
        description: 'You have developed a stable, trusting relationship with closeness. You can depend on others without fear of losing yourself, and you allow others to depend on you without feeling suffocated.',
        inRelationships: 'You communicate needs openly, tolerate conflict without catastrophizing, and can be alone without anxiety. Partners often describe you as grounded and warm.',
        origin: 'Typically rooted in early caregiving that was consistently responsive — not perfect, but reliably present and attuned.',
        growth: 'Continue to offer that same secure base to others. Revisit old wounds not to be destabilized, but to understand them — they have shaped your capacity for compassion.',
    },
    anxious: {
        name: 'Anxious',
        full: 'Anxious-Preoccupied',
        color: 'var(--anxious)',
        tagline: 'Craving closeness, yet fearing abandonment.',
        description: 'You deeply desire closeness and intimacy, but are often preoccupied with whether your partner truly loves and values you. Small signs of distance can feel threatening and destabilizing.',
        inRelationships: 'You may seek frequent reassurance, read into silences, and oscillate between clinging and pushing away. Your emotional intensity is real — and so is your longing for secure love.',
        origin: 'Often rooted in inconsistent early caregiving — a caregiver who was sometimes attuned and sometimes absent — leaving a child unsure when love would be available.',
        growth: 'Practice self-soothing before seeking external reassurance. Notice the stories you tell yourself about silence or distance — they are often older than the present relationship.',
    },
    avoidant: {
        name: 'Avoidant',
        full: 'Dismissive-Avoidant',
        color: 'var(--avoidant)',
        tagline: 'Valuing independence, uncomfortable with emotional closeness.',
        description: 'You have learned to prioritize self-reliance and feel uncomfortable with too much closeness or dependence. You value your autonomy and tend to suppress or minimize emotional needs.',
        inRelationships: 'You may withdraw when things get too emotionally intense, minimize the importance of relationships, and feel relieved by distance. This isn\'t indifference — it\'s a learned form of self-protection.',
        origin: 'Often rooted in early experiences where emotional needs were dismissed, minimized, or met with rejection — leading a child to learn that needing others is dangerous.',
        growth: 'Practice tolerating the discomfort of emotional closeness in small doses. Notice the automatic urge to pull back — it is a reflex, not a truth about what you need.',
    },
    disorganized: {
        name: 'Fearful-Avoidant',
        full: 'Fearful-Avoidant (Disorganized)',
        color: 'var(--disorganized)',
        tagline: 'Wanting closeness and fearing it simultaneously.',
        description: 'You experience a fundamental paradox: you deeply want intimacy, but closeness also feels frightening or unsafe. This creates push-pull patterns and confusion in relationships.',
        inRelationships: 'You may oscillate between idealizing a partner and pushing them away, feel overwhelmed by emotional intensity, and find it hard to trust even those you love.',
        origin: 'Often associated with early experiences of fear within caregiving relationships — where the person who was supposed to provide safety was also a source of threat or unpredictability.',
        growth: 'This pattern is among the most workable with professional support. Therapy — especially somatic or relational approaches — can gradually help rewire the association between closeness and danger.',
    },
};

// 7 questions per style (28 total)
const questions = [
    // Secure
    { style: 'secure', text: 'I find it easy to be emotionally open with people I care about.' },
    { style: 'secure', text: 'I feel comfortable depending on others and having them depend on me.' },
    { style: 'secure', text: 'I don\'t worry much about being abandoned or not being loved.' },
    { style: 'secure', text: 'I can communicate my needs clearly without fearing rejection.' },
    { style: 'secure', text: 'Conflict in relationships doesn\'t feel catastrophic — I can work through it.' },
    { style: 'secure', text: 'I feel equally comfortable with intimacy and time alone.' },
    { style: 'secure', text: 'I generally trust that people close to me will be there when I need them.' },
    // Anxious
    { style: 'anxious', text: 'I often worry that people I care about don\'t love me as much as I love them.' },
    { style: 'anxious', text: 'I feel nervous or distressed when my partner or close friend doesn\'t respond quickly.' },
    { style: 'anxious', text: 'I need a lot of reassurance that I am loved and valued.' },
    { style: 'anxious', text: 'I sometimes feel that others pull away just when I want to get closer.' },
    { style: 'anxious', text: 'My mood in a relationship is strongly affected by the other person\'s mood.' },
    { style: 'anxious', text: 'The thought of being abandoned or rejected feels unbearable.' },
    { style: 'anxious', text: 'I become preoccupied with my relationships even when things seem fine.' },
    // Avoidant
    { style: 'avoidant', text: 'I prefer not to depend on others or have them depend on me too much.' },
    { style: 'avoidant', text: 'When people get too close emotionally, I feel uncomfortable and want distance.' },
    { style: 'avoidant', text: 'I find it easier to focus on work or projects than on emotional needs.' },
    { style: 'avoidant', text: 'I often feel more comfortable alone than in close relationships.' },
    { style: 'avoidant', text: 'When a partner wants more closeness, I feel a strong urge to pull away.' },
    { style: 'avoidant', text: 'I minimize how much my relationships affect my emotional state.' },
    { style: 'avoidant', text: 'I value self-sufficiency and independence above most things.' },
    // Fearful-Avoidant
    { style: 'disorganized', text: 'I want intimacy but feel fearful or overwhelmed when I get too close to someone.' },
    { style: 'disorganized', text: 'I find myself alternating between pushing people away and desperately wanting them close.' },
    { style: 'disorganized', text: 'I have difficulty trusting people, even those I deeply care for.' },
    { style: 'disorganized', text: 'Closeness in relationships can feel both comforting and threatening at the same time.' },
    { style: 'disorganized', text: 'I sometimes behave in ways that sabotage relationships I actually want.' },
    { style: 'disorganized', text: 'I find it very hard to predict how I\'ll feel in close relationships from moment to moment.' },
    { style: 'disorganized', text: 'Past experiences of being hurt by people I trusted make it hard to open up.' },
];

// ─── State ────────────────────────────────────────────────────────────────────

const state = {
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
};

// ─── DOM ──────────────────────────────────────────────────────────────────────

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

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
    dom.startButton.addEventListener('click', openQuiz);
    dom.backButton.addEventListener('click', previousQuestion);
    dom.nextButton.addEventListener('click', nextQuestion);
    dom.restartButton.addEventListener('click', restartQuiz);
    updateQuestion();
});

// ─── Quiz Flow ────────────────────────────────────────────────────────────────

function openQuiz() {
    dom.startScreen.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}

var styleLabels = {
    secure: 'SECURE',
    anxious: 'ANXIOUS',
    avoidant: 'AVOIDANT',
    disorganized: 'FEARFUL',
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
    dom.nextButton.textContent = state.currentIndex === questions.length - 1 ? 'See results →' : 'Next →';

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

// ─── Scoring ──────────────────────────────────────────────────────────────────

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

// ─── Result ───────────────────────────────────────────────────────────────────

function showResult() {
    dom.quiz.style.display = 'none';
    dom.result.style.display = 'block';

    var scores = computeScores();
    var top = topStyle(scores);
    var s = styles[top];

    // Update header bg to match style
    dom.resHeader.style.background = s.color;
    dom.headline.textContent = s.full;
    dom.description.textContent = s.tagline;

    // Score rows
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

    // Detail
    dom.detail.innerHTML =
        '<div class="detail-section"><div class="detail-label">Overview</div><div class="detail-content">' + s.description + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">In Relationships</div><div class="detail-content">' + s.inRelationships + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Developmental Roots</div><div class="detail-content">' + s.origin + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Path Forward</div><div class="detail-content">' + s.growth + '</div></div>';
}

function restartQuiz() {
    state.currentIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    dom.result.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}
