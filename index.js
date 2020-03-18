'use strict';
$(function clickCat() {


  $('.thumbnail').on('click', e => {
    const alt = $(e.currentTarget).find('img').attr('alt');
    const src = $(e.currentTarget).find('img').attr('src');
    
  $('.hero img').attr('alt', alt).attr('src', src);
  });
});

$(clickCat);