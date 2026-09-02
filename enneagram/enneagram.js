// ─── Enneagram Data ─────────────────────────────────────────────────────────

const types = {
    1: {
        name: 'The Reformer',
        tagline: 'Principled · Purposeful · Self-Controlled · Perfectionistic',
        color: 'var(--T1)',
        motivation: 'To be good, to have integrity, to live up to their highest standards.',
        fear: 'Being wrong, corrupt, evil, or defective.',
        desire: 'To be good, to have integrity, to be balanced.',
        growth: 'Ones at their best are accepting, flexible, and wise. They understand that the world is imperfect and still choose to improve it with patience and grace.',
        stress: 'Under stress, Ones may become moody, irrational, and act out in ways that conflict with their own values — mirroring the less healthy aspects of Type Four.',
        wing1: '9w1 — The Idealist',
        wing2: '1w2 — The Advocate',
        center: 'Instinctive',
    },
    2: {
        name: 'The Helper',
        tagline: 'Caring · Interpersonal · Generous · Possessive',
        color: 'var(--T2)',
        motivation: 'To be loved, to express feelings, to be needed by others.',
        fear: 'Being unloved, unwanted, or deemed unworthy of love.',
        desire: 'To feel loved unconditionally.',
        growth: 'Twos at their best are genuinely altruistic, emotionally mature, and nurturing without expecting reciprocity. They care for others from a place of abundance.',
        stress: 'Under stress, Twos may become aggressive, domineering, and controlling — mirroring the less healthy aspects of Type Eight.',
        center: 'Feeling',
    },
    3: {
        name: 'The Achiever',
        tagline: 'Adaptable · Excelling · Driven · Image-Conscious',
        color: 'var(--T3)',
        motivation: 'To feel valuable, to succeed, to be admired.',
        fear: 'Being worthless or without inherent value.',
        desire: 'To feel valuable and worthwhile.',
        growth: 'Threes at their best are authentic, charming, and inspiring. They achieve for the love of it, not for approval.',
        stress: 'Under stress, Threes may become disengaged, withdrawn, and apathetic — mirroring the less healthy aspects of Type Nine.',
        center: 'Feeling',
    },
    4: {
        name: 'The Individualist',
        tagline: 'Expressive · Dramatic · Self-Absorbed · Temperamental',
        color: 'var(--T4)',
        motivation: 'To express individuality, to create identity, to find significance.',
        fear: 'Having no identity or personal significance.',
        desire: 'To find themselves and their significance — to create an identity.',
        growth: 'Fours at their best are deeply creative, emotionally honest, and compassionate. They transform personal suffering into universal meaning.',
        stress: 'Under stress, Fours may become over-involved in others\' lives, clingy, and prone to martyrdom — mirroring the less healthy aspects of Type Two.',
        center: 'Feeling',
    },
    5: {
        name: 'The Investigator',
        tagline: 'Perceptive · Innovative · Secretive · Isolated',
        color: 'var(--T5)',
        motivation: 'To be capable, competent, and not be overwhelmed by the world.',
        fear: 'Being useless, helpless, or incapable.',
        desire: 'To be capable and competent.',
        growth: 'Fives at their best are visionary, open-hearted, and groundbreaking. They share their knowledge generously from a place of abundance.',
        stress: 'Under stress, Fives may become scattered, hyperactive, and seek stimulation compulsively — mirroring the less healthy aspects of Type Seven.',
        center: 'Thinking',
    },
    6: {
        name: 'The Loyalist',
        tagline: 'Committed · Security-Oriented · Engaging · Suspicious',
        color: 'var(--T6)',
        motivation: 'To have security, guidance, and support.',
        fear: 'Being without support, guidance, or security.',
        desire: 'To have security and support.',
        growth: 'Sixes at their best are self-reliant, courageous, and deeply trustworthy. They lead with both loyalty and independent thinking.',
        stress: 'Under stress, Sixes may become competitive, arrogant, and dismissive of others — mirroring the less healthy aspects of Type Three.',
        center: 'Thinking',
    },
    7: {
        name: 'The Enthusiast',
        tagline: 'Spontaneous · Versatile · Acquisitive · Scattered',
        color: 'var(--T7)',
        motivation: 'To be satisfied and content, to have their needs fulfilled.',
        fear: 'Being deprived or trapped in pain.',
        desire: 'To be happy and satisfied, to find fulfillment.',
        growth: 'Sevens at their best are joyful, grateful, and deeply present. They find abundance in the moment rather than chasing future experiences.',
        stress: 'Under stress, Sevens may become perfectionistic, critical, and harsh with themselves and others — mirroring the less healthy aspects of Type One.',
        center: 'Thinking',
    },
    8: {
        name: 'The Challenger',
        tagline: 'Self-Confident · Decisive · Willful · Confrontational',
        color: 'var(--T8)',
        motivation: 'To be self-reliant, to prove strength, and to resist weakness.',
        fear: 'Being harmed or controlled by others.',
        desire: 'To protect themselves and remain in control.',
        growth: 'Eights at their best are magnanimous, heroic, and deeply protective of those they love. They use their power in service of others.',
        stress: 'Under stress, Eights may become withdrawn, secretive, and emotionally isolated — mirroring the less healthy aspects of Type Five.',
        center: 'Instinctive',
    },
    9: {
        name: 'The Peacemaker',
        tagline: 'Receptive · Reassuring · Complacent · Resigned',
        color: 'var(--T9)',
        motivation: 'To have peace of mind, to create harmony, to resist disturbance.',
        fear: 'Loss of connection, fragmentation.',
        desire: 'To have inner stability and peace of mind.',
        growth: 'Nines at their best are deeply present, dynamic, and able to hold space for all perspectives without losing their own voice.',
        stress: 'Under stress, Nines may become anxious, worried, and prone to catastrophizing — mirroring the less healthy aspects of Type Six.',
        center: 'Instinctive',
    },
};

// 4 questions per type (36 total), scored 1–5
const questions = [
    // Type 1 — The Reformer
    { type: 1, text: 'I have a strong sense of right and wrong, and I feel compelled to act on it.' },
    { type: 1, text: 'I often notice what is imperfect or incorrect, even when others don\'t.' },
    { type: 1, text: 'I hold myself to very high standards and feel guilty when I fall short.' },
    { type: 1, text: 'I believe most problems could be fixed if people simply did what was right.' },
    // Type 2 — The Helper
    { type: 2, text: 'I find deep satisfaction in meeting others\' needs and being there for them.' },
    { type: 2, text: 'I often sense what others need before they say it out loud.' },
    { type: 2, text: 'I struggle to ask for help myself, but find it easy to give it.' },
    { type: 2, text: 'My relationships are central to my sense of who I am.' },
    // Type 3 — The Achiever
    { type: 3, text: 'I am highly motivated by success and being recognized for my accomplishments.' },
    { type: 3, text: 'I adapt easily to different audiences and know how to present myself well.' },
    { type: 3, text: 'I am very focused on how I am perceived by others.' },
    { type: 3, text: 'I often feel restless or dissatisfied unless I am making progress.' },
    // Type 4 — The Individualist
    { type: 4, text: 'I often feel different from others — like I belong to a world others don\'t quite see.' },
    { type: 4, text: 'I have a deep longing for what feels missing or just out of reach.' },
    { type: 4, text: 'I value authenticity and depth over social convention.' },
    { type: 4, text: 'I am drawn to melancholy, beauty, and intense emotional experiences.' },
    // Type 5 — The Investigator
    { type: 5, text: 'I prefer to observe and understand before engaging.' },
    { type: 5, text: 'I need a lot of time alone to recharge and think.' },
    { type: 5, text: 'I am more comfortable with ideas and systems than with emotions.' },
    { type: 5, text: 'I research and gather knowledge before committing to anything.' },
    // Type 6 — The Loyalist
    { type: 6, text: 'I frequently anticipate what could go wrong and plan accordingly.' },
    { type: 6, text: 'I value loyalty highly — in myself and in those around me.' },
    { type: 6, text: 'I often question whether I can trust my own judgment.' },
    { type: 6, text: 'I feel most secure when I have a reliable system or person I can count on.' },
    // Type 7 — The Enthusiast
    { type: 7, text: 'I am energized by new experiences, ideas, and possibilities.' },
    { type: 7, text: 'I move on quickly from things that feel limiting or painful.' },
    { type: 7, text: 'I tend to have many projects and interests going at once.' },
    { type: 7, text: 'I believe life should be filled with joy and meaningful experiences.' },
    // Type 8 — The Challenger
    { type: 8, text: 'I prefer to take charge and find it frustrating when I cannot.' },
    { type: 8, text: 'I am direct and confrontational — I would rather say it than hint at it.' },
    { type: 8, text: 'I have a strong sense of justice and will fight for those I protect.' },
    { type: 8, text: 'I feel most alive when engaged in a challenge or a meaningful fight.' },
    // Type 9 — The Peacemaker
    { type: 9, text: 'I go to great lengths to avoid conflict and maintain harmony.' },
    { type: 9, text: 'I sometimes lose track of my own priorities because I defer to others.' },
    { type: 9, text: 'I find it easy to see multiple sides of an issue without feeling strongly about any.' },
    { type: 9, text: 'I deeply desire peace — within myself and in my relationships.' },
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

// ─── Init ────────────────────────────────────────────────────────────────────

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
        span.textContent = i + ' · ' + types[i].name.replace('The ', '');
        dom.typeChips.appendChild(span);
    }
}

function buildCircle() {
    for (var i = 1; i <= 9; i++) {
        var cell = document.createElement('div');
        cell.className = 'enn-cell';
        cell.innerHTML =
            '<span class="enn-num" style="color:var(--T' + i + ')">' + i + '</span>' +
            '<span class="enn-name">' + types[i].name.replace('The ', '') + '</span>';
        dom.circle.appendChild(cell);
    }
}

// ─── Quiz Flow ───────────────────────────────────────────────────────────────

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
    dom.traitBadge.textContent = 'TYPE ' + q.type;
    dom.traitBadge.style.color = t.color;
    dom.traitTag.textContent = q.type;
    dom.traitTag.style.color = t.color;
    dom.progressFill.style.width = (state.currentIndex / questions.length * 100) + '%';
    dom.progressFill.style.background = t.color;
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

// ─── Scoring ─────────────────────────────────────────────────────────────────

function computeScores() {
    var totals = {};
    var counts = {};
    for (var i = 1; i <= 9; i++) {
        totals[i] = 0;
        counts[i] = 0;
    }
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

// ─── Result ──────────────────────────────────────────────────────────────────

function showResult() {
    dom.quiz.style.display = 'none';
    dom.result.style.display = 'block';

    var scores = computeScores();
    var top = topType(scores);
    var t = types[top];

    dom.resTypeBadge.textContent = 'Type ' + top;
    dom.resTypeBadge.style.color = t.color;
    dom.headline.textContent = t.name;
    dom.description.textContent = t.tagline;

    // Score bars — sorted descending
    var order = Object.keys(scores).map(Number).sort(function (a, b) {
        return scores[b] - scores[a];
    });

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

    // Detail card
    dom.detail.innerHTML =
        '<div class="detail-section">' +
        '  <div class="detail-label">Core Motivation</div>' +
        '  <div class="detail-content">' + t.motivation + '</div>' +
        '</div>' +
        '<div class="detail-section">' +
        '  <div class="detail-label">Basic Fear</div>' +
        '  <div class="detail-content">' + t.fear + '</div>' +
        '</div>' +
        '<div class="detail-section">' +
        '  <div class="detail-label">Basic Desire</div>' +
        '  <div class="detail-content">' + t.desire + '</div>' +
        '</div>' +
        '<div class="detail-section">' +
        '  <div class="detail-label">At Their Best</div>' +
        '  <div class="detail-content">' + t.growth + '</div>' +
        '</div>' +
        '<div class="detail-section">' +
        '  <div class="detail-label">Under Stress</div>' +
        '  <div class="detail-content">' + t.stress + '</div>' +
        '</div>' +
        '<div class="detail-section">' +
        '  <div class="detail-label">Center of Intelligence</div>' +
        '  <div class="detail-content">' + t.center + ' Center</div>' +
        '</div>';
}

function restartQuiz() {
    state.currentIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    dom.result.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}
