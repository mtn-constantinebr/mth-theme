document.addEventListener("DOMContentLoaded", function(){

  const faqSearch = document.querySelector('.faq-search__input');

  if(faqSearch) {
    const faqItems = document.querySelectorAll('.faq-accordion');
    const faqCategories = document.querySelectorAll('.faq-tabs__item');
    const faqEmptySearch = document.querySelector('.faq-empty-search');

    faqSearch.addEventListener('input', function(e) {
      const searchValue = faqSearch.value.toLowerCase();


      if(searchValue) {
        faqItems.forEach(function(faqItem) {
          const faqQuestion = faqItem.querySelector('.faq-accordion__question');
          const faqAnswer = faqItem.querySelector('.faq-accordion__text');

          faqQuestion.innerHTML = clearHightLightText(faqQuestion.innerHTML);
          faqAnswer.innerHTML = clearHightLightText(faqAnswer.innerHTML);

          let foundInTitle = faqQuestion.innerText.toLowerCase().includes(searchValue);
          let foundInText = faqAnswer.innerText.toLowerCase().includes(searchValue);

          const regex = new RegExp(faqSearch.value, 'ig');

          if(foundInTitle) {
            faqQuestion.innerHTML = faqQuestion.innerHTML.replaceAll(regex, `<span class="hightlight">$&</span>`);
          }

          if(foundInText) {
            faqAnswer.innerHTML = faqAnswer.innerHTML.replaceAll(regex, `<span class="hightlight">$&</span>`);
          }

  
          if(foundInTitle || foundInText) {
            faqItem.style.display = 'block';

            if(faqAnswer.innerText.toLowerCase().includes(searchValue)) {
              window.openAccordion(faqItem);
            } else {
              window.closeAccordion(faqItem);
            }

          } else {
            faqItem.style.display = 'none';
          }
        });
      } else {
        faqItems.forEach(function(faqItem) {
          faqItem.style.display = 'block';
          window.closeAccordion(faqItem);
          const faqQuestion = faqItem.querySelector('.faq-accordion__question');
          const faqAnswer = faqItem.querySelector('.faq-accordion__text');
          
          faqQuestion.innerHTML = clearHightLightText(faqQuestion.innerHTML);
          faqAnswer.innerHTML = clearHightLightText(faqAnswer.innerHTML);
        });
      }
      
      updateCategoriesVisibility();
    });
      
    function updateCategoriesVisibility() {
      let firstVisibleTab = null;
      let changeOpenedTab = false;

      faqCategories.forEach(function(category) {
        const thisTab = category.dataset.tab;

        if(document.querySelectorAll(`.faq-accordion[data-tab="${thisTab}"]:not([style*="display: none"])`).length) {
          category.style.display = 'block';
          if(!firstVisibleTab) firstVisibleTab = category;
        } else {
          category.style.display = 'none';
          if(category.classList.contains('_tab-active')) changeOpenedTab = true;
        }
      });
      
      if(changeOpenedTab && firstVisibleTab) {
        window.openTab(firstVisibleTab);
      }

      if(!firstVisibleTab) {
        faqEmptySearch.classList.add('_visible');
      } else {
        faqEmptySearch.classList.remove('_visible');
      }
    }
  }
  

  function clearHightLightText(text) {
    return text.replace(/(<([^>]+)>)/gi, '');
  }
});