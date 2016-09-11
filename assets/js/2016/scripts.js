(function() {
    'use strict';

    /* ------------------------- *\
        Truncate text
    \* ------------------------- */
    var truncateTextElements;

    function initTruncateText() {
      truncateTextElements = document.getElementsByClassName('js-truncate-text');

      for (var i = 0; i < truncateTextElements.length; i++) {
        var element = truncateTextElements[i];

        if (element.clientHeight > 120) {
          element.classList.add('truncate-text');
          element.innerHTML = '<button class="truncate-text-toggle">Show more</button>' + element.innerHTML;
        }

        element.addEventListener('click', showTruncateText, false);
      }
    }

    function showTruncateText() {
      this.classList.add('open');
      this.removeEventListener('click', showTruncateText, false);
    }


    /* ------------------------- *\
        Init when DOM ready
    \* ------------------------- */
    document.addEventListener("DOMContentLoaded", function() {
      initTruncateText();
    });

    /* ------------------------- *\
        Public
    \* ------------------------- */
    return {};
})();
