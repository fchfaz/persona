// ─── Dark Triad Data ──────────────────────────────────────────────────────────

const traits = {
    narc: {
        name: 'Narcissism',
        letter: 'N',
        color: 'var(--narc)',
        definition: 'Subclinical narcissism involves grandiosity, entitlement, dominance, and a strong need for admiration. Unlike pathological narcissism, it exists on a spectrum in the general population.',
        hi: 'Your score indicates elevated narcissistic traits — a strong sense of personal superiority, a desire for admiration, and a tendency to prioritize your own interests and status. In moderate doses, these traits can fuel ambition and confidence. At higher levels, they may strain relationships and reduce empathy.',
        mid: 'Your narcissistic traits are moderate — you have healthy self-confidence and a degree of self-focus, but this is balanced with genuine regard for others.',
        lo: 'Your narcissistic traits are low — you tend toward humility, are not particularly driven by status or admiration, and are comfortable sharing recognition.',
        interpersonal: 'High narcissism tends to manifest as an expectation of special treatment, sensitivity to criticism, and a tendency to dominate social situations.',
        research: 'Research links subclinical narcissism to leadership emergence, extraversion, and short-term social success, but also to lower long-term relationship satisfaction.',
    },
    mach: {
        name: 'Machiavellianism',
        letter: 'M',
        color: 'var(--mach)',
        definition: 'Named after Niccolò Machiavelli, this trait captures a strategic, manipulative orientation toward others — prioritizing self-interest, viewing relationships instrumentally, and being comfortable with deception when it serves a goal.',
        hi: 'Your score suggests elevated Machiavellian tendencies — a strategic, calculating orientation toward others, comfort with manipulation, and a tendency to view relationships through a lens of utility. You may be a skilled political operator, but others may sense being used rather than valued.',
        mid: 'Your Machiavellian tendencies are moderate — you can be strategic when needed but generally prefer honest interaction.',
        lo: 'Your Machiavellian traits are low — you tend to interact straightforwardly, dislike deception, and prioritize genuine over strategic connection.',
        interpersonal: 'High Machiavellianism is associated with a patient, cold-blooded approach to social maneuvering, often concealing true intentions behind a pleasant surface.',
        research: 'Machiavellianism correlates with workplace manipulation, political savvy, lower agreeableness, and in some contexts, career success in competitive environments.',
    },
    psych: {
        name: 'Psychopathy',
        letter: 'P',
        color: 'var(--psych)',
        definition: 'Subclinical psychopathy involves impulsivity, thrill-seeking, low empathy, and callousness. It is distinct from the clinical disorder and captures a general tendency toward sensation-seeking and reduced emotional reactivity.',
        hi: 'Your score reflects elevated psychopathic traits — a reduced sensitivity to others\' distress, comfort with risk and rule-breaking, and emotional detachment. These traits can produce fearlessness and decisiveness, but at significant interpersonal and ethical cost.',
        mid: 'Your psychopathic traits are moderate — you have some comfort with risk and emotional detachment, but this is tempered by genuine empathy and prosocial concern.',
        lo: 'Your psychopathic traits are low — you tend to be emotionally sensitive, risk-averse, and empathetically engaged with others.',
        interpersonal: 'High subclinical psychopathy often presents as charm combined with emotional coldness, rule-bending, and a lack of guilt or remorse.',
        research: 'Subclinical psychopathy correlates with risk tolerance, thrill-seeking, lower anxiety, and in certain professional contexts (e.g., surgery, law enforcement) — some functional advantages.',
    },
};

// 9 questions per trait (27 total)
const questions = [
    // Narcissism
    { trait: 'narc', text: 'I know I am special and deserve more recognition than I usually get.' },
    { trait: 'narc', text: 'I like to be the center of attention in a group.' },
    { trait: 'narc', text: 'I expect others to treat me according to my superior status.' },
    { trait: 'narc', text: 'I find it easy to manipulate others if it benefits me.' },
    { trait: 'narc', text: 'I am more capable than most people I know.' },
    { trait: 'narc', text: 'I insist on getting the respect that is due to me.' },
    { trait: 'narc', text: 'People often see me as a natural leader.' },
    { trait: 'narc', text: 'I tend to want others to admire me.' },
    { trait: 'narc', text: 'I get frustrated when others don\'t recognize my talents.' },
    // Machiavellianism
    { trait: 'mach', text: 'I tend to manipulate others to get what I want.' },
    { trait: 'mach', text: 'I have used deceit or lies to get my way.' },
    { trait: 'mach', text: 'Flattery is a useful tool for getting what you want.' },
    { trait: 'mach', text: 'I am willing to be dishonest if it helps me.' },
    { trait: 'mach', text: 'I like to know the weaknesses of others so I can use them.' },
    { trait: 'mach', text: 'I think that people should be used strategically to achieve your goals.' },
    { trait: 'mach', text: 'I avoid direct conflict but will undermine others when necessary.' },
    { trait: 'mach', text: 'I believe that the end justifies the means in most situations.' },
    { trait: 'mach', text: 'I know how to play social situations to my advantage.' },
    // Psychopathy
    { trait: 'psych', text: 'I rarely feel remorse when I hurt someone.' },
    { trait: 'psych', text: 'I tend to act impulsively without thinking about consequences.' },
    { trait: 'psych', text: 'I enjoy taking risks, even when there is a chance of getting into trouble.' },
    { trait: 'psych', text: 'I am not particularly bothered by other people\'s suffering.' },
    { trait: 'psych', text: 'I break rules regularly and don\'t feel guilty about it.' },
    { trait: 'psych', text: 'Staying calm in dangerous situations comes naturally to me.' },
    { trait: 'psych', text: 'I find it hard to empathize with others\' emotional pain.' },
    { trait: 'psych', text: 'I can be charming and disarming even when I don\'t care about the person.' },
    { trait: 'psych', text: 'I live for today and am not concerned with long-term consequences.' },
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
    headline: document.getElementById('res-headline'),
    description: document.getElementById('res-desc'),
    scores: document.getElementById('dark-scores'),
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

var badgeLabels = { narc: 'NARCISSISM', mach: 'MACHIAVELLIANISM', psych: 'PSYCHOPATHY' };

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

// ─── Scoring ──────────────────────────────────────────────────────────────────

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
    if (avg >= 65) return 'Your overall Dark Triad profile is elevated. These traits, in combination, signal a meaningful tendency toward self-serving, strategic, and emotionally detached behavior. This profile is associated with both certain functional advantages and significant interpersonal costs.';
    if (avg >= 40) return 'Your overall Dark Triad profile is moderate. You possess some of these tendencies without being defined by them — a common configuration in the general population.';
    return 'Your overall Dark Triad profile is low. You tend toward prosocial, empathetic, and straightforward interaction. This profile is associated with high agreeableness and emotional warmth.';
}

// ─── Result ───────────────────────────────────────────────────────────────────

function showResult() {
    dom.quiz.style.display = 'none';
    dom.result.style.display = 'block';

    var scores = computeScores();

    dom.headline.textContent = 'The Dark Triad';
    dom.description.textContent = overallInterpretation(scores);

    // Trait cards
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

    // Detail sections — definitions + research
    dom.detail.innerHTML =
        '<div class="detail-section"><div class="detail-label">What is Narcissism?</div><div class="detail-content">' + traits.narc.definition + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Narcissism · Interpersonal Pattern</div><div class="detail-content">' + traits.narc.interpersonal + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">What is Machiavellianism?</div><div class="detail-content">' + traits.mach.definition + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Machiavellianism · Interpersonal Pattern</div><div class="detail-content">' + traits.mach.interpersonal + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">What is Psychopathy?</div><div class="detail-content">' + traits.psych.definition + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Psychopathy · Interpersonal Pattern</div><div class="detail-content">' + traits.psych.interpersonal + '</div></div>' +
        '<div class="detail-section"><div class="detail-label">Important Disclaimer</div><div class="detail-content">These are subclinical traits that exist in every person to some degree. High scores on this assessment are not equivalent to a personality disorder diagnosis, and should not be interpreted as such. For clinical concerns, consult a licensed mental health professional.</div></div>';
}

function restartQuiz() {
    state.currentIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    dom.result.style.display = 'none';
    dom.quiz.style.display = 'block';
    updateQuestion();
}
