(function() {
    'use strict';

    /* ------------------------- *\
        Truncate text
    \* ------------------------- */
    var HIDE_MENU_CLASS = 'as--hidden';
    var MOBILE_MENU_CLASS = 'mobile-menu';
    var TOGGLE_MENU_BUTTON_ID = 'toggle-menu-button';
    var MENU_CLOSE_BUTTON_ID = 'menu-close-button';
    var truncateTextElements;
    var maxHeightDefault = 200;

    function initTruncateText() {
      truncateTextElements = document.getElementsByClassName('js-truncate-text');

      for (var i = 0; i < truncateTextElements.length; i++) {
        var element = truncateTextElements[i],
            maxHeight = parseInt(element.dataset.maxHeight, 10) || maxHeightDefault;

        if (element.clientHeight > maxHeight + 20) {
          element.classList.add('truncate-text');
          element.style.maxHeight = maxHeight + 'px';
          element.innerHTML = '<button class="truncate-text-toggle">Lire la suite</button>' + element.innerHTML;
        }

        element.addEventListener('click', showTruncateText, false);
      }
    }

    function showTruncateText() {
      this.classList.add('open');
      this.style.removeProperty('max-height');
      this.removeEventListener('click', showTruncateText, false);
    }

    function hideMobileMenu() {
      var mobileMenu = document.getElementById(MOBILE_MENU_CLASS);
      if (!mobileMenu.classList.contains(HIDE_MENU_CLASS)) {
        mobileMenu.classList.add(HIDE_MENU_CLASS);
      }
    }

    function toggleMobileMenu() {
      var mobileMenu = document.getElementById(MOBILE_MENU_CLASS);
      if (mobileMenu.classList.contains(HIDE_MENU_CLASS)) {
        mobileMenu.classList.remove(HIDE_MENU_CLASS);
      } else {
        mobileMenu.classList.add(HIDE_MENU_CLASS);
      }
    }

    /* ------------------------- *\
        Init when DOM ready
    \* ------------------------- */
    document.addEventListener("DOMContentLoaded", function() {
      initTruncateText();
    });

    /* ------------------------- *\
        Add event to display/hidden mobile menu
    \* ------------------------- */
    var menuButton = document.getElementById(TOGGLE_MENU_BUTTON_ID);
    var closeMenuButton = document.getElementById(MENU_CLOSE_BUTTON_ID);

    if (menuButton) {
      menuButton.addEventListener('click', toggleMobileMenu);
    }

    if (closeMenuButton) {
      closeMenuButton.addEventListener('click', hideMobileMenu);
    }

    /* ------------------------- *\
        Public
    \* ------------------------- */
    return {};
})();
