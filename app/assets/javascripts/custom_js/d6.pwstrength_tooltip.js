var tooltip=function(){
	var id = 'tt';
	var top = 3;
	var left = 3;
	var maxw = 300;
	var speed = 100;
	var timer = 10;
	var endalpha = 95;
	var alpha = 0;
	var tt,t,c,b,h,l,r,s;
	var ie = document.all ? true : false;
	return{
		show:function(v,suriya,w,modal,direction,btn, top_px){
			if(tt == null){
				tt = document.createElement('div');
				tt.setAttribute('id',id);
				tt.setAttribute("class", "popover right")
				tt.setAttribute("data-id", suriya)

				t = document.createElement('div');
				t.setAttribute('id',id + 'top');

				c = document.createElement('div');
				c.setAttribute('id',id + 'cont');
				s = document.createElement('div');
				s.setAttribute('id',id + 'image');
				s.setAttribute('class','arrow');
				
				tt.appendChild(s);
				tt.appendChild(c);
				
				document.body.appendChild(tt);
				tt.style.opacity = 0;
				tt.style.filter = 'alpha(opacity=0)';
			}
			else
			{
				tt.setAttribute("data-id", suriya)
			}

			if(modal != undefined)
			{
				tt.setAttribute("style", "z-index:2800")
			}
			else
			{
				tt.setAttribute("style", "z-index: 400")
			}

			var u = $("#"+suriya).offset().top + ($("#"+suriya).outerHeight(true)/2)
			var l = $("#"+suriya).offset().left + $("#"+suriya).outerWidth();

			c.innerHTML = v;

			tt.style.width = w ? w + 'px' : 'auto';
			if(!w && ie){
				t.style.display = 'none';
				// b.style.display = 'none';
				tt.style.width = tt.offsetWidth;
				t.style.display = 'block';
				//b.style.display = 'block';
			}

			if(tt.offsetWidth > maxw){tt.style.width = maxw + 'px'}

			if (direction === "top")
			{
				tt.setAttribute("class", "popover top")
				var $target = btn == "1" ? $("#"+suriya) : $(".fixed-thead-body #"+suriya),
            targetHeight = $target[0].offsetHeight,
            targetWidth = $target[0].offsetWidth,
            wrapWidth = w,
            wrapHeight = $(c)[0].offsetHeight,
            left = $target.offset().left,
            top = $target.offset().top;  
        u = top - wrapHeight;
        l = left + ((targetWidth - wrapWidth) / 2);            
      }


      if (direction === "top_tool")
			{
				tt.setAttribute("class", "popover top")
				var $target = btn == "1" ? $("#"+suriya) : $(".fixed-thead-head #"+suriya),
            targetHeight = $target[0].offsetHeight,
            targetWidth = $target[0].offsetWidth,                        
            wrapWidth = w,
            wrapHeight = 10,
            left = $target.offset().left,
            top = $target.offset().top;
            u = top - wrapHeight - 35 ;
            u = btn == "1" ? u - top_px : u ;
            l = left + ((targetWidth - wrapWidth) / 2);
      }

      if (direction === "top_supp")
			{
				tt.setAttribute("class", "popover top")
				var $target = btn == "1" ? $("#"+suriya) : $(".fixed-thead-head #"+suriya),
            targetHeight = $target[0].offsetHeight,
            targetWidth = $target[0].offsetWidth,                        
            wrapWidth = w,
            wrapHeight = 10,
            left = $target.offset().left,
            top = $target.offset().top;
            u = top - wrapHeight - 25 ;
            u = btn == "1" ? u - top_px : u ;
            l = left + ((targetWidth - wrapWidth) / 2);
      }

      tt.style.top = u + 'px';			
			tt.style.left = l + 'px';
			tt.style.display = 'block';
			
      if (direction === "right" || direction === undefined)
			{
				tt.setAttribute("class", "popover right")
				tt.style.top = u - (tt.offsetHeight/2) + 'px'
      }

			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(1)},timer);			
		},
		pos:function(e){
			var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
			var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
			// tt.style.top = (u - h + 20) + 'px';
			tt.style.left = (l + left) + 'px';
		},
		fade:function(d){
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
				if(endalpha - a < speed && d == 1){
					i = endalpha - a;
				}else if(alpha < speed && d == -1){
					i = a;
				}
				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;
				tt.style.filter = 'alpha(opacity=' + alpha + ')';
			}else{
				clearInterval(tt.timer);
				if(d == -1){tt.style.display = 'none'}
			}
		},
		hide:function(){			
			if ($(tt).attr("data-id") != "tokenize_container_div" && $(tt).attr("data-id") != "select_sites")
			{
				clearInterval(tt.timer);
				tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
			}			
		},
		hidepop:function(element_id){			
			if (element_id == $(tt).attr("data-id"))
			{
				clearInterval(tt.timer);
				tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
			}			
		}
	};

}();
