({
    validateContactForm: function(component) {
        let validContact = true;
        const allValid = component.find('contactField').reduce(function (validFields, inputCmp) {
            inputCmp.showHelperMessageIfInvalid();
            return validFields && inputCmp.get('v.validity').valid;
        }, true);
        if (allValid) {
            const account = component.get('v.newContact');
            if ($A.util.isEmpty(account)) {
                validContact = false;
                console.log("Quick action context doesn't have a valid account.");
            }
            return(validContact);
        }
    }
})
