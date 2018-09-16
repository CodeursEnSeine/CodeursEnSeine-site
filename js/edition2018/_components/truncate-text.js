(() => {
  /* ------------------------- *\
      Truncate text
  \* ------------------------- */
  let truncateTextElements;
  const maxHeightDefault = 200;

  function initTruncateText() {
    truncateTextElements = document.getElementsByClassName('js-truncate-text');

    for (let i = 0; i < truncateTextElements.length; i++) {
      const element = truncateTextElements[i],
        maxHeight = parseInt(element.dataset.maxHeight, 10) || maxHeightDefault;

      if (element.clientHeight > maxHeight + 20) {
        element.classList.add('ces-c-truncate-text');
        element.style.maxHeight = maxHeight + 'px';
        element.innerHTML = '<button class="ces-c-truncate-text__toggle">Lire la suite</button>' + element.innerHTML;
      }

      element.addEventListener('click', showTruncateText, false);
    }
  }

  function showTruncateText() {
    this.classList.add('is-open');
    this.style.removeProperty('max-height');
    this.removeEventListener('click', showTruncateText, false);
  }

  /* ------------------------- *\
      Init when DOM ready
  \* ------------------------- */
  document.addEventListener("DOMContentLoaded", function() {
    initTruncateText();
  });
})();
