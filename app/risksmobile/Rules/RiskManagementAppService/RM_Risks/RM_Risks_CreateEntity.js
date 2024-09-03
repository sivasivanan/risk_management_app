export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementAppService.service').isDraftEnabled('RM_Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementAppService/RM_Risks/RM_Risks_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'RM_Risks',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementAppService/RM_Risks/RM_Risks_CreateEntity.action');
    }
}