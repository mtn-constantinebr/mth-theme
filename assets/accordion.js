document.addEventListener("DOMContentLoaded", function(){

  const accordionBlocks = document.querySelectorAll('.js-accordion');

  if(accordionBlocks) {

    accordionBlocks.forEach(function(accordionItem) {
      let trigger = accordionItem.querySelector('.js-accordion__trigger');
      trigger.addEventListener('click', function(e) {
        e.preventDefault();

        if(accordionItem.classList.contains('_accordion-opened')) {
          window.closeAccordion(accordionItem);
        } else {
          window.openAccordion(accordionItem);
        }
      })
    });

  }

  window.openAccordion = function(item) {
    item.classList.add('_accordion-opened');
  };
  
  window.closeAccordion = function(item) {
    item.classList.remove('_accordion-opened');
  };
});