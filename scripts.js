document.addEventListener('DOMContentLoaded', function () {
  const collectionItems = document.querySelectorAll('.collection-item');
  const popupModal = document.querySelector('.popup-modal');
  const iframe = document.getElementById('project-iframe');
  const overlay = document.querySelector('.overlay');

  collectionItems.forEach(item => {
    item.addEventListener('click', function () {
      const projectUrl = item.getAttribute('data-project-url');
      openModal(projectUrl);
    });
  });

  document.querySelector('.close-btn').addEventListener('click', closeModal);

  function openModal(projectUrl) {
    iframe.src = projectUrl;
    history.pushState({ page: projectUrl }, null, projectUrl);
    overlay.style.display = 'block';

    // Add 'active' class to apply transition
    setTimeout(() => {
      popupModal.classList.add('active');
    }, 10);
  }

  function closeModal() {
    history.pushState({ page: 'index.html' }, null, 'index.html');

    // Remove 'active' class to apply transition
    popupModal.classList.remove('active');
    
    // Delay hiding the modal to allow the transition
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }

  // Listen for browser back/forward buttons
  window.addEventListener('popstate', function (event) {
    const pageUrl = event.state.page || 'index.html';
    iframe.src = pageUrl;
  });
});
