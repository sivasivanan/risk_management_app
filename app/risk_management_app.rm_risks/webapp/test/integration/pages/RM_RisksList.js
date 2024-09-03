sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'riskmanagementapp.rmrisks',
            componentId: 'RM_RisksList',
            contextPath: '/RM_Risks'
        },
        CustomPageDefinitions
    );
});