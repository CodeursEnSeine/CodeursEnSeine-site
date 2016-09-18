(function() {
    'use strict';

    /* ------------------------- *\
        Truncate text
    \* ------------------------- */
    var truncateTextElements;

    function initTruncateText() {
      truncateTextElements = document.getElementsByClassName('js-truncate-text');

      for (var i = 0; i < truncateTextElements.length; i++) {
        var element = truncateTextElements[i],
            maxHeight = parseInt(element.dataset.maxHeight, 10) || 100;

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
