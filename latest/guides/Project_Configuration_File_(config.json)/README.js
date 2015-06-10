Ext.data.JsonP['Project_Configuration_File_(config.json)']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Project Configuration File (config.json)</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"35620077\" class=\"content\">\n            <h1>Project Configuration File (config.json)</h1>\n    <p>\nAlloy uses the <tt class=\" \">config.json</tt> file, located in the project's <tt class=\" \">app</tt> directory, to specify global values, conditional environment and platform values, and widget dependencies. The configuration file contains the following objects:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nObject    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nglobal    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs present for all environments and platforms.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nenv:development    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs present for targets built for development, running in either the simulator or emulator.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nenv:test    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs present for targets built for testing on a device.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nenv:production    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs present for targets built for production, running after a package installation.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nos:android    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs present for targets built for Android.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nos:ios    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs present for targets built for iOS.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nos:mobileweb    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs present for targets built for Mobile Web.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nos:windows    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs present for targets built for Windows Phone (since Appcelerator CLI 4.1.0/Alloy 1.6.0).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndependencies    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains key-value pairs for widget dependencies, where the key is the widget name and the value is the version number of the widget.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nautoStyle    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nEnables the autostyle feature for the entire Alloy project (since Alloy 1.2.0). See <a class=\"document-link \" href=\"#!/guide/Dynamic_Styles-section-37530415_DynamicStyles-Autostyle\">Dynamic Styles: Autostyle</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nbackbone    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSelect the Backbone.js library to use for Alloy Model and Collection objects (since Alloy 1.6.0). Set to either <tt class=\" \">0.9.2</tt> (current default) or <tt class=\" \">1.1.2</tt>.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nWhen mixed together, 'os' values override 'env' values, which override 'global' values. If you want to specify both a platform and environment-specific configuation, combine the 'os' and 'env' values together into one string with the values space separated.  These values are accessible during runtime by prefixing the key with <tt class=\" \">Alloy.CFG</tt>.    </p>\n    <p>\nExample of a configuration file:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"global\"</code><code class=\"plain\">: {</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">1</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"env:development\"</code><code class=\"plain\">: {</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">2</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"env:test\"</code><code class=\"plain\">:{</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">3</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"env:production\"</code><code class=\"plain\">:{</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">4</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"os:ios env:production\"</code><code class=\"plain\">: {</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">5</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"os:ios env:development\"</code><code class=\"plain\">: {</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">6</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"os:ios env:test\"</code><code class=\"plain\">: {</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">7</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"os:android\"</code><code class=\"plain\">:{</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">8</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"os:mobileweb\"</code><code class=\"plain\">:{</code><code class=\"string\">\"foo\"</code><code class=\"plain\">:</code><code class=\"value\">9</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">\"dependencies\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"com.foo.widget\"</code><code class=\"plain\">:</code><code class=\"string\">\"1.0\"</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">} </code></div>\n</div>\n</div>    <p>\nIn the above example, if the application is ran on the iPhone simulator and prints out 'foo' using <tt class=\" \">Ti.API.info(Alloy.CFG.foo)</tt>, it will return '6.'    </p>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=35620077\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Project Configuration File (config.json)"});