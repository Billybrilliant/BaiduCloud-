// 导入底部
$('#footer').load('../html/footer.html');
var tabimg1 = $('#tabimg1');
$('#tabnav a').on('mouseover',function (e) {
  e.preventDefault();
  $(this).tab('show');
  // tabimg1.removeAttr('src');
  // tabimg1.attr('src','../images/hot-activity-logo2.png');
})
// LIONE
var lione = $('#lione');
var lione_div1 = $('#lione_div1');
var lione_div2 = $('#lione_div2');
lione.on('mouseover', function () { 
  lione_div1.css('display', 'block');
  lione_div2.css('display', 'none');
  lione_div1.removeClass('out');
  lione_div1.addClass('in');
  lione_div2.removeClass('in');
  lione_div2.addClass('out');
});
lione.on('mouseout', function () { 
  lione_div1.css('display', 'none');
  lione_div2.css('display', 'block');
  lione_div1.removeClass('in');
  lione_div1.addClass('out');
  lione_div2.removeClass('out');
  lione_div2.addClass('in');
});
// LITWO
var litwo = $('#litwo');
var litwo_div1 = $('#litwo_div1');
var litwo_div2 = $('#litwo_div2');
litwo.on('mouseover', function () { 
  litwo_div1.css('display', 'block');
  litwo_div2.css('display', 'none');
  litwo_div1.removeClass('out');
  litwo_div1.addClass('in');
  litwo_div2.removeClass('in');
  litwo_div2.addClass('out');
});
litwo.on('mouseout', function () { 
  litwo_div1.css('display', 'none');
  litwo_div2.css('display', 'block');
  litwo_div1.removeClass('in');
  litwo_div1.addClass('out');
  litwo_div2.removeClass('out');
  litwo_div2.addClass('in');
});
// lithree
var lithree = $('#lithree');
var lithree_div1 = $('#lithree_div1');
var lithree_div2 = $('#lithree_div2');
lithree.on('mouseover', function () { 
  lithree_div1.css('display', 'block');
  lithree_div2.css('display', 'none');
  lithree_div1.removeClass('out');
  lithree_div1.addClass('in');
  lithree_div2.removeClass('in');
  lithree_div2.addClass('out');
});
lithree.on('mouseout', function () { 
  lithree_div1.css('display', 'none');
  lithree_div2.css('display', 'block');
  lithree_div1.removeClass('in');
  lithree_div1.addClass('out');
  lithree_div2.removeClass('out');
  lithree_div2.addClass('in');
});
// lifour
var lifour = $('#lifour');
var lifour_div1 = $('#lifour_div1');
var lifour_div2 = $('#lifour_div2');
lifour.on('mouseover', function () { 
  lifour_div1.css('display', 'block');
  lifour_div2.css('display', 'none');
  lifour_div1.removeClass('out');
  lifour_div1.addClass('in');
  lifour_div2.removeClass('in');
  lifour_div2.addClass('out');
});
lifour.on('mouseout', function () { 
  lifour_div1.css('display', 'none');
  lifour_div2.css('display', 'block');
  lifour_div1.removeClass('in');
  lifour_div1.addClass('out');
  lifour_div2.removeClass('out');
  lifour_div2.addClass('in');
});