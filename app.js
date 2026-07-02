// header shadow on scroll
  const header = document.getElementById('top');
  addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 8), {passive:true});

  // mobile drawer
  const drawer = document.getElementById('drawer'), scrim = document.getElementById('scrim');
  const openD = () => { drawer.classList.add('open'); scrim.classList.add('open'); drawer.setAttribute('aria-hidden','false'); };
  const closeD = () => { drawer.classList.remove('open'); scrim.classList.remove('open'); drawer.setAttribute('aria-hidden','true'); };
  document.getElementById('burger').addEventListener('click', openD);
  document.getElementById('drawerClose').addEventListener('click', closeD);
  scrim.addEventListener('click', closeD);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeD));

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
