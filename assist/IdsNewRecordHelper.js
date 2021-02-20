({
    validateContactForm: function(component) {
        var validContact = true;
        var allValid = component.find('contactField').reduce(function (validFields, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validFields && inputCmp.get('v.validity').valid;
        }, true);
        if (allValid) {
            var account = component.get("v.newContact");
            if($A.util.isEmpty(account)) {
                validContact = false;
                console.log("Quick action context doesn't have a valid account.");
            }
        return(validContact);
        }
	}
})