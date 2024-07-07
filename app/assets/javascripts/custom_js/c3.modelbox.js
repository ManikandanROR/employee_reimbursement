function ShowDialog(modal)
{
  document.getElementById('overlay').style.display = "block";
  document.getElementById('dialog').style.display = "block";
  document.getElementById("modal-backdrop").style.display = "block"
}

function HideDialog()
{
  document.getElementById('overlay').style.display = "none";
  document.getElementById('dialog').style.display = "none";
  document.getElementById("modal-backdrop").style.display = "none";
  $("body").removeClass("modal-open");
}

function create_modelbox(title,close_fn)
{
	if(document.getElementById("dialog"))
	{
		$("#dialog").remove()
		$("#overlay").remove()
		$("#modal-backdrop").remove()
	}
	var model_overlay = document.createElement("div");
	model_overlay.setAttribute("class","modal animated bounceIn");
	model_overlay.setAttribute("id","overlay");
	document.body.appendChild(model_overlay);

	var model_backdrop = document.createElement("div");
	model_backdrop.setAttribute("class","modal-backdrop in");
	model_backdrop.setAttribute("id","modal-backdrop");
	document.body.appendChild(model_backdrop);

	var modelbox = document.createElement("div");
	modelbox.setAttribute("class","modal-dialog");
	modelbox.setAttribute("id","dialog");
	model_overlay.appendChild(modelbox);

	var modelbox_content = document.createElement("div");
	modelbox_content.setAttribute("class","modal-content");
	modelbox_content.setAttribute("id","dialog");
	modelbox.appendChild(modelbox_content);

	var model_title_div = document.createElement("div");
	model_title_div.setAttribute("class","modal-header");
	modelbox_content.appendChild(model_title_div);

	var model_title = document.createElement("h4");
	model_title.setAttribute("class","modal-title");
	model_title.innerHTML = title;
	model_title_div.appendChild(model_title);

	var model_close = document.createElement("button");
	model_close.setAttribute("class","close");
	model_close.setAttribute("onclick",close_fn);
	model_close.innerHTML = "x";
	model_title_div.appendChild(model_close);
	
	var model_content = document.createElement("div");
	model_content.setAttribute("id","dialog_content");
	modelbox_content.appendChild(model_content);
}

function load_page(url,form_id,title,type,close_fn)
{
	create_modelbox(title,close_fn);
	document.getElementById("dialog_content").innerHTML = '<div align="center" style="padding:10px;color:#262b36"><i class="fa fa-spinner fa-spin" style="font-size:50px;" align="center"></i></div>';
	
	ShowDialog(true);

	if(form_id != "")
	{		
		var data = jQuery("#"+form_id).serialize();
	}
	else
	{
		var data = ""
	}
	
	jQuery.ajax({
		url: url,
		type: type,
		data: data,
		async: false,
		success: function(msg)
		{
			document.getElementById("dialog_content").innerHTML = msg;
      ShowDialog(true);
		}
	});
}

function ShowSecondDialog(modal)
{
  document.getElementById('second_overlay').style.display = "block";
  document.getElementById('second_dialog').style.display = "block";
  document.getElementById("second_modal-backdrop").style.display = "block"
}

function HideSecondDialog()
{
  document.getElementById('second_overlay').style.display = "none";
  document.getElementById('second_dialog').style.display = "none";
  document.getElementById("second_modal-backdrop").style.display = "none";
  $("body").removeClass("modal-open");
}

function create_second_modelbox(title,close_fn)
{
	if(document.getElementById("second_dialog"))
	{
		$("#second_dialog").remove()
		$("#second_overlay").remove()
		$("#second_modal-backdrop").remove()
	}
	var model_overlay = document.createElement("div");
	model_overlay.setAttribute("class","modal animated bounceIn");
	model_overlay.setAttribute("id","second_overlay");
	document.body.appendChild(model_overlay);

	var model_backdrop = document.createElement("div");
	model_backdrop.setAttribute("class","modal-backdrop in");
	model_backdrop.setAttribute("id","second_modal-backdrop");
	document.body.appendChild(model_backdrop);

	var modelbox = document.createElement("div");
	modelbox.setAttribute("class","modal-dialog");
	modelbox.setAttribute("id","second_dialog");
	model_overlay.appendChild(modelbox);

	var modelbox_content = document.createElement("div");
	modelbox_content.setAttribute("class","modal-content");
	modelbox_content.setAttribute("id","second_dialog");
	modelbox.appendChild(modelbox_content);

	var model_title_div = document.createElement("div");
	model_title_div.setAttribute("class","modal-header");
	modelbox_content.appendChild(model_title_div);

	var model_title = document.createElement("h4");
	model_title.setAttribute("class","modal-title");
	model_title.innerHTML = title;
	model_title_div.appendChild(model_title);

	var model_close = document.createElement("button");
	model_close.setAttribute("class","close");
	model_close.setAttribute("onclick",close_fn);
	model_close.innerHTML = "x";
	model_title_div.appendChild(model_close);	

	var model_content = document.createElement("div");
	model_content.setAttribute("id","second_dialog_content");
	modelbox_content.appendChild(model_content);
}

function load_second_page(url,form_id,title,type,close_fn)
{
	create_second_modelbox(title,close_fn);
	document.getElementById("second_dialog_content").innerHTML = '<div align="center" style="padding:10px;color:#262b36"><i class="fa fa-spinner fa-spin" style="font-size:50px;" align="center"></i></div>';
	
	ShowSecondDialog(true);
	if(form_id != "")
	{
		var data = jQuery("#"+form_id).serialize();
	}

	jQuery.ajax({
		url: url,
		type: type,
		data: data,
		success: function(msg)
		{
			document.getElementById("second_dialog_content").innerHTML = msg;
      ShowSecondDialog(true);
		}
	});
}

function ShowAlertDialog(modal)
{
  document.getElementById('alert_overlay').style.display = "block";
  document.getElementById('alert_dialog').style.display = "block";
  document.getElementById("alert_modal-backdrop").style.display = "block"
  document.getElementById("alert_close_button").focus()
}

function HideAlertDialog()
{
  document.getElementById('alert_overlay').style.display = "none";
  document.getElementById('alert_dialog').style.display = "none";
  // document.getElementById("view_product_load").style.display = "none"
  document.getElementById("alert_modal-backdrop").style.display = "none"
  document.getElementById("dialog_naf").style.display = "none";
  $("body").removeClass("modal-open");
}

function HideAlertDialogTokenize()
{	
  document.getElementById('alert_overlay').style.display = "none";
  document.getElementById('alert_dialog').style.display = "none";
  document.getElementById("alert_modal-backdrop").style.display = "none";  
  $("#search_new").select();
  $("#search_new").focus();
  $("body").removeClass("modal-open");
}

function create_alertbox(title,close_fn)
{
	if(document.getElementById("alert_dialog"))
	{
		$("#alert_dialog").remove()
		$("#alert_overlay").remove()
		$("#alert_modal-backdrop").remove()
	}
	var model_overlay = document.createElement("div");
	model_overlay.setAttribute("class","modal animated bounceIn");
	model_overlay.setAttribute("id","alert_overlay");
	document.body.appendChild(model_overlay);

	var model_backdrop = document.createElement("div");
	model_backdrop.setAttribute("class","modal-backdrop in");
	model_backdrop.setAttribute("id","alert_modal-backdrop");
	document.body.appendChild(model_backdrop);

	var modelbox = document.createElement("div");
	modelbox.setAttribute("class","modal-dialog");
	modelbox.setAttribute("id","alert_dialog");
	modelbox.setAttribute("style","width:35%");
	model_overlay.appendChild(modelbox);

	var modelbox_content = document.createElement("div");
	modelbox_content.setAttribute("class","modal-content");
	modelbox_content.setAttribute("id","alert_dialog");
	modelbox.appendChild(modelbox_content);

	var model_title_div = document.createElement("div");
	model_title_div.setAttribute("class","modal-header");
	modelbox_content.appendChild(model_title_div);

	var model_title = document.createElement("h4");
	model_title.setAttribute("class","modal-title");
	model_title.innerHTML = title;
	model_title_div.appendChild(model_title);

	var model_close = document.createElement("button");
	model_close.setAttribute("class","close");
	model_close.setAttribute("onclick",close_fn);
	model_close.innerHTML = "x";
	model_title_div.appendChild(model_close);

	var model_content = document.createElement("div");
	model_content.setAttribute("id","alert_dialog_content");
	modelbox_content.appendChild(model_content);
}

function show_alert(text,title,close_fn)
{
	create_alertbox(title,close_fn);
	document.getElementById("alert_dialog_content").innerHTML = '<div class="modal-body-geo"><div class="col-md-12 col-lg-12"><div class="panel"><div class="panel-heading1 new-theme-modelbox">'+text+'</div></div></div><div class="modal-footer"><button type="button" id="alert_close_button" class="btn btn-primary" onclick="'+close_fn+'">OK</button></div>';
	ShowAlertDialog(true);
}

function ShowThirdDialog(modal)
{
  document.getElementById('third_overlay').style.display = "block";
  document.getElementById('third_dialog').style.display = "block";
  document.getElementById("third_modal-backdrop").style.display = "block"
}

function HideThirdDialog()
{
  document.getElementById('third_overlay').style.display = "none";
  document.getElementById('third_dialog').style.display = "none";
  document.getElementById("third_modal-backdrop").style.display = "none";
  $("body").removeClass("modal-open");
}



function create_third_modelbox(title,width,close_fn)
{
	if(document.getElementById("third_dialog"))
	{
		$("#third_dialog").remove()
		$("#third_overlay").remove()
		$("#third_modal-backdrop").remove()
	}
	var model_overlay = document.createElement("div");
	model_overlay.setAttribute("class","modal animated bounceIn");
	model_overlay.setAttribute("id","third_overlay");
	document.body.appendChild(model_overlay);

	var model_backdrop = document.createElement("div");
	model_backdrop.setAttribute("class","modal-backdrop in");
	model_backdrop.setAttribute("id","third_modal-backdrop");
	document.body.appendChild(model_backdrop);

	var modelbox = document.createElement("div");
	modelbox.setAttribute("class","modal-dialog");
	modelbox.setAttribute("id","third_dialog");
	modelbox.setAttribute("style","width:"+width+"px");
	model_overlay.appendChild(modelbox);

	var modelbox_content = document.createElement("div");
	modelbox_content.setAttribute("class","modal-content");
	modelbox_content.setAttribute("id","third_dialog");
	modelbox.appendChild(modelbox_content);

	var model_title_div = document.createElement("div");
	model_title_div.setAttribute("class","modal-header");
	modelbox_content.appendChild(model_title_div);

	var model_title = document.createElement("h4");
	model_title.setAttribute("class","modal-title");
	model_title.innerHTML = title;
	model_title_div.appendChild(model_title);

	var model_close = document.createElement("button");
	model_close.setAttribute("class","close");
	model_close.setAttribute("onclick",close_fn);
	model_close.innerHTML = "x";
	model_title_div.appendChild(model_close);

	var model_content = document.createElement("div");
	model_content.setAttribute("id","third_dialog_content");
	modelbox_content.appendChild(model_content);
}

function load_third_page(url,form_id,title,type,width,close_fn)
{
	create_third_modelbox(title,width,close_fn);
	document.getElementById("third_dialog_content").innerHTML = '<div align="center" style="padding:10px;color:#262b36"><i class="fa fa-spinner fa-spin" style="font-size:50px;" align="center"></i></div>';
	
	ShowThirdDialog(true);

	if(form_id != "")
	{		
		var data = jQuery("#"+form_id).serialize();
	}
	else
	{
		var data = ""
	}
	
	jQuery.ajax({
		url: url,
		type: type,
		data: data,
		async: false,
		success: function(msg)
		{
			document.getElementById("third_dialog_content").innerHTML = msg;
      ShowThirdDialog(true);
		}
	});
}