// index.js — hover accent color sync
document.querySelectorAll('.test-card').forEach(function(card) {
    var tag = card.querySelector('.test-tag');
    if (tag) {
        card.style.setProperty('currentColor', tag.style.color);
    }
});
