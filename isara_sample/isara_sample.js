$(function(){
  $('.faq-question').click(function(){
    var $target = $(this).next();
    $target.slideToggle();
    if($(this).hasClass('faq-open'))
    {
      $(this).find('.fa-chevron-down').css('display', 'block');
      $(this).find('.fa-chevron-up').css('display', 'none');
      $(this).removeClass('faq-open');
    }
    else
    {
      $(this).find('.fa-chevron-down').css('display', 'none');
      $(this).find('.fa-chevron-up').css('display', 'block');
      $(this).addClass('faq-open');
    }
  });
});
