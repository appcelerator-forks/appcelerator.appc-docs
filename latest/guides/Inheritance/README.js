Ext.data.JsonP['Inheritance']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Inheritance</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845661\" class=\"content\">\n            <h1>Inheritance</h1>\n    <p>\n    <span style=\"color: #222222;\">\nDemonstrates how an Alloy controller can inherit functionality from another controller.    </span>\n    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App folder location</div>\n        \n    <p>\n<i class=\" \">alloy</i>/test/apps/<strong class=\" \">advanced/inheritance</strong>    </p>\n    </div>\n    \n    <p>\n    <span style=\"color: #222222;\">\n<br/>    </span>\n    <span style=\"color: #222222;\">\n<br/>    </span>\n    </p>\n    <p>\n    <span style=\"color: #222222;\">\n        <img src=\"images/download/attachments/41845661/inheritance.png\" alt=\"images/download/attachments/41845661/inheritance.png\" class=\"confluence-embedded-image\"/>\n    <br/>    </span>\n    </p>\n    <p>\n    <span style=\"color: #222222;\">\nThe parent controller exports its inheritable properties or methods on its <strong class=\" \"><tt class=\" \">exports</tt></strong> property. To inherit the parent's functionality, the child controller assigns the base name of parent controller to its <tt class=\" \">exports.baseController</tt> property. For example, in the sample application t    </span>\n    <span style=\"color: #222222;\">\nhe     </span>\n<strong class=\" \">controllers/baseDialog.js</strong>    <span style=\"color: #222222;\">\n file defines the dialog's common functionality, including two methods named     </span>\n<tt class=\" \">openDialog()</tt>    <span style=\"color: #222222;\">\n and     </span>\n<tt class=\" \">closeDialog()</tt>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/controllers/baseDialog.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var args = arguments[</code><code class=\"value\">0</code><code class=\"plain\">] || {};</code></div>\n<div class=\"line\"><code class=\"plain\">$.message.text = args.message || </code><code class=\"string\">'dialog'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.openDialog = function(win) {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin = win;</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin.add($.cover);</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin.add($.dialog);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">exports.closeDialog = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin.remove($.cover);</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin.remove($.dialog);</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin = $.cover = $.dialog = </code><code class=\"keyword\">null</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div>    <p>\nThe child controller, defined by <strong class=\" \">controllers/animatedDialog.js, </strong>inherits from baseController.js and overrides the parent's <tt class=\" \">openDialog()</tt> function with a version that animates the dialog window's opacity as it opens.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Establish inheritance from baseDialog</code></div>\n<div class=\"line\"><code class=\"plain\">exports.baseController = </code><code class=\"string\">'baseDialog'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.openDialog = function(win) {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin = win;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// make invisible</code></div>\n<div class=\"line\"><code class=\"plain\">    $.cover.opacity = </code><code class=\"value\">0</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    $.dialog.opacity = </code><code class=\"value\">0</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// add to reference window</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin.add($.cover);</code></div>\n<div class=\"line\"><code class=\"plain\">    $.refWin.add($.dialog);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// animate in the opacity</code></div>\n<div class=\"line\"><code class=\"plain\">    $.cover.animate({</code></div>\n<div class=\"line\"><code class=\"plain\">        duration: </code><code class=\"value\">500</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        opacity: </code><code class=\"value\">0.5</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">    $.dialog.animate({</code></div>\n<div class=\"line\"><code class=\"plain\">        duration: </code><code class=\"value\">500</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        opacity: </code><code class=\"value\">1</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div>    <div class=\"section section-2 \" id=\"41845661_Inheritance-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/Inheritance\">Inheritance</a> in the <a class=\"document-link unresolved\" href=\"#!/guide/Inheritance\">Alloy Framework</a> guide    </p>\n</li></ul>    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845661\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Inheritance"});