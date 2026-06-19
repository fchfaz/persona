const traitData = {
    O: { name: 'Openness', color: 'var(--O)' },
    C: { name: 'Conscientiousness', color: 'var(--C)' },
    E: { name: 'Extraversion', color: 'var(--E)' },
    A: { name: 'Agreeableness', color: 'var(--A)' },
    N: { name: 'Neuroticism', color: 'var(--N)' },
};

const questions = [
    { trait: 'O', text: 'I have a vivid imagination and love exploring abstract ideas.', reverse: false },
    { trait: 'O', text: 'I enjoy visiting art galleries, museums, or experiencing new forms of art.', reverse: false },
    { trait: 'O', text: 'I prefer routine over novelty — I would rather stick with what I know works.', reverse: true },
    { trait: 'O', text: 'I am curious about many different things and love learning.', reverse: false },
    { trait: 'O', text: 'I find philosophical or theoretical discussions stimulating.', reverse: false },
    { trait: 'C', text: 'I always complete tasks thoroughly and on time.', reverse: false },
    { trait: 'C', text: 'I tend to leave things messy or disorganized.', reverse: true },
    { trait: 'C', text: 'I make plans and stick to them rather than improvising.', reverse: false },
    { trait: 'C', text: 'I am someone others can rely on to follow through.', reverse: false },
    { trait: 'C', text: 'I often act impulsively without thinking things through.', reverse: true },
    { trait: 'E', text: 'I feel energized and alive when I am around a lot of people.', reverse: false },
    { trait: 'E', text: 'I tend to take charge and lead in social situations.', reverse: false },
    { trait: 'E', text: 'I prefer quiet evenings at home over going out to social events.', reverse: true },
    { trait: 'E', text: 'I am talkative and find it easy to start conversations.', reverse: false },
    { trait: 'E', text: 'I often feel lonely or understimulated when alone for too long.', reverse: false },
    { trait: 'A', text: 'I genuinely care about other people’s wellbeing and feelings.', reverse: false },
    { trait: 'A', text: 'I tend to be competitive and skeptical of others’ motives.', reverse: true },
    { trait: 'A', text: 'I am willing to compromise my own interests to help others.', reverse: false },
    { trait: 'A', text: 'I am patient and forgiving, even when others make mistakes.', reverse: false },
    { trait: 'A', text: 'I tend to argue or disagree with people rather than cooperate.', reverse: true },
    { trait: 'N', text: 'I worry a lot about things that could go wrong.', reverse: false },
    { trait: 'N', text: 'I stay calm and rarely get stressed out.', reverse: true },
    { trait: 'N', text: 'My mood can shift quickly depending on what happens around me.', reverse: false },
    { trait: 'N', text: 'I often feel anxious or tense without a clear reason.', reverse: false },
    { trait: 'N', text: 'I bounce back quickly from setbacks and difficult situations.', reverse: true },
];

const traitDescriptions = {
    O: {
        hi: 'You are highly imaginative, curious, and open to new experiences. You love ideas, art, and novelty — likely drawn to creative pursuits and abstract thinking.',
        lo: 'You are practical, conventional, and grounded. You prefer the familiar and concrete over the abstract, and find comfort in routine and tradition.',
        mid: 'You balance curiosity with practicality — open to new ideas when they are useful, but not restless for novelty for its own sake.',
    },
    C: {
        hi: 'You are organized, disciplined, and highly dependable. You set goals, make plans, and follow through — others trust you to deliver.',
        lo: 'You are flexible, spontaneous, and free-spirited. You prefer to go with the flow rather than follow rigid schedules or rules.',
        mid: 'You are moderately organized — capable of discipline when needed, but not rigid about structure.',
    },
    E: {
        hi: 'You are sociable, assertive, and energized by people. You seek out social interactions and thrive in lively environments.',
        lo: 'You are reserved, reflective, and energized by solitude. You prefer depth over breadth in your relationships, and recharge alone.',
        mid: 'You are ambiverted — comfortable in social settings but equally at ease being alone. You adapt well to either.',
    },
    A: {
        hi: 'You are warm, cooperative, and deeply empathetic. You value harmony and genuinely care about the people around you.',
        lo: 'You are direct, competitive, and skeptical. You prioritize honesty and results over social harmony, and do not shy away from conflict.',
        mid: 'You are selectively cooperative — kind to those close to you, but assertive when needed.',
    },
    N: {
        hi: 'You experience emotions intensely and are sensitive to stress. You may worry often, but this sensitivity also makes you perceptive and empathetic.',
        lo: 'You are emotionally stable and resilient. You handle stress calmly and do not dwell on negative emotions for long.',
        mid: 'You have moderate emotional reactivity — you feel stress but manage it reasonably well.',
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
    const question = questions[state.currentIndex];
    const trait = traitData[question.trait];
    const answeredValue = state.answers[state.currentIndex];

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
    dom.nextButton.textContent = state.currentIndex === questions.length - 1 ? 'See results →' : 'Next →';

    dom.likertButtons.innerHTML = '';
    for (var score = 1; score <= 5; score += 1) {
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
    if (state.answers[state.currentIndex] === null) {
        return;
    }
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
        if (answer === null) {
            return;
        }
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

function showResult() {
    dom.quiz.style.display = 'none';
    dom.result.style.display = 'block';
    var scores = computeScores();

    dom.headline.textContent = getHeadline(scores);
    dom.description.textContent = 'Each trait is scored on a spectrum from 0–100. There are no good or bad scores — only an honest portrait of who you are.';

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
            if (bar) {
                bar.style.width = score + '%';
            }
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
