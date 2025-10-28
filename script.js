// Basic interactivity and small enhancements

document.addEventListener('DOMContentLoaded', function(){
  // set copyright year
  document.getElementById('curYear').textContent = new Date().getFullYear();

  // copy email button
  const copyBtn = document.getElementById('copyEmailBtn');
  if(copyBtn){
    copyBtn.addEventListener('click', async () => {
      const email = 'aryamangesh_shinde@srmap.edu.in';
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'copied!';
        setTimeout(() => copyBtn.textContent = email, 1500);
      } catch(e) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // simple smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  navToggle && navToggle.addEventListener('click', ()=>{
    const navLinks = document.querySelector('.nav-links');
    if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
    else navLinks.style.display = 'flex';
  });

});
