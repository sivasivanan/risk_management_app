sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'riskmanagementapp.rmrisks',
            componentId: 'RM_RisksObjectPage',
            contextPath: '/RM_Risks'
        },
        CustomPageDefinitions
    );
});