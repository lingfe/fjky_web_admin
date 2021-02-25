! function (i) {
    i.fn.step = function (e) {
        var t = this,
            n = {
                index: 0,
                time: 400,
                title: []
            },
            s = (e = i.extend({}, n, e)).title,
            d = s.length,
            u = e.time,
            p = t.width() / d;
        t.index = e.index;
        var a = function () {
            var e = "";
            s.length > 0 && (e += '<div class="ui-step-wrap"><div class="ui-step-bg"></div><div class="ui-step-progress"></div><ul class="ui-step">',
			i.each(s, function (i, dd) {
				e += '<li class="ui-step-item">'
						+'<div'
							+' url="'+dd.url+'"'
							+' id="'+dd.id+'"'
							+' class="ui-step-item-title">' + dd.title + '</div>'
						+'<div '
							+' id="'+dd.id+'"'
							+' class="ui-step-item-num">'
							+'<span>' + (i + 1) + "</span>"
						+"</div>"
					+"</li>";
				$(document).on('click', '#'+dd.id, function(e) {
					var n=$(this).prev().val();
					t.toStep(i)
					$(".view_"+dd.id).hide();
					var frame = document.getElementById('ifr');
						frame.src="http://www.baidu.com";
					alert(dd.title);
					return false;
				});
			}), e += "</ul></div>"), 
			
			t.append(e), 
			t.find(".ui-step").children(".ui-step-item").width(p), 
			t.toStep(t.index)
        };
        return t.toStep = function (e) {
            var n = t.find(".ui-step").children(".ui-step-item");
            t.index = e, t.find(".ui-step-progress").animate({
                width: p * (e + 1)
            }, u, function () {
                i.each(n, function (t) {
                    t > e ? i(this).removeClass("active") : i(this).addClass("active")
                })
            })
        }, t.getIndex = function () {
            return t.index
        }, t.nextStep = function () {
            t.index > d - 2 || (t.index++, t.toStep(t.index))
        }, t.prevStep = function () {
            t.index < 1 || (t.index--, t.toStep(t.index))
        }, a(), this
    }
}(jQuery);