Ext.data.JsonP['PyDev_Debug_Console']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Debug Console</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083076\" class=\"content\">\n            <h1>PyDev Debug Console</h1>\n    <div class=\"section section-2 \" id=\"30083076_PyDevDebugConsole-DebugConsole\">\n        <h2 class=\"heading \"><span>Debug Console</span></h2>\n    <p>\nIn PyDev once you hit a breakpoint, you can use the console for probing the program at the selected frame. The screenshot below shows it in action...    </p>\n    <p>\n        <img src=\"images/pydev.org/images/debugger/console1.png\" alt=\"images/pydev.org/images/debugger/console1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\n<strong class=\" \">1</strong>. Shows the selected frame. You may choose another frame to probe.<br/><strong class=\" \">2</strong>. Shows the place where the debugger is currently suspended.<br/><strong class=\" \">3</strong>. Allows you to enter statements to be evaluated by the debugger.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083076_PyDevDebugConsole-CodecompletionindebugConsole\">\n        <h2 class=\"heading \"><span>Code completion in debug Console</span></h2>\n    <p>\nFrom <strong class=\" \">version 1.6.0</strong> onwards, code-completion can be used in that console (shows templates, common tokens and the locals/globals from the selected frame).    </p>\n    <p>\nIt's preferences are shared with the default code completion preferences in PyDev &gt; editor &gt; code completion.    </p>\n    <p>\n        <img src=\"images/pydev.org/images/debugger/console2.png\" alt=\"images/pydev.org/images/debugger/console2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n        <br/><strong class=\" \">Update in 1.3.13</strong>: the return of simple statements is printed automatically to the output (so, in the example just typing the name of the variable 'a' in the prompt would already show its value in the output).    </p>\n    <p>\n<strong class=\" \">Update in 1.6.0</strong>: commands are evaluated on each new line unless the line starts with ' ' or '/t' or ends with ':' or '/' (so, for entering multi-line statements, the input must be entered properly respecting those limitations).    </p>\n    <p>\n<strong class=\" \">Old (before 1.6.0)</strong>:the command was only evaluated when an empty line was entered.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083076\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"PyDev Debug Console"});