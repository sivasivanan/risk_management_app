using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { RiskManagementApp as my } from '../db/schema';

@path : '/service/risk_management_appSvcs'
service RiskManagementAppService
{
    annotate RM_Mitigations with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    annotate RM_Risks with @restrict :
    [
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];

    @odata.draft.enabled
    entity RM_Risks as
        projection on my.RM_Risks;

    @odata.draft.enabled
    entity RM_Mitigations as
        projection on my.RM_Mitigations;

    entity A_BusinessPartner as
        projection on BusinessPartnerA2X.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName,
            BusinessPartnerIsBlocked
        };
}

annotate RiskManagementAppService with @requires :
[
    'authenticated-user',
    'any',
    'RiskViewer',
    'RiskManager'
];
