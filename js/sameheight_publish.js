function sameHeight(elemClass) {
  var heights = []; // Make a height array
  $(elemClass).each(function() {
    $(this).css('height','auto');
    var hti = parseInt($(this).css('height'));
    var ptop = parseInt($(this).css('padding-top'));
    var pbot = parseInt($(this).css('padding-bottom'));
    var ht = hti - ptop - pbot;
    heights.push(ht); // Copy height of each element to the array
  });
  heights.sort(function(a, b){return b - a}); // Sort the array high to low
  var minh = parseInt(heights[0], 10); // Target first (highest) number
  $(elemClass).css('height','').height(minh); // Apply height to each element
}
$(window).on('resize', function() {
  var tck = false;
  function resizeHt() {
    $('.samehtwrapper .sameht').each(function() {
      var mythis = $(this);
      $(this).removeClass('done');
      var eClass = '.' + $('.samehtwrapper .sameht').not('.samehtwrapper .sameht.done').attr('data-eclass');
      sameHeight(eClass);
      $.when(sameHeight).done(function() {
        mythis.addClass('done');
      });  
    });
  }
  if (tck !== false) {clearTimeout(tck)}
  tck = setTimeout(resizeHt, 400);  
});
$(window).on('load', function() {
  $('.samehtwrapper .sameht').each(function() {
    var mythis = $(this);
    $(this).removeClass('done');
    var eClass = '.' + $('.samehtwrapper .sameht').not('.samehtwrapper .sameht.done').attr('data-eclass');
    sameHeight(eClass);
    $.when(sameHeight).done(function() {
      mythis.addClass('done');
    });  
  });
});