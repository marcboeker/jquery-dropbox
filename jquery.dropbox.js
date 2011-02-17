jQuery.fn.dropbox = function(config) {
	var dragEnter = function(e) {
		e.stopPropagation();
		e.preventDefault();
	};

	var dragOver = function(e) {
		e.stopPropagation();
		e.preventDefault();
	};

	var drop = function(e) {
		var dt = e.dataTransfer;
		var files = dt.files;

		e.stopPropagation();
		e.preventDefault();

		if (files && files.length > 0 && config.onDrop !== undefined) {
			config.onDrop(files);
		}
	};

	var applyDropbox = function(dropbox) {
		dropbox.addEventListener('dragenter', dragEnter, false);  
		dropbox.addEventListener('dragover', dragOver, false);  
		dropbox.addEventListener('drop', drop, false);
	};

	return this.each(function(){
		applyDropbox(this);
	});
};