document.addEventListener("DOMContentLoaded", function(){

  const tabs = document.querySelectorAll('.js-tab');
  const tabContents = document.querySelectorAll('.js-tab-content');

  if(tabs) {
    tabs.forEach(function(tabItem) {
      tabItem.addEventListener('click', function(e) {
        e.preventDefault();
        openTab(tabItem);
      })
    });
  }

  window.openTab = function(tab) {

    tabContents.forEach(function(tabContentItem) {
      if(tabContentItem.dataset.tab === tab.dataset.tab) {
        tabContentItem.classList.add('_tab-opened');
      } else {
        tabContentItem.classList.remove('_tab-opened');
      }
    });

    tabs.forEach(function(tabTrigger) {
      if(tabTrigger === tab) {
        tabTrigger.classList.add('_tab-active');
      } else {
        tabTrigger.classList.remove('_tab-active');
      }
    });
    
  }
});