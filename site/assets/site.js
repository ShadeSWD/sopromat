/* Данные каркаса страниц «Сопротивление материалов». Машинерия — assets/shell.js.
 * Универсальный подвал кластера (hub.js) и словарь терминов (gloss.js)
 * инжектируются nginx-ом на проде. */
'use strict';
(function () {
  const me = document.currentScript;
  buildSiteShell({
    root: (me && me.dataset.root) || './',
    page: (me && me.dataset.page) || '',
    brand: 'Сопротивление материалов',
    home: 'index',
    logo: `<span style="font-size:22px">🔩</span>`,
    nav: [
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
    ],
    footer: `<div>Учебный сайт по курсу
    «Сопротивление материалов» · расчёты в браузере</div>`,
  });
})();
