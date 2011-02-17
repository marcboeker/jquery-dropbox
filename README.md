# About

jquery-dropbox can be used to turn elements on your site into a dropbox
for files. After dropping files into this area, a callback with the dropped
files is called. Now you can start uploading these files using a simple
XMLHTTPRequest.

# Compatibility

Tested with

* Firefox 3.6+
* Chrome 7+
* Webkit Version 4.0.3 (6531.9, r51280)


# Usage

Make sure the jQuery JavaScript has been loaded.

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>

Now low jquery-dropbox

	<script type="text/javascript" src="jquery.dropbox.js"></script>
	
After everything is initalized, you can start defining the dropbox. A dropbox
can be a various of HTML elements. We use a div for testing.

	<div id="dropbox">Drag and drop file here to upload them</div>
	
Lets add an event listener to the dropbox.

	$('#dropbox').dropbox({
		onDrop: function(files) {
			console.debug(files);
		}
	});
	
The jQuery dropbox accepts a config object with the following parameters:

* **onDrop(files)** - Function that is called after files have been dropped into the
dropbox.

# Hints

You can easily apply the dropbox handler to your page's body to enable page
wide drag and drop support for files.

	$('body').dropbox(...);
	
# License

Please see the LICENSE file.
jquery-dropbox is supported by www.onchestra.com