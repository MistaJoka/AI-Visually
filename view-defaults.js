document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.bottom');
  const physical = footer?.querySelector('[data-lens="physical"]');
  if (!footer || !physical) return;

  const all = document.createElement('button');
  all.type = 'button';
  all.id = 'allLens';
  all.className = 'lens';
  all.textContent = '🗺️ ALL';
  physical.before(all);

  const style = document.createElement('style');
  style.textContent = '.atlas-unfiltered .district.dim,.atlas-unfiltered .node.dim{opacity:1!important}';
  document.head.appendChild(style);

  const setAllUi = () => {
    document.documentElement.classList.add('atlas-unfiltered');
    footer.querySelectorAll('.lens').forEach(b => b.classList.remove('active'));
    all.classList.add('active');
    document.querySelectorAll('#insBody .fact').forEach(f => {
      if (f.querySelector('b')?.textContent.trim() === 'LENS') f.querySelector('span').textContent = 'ALL · UNFILTERED';
    });
  };

  const activateAll = () => {
    physical.click();
    setAllUi();
  };

  all.addEventListener('click', activateAll);
  footer.querySelectorAll('[data-lens]').forEach(b => b.addEventListener('click', () => {
    if (b !== physical || !document.documentElement.classList.contains('atlas-unfiltered')) {
      document.documentElement.classList.remove('atlas-unfiltered');
    }
  }));
  document.querySelector('#homeBtn')?.addEventListener('click', setAllUi);
  document.querySelector('#searchBtn')?.addEventListener('click', setAllUi);
  document.querySelector('#searchInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') setAllUi(); });

  activateAll();
});
