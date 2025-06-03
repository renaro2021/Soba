(function initializesidebarcommentModule() {
  if (!document.readyState || document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializedomObserver);
  } else {
    initializedomObserver();
  }

  function initializedomObserver() {
    const domchangeObserver = new MutationObserver(handlepanelSwap);
    domchangeObserver.observe(document.body, { childList: true, subtree: true });
    handlepanelSwap();
  }

  function handlepanelSwap() {
    const commentssection = document.getElementById('comments');
    const suggestedvideos = document.getElementById('related');
    const primarycontentArea = document.querySelector('#primary-inner > #below');
    const sidebarcontentArea = document.getElementById('secondary-inner');

    if (!commentssection || !suggestedvideos || !primarycontentArea || !sidebarcontentArea) {
      setTimeout(handlepanelSwap, 420);
      return;
    }

    if (!primarycontentArea.contains(commentssection) || !sidebarcontentArea.contains(suggestedvideos)) return;

    primarycontentArea.replaceChild(suggestedvideos, commentssection);
    sidebarcontentArea.appendChild(commentssection);
  }
})();
