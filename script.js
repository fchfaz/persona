const traits = {
    O: { name: 'Openness', color: 'var(--O)' },
    C: { name: 'Conscientiousness', color: 'var(--C)' },
    E: { name: 'Extraversion', color: 'var(--E)' },
    A: { name: 'Agreeableness', color: 'var(--A)' },
    N: { name: 'Neuroticism', color: 'var(--N)' },
};

const questions = [
    // Openness
    { t: 'O', text: "I have a vivid imagination and love exploring abstract ideas.", r: false },
    { t: 'O', text: "I enjoy visiting art galleries, museums, or experiencing new forms of art.", r: false },
    { t: 'O', text: "I prefer routine over novelty — I'd rather stick with what I know works.", r: true },
    { t: 'O', text: "I am curious about many different things and love learning.", r: false },
    { t: 'O', text: "I find philosophical or theoretical discussions stimulating.", r: false },
    // Conscientiousness
    { t: 'C', text: "I always complete tasks thoroughly and on time.", r: false },
    { t: 'C', text: "I tend to leave things messy or disorganized.", r: true },
    { t: 'C', text: "I make plans and stick to them rather than improvising.", r: false },
    { t: 'C', text: "I am someone others can rely on to follow through.", r: false },
    { t: 'C', text: "I often act impulsively without thinking things through.", r: true },
    // Extraversion
    { t: 'E', text: "I feel energized and alive when I'm around a lot of people.", r: false },
    { t: 'E', text: "I tend to take charge and lead in social situations.", r: false },
    { t: 'E', text: "I prefer quiet evenings at home over going out to social events.", r: true },
    { t: 'E', text: "I am talkative and find it easy to start conversations.", r: false },
    { t: 'E', text: "I often feel lonely or understimulated when alone for too long.", r: false },
    // Agreeableness
    { t: 'A', text: "I genuinely care about other people's wellbeing and feelings.", r: false },
    { t: 'A', text: "I tend to be competitive and skeptical of others' motives.", r: true },
    { t: 'A', text: "I am willing to compromise my own interests to help others.", r: false },
    { t: 'A', text: "I am patient and forgiving, even when others make mistakes.", r: false },
    { t: 'A', text: "I tend to argue or disagree with people rather than cooperate.", r: true },
    // Neuroticism
    { t: 'N', text: "I worry a lot about things that could go wrong.", r: false },
    { t: 'N', text: "I stay calm and rarely get stressed out.", r: true },
    { t: 'N', text: "My mood can shift quickly depending on what happens around me.", r: false },
    { t: 'N', text: "I often feel anxious or tense without a clear reason.", r: false },
    { t: 'N', text: "I bounce back quickly from setbacks and difficult situations.", r: true },
];

const traitDescs = {
    O: {
        hi: "You are highly imaginative, curious, and open to new experiences. You love ideas, art, and novelty — likely drawn to creative pursuits and abstract thinking.",
        lo: "You are practical, conventional, and grounded. You prefer the familiar and concrete over the abstract, and find comfort in routine and tradition.",
        mid: "You balance curiosity with practicality — open to new ideas when they're useful, but not restless for novelty for its own sake.",
    },
    C: {
        hi: "You are organized, disciplined, and highly dependable. You set goals, make plans, and follow through — others trust you to deliver.",
        lo: "You are flexible, spontaneous, and free-spirited. You prefer to go with the flow rather than follow rigid schedules or rules.",
        mid: "You are moderately organized — capable of discipline when needed, but not rigid about structure.",
    },
    E: {
        hi: "You are sociable, assertive, and energized by people. You seek out social interactions and thrive in lively environments.",
        lo: "You are reserved, reflective, and energized by solitude. You prefer depth over breadth in your relationships, and recharge alone.",
        mid: "You are ambiverted — comfortable in social settings but equally at ease being alone. You adapt well to either.",
    },
    A: {
        hi: "You are warm, cooperative, and deeply empathetic. You value harmony and genuinely care about the people around you.",
        lo: "You are direct, competitive, and skeptical. You prioritize honesty and results over social harmony, and don't shy away from conflict.",
        mid: "You are selectively cooperative — kind to those close to you, but assertive when needed.",
    },
    N: {
        hi: "You experience emotions intensely and are sensitive to stress. You may worry often, but this sensitivity also makes you perceptive and empathetic.",
        lo: "You are emotionally stable and resilient. You handle stress calmly and don't dwell on negative emotions for long.",
        mid: "You have moderate emotional reactivity — you feel stress but manage it reasonably well.",
    },
};

function getHeadline(scores) {
    const O = scores.O, C = scores.C, E = scores.E, A = scores.A, N = scores.N;
    if (O > 70 && C > 70) return "A visionary who actually delivers";
    if (O > 70 && E > 70) return "A curious, energetic explorer of the world";
    if (C > 70 && A > 70) return "The dependable heart of every team";
    if (N > 70 && O > 70) return "A deeply feeling, creative soul";
    if (E > 70 && A > 70) return "A natural connector and people's champion";
    if (N < 30 && C > 60) return "Calm, disciplined, and hard to rattle";
    if (O < 40 && C > 60) return "A practical, grounded, reliable presence";
    if (E < 35 && O > 60) return "A quiet mind full of rich inner worlds";
    return "A uniquely balanced personality profile";
}

let cur = 0;
let answers = new Array(25).fill(null);

function startTest() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    render();
}

function render() {
    const q = questions[cur];
    const tr = traits[q.t];

    document.getElementById('q-counter').textContent = `${cur + 1} / 25`;
    document.getElementById('q-num').textContent = String(cur + 1).padStart(2, '0');
    document.getElementById('q-text').textContent = q.text;
    document.getElementById('trait-badge').textContent = tr.name.toUpperCase();
    document.getElementById('trait-badge').style.color = tr.color;
    document.getElementById('q-trait-tag').textContent = q.t;
    document.getElementById('q-trait-tag').style.color = tr.color;
    document.getElementById('progress-fill').style.width = (cur / 25 * 100) + '%';
    document.getElementById('progress-fill').style.background = tr.color;
    document.getElementById('btn-back').disabled = cur === 0;
    document.getElementById('btn-next').disabled = answers[cur] === null;
    document.getElementById('btn-next').textContent = cur === 24 ? 'SEE RESULTS →' : 'NEXT →';

    const btns = document.getElementById('likert-btns');
    btns.innerHTML = '';
    for (let v = 1; v <= 5; v++) {
        const b = document.createElement('button');
        b.className = 'likert-btn' + (answers[cur] === v ? ' selected' : '');
        b.textContent = v;
        if (answers[cur] === v) {
            b.style.background = tr.color;
            b.style.borderColor = tr.color;
        }
        b.onclick = () => pick(v);
        btns.appendChild(b);
    }
}

function pick(v) {
    answers[cur] = v;
    document.getElementById('btn-next').disabled = false;
    const tr = traits[questions[cur].t];
    document.querySelectorAll('.likert-btn').forEach((b, i) => {
        const val = i + 1;
        b.classList.toggle('selected', val === v);
        b.style.background = val === v ? tr.color : '';
        b.style.borderColor = val === v ? tr.color : '';
        b.style.color = val === v ? '#fff' : '';
    });
}

function nextQ() {
    if (answers[cur] === null) return;
    if (cur < 24) { cur++; render(); }
    else showResult();
}

function prevQ() {
    if (cur > 0) { cur--; render(); }
}

function computeScores() {
    const raw = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    const counts = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    questions.forEach((q, i) => {
        if (answers[i] === null) return;
        const v = q.r ? (6 - answers[i]) : answers[i];
        raw[q.t] += v;
        counts[q.t]++;
    });
    const pcts = {};
    Object.keys(raw).forEach(k => {
        const max = counts[k] * 5;
        pcts[k] = Math.round((raw[k] / max) * 100);
    });
    return pcts;
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    const scores = computeScores();

    document.getElementById('res-headline').textContent = getHeadline(scores);
    document.getElementById('res-desc').textContent =
        "Each trait is scored on a spectrum from 0–100. There are no good or bad scores — only an honest portrait of who you are.";

    const order = ['O', 'C', 'E', 'A', 'N'];
    const container = document.getElementById('trait-cards');
    container.innerHTML = '';

    order.forEach((k, idx) => {
        const pct = scores[k];
        const tr = traits[k];
        const level = pct >= 65 ? 'hi' : pct <= 35 ? 'lo' : 'mid';
        const desc = traitDescs[k][level];

        const card = document.createElement('div');
        card.className = 'trait-card';
        card.style.borderLeftColor = tr.color;
        card.innerHTML = `
      <div>
        <div class="trait-letter-big" style="color:${tr.color}">${k}</div>
      </div>
      <div>
        <div class="trait-name" style="color:${tr.color}">${tr.name}</div>
        <div class="trait-bar-track">
          <div class="trait-bar-fill" id="bar-${k}" style="width:0%;background:${tr.color}"></div>
        </div>
        <div class="trait-pct" style="color:${tr.color}">${pct}%</div>
        <div class="trait-desc">${desc}</div>
      </div>
    `;
        container.appendChild(card);

        setTimeout(() => {
            document.getElementById(`bar-${k}`).style.width = pct + '%';
        }, 100 + idx * 150);
    });
}

function restart() {
    cur = 0;
    answers = new Array(25).fill(null);
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    render();
}
