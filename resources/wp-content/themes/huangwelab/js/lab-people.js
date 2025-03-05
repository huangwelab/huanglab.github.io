/**
 * 
 */
var $j = jQuery.noConflict();

var showAll = document.getElementById('input--show-all');

function setupShowAll() {
	if (showAll) {
		alert("checked");
		$("#input--show-all").change(function() {
			if(this.checked) {
		        //Do stuff
				alert("checked2");
		    }
			
			
		});
		/*showAll.addEventListener('change', (event) => {
			  if (event.currentTarget.checked) {
			    alert('checked');
			  } else {
			    alert('not checked');
			  }
			})*/
	}

}

$j(document).ready(setupShowAll);