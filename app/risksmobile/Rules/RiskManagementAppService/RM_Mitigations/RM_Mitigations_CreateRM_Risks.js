export default function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementAppService.service').isDraftEnabled('RM_Mitigations')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementAppService/RM_Mitigations/RM_Mitigations_CreateRM_Risks.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'RM_Mitigations',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementAppService/RM_Mitigations/RM_Mitigations_CreateRM_Risks.action');
    }
}