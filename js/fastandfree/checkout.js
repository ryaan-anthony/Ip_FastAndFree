
document.observe("dom:loaded", function() {

    // Pre-select the free payment method and continue to next step.
    var checkout_payment_method_load = $('checkout-payment-method-load').innerHTML;

    var checkout_payment_method_load_interval = setInterval(function () {

        if (checkout_payment_method_load != $('checkout-payment-method-load').innerHTML) {

            if ($('p_method_free')) {

                $('p_method_free').checked = true;

                payment.save();

                // Clear the trigger so it only happens once and doesn't annoy the customer.
                clearInterval(checkout_payment_method_load_interval);

            }
        }

    }, 100);

});