jQuery(document).ready(function($) {


// booking-form Validation ----------------------------------------
    $(".post-form .submit-btn").click(function () {
        var form = $("#postform");
            form.validate({
               //ignore: ":not(:visible)",
                errorElement: 'span',
                errorClass: 'help-block',
                rules: {
                  comment: {
                        required: true,
                    },
                    first_name: {
                        required: true,
                    },
                    email: {
                      minlength:10,
                        required: true,
                    },
                    website: {
                        required: true,
                    },
                },
            });
        });


$(".unsubscribe-btn").click(function () {
              var form = $("#unsubform");
              form.validate({
                 //ignore: ":not(:visible)",
                  errorElement: 'span',
                  errorClass: 'help-block',
                  rules: {
                    email: {
                          required: true,
                      },
                  },
              });
          });

});