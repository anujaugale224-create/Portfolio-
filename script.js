  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cursor.style.left=(mx-8)+'px';
    cursor.style.top=(my-8)+'px';
  });
  function animRing(){ rx+=(mx-rx-20)*.12; ry+=(my-ry-20)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(animRing); }
  animRing();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  revealEls.forEach(el => io.observe(el));

  // Day card accordion
  function toggleDay(card) {
    const isOpen = card.classList.contains('open');
    document.querySelectorAll('.day-card.open').forEach(c => c.classList.remove('open'));
    if (!isOpen) card.classList.add('open');
  }

  // Offset nav for FabLab banner height
  window.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.fablab-banner');
    const nav = document.querySelector('nav');
    if (banner && nav) {
      const bannerH = banner.offsetHeight;
      nav.style.top = bannerH + 'px';
      document.querySelector('.hero').style.paddingTop = (bannerH + 80) + 'px';
    }
  });