Ext.data.JsonP['Studio_Release_Notes']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Studio Release Notes</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"40929417\" class=\"content\">\n            <h1>Studio Release Notes</h1>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio4.0.1ReleaseCandidate\">\n        <h2 class=\"heading \"><span>Studio 4.0.1 Release Candidate</span></h2>\n    <p>\nStudio 4.0.1 is a patch release, addressing high-priority issues from previous releases.    </p>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-FixedIssues\">\n        <h3 class=\"heading \"><span>Fixed Issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7415\" target=\"_blank\">TISTUD-7415</a>: Error using &quot;Cmd /&quot; to comment out a line    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7428\" target=\"_blank\">TISTUD-7428</a>: Studio launches Mobile Web in browser but returns &quot;Connection Refused&quot;    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7519\" target=\"_blank\">TISTUD-7519</a>: Update Home Tab Banner on Ti Studio    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7526\" target=\"_blank\">TISTUD-7526</a>: Remove samples view    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7531\" target=\"_blank\">TISTUD-7531</a>: Studio hangs when writing a line with an umlaut and a semicolon    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio4.0.0-21May2015\">\n        <h2 class=\"heading \"><span>Studio 4.0.0 - 21 May 2015</span></h2>\n    <p>\nStudio 4.0.0 is a feature release of Studio, introducing a number of new features, improvements and bug fixes. See the <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/issues/?filter=16719\" target=\"_blank\">full list of issues addressed in Release 4.0.0</a>.    </p>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-NewFeatures\">\n        <h3 class=\"heading \"><span>New Features</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nIntegration with the Appcelerator CLI.    </p>\n</li><li class=\" \">    <p>\nNew installers for OS X and Windows with silent installation capabilities, and prerequisite detection and installation, as well as a new UI for the OS X installer.  For details, see <a class=\"document-link \" href=\"#!/guide/Setting_up_Studio-section-37540095_SettingupStudio-InstallingStudio\">Setting up Studio: Installing Studio</a>.    </p>\n</li><li class=\" \">    <p>\nUpdate Eclipse base from 4.3 (Kepler) to 4.4 (Lunar).    </p>\n</li><li class=\" \">    <p>\nUpdate content assist in Alloy to suggest:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n&lt;ActionBar/&gt; element as child of a &lt;TabGroup/&gt; or &lt;Window/&gt; element    </p>\n</li><li class=\" \">    <p>\n&lt;AndroidView/&gt; element as a child of a &lt;AlertDialog/&gt; element    </p>\n</li><li class=\" \">    <p>\nTitanium.Andriod.ActionBar properties as attributes in the &lt;Menu/&gt; element    </p>\n</li><li class=\" \">    <p>\n&lt;FixedSpace/&gt; as a shorthand for &lt;Button systemButton=&ldquo;Ti.UI.iPhone.SystemButton.FIXED_SPACE&gt;    </p>\n</li><li class=\" \">    <p>\n&lt;KeyboardToolbar/&gt; element as a child of a &lt;TextArea/&gt; element    </p>\n</li><li class=\" \">    <p>\n&lt;LeftNavButtons/&gt; and &lt;RightNavButtons/&gt; as a child of a &lt;Window/&gt; element    </p>\n</li><li class=\" \">    <p>\nShorthand notation for Ti.UI.KEYBOARD_* and Ti.UI.RETURNKEY_* constants    </p>\n</li></ul></li><li class=\" \">    <p>\nAdd hyperlink detector to jump from i18n translation keys in JavaScript properties, TSS attributes, XML node text and XML localized attributes, such as <tt class=\" \">titleid</tt>, to their definition in <tt class=\" \">strings.xml</tt> files.  In an Alloy JavaScript, TSS or XML file, hold the <strong class=\" \">Command</strong> key for Macs or <strong class=\" \">Control</strong> key for Linux and Windows, then hover over a localized function with an i18n translation key.  The localized function turns into a hyperlink.  Click the hyperlink to jump to the entry in the <tt class=\" \">i18n/en/strings.xml</tt> file.  You can also click on the i18n translation key and hit the <strong class=\" \">F3</strong> key.  Previously, this feature was only supported with the localization functions in the XML files.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-KnownIssues\">\n        <h3 class=\"heading \"><span>Known Issues</span></h3>\n    <div class=\"section section-4 \" id=\"40929417_StudioReleaseNotes-MobileWebApplicationDoesNotLaunchintheBrowser\">\n        <h4 class=\"heading \"><span>Mobile Web Application Does Not Launch in the Browser</span></h4>\n    <p>\nAfter building a mobile web application in Studio, Studio does not launch the application in a browser (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7428\" target=\"_blank\">TISTUD-7428</a>).  To workaround this issue, create your own web server to launch the application.  Instructions will be available in the linked ticket.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.4.2-06March2015\">\n        <h2 class=\"heading \"><span>Studio 3.4.2 - 06 March 2015</span></h2>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-BugFixes\">\n        <h3 class=\"heading \"><span>Bug Fixes</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-18546\" target=\"_blank\">TIMOB-18546</a>:     <span style=\"color: #000000;\">\nLiveView: Incompatible with Node 0.12.    </span>\n    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.4.1-14November2014\">\n        <h2 class=\"heading \"><span>Studio 3.4.1 - 14 November 2014</span></h2>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-BugFixes.1\">\n        <h3 class=\"heading \"><span>Bug Fixes</span></h3>\n<ul class=\" \"><li class=\"p1 \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7032\" target=\"_blank\">TISTUD-7032</a>: The default size of modules table in tiapp.xml editor is reduced    </p>\n</li><li class=\"p1 \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7018\" target=\"_blank\">TISTUD-7018</a>: Yosemite: Node.ACS update is not listed in Studio update wizard    </p>\n</li><li class=\"p1 \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7015\" target=\"_blank\">TISTUD-7015</a>: Studio creates android L x86_64 bit emulator rather than an arm emulator by default if no emulator exists    </p>\n</li><li class=\"p1 \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6940\" target=\"_blank\">TISTUD-6940</a>: Content Assist not showing many of the methods and properties of objects    </p>\n</li><li class=\"p1 \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6681\" target=\"_blank\">TISTUD-6681</a>: Android is not detected on Studio Dashboard if only Android L (5.0) is installed    </p>\n</li><li class=\"p1 \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-1335\" target=\"_blank\">TISTUD-1335</a>: Content Assist: JavaScript class objects generate non-static proposals    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.4.0-29September2014\">\n        <h2 class=\"heading \"><span>Studio 3.4.0 - 29 September 2014</span></h2>\n    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/issues/?filter=16428\" target=\"_blank\">Full List of Issues Addressed in Release 3.4.0</a>    </p>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-NewFeatures.1\">\n        <h3 class=\"heading \"><span>New Features</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nSupport building a Titanium application with the iOS 8 SDK and Xcode 6.    </p>\n</li><li class=\" \">    <p>\nUpdate content assist to support shorthand notation for left and right navigation buttons.  When using the <tt class=\" \">LeftNavButton</tt> or <tt class=\" \">RightNavButton</tt> elements, content assist provides suggestions for button attributes.    </p>\n</li><li class=\" \">    <p>\nAdd ability to extract strings in Alloy XML files to i18n files.  In the Alloy XML file, place the cursor on the text you want to extract to the <tt class=\" \">strings.xml</tt> file.  Right-click, then select <strong class=\" \">Source</strong> &gt; <strong class=\" \">Externalize Strings...</strong>.  The <strong class=\" \">Externalize String</strong> dialog appears asking you to enter a key for the string.  Enter a key name, then click <strong class=\" \">OK.</strong>  The text in the Alloy XML file is replaced with the localized function <tt class=\" \">L()</tt> with the key name you entered, and an entry will be added to  <tt class=\" \">i18n/en/strings.xml</tt> with the key name and text.  If this file does not exist, Studio will create it.  This feature only supports adding entries to the <tt class=\" \">strings.xml</tt> file in the English (<tt class=\" \">en</tt>) subfolder.    </p>\n</li><li class=\" \">    <p>\nAdd hyperlink detector to jump from i18n translation keys in Alloy View XML attributes to their definition in <tt class=\" \">strings.xml</tt> files.  In an Alloy XML file, hold the <strong class=\" \">Command</strong> key for Macs or <strong class=\" \">Control</strong> key for Linux and Windows, then hover over a localized function with an i18n translation key.  The localized function turns into a hyperlink.  Click the hyperlink to jump to the entry in the <tt class=\" \">i18n/en/strings.xml</tt> file.  This feature only works for XML attributes but will support node text and the localized attributes without the localization functions, such as <tt class=\" \">titleid</tt>, in a future release.    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.3.0-17July2014\">\n        <h2 class=\"heading \"><span>Studio 3.3.0 - 17 July 2014</span></h2>\n    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/issues/?filter=16138\" target=\"_blank\">Full List of Issues Addressed in Release 3.3.0</a>    </p>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-NewFeatures.2\">\n        <h3 class=\"heading \"><span>New Features</span></h3>\n    <div class=\"section section-4 \" id=\"40929417_StudioReleaseNotes-AlloyProjectImprovements\">\n        <h4 class=\"heading \"><span>Alloy Project Improvements</span></h4>\n    <p>\nThis release includes the following improvements for Alloy projects:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nContent assistance improvements (see next section).    </p>\n</li><li class=\" \">    <p>\nCreate new view and style files from the right-context menu.  Right-click on your project in the <strong class=\" \">Project Explorer</strong> view, then select <strong class=\" \">New</strong> &gt; <strong class=\" \">Alloy View</strong> or <strong class=\" \">New</strong> &gt; <strong class=\" \">Alloy Style</strong> to create a new view or style, respectively.    </p>\n</li><li class=\" \">    <p>\nNavigate to event handlers from the XML file to the controller file.  Hold the <strong class=\" \">Command</strong> key for Macs or <strong class=\" \">Control</strong> key for Linux and Windows, then click on the event handler in the XML file to navigate to method in the Controller file.    </p>\n</li><li class=\" \">    <p>\nNavigate to ID and class styles from the XML file to the TSS file.  Hold the <strong class=\" \">Command</strong> key for Macs or <strong class=\" \">Control</strong> key for Linux and Windows, then click on the ID or class in the XML file to navigate to the style in the TSS file.    </p>\n</li><li class=\" \">    <p>\nCreate event handlers in the corresponding controller.  Select the event handler in the XML file, then hold the <strong class=\" \">Command + 1</strong> keys for Macs or<strong class=\" \"> Control + 1</strong> keys for Linux and Windows to bring up an action menu.  Double-click <strong class=\" \">Create event listener in controller file</strong> to create an empty function in the controller file.    </p>\n</li><li class=\" \">    <p>\nCreate ID and class styles in the corresponding TSS file.  Select the ID or class style in the XML file, then hold the <strong class=\" \">Command + 1</strong> keys for Macs or<strong class=\" \"> Control + 1</strong> keys for Linux and Windows to bring up an action menu.  Double-click <strong class=\" \">Create ruleset for ID/class in stylesheet</strong> to create an empty style in the TSS file.    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"40929417_StudioReleaseNotes-ContentAssistanceImprovements\">\n        <h4 class=\"heading \"><span>Content Assistance Improvements</span></h4>\n    <p>\nThis release includes the following content assistance improvements:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nAdd code assistance for methods that take constants as arguments. For example, suggests <tt class=\" \">Ti.Media.CAMERA_FRONT</tt> or <tt class=\" \">Ti.Media.CAMERA_REAR</tt> for the <tt class=\" \">Ti.Camera.swtichCamera</tt> method.    </p>\n</li><li class=\" \">    <p>\nAdd code assistance for proxy properties for XML elements in Alloy projects.  For example, suggests the <tt class=\" \">LeftNavButton</tt> or <tt class=\" \">RightNavButton</tt> elements as children of the <tt class=\" \">Window</tt> element.    </p>\n</li><li class=\" \">    <p>\nAdd code assistance for APIs in the <tt class=\" \">Alloy</tt> namespace.  For example, suggests <tt class=\" \">Alloy.Globals</tt> or <tt class=\" \">Alloy.CFG</tt> if only <tt class=\" \">Alloy.</tt> is typed.    </p>\n</li><li class=\" \">    <p>\nAdd hovers (info box when hovering on an API element) for XML elements, XML attributes and TSS attributes for Alloy projects.    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"40929417_StudioReleaseNotes-GenymotionSupport\">\n        <h4 class=\"heading \"><span>Genymotion Support</span></h4>\n    <p>\nThe Titanium toolchain now supports installing and launching your application on a Genymotion virtual device.  For more details, see <a class=\"document-link \" href=\"#!/guide/Installing_Genymotion\">Installing Genymotion</a>.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"40929417_StudioReleaseNotes-NewWindowsInstaller\">\n        <h4 class=\"heading \"><span>New Windows Installer</span></h4>\n    <p>\nThis release introduces a new installer for Windows.  The new installer helps guide or automatically installs necessary prerequisites for Titanium Studio and the Titanium SDK, such as the Oracle JDK, Node.js and Git.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-KnownIssues.1\">\n        <h3 class=\"heading \"><span>Known Issues</span></h3>\n    <div class=\"section section-4 \" id=\"40929417_StudioReleaseNotes-AlloyPlugin\">\n        <h4 class=\"heading \"><span>Alloy Plugin</span></h4>\n    <p>\nAlloy 1.4.0 includes changes to the Alloy plugin, which is used by Studio to compile and launch your project. These changes will be applied automatically the first time you build a project after updating to 1.4.0. However, because the first build uses the old plugin, there is a small chance that it will fail. Retrying the build should resolve the issue, or you can manually update the plugin with the following command:    </p>\n<pre class=\" \"><tt class=\" \">alloy install plugin [path_to_project] </tt></pre>    <p>\nIf you enter this command while in your project's folder, omit the path.    </p>\n    <p>\nCLI users are not affected by this change.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.2.3-01May2014\">\n        <h2 class=\"heading \"><span>Studio 3.2.3 - 01 May 2014</span></h2>\n    <p>\n20+ issues resolved. for a complete list, see the release notes section in <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/secure/IssueNavigator.jspa?mode=hide&amp;requestId=15940\" target=\"_blank\">JIRA</a>.    </p>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-Notableissues\">\n        <h3 class=\"heading \"><span>Notable issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-4930\" target=\"_blank\">TISTUD-4930</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5007\" target=\"_blank\">TISTUD-5007</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5732\" target=\"_blank\">TISTUD-5732</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5834\" target=\"_blank\">TISTUD-5834</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5913\" target=\"_blank\">TISTUD-5913</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5969\" target=\"_blank\">TISTUD-5969</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6038\" target=\"_blank\">TISTUD-6038</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6077\" target=\"_blank\">TISTUD-6077</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6109\" target=\"_blank\">TISTUD-6109</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6187\" target=\"_blank\">TISTUD-6187</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.2.2\">\n        <h2 class=\"heading \"><span>Studio 3.2.2</span></h2>\n    <p>\nNo updates.  This version was skipped.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.2.1-10February2014\">\n        <h2 class=\"heading \"><span>Studio 3.2.1 - 10 February 2014</span></h2>\n    <p>\n20+ issues resolved. for a complete list, see the release notes section in <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/secure/IssueNavigator.jspa?mode=hide&amp;requestId=15658\" target=\"_blank\">JIRA</a>.    </p>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-Notableissues.1\">\n        <h3 class=\"heading \"><span>Notable issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-4406\" target=\"_blank\">TISTUD-4406</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5247\" target=\"_blank\">TISTUD-5247</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5895\" target=\"_blank\">TISTUD-5895</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5937\" target=\"_blank\">TISTUD-5937</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5956\" target=\"_blank\">TISTUD-5956</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5981\" target=\"_blank\">TISTUD-5981</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5989\" target=\"_blank\">TISTUD-5989</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6007\" target=\"_blank\">TISTUD-6007</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6016\" target=\"_blank\">TISTUD-6016</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6086\" target=\"_blank\">TISTUD-6086</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.2.0-20December2013\">\n        <h2 class=\"heading \"><span>Studio 3.2.0 - 20 December 2013</span></h2>\n    <p>\nA major release with 300+ improvements and fixes. Here is a summary of the new features:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nBrand new platform installation and configuration wizard    </p>\n</li><li class=\" \">    <p>\nAsynchronous login to speed up startup time    </p>\n</li><li class=\" \">    <p>\nAuto-detection of connected devices with a streamlined launch mode interface    </p>\n</li><li class=\" \">    <p>\nOverhaul of the user interface    </p>\n</li><li class=\" \">    <p>\nUpgrade from Eclipse 3.7 (Indigo) to 4.3 (Kepler) to support Mac OS X 10.9 (Mavericks)    </p>\n</li><li class=\" \">    <p>\nSupport for creating Github forks    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-Notableissues.2\">\n        <h3 class=\"heading \"><span>Notable issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-1458\" target=\"_blank\">TISTUD-1458</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-1594\" target=\"_blank\">TISTUD-1594</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-2948\" target=\"_blank\">TISTUD-2948</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-3328\" target=\"_blank\">TISTUD-3328</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-3669\" target=\"_blank\">TISTUD-3669</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-3804\" target=\"_blank\">TISTUD-3804</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-4400\" target=\"_blank\">TISTUD-4400</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-4463\" target=\"_blank\">TISTUD-4463</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5060\" target=\"_blank\">TISTUD-5060</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5061\" target=\"_blank\">TISTUD-5061</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5200\" target=\"_blank\">TISTUD-5200</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5240\" target=\"_blank\">TISTUD-5240</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5312\" target=\"_blank\">TISTUD-5312</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5419\" target=\"_blank\">TISTUD-5419</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5444\" target=\"_blank\">TISTUD-5444</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5457\" target=\"_blank\">TISTUD-5457</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5467\" target=\"_blank\">TISTUD-5467</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5552\" target=\"_blank\">TISTUD-5552</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5570\" target=\"_blank\">TISTUD-5570</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5571\" target=\"_blank\">TISTUD-5571</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5822\" target=\"_blank\">TISTUD-5822</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40929417_StudioReleaseNotes-Studio3.1.3-18September2013\">\n        <h2 class=\"heading \"><span>Studio 3.1.3 - 18 September 2013</span></h2>\n    <p>\n20+ tickets addressed. For a complete list, see the release notes section in <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/secure/IssueNavigator.jspa?mode=hide&amp;requestId=15477\" target=\"_blank\">JIRA</a>.    </p>\n    <div class=\"section section-3 \" id=\"40929417_StudioReleaseNotes-Notableissues.3\">\n        <h3 class=\"heading \"><span>Notable issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-3295\" target=\"_blank\">TISTUD-3295</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5093\" target=\"_blank\">TISTUD-5093</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5224\" target=\"_blank\">TISTUD-5224</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5281\" target=\"_blank\">TISTUD-5281</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5283\" target=\"_blank\">TISTUD-5283</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5381\" target=\"_blank\">TISTUD-5381</a>    </p>\n</li></ul>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=40929417\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Studio Release Notes"});