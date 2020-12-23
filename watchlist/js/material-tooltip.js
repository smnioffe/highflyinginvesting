(function (settings) {
  document.addEventListener("DOMContentLoaded", onDomContentLoaded);

  function onDomContentLoaded () {
    var allTooltipElems = document.getElementsByClassName("md-tooltip");
    var allElemLen = allTooltipElems.length;
    for (var i = 0; i < allElemLen; i++) {
      var thisSource = allTooltipElems[i];
      var tooltipElem = document.createElement('div');
      tooltipElem.className = 'md-tooltip-content';
      tooltipElem.innerHTML = thisSource.dataset.mTooltip;
      thisSource.appendChild(tooltipElem);
    }
  }
})();