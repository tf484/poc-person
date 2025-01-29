sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'person/test/integration/FirstJourney',
		'person/test/integration/pages/PersonList',
		'person/test/integration/pages/PersonObjectPage'
    ],
    function(JourneyRunner, opaJourney, PersonList, PersonObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('person') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePersonList: PersonList,
					onThePersonObjectPage: PersonObjectPage
                }
            },
            opaJourney.run
        );
    }
);