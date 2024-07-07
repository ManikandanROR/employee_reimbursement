var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

$(document).click(function(e) {
  var clickedElement = e.target
  if (clickedElement.className != 'dt-action-link-active' && clickedElement.className != 'fa fa-bars dt-more-action-icon-active') {
    $('.dt-more-action-span:visible').each(function() {
      $(this).hide('ease');
    });
  }
});

function validateEmail(emailField) {
  $('#'+emailField).removeClass('form-error');
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if ($('#'+emailField).val() != '' && reg.test($('#'+emailField).val()) == false) {
    show_jbox_alert('Invalid email address', 'Alert');
    $('#'+emailField).addClass('form-error')//.focus();
    valid_email = false
    return false;
  }
  valid_email = true
  return true;
}

$(document).on('focus', '.dataTables_filter input', function() {
  $(this).unbind().bind('keyup', function(e) {
  });
});

$(document).on('search.DT', function(event){
  current_table_id = $(event.target).data("table_id");
  current_DT = $('#'+current_table_id).DataTable();
  search_val = $('#'+event.target.id).val();
  dt_data_url = current_DT.ajax.url();
  $.when(load_dt_initial_setup(current_table_id, dt_data_url)).then(function() {
    current_DT.search(search_val).draw();
  });
});

function load_search(obj) {
  current_table_id = $(obj).data("table_id");
  current_DT = $('#'+current_table_id).DataTable();
  search_val = $('#'+current_table_id+'_search_field').val();
  dt_data_url = current_DT.ajax.url();
  $.when(load_dt_initial_setup(current_table_id, dt_data_url)).then(function() {
    current_DT.search(search_val).draw();
  });
}

function load_more_action_menu(div_id) {
  $('.dt-more-action-span:visible').each(function() {
    $(this).hide('ease');
  });

  if ($('#target_div_'+div_id).is(':visible')) {
    $('#target_div_'+div_id).hide('ease');
  } else {
    $('#target_div_'+div_id).show('ease');
  }
}