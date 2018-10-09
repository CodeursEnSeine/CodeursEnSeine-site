(() => {
  const openedClass = 'is-open';
  const $openButtons = document.querySelectorAll('[data-panel-open]');
  const $closeButtons = document.querySelectorAll('[data-panel-close]');
  const $panels = document.querySelectorAll('.js-panel');

  // Close all panels
  const closeAll = () => {
    [].forEach.call($panels, $panel => {
      $panel.classList.remove(openedClass);
    });
  };

  // Open
  [].forEach.call($openButtons, $button => {
    const panelId = $button.getAttribute('data-panel-open');

    $button.addEventListener('click', (event) => {
      const $panel = document.getElementById(panelId);

      if (!$panel) {
        return;
      }

      const isOpen = $panel.classList.contains(openedClass);

      event.preventDefault();
      closeAll();

      if (isOpen) {
        $panel.classList.remove(openedClass);
      } else {
        $panel.classList.add(openedClass);
      }
    });
  });

  // Close
  [].forEach.call($closeButtons, $button => {
    $button.addEventListener('click', (event) => {
      event.preventDefault();
      closeAll();
    });
  });

})();
