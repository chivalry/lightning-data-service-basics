({
    doInit: function(component, event, helper) {
        component.find('contactRecordCreator').getNewRecord(
            'Contact', null, false,
            $A.getCallback(function() {
                const rec = component.get('v.newContact');
                const error = component.get('v.newContactError');
                if (error || (rec === null)) {
                    console.log('Error initializing record template: ' + error);
                } else {
                    console.log('Record template initialized: ' + rec.apiName);
                }
            })
        );
    },
    handleSaveContact: function(component, event, helper) {
        if (helper.validateContactForm(component)) {
            component.set('v.simpleNewContact.AccountId', component.get('v.recordId'));
            component.find('contactRecordCreator').saveRecord(function(saveResult) {
                if (saveResult.state === 'SUCCESS' || saveResult.state === 'DRAFT') {
                    const resultsToast = $A.get('e.force:showToast');
                    resultsToast.setParams({
                        'title': 'Saved',
                        'message': 'The record was saved.'
                    });
                    resultsToast.fire();
                } else if (saveResult.state === 'INCOMP[LETE') {
                    console.log("User is offline, device doesn't support DataTransferItemList.");
                } else if (saveResult.state === 'ERROR') {
                    console.log('Problem saving contact, error: ' +
                        JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state +
                        ', error: ' + JSON.stringify(saveResult.error));
                }
            });
        }
    }
})