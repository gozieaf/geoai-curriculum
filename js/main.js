'use strict';

function showYear(id, btn) {
  document.querySelectorAll('.year-section').forEach(function(s) {
    s.classList.remove('visible');
  });
  document.querySelectorAll('.tab').forEach(function(t) {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.getElementById(id).classList.add('visible');
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleCourse(card) {
  card.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  // Keyboard support for tabs
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab, i) {
    tab.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight') {
        var next = tabs[i + 1] || tabs[0];
        next.focus(); next.click();
      } else if (e.key === 'ArrowLeft') {
        var prev = tabs[i - 1] || tabs[tabs.length - 1];
        prev.focus(); prev.click();
      }
    });
  });

  // Keyboard support for course cards
  document.querySelectorAll('.course-card').forEach(function(card) {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCourse(card);
      }
    });
  });
});
