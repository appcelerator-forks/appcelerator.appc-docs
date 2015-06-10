Ext.data.JsonP['Proxy_Property_Requires']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Proxy Property Requires</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845673\" class=\"content\">\n            <h1>Proxy Property Requires</h1>\n    <p>\nDemonstrates using Require and Widget elements to create Titanium proxy properties.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App folder location</div>\n        \n    <p>\n<i class=\" \">alloy</i>/test/apps/<strong class=\" \">advanced/proxy_property_requires</strong>    </p>\n    </div>\n    \n    <p>\nFor example, as shown below, your main Alloy application can define a &lt;Window/&gt; element that uses a &lt;Require/&gt; element to include an external file that defines the Window element's <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window-property-rightNavButton\">leftNavButton</a> and <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window-property-rightNavButton\">rightNavButton</a> views.    </p>\n    <p>\n        <img src=\"images/download/attachments/41845673/proxy_properties_1.png\" alt=\"images/download/attachments/41845673/proxy_properties_1.png\" class=\"confluence-embedded-image\" width=\"250\"/>\n            </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/index.xmml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Window id=</code><code class=\"string\">\"windowWindow\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"window\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Require src=</code><code class=\"string\">\"window\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Label&gt;This is a window&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Window&gt;</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/window.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;LeftNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">\"leftButton\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"left\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"showAlert\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/LeftNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">\"rightButton\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"right\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"showAlert\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nSimilarly, you can use a &lt;Widget/&gt; element to add TableViewSection and TableViewRow objects to a TableView, as shown below.    </p>\n    <p>\n        <img src=\"images/download/attachments/41845673/proxy_properties_2.png\" alt=\"images/download/attachments/41845673/proxy_properties_2.png\" class=\"confluence-embedded-image\" width=\"250\"/>\n            </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Window id=</code><code class=\"string\">\"staticWindow\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"static\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TableView id=</code><code class=\"string\">\"staticTable\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow id=</code><code class=\"string\">\"staticRow1\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"1\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow id=</code><code class=\"string\">\"staticRow2\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"2\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget id=</code><code class=\"string\">\"staticWidgetSection\"</code><code class=\"plain\"> src=</code><code class=\"string\">\"com.foo.widget\"</code><code class=\"plain\"> name=</code><code class=\"string\">\"section\"</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget id=</code><code class=\"string\">\"staticWidgetRow1\"</code><code class=\"plain\"> src=</code><code class=\"string\">\"com.foo.widget\"</code><code class=\"plain\"> name=</code><code class=\"string\">\"row\"</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget id=</code><code class=\"string\">\"staticWidgetRow2\"</code><code class=\"plain\"> src=</code><code class=\"string\">\"com.foo.widget\"</code><code class=\"plain\"> name=</code><code class=\"string\">\"row\"</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget id=</code><code class=\"string\">\"staticWidgetRow3\"</code><code class=\"plain\"> src=</code><code class=\"string\">\"com.foo.widget\"</code><code class=\"plain\"> name=</code><code class=\"string\">\"row\"</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow id=</code><code class=\"string\">\"staticRow3\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"3\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Window&gt;</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/com.foo.widget/section.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TableViewSection platform=</code><code class=\"string\">\"android\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;HeaderView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label&gt;Test&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/HeaderView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">\"android row\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">\"android row\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">\"android row\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TableViewSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TableViewSection platform=</code><code class=\"string\">\"ios,mobileweb\"</code><code class=\"plain\"> headerTitle=</code><code class=\"string\">\"Test\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">\"table row\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">\"table row\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">\"table row\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TableViewSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nNote that a <tt class=\" \">&lt;Widget/&gt;</tt> element is equivalent to a <tt class=\" \">&lt;Require/&gt;</tt> element with its <strong class=\" \">type</strong> attribute set to &quot;widget&quot;. For example, the following lines are equivalent:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Widget id=</code><code class=\"string\">\"staticWidgetSection\"</code><code class=\"plain\"> src=</code><code class=\"string\">\"com.foo.widget\"</code><code class=\"plain\"> name=</code><code class=\"string\">\"section\"</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;Require type=</code><code class=\"string\">\"widget\"</code><code class=\"plain\"> id=</code><code class=\"string\">\"staticWidgetSection\"</code><code class=\"plain\"> src=</code><code class=\"string\">\"com.foo.widget\"</code><code class=\"plain\"> name=</code><code class=\"string\">\"section\"</code><code class=\"plain\"> /&gt;</code></div>\n</div>\n</div>    <div class=\"section section-2 \" id=\"41845673_ProxyPropertyRequires-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/Proxy_Property_Requires\">Proxy Properties</a>    </p>\n</li></ul>    <p>\n    </p>\n    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845673\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Proxy Property Requires"});