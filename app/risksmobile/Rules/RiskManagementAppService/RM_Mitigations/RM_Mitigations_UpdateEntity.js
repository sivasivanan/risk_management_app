export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementAppService.service').isDraftEnabled('RM_Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementAppService/RM_Mitigations/RM_Mitigations_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'RM_Mitigations'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementAppService/RM_Mitigations/RM_Mitigations_UpdateEntity.action');
    }
}