/**
 * @package       ICEPAY Magento 2 Payment Module
 * @copyright     (c) 2016-2018 ICEPAY. All rights reserved.
 * @license       BSD 2 License, see LICENSE.md
 */
 
/*browser:true*/
/*global define*/
define(
    [
        'jquery',
        'Icepay_IcpCore/js/view/payment/method-renderer/icepay-payment-abstract',
        'ko',
        'Magento_Checkout/js/checkout-data',
        'Magento_Checkout/js/action/select-payment-method',
    ],
    function ($, Component, ko, checkoutData, selectPaymentMethodAction) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Icepay_IcpCore/payment/directdebit'
            },

            issuerList: [],

            getCode: function() {
                return 'icepay_icpcore_directdebit';
            },

            isActive: function() {
                return true;
            },

            /** Returns payment logo image path */
            getPaymentLogoSrc: function() {
                return window.checkoutConfig.payment.icepay.directdebit.paymentMethodLogoSrc;
            },

            getPaymentMethodDisplayName: function() {
                return window.checkoutConfig.payment.icepay.directdebit.getPaymentMethodDisplayName;
            },

            initObservable: function () {
                this._super().observe(['selectedIssuer', 'directdebitIssuers']);

                this.directdebitIssuers = ko.observableArray(window.checkoutConfig.payment.icepay.directdebit.issuers);

                return this;
            },


            selectPaymentMethod: function() {
                selectPaymentMethodAction(this.getData());
                checkoutData.setSelectedPaymentMethod(this.item.method);
                return true;
            },

            getData: function() {
                var parent = this._super(),
                    additionalData = {};

                additionalData['issuer'] = this.selectedIssuer() ? this.selectedIssuer() : null;

                return $.extend(true, parent, {'additional_data': additionalData});
            },


        });
    }
);
