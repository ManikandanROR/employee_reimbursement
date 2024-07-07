const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary waves-effect waves-light mr-2',
    cancelButton: 'btn btn-primary waves-effect waves-light mr-2',
    denyButton: 'btn btn-primary waves-effect waves-light mr-2'
  },
  buttonsStyling: false
});

// swalWithBootstrapButtons.fire({
//   title: 'Are you sure?',
//   text: "You won't be able to revert this!",
//   icon: 'success',
//   html: 'You can use <b>bold text</b>, <a href="//sweetalert2.github.io">links</a> and other HTML tags',
//   showCloseButton: true,
//   showCancelButton: true,
//   showDenyButton: true,
//   focusConfirm: true,
//   confirmButtonText: 'Yes',
//   denyButtonText: 'No',
//   cancelButtonText: 'cancel!',
//   reverseButtons: false
// }).then((result) => {
//   if (result.isConfirmed) {
//     swalWithBootstrapButtons.fire(
//       'Deleted!',
//       'Your file has been deleted.',
//       'success'
//     )
//   } else if (
//     result.dismiss === Swal.DismissReason.cancel
//   ) {
//     swalWithBootstrapButtons.fire(
//       'Cancelled',
//       'Your imaginary file is safe :)',
//       'error'
//     )
//   }
// })

function alert_message(content, icon, confirm_button_text) {
  swalWithBootstrapButtons.fire({
    title: content,
    icon: icon,
    confirmButtonText: confirm_button_text,
    allowOutsideClick: false,
    allowEscapeKey: false
  })
}

function confirm_message(title, icon, cross_icon, content, show_no_button, show_close_button, confirm_button_text, cancel_button_text, confirm_button_function, cancel_button_function) {
  swalWithBootstrapButtons.fire({
    title: title,
    icon: icon,
    html: content,
    showCloseButton: cross_icon,
    showDenyButton: show_no_button,
    showCancelButton: show_close_button,
    confirmButtonText: confirm_button_text,
    denyButtonText: cancel_button_text,
    allowOutsideClick: false,
    allowEscapeKey: false
  }).then((result) => {
    if (result.isConfirmed) {
      eval(confirm_button_function)
    } else if (result.isDenied) {
      eval(cancel_button_function)
    }
  })
}