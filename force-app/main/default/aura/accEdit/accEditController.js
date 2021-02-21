({
    saveAccount : function(component, event, helper) {
        const loader = component.find('recordLoader');
        loader.saveRecord($A.getCallback(function(result) {
            if (result.state === 'ERROR') {
                let msg = '';
                for (let i = 0; i < result.error.length; i++) {
                    msg += result.error[i].message + '\n';
                }
                component.set('v.recordSaveError', err);
            } else {
                component.set('v.recordSaveError', '');
            }
        }))
    }
})
