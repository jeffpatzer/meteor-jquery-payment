# Meteor Jquery Payment


Meteor package for Stripe's jQuery.payment library. For full documentation, see the [jQuery.payment repository](https://github.com/stripe/jquery.payment).

# Example Usage

You can initialize formatting on a input during the render event. 

    Template.profileEdit.hooks({
      rendered: function () {

        // Format Card Number
        $('#creditCardNumber').payment('formatCardNumber');
        $('#creditCardCVV').payment('formatCardNumber');
      }
    });

You can then check the validity of an input on form submit or what have you.

    Template.profileEdit.events({
      'submit #stripePaymentForm': function(e) {
        e.preventDefault();
        var $form = $(e.target);
        var $cc = $form.find("#creditCardNumber").val();
        var $ccM = $form.find("#creditCardExpDateMonth").val();
        var $ccY = $form.find("#creditCardExpDateYear").val();
        var $cvc = $form.find("#creditCardCVC").val();

        // check for error
        var error = true;
        if (!$.payment.validateCardNumber($cc)) {
          error = "The credit card number is invalid";
        }else
        if (!$.payment.validateCardExpiry($ccM, $ccY)) {
          error = "The expiry values have an error.";
        }else
        if (!$.payment.validateCardCVC($cvc)) {
          error = "The CVC value has an error.";
        }else{
          error=false
        }

        // do more stuff

      }
    });

Customize to your use. 





