
function submitBrowseForm(directory, entry, state, state2) {

// Check that at least 1 checkbox is checked
	var nr_checkboxes_checked = 0;
	if (state == 'copymovedelete' || state == 'rename' || state == 'chmod' || state == 'zip' || state == 'calculatesize' || state == 'findstring') {
		for (var i = 0; i < document.forms['BrowseForm'].elements.length; i++) {
			if (document.forms['BrowseForm'].elements[i].type == 'checkbox') {
				if (document.forms['BrowseForm'].elements[i].checked == true) { nr_checkboxes_checked++; break; }
			}
		}
		if (nr_checkboxes_checked == 0) { 
			alert('Please select at least one directory or file.'); 
			return false;
		}
	}

// For the skins with a <select> drop-down box on top (e.g. India), determine the value of the
// 'entry' variable based on the first selected entry
	if (entry == '' && (state == 'view' || state == 'edit' || state == 'update')) {
		for (var i = 0; i < document.forms['BrowseForm'].elements.length; i++) {
			if (document.forms['BrowseForm'].elements[i].type == 'checkbox') {
				if (document.forms['BrowseForm'].elements[i].checked == true) { entry = document.forms['BrowseForm'].elements[i].value; break; }
			}
		}
	}

// Set BrowseForm values and submit
	document.forms['BrowseForm'].state.value=state;
	document.forms['BrowseForm'].state2.value=state2;
	document.forms['BrowseForm'].directory.value=directory;
	document.forms['BrowseForm'].entry.value=entry;
	document.forms['BrowseForm'].submit();
}
