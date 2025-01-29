sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        test: function(oEvent) {
            
            MessageToast.show("Custom handler invoked.");
        }
    };
});
