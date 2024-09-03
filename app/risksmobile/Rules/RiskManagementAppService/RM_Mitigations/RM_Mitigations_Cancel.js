export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementAppService.service').isDraftEnabled('RM_Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'RM_Mitigations'
                },
                'OnSuccess': '/risksmobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/CloseModalPage_Cancel.action');
    }
}