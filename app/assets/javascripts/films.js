var films = {
	element: document.getElementById('films-index'),
	get checkboxes() {
		return this.element.querySelectorAll('input[type="checkbox"]');
	},
	url: function(id, checked) {
		return '/films/'+id+'/set_checked/'+(checked ? 'true' : 'false')+'.json';
	},
	onchange: function(event) {
		films.update(this, this.getAttribute('data-id'), this.checked);
	},
	update: function(checkbox, id, checked) {
		var xhr = new XMLHttpRequest;
		xhr.open('GET', this.url(id, checked), true);

		xhr.onreadystatechange = function(event) {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					var response = JSON.parse(xhr.responseText);
					if(response.status) {
						if(response.checked) checkbox.setAttribute('checked', true);
						else checkbox.removeAttribute('checked');
					}
				}
			}
		};

		xhr.send();
	},
	init: function() {
		if(this.element) {
			var checkboxes = this.checkboxes;
			for(var i = 0; i < checkboxes.length; i++) {
				checkboxes[i].addEventListener('change', this.onchange);
			}
		}
	}	
};

films.init();
