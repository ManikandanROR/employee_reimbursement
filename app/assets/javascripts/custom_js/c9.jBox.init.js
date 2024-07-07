var jBoxAlert = new jBox('Modal', {
  preventDefault: true,
  closeButton: 'title',
  blockScroll: true,
  animation: 'tada',
  draggable: false,
  reposition: false,
  repositionOnOpen: false,
  responsiveWidth: true,
  responsiveHeight: true,
  responsiveMinWidth: true,
  responsiveMinHeight: true,
  closeOnClick: false,
  overlay: true,
  width: '20%',
  height: '10%',
  footer: '<button type="button" class="btn btn-primary" onclick="jBoxAlert.close();">OK</button>',
  isolateScroll: true,
  position: {x: 'center', y: 'top'}
});

var jBoxFirstModal = new jBox('Modal', {
  // attach: '#'+modal_id,
  preventDefault: true,
  closeButton: 'title',
  blockScroll: true,
  animation: 'pulse',
  draggable: false,
  reposition: false,
  repositionOnOpen: false,
  responsiveWidth: true,
  responsiveHeight: true,
  responsiveMinWidth: 450,
  responsiveMinHeight: 100,
  closeOnClick: false,
  // onInit: function() { this.open(); },
  footer: '<button type="button" class="btn btn-primary" id="submit_button">Submit</button> <button type="button" class="btn btn-primary waves-effect waves-light m-r-10" onclick="jBoxFirstModal.close();">Close</button>',
  isolateScroll: true,
});

var jBoxSecondModal = new jBox('Modal', {
  // attach: '#'+modal_id,
  preventDefault: true,
  closeButton: 'title',
  blockScroll: true,
  animation: 'pulse',
  draggable: false,
  reposition: false,
  repositionOnOpen: false,
  responsiveWidth: true,
  responsiveHeight: true,
  // responsiveMinWidth: 400,
  // responsiveMinHeight: 400,
  closeOnClick: false,
  // width: 400,
  // onInit: function() { this.open(); },
  footer: '<button type="button" class="btn btn-primary" id="submit_button">Submit</button> <button type="button" class="btn btn-primary waves-effect waves-light m-r-10" onclick="jBoxFirstModal.close();">Close</button>',
  isolateScroll: true,
});

var jBoxConfirmAlert = new jBox('Modal', {
  preventDefault: true,
  closeButton: 'title',
  blockScroll: true,
  animation: 'tada',
  draggable: false,
  reposition: false,
  repositionOnOpen: false,
  responsiveWidth: true,
  responsiveHeight: true,
  responsiveMinWidth: true,
  responsiveMinHeight: true,
  closeOnClick: false,
  overlay: true,
  width: '30%',
  height: '10%',
  
  footer: '<button type="button" id="jbox_confirm" class="btn btn-primary confirm" >OK</button>&nbsp;&nbsp;&nbsp;<button type="button" id="jbox_cancel" class="btn btn-primary waves-effect waves-light m-r-10 jb_cancel" onclick="jBoxConfirmAlert.close();">Cancel</button>',
  isolateScroll: true,
  position: {x: 'center', y: 'top'}
});

function show_jbox_confirm_alert(msg, title, action) {
  jBoxConfirmAlert.setTitle("<h4 class='jBox-modal-title'>"+title+"</h4>");
  jBoxConfirmAlert.setContent(msg);
  jBoxConfirmAlert.open();
  $("#jbox_confirm").attr("onclick", action);
}

//add by thiruvarasan for risk assessment screen confirmation box start
  var jBoxConfirmAlertRisk = new jBox('Modal', {
    preventDefault: true,
    closeButton: 'title',
    blockScroll: true,
    animation: 'tada',
    draggable: false,
    reposition: false,
    repositionOnOpen: false,
    responsiveWidth: true,
    responsiveHeight: true,
    responsiveMinWidth: true,
    responsiveMinHeight: true,
    closeOnClick: false,
    overlay: true,
    width: '30%',
    height: '10%',
    
    footer: '<button type="button" id="jbox_confirm_new" class="btn btn-primary confirm" >Yes</button>&nbsp;&nbsp;&nbsp;<button type="button" id="jbox_cancel_new" class="btn btn-primary waves-effect waves-light m-r-10 jb_cancel">No</button>',
    isolateScroll: true,
    position: {x: 'center', y: 'top'}
  });

  function show_jbox_confirm_risk_alert(msg, title, action) {
    jBoxConfirmAlertRisk.setTitle("<h4 class='jBox-modal-title'>"+title+"</h4>");
    jBoxConfirmAlertRisk.setContent(msg);
    jBoxConfirmAlertRisk.open();
    $("#jbox_confirm_new").attr("onclick", action);
    $("#jbox_cancel_new").attr("onclick", action);
  }
//end

//added by sharmila
  var jBoxConfirmAlertComp = new jBox('Modal', {
    preventDefault: true,
    closeButton: 'title',
    blockScroll: true,
    animation: 'tada',
    draggable: false,
    reposition: false,
    repositionOnOpen: false,
    responsiveWidth: true,
    responsiveHeight: true,
    responsiveMinWidth: true,
    responsiveMinHeight: true,
    closeOnClick: false,
    overlay: true,
    width: '30%',
    height: '10%',
    
    footer: '<button type="button" id="jbox_confirm" class="btn btn-primary confirm" >Restore</button>&nbsp;&nbsp;&nbsp;<button type="button" id="jbox_cancel" class="btn btn-primary waves-effect waves-light m-r-10 jb_cancel" onclick="jBoxConfirmAlertComp.close();">Cancel</button>',
    isolateScroll: true,
    position: {x: 'center', y: 'top'}
  });

  function show_jbox_restore_confirm_alert(msg, title, action) {
    jBoxConfirmAlertComp.setTitle("<h4 class='jBox-modal-title'>"+title+"</h4>");
    jBoxConfirmAlertComp.setContent(msg);
    jBoxConfirmAlertComp.open();
   
  }
//end

function show_jbox_alert(msg, title) {
  if (title == undefined)
  {
    title = "Alert"
  }
  jBoxAlert.setTitle("<h4 class='jBox-modal-title'>"+title+"</h4>");
  jBoxAlert.setContent(msg);
  jBoxAlert.open();
}

function load_first_jbox_modal(url, form_id, title, type, width, height, submit_fn) {
  if(form_id != "") {   
    var data = $("#"+form_id).serialize();
  } else {
    var data = ""
  }
  $.ajax({
    url: url,
    type: type,
    data: data,
    async: false,
    success: function(msg)
    {
      jBoxFirstModal.setTitle("<h4 class='jBox-modal-title'>"+title+"</h4>");
      jBoxFirstModal.setContent(msg);
      jBoxFirstModal.setWidth(width);
      if (height != '') {
        jBoxFirstModal.setHeight(height);
      }
      jBoxFirstModal.open();
      $('#submit_button').attr("onclick", submit_fn);
    }
  });
}

function load_second_jbox_modal(url, form_id, title, type, submit_fn) {
  if(form_id != "") {   
    var data = $("#"+form_id).serialize();
  } else {
    var data = ""
  }
  $.ajax({
    url: url,
    type: type,
    data: data,
    async: false,
    success: function(msg)
    {
      jBoxFirstModal.setTitle("<h4 class='jBox-modal-title'>"+title+"</h4>");
      jBoxFirstModal.setContent(msg);
      jBoxFirstModal.open();
      $('#submit_button').attr("onclick", submit_fn);
    }
  });
}