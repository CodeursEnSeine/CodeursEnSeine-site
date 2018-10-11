(() => {
  const panelOpenedClass = 'is-open';
  const $openButtons = document.querySelectorAll('[data-panel-open]');
  const $closeButtons = document.querySelectorAll('[data-panel-close]');
  const $panels = document.querySelectorAll('.js-panel');

  // Init
  [].forEach.call($panels, $panel => {
    $panel.addEventListener('click', event => event.stopPropagation());
  });

  const onClickOutside = () => {
    closeAll();
  };

  const onKeyPress = (event) => {
    const isEscape = ("key" in event && (event.key === "Escape" || event.key === "Esc")) || event.keyCode === 27;

    if (isEscape) {
      closeAll();
    }
  };

  const openPanel = ($panel) => {
    $panel.classList.add(panelOpenedClass);

    setTimeout(() => {
      document.addEventListener('click', onClickOutside);
      document.addEventListener('keydown', onKeyPress);
    });
  };

  const closePanel = ($panel) => {
    $panel.classList.remove(panelOpenedClass);

    document.removeEventListener('click', onClickOutside);
    document.removeEventListener('keydown', onKeyPress);
  };

  const closeAll = () => {
    [].forEach.call($panels, $panel => {
      closePanel($panel);
    });
  };

  // Open (toggle) buttons
  [].forEach.call($openButtons, $button => {
    const panelId = $button.getAttribute('data-panel-open');

    $button.addEventListener('click', (event) => {
      const $panel = document.getElementById(panelId);

      if (!$panel) {
        return;
      }

      const isOpen = $panel.classList.contains(panelOpenedClass);

      event.preventDefault();
      closeAll();

      if (isOpen) {
        closePanel($panel);
      } else {
        openPanel($panel);
      }
    });
  });

  // Close buttons
  [].forEach.call($closeButtons, $button => {
    $button.addEventListener('click', (event) => {
      event.preventDefault();
      closeAll();
    });
  });

})();
