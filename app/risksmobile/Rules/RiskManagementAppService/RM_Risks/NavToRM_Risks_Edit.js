export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementAppService.service').isDraftEnabled('RM_Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'RM_Risks'
                },
                'OnSuccess': '/risksmobile/Actions/RiskManagementAppService/RM_Risks/NavToRM_Risks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementAppService/RM_Risks/NavToRM_Risks_Edit.action');
    }
}