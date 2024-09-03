export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementAppService.service').isDraftEnabled('RM_Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'RM_Risks'
                },
                'OnSuccess': '/risksmobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/CloseModalPage_Cancel.action');
    }
}