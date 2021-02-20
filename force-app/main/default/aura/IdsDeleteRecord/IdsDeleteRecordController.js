({
    handleDeleteRecord : function(component, event, helper) {
        component.find('recordHandler').deleteRecord($A.getCallback(function(deleteResult) {
            if (deleteResult.state === 'SUCCESS' || deleteResult.state === 'DRAFT') {
                console.log('Record is deleted.');
                const resultsToast = $A.get('e.force:showToast');
                resultsToast.setParams({
                    'title': 'Deleted',
                    'message': 'The record was deleted'
                });
                resultsToast.fire();
            } else if (deleteResult === 'INCOMPLETE') {
                console.log("User is offline, device doesn't support drafts.")
            } else if (deleteResult === 'ERROR') {
                console.log('Problem deleting record, error: ' +
                    JSON.stringify(deleteResult.error));
            } else {
                console.log('Unknown problem, state: ' + deleteResult.state +
                    JSON.stringify(deleteResult));
            }
        }));
    }
})