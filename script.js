(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
      } else {
        var toastEl = document.getElementById('successToast');
        var toast = new bootstrap.Toast(toastEl);
        toast.show();

        form.reset();
      }
      form.classList.add('was-validated');
    }, false);
  });

  var showToastBtn = document.getElementById('showToastBtn');
  if (showToastBtn) {
    showToastBtn.addEventListener('click', function () {
      var toastEl = document.getElementById('successToast');
      var toast = new bootstrap.Toast(toastEl);
      toast.show();
    });
  }
})();

document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
});
