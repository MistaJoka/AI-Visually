document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const footer = document.querySelector('.bottom');
  const inspector = document.querySelector('#inspector');
  const physical = footer?.querySelector('[data-lens="physical"]');
  if (!footer || !physical) return;

  const all = document.createElement('button');
  all.type = 'button';
  all.id = 'allLens';
  all.className = 'lens';
  all.textContent = '🗺️ ALL';
  all.setAttribute('aria-label', 'Show complete unfiltered atlas');
  all.setAttribute('aria-pressed', 'false');
  physical.before(all);

  const style = document.createElement('style');
  style.textContent = '.atlas-unfiltered .district.dim,.atlas-unfiltered .node.dim{opacity:1!important;filter:none!important}';
  document.head.appendChild(style);

  let forcingAll = false;
  let syncing = false;

  const syncInspector = () => {
    if (!root.classList.contains('atlas-unfiltered')) return;
    document.querySelectorAll('#insBody .fact').forEach(f => {
      if (f.querySelector('b')?.textContent.trim() === 'LENS') {
        const value = f.querySelector('span');
        if (value) value.textContent = 'ALL · UNFILTERED';
      }
    });
    if (document.querySelector('#insTitle')?.textContent.trim() === 'The Whole Lab') {
      const intro = document.querySelector('#insBody .eli5 p');
      if (intro) intro.textContent = 'Start with the complete system visible. Zoom for more detail, or apply a lens only when you want to isolate one part of the architecture.';
    }
  };

  const syncUi = () => {
    if (syncing || !root.classList.contains('atlas-unfiltered')) return;
    syncing = true;
    footer.querySelectorAll('.lens[data-lens]').forEach(b => {
      if (b.classList.contains('active')) b.classList.remove('active');
      if (b.getAttribute('aria-pressed') !== 'false') b.setAttribute('aria-pressed', 'false');
    });
    if (!all.classList.contains('active')) all.classList.add('active');
    if (all.getAttribute('aria-pressed') !== 'true') all.setAttribute('aria-pressed', 'true');
    syncInspector();
    syncing = false;
  };

  const leaveAll = () => {
    if (forcingAll) return;
    root.classList.remove('atlas-unfiltered');
    all.classList.remove('active');
    all.setAttribute('aria-pressed', 'false');
  };

  const activateAll = () => {
    forcingAll = true;
    physical.click();
    forcingAll = false;
    root.classList.add('atlas-unfiltered');
    syncUi();
  };

  all.addEventListener('click', activateAll);
  footer.querySelectorAll('.lens[data-lens]').forEach(b => b.addEventListener('click', leaveAll));

  document.addEventListener('click', e => {
    if (e.target.closest?.('[data-more]')) leaveAll();
  });

  document.querySelector('#homeBtn')?.addEventListener('click', () => {
    root.classList.add('atlas-unfiltered');
    syncUi();
  });
  document.querySelector('#searchBtn')?.addEventListener('click', activateAll);
  document.querySelector('#searchInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') activateAll();
  });

  const observer = new MutationObserver(() => {
    if (root.classList.contains('atlas-unfiltered')) requestAnimationFrame(syncUi);
  });
  observer.observe(footer, {subtree:true, attributes:true, attributeFilter:['class','aria-pressed']});
  if (inspector) observer.observe(inspector, {subtree:true, childList:true});

  activateAll();
});
