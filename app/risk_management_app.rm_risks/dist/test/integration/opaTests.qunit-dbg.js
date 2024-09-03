sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagementapp/rmrisks/test/integration/FirstJourney',
		'riskmanagementapp/rmrisks/test/integration/pages/RM_RisksList',
		'riskmanagementapp/rmrisks/test/integration/pages/RM_RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RM_RisksList, RM_RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagementapp/rmrisks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRM_RisksList: RM_RisksList,
					onTheRM_RisksObjectPage: RM_RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);