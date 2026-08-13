/* Шапка/подвал сайта. Универсальный подвал кластера (hub.js) и словарь
 * терминов (gloss.js) инжектируются nginx-ом на проде. */
'use strict';
(function () {
  const root = document.currentScript.dataset.root || './';
  const page = document.currentScript.dataset.page || '';
  const nav = [
    { h: 'index', k: 'index', t: 'Обзор' },
    { t: 'Теория', h: 'theory', drop: [
      { h: 'theory', k: 'theory', t: 'Оглавление курса' },
      { h: 't-tension', k: 'theory', t: '1. Растяжение и сжатие' },
      { h: 't-torsion', k: 'theory', t: '2. Кручение' },
      { h: 't-geometry', k: 'theory', t: '3. Геометрия сечений' },
      { h: 't-bending', k: 'theory', t: '4. Изгиб' },
      { h: 't-deflection', k: 'theory', t: '5. Перемещения при изгибе' },
      { h: 't-stability', k: 'theory', t: '6. Устойчивость стержней' },
    ] },
    { t: 'Задачи', h: 'rgr1', drop: [
      { h: 'rgr1', k: 'rgr1', t: 'Составное сечение' },
      { h: 'frame', k: 'frame', t: 'Рама: метод сил' },
    ] },
    { h: 'sources', k: 'sources', t: 'Источники' },
  ];
  const navLink = (it) =>
    `<a href="${root}${it.h}" class="${page === it.k ? 'on' : ''}">${it.t}</a>`;
  const navHtml = nav.map((g) => {
    if (!g.drop) return navLink(g);
    const on = g.drop.some((it) => page === it.k) ? 'on' : '';
    return `<span class="nav-drop"><a href="${root}${g.h}" class="${on}">${g.t} ▾</a>`
      + `<span class="drop">${g.drop.map(navLink).join('')}</span></span>`;
  }).join('');
  const header = document.createElement('header');
  header.className = 'site';
  header.innerHTML = `<div class="wrap">
    <a class="logo" href="${root}index"><span style="font-size:22px">🔩</span>
      <span>Сопротивление материалов</span></a>
    <nav class="top">${navHtml}</nav>
  </div>`;
  document.body.prepend(header);
  const onReady = (fn) => (document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn) : fn());
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = `<div class="wrap"><div>Учебный сайт по курсу
    «Сопротивление материалов» · расчёты в браузере</div></div>`;
  onReady(() => document.body.appendChild(footer));
})();
