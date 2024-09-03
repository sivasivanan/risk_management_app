export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementAppService.service').isDraftEnabled('RM_Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'RM_Mitigations'
                },
                'OnSuccess': '/risksmobile/Actions/RiskManagementAppService/RM_Mitigations/NavToRM_Mitigations_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementAppService/RM_Mitigations/NavToRM_Mitigations_Edit.action');
    }
}