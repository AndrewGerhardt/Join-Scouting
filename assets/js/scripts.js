// Wait for DOM
window.addEventListener('DOMContentLoaded', () => {
  // Inject Header
  fetch('includes/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('site-header').innerHTML = html;
      initNav();
    })
    .catch(err => console.error('Header load error:', err));

  // Inject Footer
  fetch('includes/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('site-footer').innerHTML = html;
    })
    .catch(err => console.error('Footer load error:', err));

  // Initialize chat button (after DOM)
  document.body.addEventListener('click', e => {
    if (e.target.closest('.chat-button')) {
      alert('Chat support clicked – implement your chat UI here');
    }
  });
});

// After header is loaded
function initNav() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-links ul');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }
}
