Ext.data.JsonP['Installing_Titanium_Advanced_Tools']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Installing Titanium Advanced Tools</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"29004874\" class=\"content\">\n            <h1>Installing Titanium Advanced Tools</h1>\n    <div class=\"section section-2 \" id=\"29004874_InstallingTitaniumAdvancedTools-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_Advanced_Tools-section-29004874_InstallingTitaniumAdvancedTools-Overview\">Overview</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_Advanced_Tools-section-29004874_InstallingTitaniumAdvancedTools-Python(optional)\">Python (optional)</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_Advanced_Tools-section-29004874_InstallingTitaniumAdvancedTools-SCons(optional)\">SCons (optional)</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_Advanced_Tools-section-29004874_InstallingTitaniumAdvancedTools-AndroidNativeDevelopmentTools(NDK)(optional)\">Android Native Development Tools (NDK) (optional)</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_Advanced_Tools-section-29004874_InstallingTitaniumAdvancedTools-EclipseandADT(optional)\">Eclipse and ADT (optional)</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_Advanced_Tools-section-29004874_InstallingTitaniumAdvancedTools-Ant(optional)\">Ant (optional)</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"29004874_InstallingTitaniumAdvancedTools-RelatedTopics\">\n        <h2 class=\"heading \"><span>Related Topics</span></h2>\n<ul class=\"childpages-macro \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Git\">Installing Git</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Python\">Installing Python</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages\">Installing Required Python Packages</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_SCons\">Installing SCons</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_the_Android_NDK\">Installing the Android NDK</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Eclipse_and_ADT\">Installing Eclipse and ADT</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Ant\">Installing Ant</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_gperf\">Installing gperf</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Genymotion\">Installing Genymotion</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"29004874_InstallingTitaniumAdvancedTools-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nThe following packages may be useful for advanced Titanium users, but are not necessary to develop with Titanium.    </p>\n    <p>\nIf you want to build the Titanium SDK from source, or to build native Android modules, you should read this section for software requirements.    </p>\n    <p>\nPython is useful for users who want to build and run Titanium applications from the command line, users building native modules, or users building the Titanium SDK from source.    </p>\n    <div class=\"section section-3 \" id=\"29004874_InstallingTitaniumAdvancedTools-Python(optional)\">\n        <h3 class=\"heading \"><span>Python (optional)</span></h3>\n    <p>\nPython is required to use Titanium from the command line or compile the SDK from source using SCons. Python is <strong class=\" \">not</strong> required to use the Titanium SDK from inside Studio.    </p>\n    <p>\nTitanium supports the following versions of Python for each respective Operating System:    </p>\n    <p>\n        <img src=\"images/download/attachments/29004836/download_05.png\" alt=\"images/download/attachments/29004836/download_05.png\" class=\"confluence-embedded-image image-center\" width=\"64\"/>\n            </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOperating System    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPackage Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPackage Architecture Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDownload Location    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOS X    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n2.x.x (currently, 2.7.x)    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n32bit and 64bit    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nInstalled on OS by default    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWindows    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n2.x.x (currently, 2.7.x)    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n32bit <strong class=\" \">only</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://www.python.org/download/\" target=\"_blank\">Official Python Website </a>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUbuntu    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n2.x.x (currently, 2.7.x)    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n32bit and 64bit    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDefault Repositories    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nDownload the installer from the applicable download location above.    </p>\n    <p>\nSee <a class=\"document-link \" href=\"#!/guide/Installing_Python\">Installing Python</a> for detailed instructions about how to install, including the program location and system environment variables that should be used.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004874_InstallingTitaniumAdvancedTools-SCons(optional)\">\n        <h3 class=\"heading \"><span>SCons (optional)</span></h3>\n    <p>\n<a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/SCons\" target=\"_blank\">SCons</a> (Software Construction tool) is a build tool, similar to the classic <tt class=\" \">make</tt> utility. It is used to build the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile\" target=\"_blank\">Titanium SDK</a>.    </p>\n    <p>\nInstalling <tt class=\" \">scons</tt> is required if you want to build the Titanium SDK from source. It is not required for building, running, or distributing applications using the Titanium SDK.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nPython is a prerequisite for SCons, and should be installed first. See <a class=\"document-link \" href=\"#!/guide/Installing_Python\">Installing Python</a> for instructions.    </p>\n    </div>\n    \n    <p>\nObtain the SCons version listed below for your Operating System:    </p>\n    <p>\n        <img src=\"images/download/attachments/29004836/download_05.png\" alt=\"images/download/attachments/29004836/download_05.png\" class=\"confluence-embedded-image image-center\" width=\"64\"/>\n            </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOperating System    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPackage Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDownload Location    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOS X    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://www.scons.org/download.php\" target=\"_blank\">Official Website</a>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWindows    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://www.scons.org/download.php\" target=\"_blank\">Official Website</a>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUbuntu    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDefault Repositories    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nSee <a class=\"document-link \" href=\"#!/guide/Installing_SCons\">Installing SCons</a> for detailed instructions about how to install, including the program location and system environment variables that should be used.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004874_InstallingTitaniumAdvancedTools-AndroidNativeDevelopmentTools(NDK)(optional)\">\n        <h3 class=\"heading \"><span>Android Native Development Tools (NDK) (optional)</span></h3>\n    <p>\nThe Android NDK is required to build native modules for Android, or to build the Titanium SDK from source.    </p>\n    <p>\nThe NDK is <strong class=\" \">not</strong> required to build, run, or distribute apps using the Titanium SDK.    </p>\n    <p>\nTitanium supports NDK Revision 9.    </p>\n    <p>\nDownload the appropriate NDK archive from the following site:    </p>\n    <p>\n        <img src=\"images/download/attachments/29004836/download_05.png\" alt=\"images/download/attachments/29004836/download_05.png\" class=\"confluence-embedded-image image-center\" width=\"64\"/>\n            </p>\n    <p>\n<a class=\"external-link external-link\" href=\"http://developer.android.com/sdk/ndk/index.html\" target=\"_blank\">Download the Android NDK on developer.android.com</a>    </p>\n    <p>\nSee <a class=\"document-link \" href=\"#!/guide/Installing_the_Android_NDK\">Installing the Android NDK</a> for detailed instructions about how to install, including the program location and system environment variables that should be used.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004874_InstallingTitaniumAdvancedTools-EclipseandADT(optional)\">\n        <h3 class=\"heading \"><span>Eclipse and ADT (optional)</span></h3>\n    <p>\nThe Eclipse IDE can be used to build and debug Titanium Android modules, and to build and debug the Titanium SDK on Android. You will also need to install the Android Development Tools (ADT) Eclipse plugin.    </p>\n    <p>\nEclipse and ADT are not required for building, running, or distributing applications using the Titanium SDK.    </p>\n    <p>\nIf you don't want to use Eclipse, you can build Android modules and the Titanium SDK on the command line using Ant. See <a class=\"document-link \" href=\"#!/guide/Installing_Ant\">Installing Ant</a> for instructions.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nJava is a prerequisite for Eclipse, and should be installed first. See <a class=\"document-link \" href=\"#!/guide/Installing_Oracle_JDK\">Installing Oracle JDK</a> for instructions.    </p>\n    </div>\n    \n    <p>\nObtain the Eclipse version listed below for your Operating System:    </p>\n    <p>\n        <img src=\"images/download/attachments/29004836/download_05.png\" alt=\"images/download/attachments/29004836/download_05.png\" class=\"confluence-embedded-image image-center\" width=\"64\"/>\n            </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOperating System    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPackage Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDownload Location    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOS X    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable<br/>Eclipse IDE for Java Developers    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://www.eclipse.org/downloads\" target=\"_blank\">Official Website</a>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWindows    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable<br/>Eclipse IDE for Java Developers    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://www.eclipse.org/downloads\" target=\"_blank\">Official Website</a>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUbuntu    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable<br/>Eclipse IDE for Java Developers    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://www.eclipse.org/downloads\" target=\"_blank\">Official Website</a>    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nSee <a class=\"document-link \" href=\"#!/guide/Installing_Eclipse_and_ADT\">Installing Eclipse and ADT</a> for detailed instructions about how to install, including the program location and system environment variables that should be used.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004874_InstallingTitaniumAdvancedTools-Ant(optional)\">\n        <h3 class=\"heading \"><span>Ant (optional)</span></h3>\n    <p>\nApache Ant is the standard build tool for Java. It can be used to build Titanium native Android modules and to build the Titanium SDK for Android. It is not required to build Titanium applications for Android.    </p>\n    <p>\nYou can also use Eclipse and ADT to build native Android code, as described in <a class=\"document-link \" href=\"#!/guide/Installing_Eclipse_and_ADT\">Installing Eclipse and ADT</a>. If you are using Eclipse and ADT, Ant is optional, but you may want to install both (for example, to use Ant for command-line builds and Eclipse and ADT for debugging).    </p>\n    <p>\nAnt is not required for building, running, or distributing applications using the Titanium SDK.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nJava is a prerequisite for Ant, and should be installed first. See <a class=\"document-link \" href=\"#!/guide/Installing_Oracle_JDK\">Installing Oracle JDK</a> for instructions.    </p>\n    </div>\n    \n    <p>\nObtain the latest stable version of Apache Ant. Ant is supplied as a multi-platform archive. You can choose the archive format that's easiest for you to extract: all archives contain the same files.    </p>\n    <p>\n        <img src=\"images/download/attachments/29004836/download_05.png\" alt=\"images/download/attachments/29004836/download_05.png\" class=\"confluence-embedded-image image-center\" width=\"64\"/>\n            </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOperating System    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPackage Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDownload Location    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOS X    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://ant.apache.org/bindownload.cgi\" target=\"_blank\">Official Website</a>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWindows    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://ant.apache.org/bindownload.cgi\" target=\"_blank\">Official Website</a>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUbuntu    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest Stable    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDefault Repositories or <a class=\"external-link external-link\" href=\"http://ant.apache.org/bindownload.cgi\" target=\"_blank\">Official Website</a>    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nSee <a class=\"document-link \" href=\"#!/guide/Installing_Ant\">Installing Ant</a> for detailed instructions about how to install, including the program location and system environment variables that should be used.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004874\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Installing Titanium Advanced Tools"});