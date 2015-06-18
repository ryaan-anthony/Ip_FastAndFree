<?php

class Ip_FastAndFree_Model_Observer
{

    public function payment_method_is_active(Varien_Event_Observer $observer)
    {
        $method = $observer->getEvent()->getMethodInstance();

        if($quote = $observer->getEvent()->getQuote()){

            if($quote->getGrandTotal() == 0 && $method->getCode() != 'free'){

                $result = $observer->getEvent()->getResult();

                $result->isAvailable = false;
            }

        }
    }

}