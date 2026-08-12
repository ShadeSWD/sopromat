/* Шапка/подвал сайта. Универсальный подвал кластера (hub.js) и словарь
 * терминов (gloss.js) инжектируются nginx-ом на проде. */
'use strict';
(function () {
  const root = document.currentScript.dataset.root || './';
  const page = document.currentScript.dataset.page || '';
  const nav = [
    { href: 'index', key: 'index', title: 'Обзор' },
    { href: 'theory', key: 'theory', title: 'Теория' },
    { href: 'rgr1', key: 'rgr1', title: 'РГР 1: сечения' },
    { href: 'sources', key: 'sources', title: 'Источники' },
  ];
  const header = document.createElement('header');
  header.className = 'site';
  header.innerHTML = `<div class="wrap">
    <a class="logo" href="${root}index"><span style="font-size:22px">🔩</span>
      <span>Сопротивление материалов</span></a>
    <nav class="top">${nav.map(n => `<a href="${root}${n.href}"${n.key === page ? ' class="on"' : ''}>${n.title}</a>`).join('')}</nav>
  </div>`;
  document.body.prepend(header);
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = `<div class="wrap"><div>Учебный сайт по курсу
    «Сопротивление материалов» · расчёты в браузере</div></div>`;
  document.body.appendChild(footer);
})();
