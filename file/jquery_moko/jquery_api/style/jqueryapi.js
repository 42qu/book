//当前显示的 menuitem。$(' ') 当中的空格字符不能少
var displayFunctionMenu = $(' ');

//定义全局的 jQuery 对象，用于加速 jQuery 的搜寻速度,因为 index.html 文件太大
var jMenuItem;
var jCategoryItem;
var jCurrentItem;
var jCurrentContent;

$(document).ready(function(){
	//文档加载完后，为 jMenuItem 和 jCategoryItem 赋值
	jMenuItem = $('body > .mainmenu > .menuitem');
	jCategoryItem = jMenuItem.next('.functionmenu').children('.categoryitem');
	var englishCheckbox = $('#english');

	//menuitem 单击事件
	jMenuItem.click(function(e){
		displayFunctionMenu.hide().prev('.menuitem').removeClass('selecteditem');
		displayFunctionMenu = $(e.target).addClass('selecteditem').next('.functionmenu').show();
		jCurrentItem = displayFunctionMenu.children(".category").children(".selecteditem");
		jCurrentContent = jCurrentItem.next('.content');

	});

	//categoryitem 单击事件
	jCategoryItem.click(function(e){
		$(e.target).next('.category').toggle();
	});

	//将 functionitem 单击事件的绑定推迟至 categoryitem 被单击之后，并且设置 content 圆角。推迟绑定事件是为是优化性能
	jCategoryItem.one('click',function(e){
		//functionitem 单击事件
		$(e.target).next('.category').children('.functionitem').click(function(o){

			// 已有显示项目
			if (jCurrentItem) {
				jCurrentItem.removeClass('selecteditem');
				jCurrentContent.hide();
			}
			jCurrentItem = $(o.target);
			jCurrentContent = jCurrentItem.next('.content');
			jCurrentItem.addClass('selecteditem');
			var scrollTop = $(window).scrollTop();
			jCurrentContent.css("top",scrollTop>77 ? scrollTop-71 : 0).show();
			toggleEnglish(jCurrentContent);

		}).one('click',function(o){
			//设置 content 圆角
			$(o.target).next('.content').corner();
		});
	});

	//English checkbox 事件
	englishCheckbox.click(function(){
		if (jCurrentContent) {
			toggleEnglish(jCurrentContent);
		}
	});

	function toggleEnglish(jItem) {
		var items = jItem;
		var hr = items.find('hr:first');
		if ( hr.length > 0 ) {
			if ( englishCheckbox.is(':checked') ) {
				if ( hr.is(':hidden') ) {
					items = items.find('*');
					items.slice(items.index(hr.get(0))).show();
				}
			} else {
				if ( hr.is(':visible') ) {
					items = items.find('*');
					items.slice(items.index(hr.get(0)),items.index(items.filter('h2:first').get(0))).hide();
				}
			}
		}
	}

	//Fold button 事件
	$('#fold').click(function(){
		displayFunctionMenu.children('.category').hide();
	});

	//Expand button 事件
	$('#expand').click(function(){
		//以触发 categoryitem 的单击事件来代替直接的 show category，以免错过由 categoryitem 引发的 functionitem 单击事件绑定
		displayFunctionMenu.children('.category:hidden').prev('.categoryitem').click();
		
	});

	//Fold all button 事件
	$('#foldall').click(function(){
		jCategoryItem.next('.category').hide();
	});

	//Expand all button 事件；首次单击的时候，会触发 categoryitem 的单击事件来代替直接的 show category，可以使 functionitem 单击事件能顺利绑定
	$('#expandall').one('click',function(e){
		jCategoryItem.click().next('.category').show();
		//Expand all button 单击事件
		$('#expandall').click(function(){
			jCategoryItem.next('.category').show();
		});
	});
});
