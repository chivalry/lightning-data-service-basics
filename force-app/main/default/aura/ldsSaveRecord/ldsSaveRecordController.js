({
    handleSaveRecord : function(component, event, helper) {
        component.find('recordEditor').saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === 'SUCCESS' || saveResult.state === 'DRAFT') {
                console.log('Save completed successfully.');
            } else if (saveResult.state === 'INCOMPLETE') {
                console.log("User is offline, device doesn't support drafts");
            }
        }));
    }
})
