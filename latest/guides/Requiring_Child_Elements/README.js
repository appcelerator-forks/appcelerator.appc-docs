Ext.data.JsonP['Requiring_Child_Elements']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Requiring Child Elements</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845675\" class=\"content\">\n            <h1>Requiring Child Elements</h1>\n    <p>\nDemonstrates how to use the <tt class=\" \">&lt;Require/&gt;</tt> and <tt class=\" \">&lt;Widget/&gt;</tt> elements to include external views and widgets. Also shows how to programmatically add child views declared inside a <tt class=\" \">&lt;Require/&gt;</tt> or <tt class=\" \">&lt;Widget/&gt;</tt> element to the parent.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App Folder Location</div>\n        \n    <p>\nalloy/test/apps/<strong class=\" \">advanced_require_children</strong>    </p>\n    </div>\n    \n        <img src=\"images/download/attachments/41845675/require-proxy-1.png\" alt=\"images/download/attachments/41845675/require-proxy-1.png\" class=\"confluence-embedded-image\" width=\"500\"/>\n            <p>\nThe sample application's views/index.xml file includes a &lt;<a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TabGroup\">TabGroup</a>/&gt; element that contains two &lt;<a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TabGroup\">Tab</a>/&gt; elements titled &quot;requires&quot; and &quot;widgets&quot;, respectively. The first Tab includes a &lt;Require/&gt; element whose source is the <strong class=\" \">views/requires/index.xml</strong> view, as shown below.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">\"requires\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window title=</code><code class=\"string\">\"requires\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Require src=</code><code class=\"string\">\"requires/index\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">\"widgets\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window title=</code><code class=\"string\">\"widgets\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Require src=</code><code class=\"string\">\"widgets/index\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nThe views/requires/index.xml view, in turn, includes three more Require elements that contain child elements.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">views/requires/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Require src=</code><code class=\"string\">\"requires/simple\"</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">\"leftside\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label&gt;hi there&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label&gt;I'm on the left side&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button onClick=</code><code class=\"string\">\"alertTitle\"</code><code class=\"plain\">&gt;left button&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Require&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Require src=</code><code class=\"string\">\"requires/simple\"</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">\"rightside\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label&gt;hi there&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label&gt;I'm on the right side&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button onClick=</code><code class=\"string\">\"alertTitle\"</code><code class=\"plain\">&gt;right button&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Require&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Require src=</code><code class=\"string\">\"requires/deep\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label color=</code><code class=\"string\">\"#42282F\"</code><code class=\"plain\">&gt;I'm </code><code class=\"value\">3</code><code class=\"plain\"> views deep&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Require&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nThe first two <tt class=\" \">&lt;Require/&gt;</tt> elements include the same file, <strong class=\" \">views/requires/simple.xml</strong>, that simply defines a single empty &lt;View/&gt; element:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/requires/simple.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;View/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nThe child elements declared inside the the &lt;Require/&gt; element are added programmatically to the parent view by the view-controller. The child elements are passed in the <tt class=\" \">children</tt> array passed to the view-controller on the <tt class=\" \">arguments</tt> object. The simple.js view-controller adds the child views of the &lt;Require/&gt; element to the parent view, referenced by <tt class=\" \">$.simple</tt>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">controllers/requires/simple.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var args = arguments[</code><code class=\"value\">0</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"comments\">// add children to simple container, if there are any</code></div>\n<div class=\"line\"><code class=\"plain\">_.each(args.children || [], function(child) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">'adding child '</code><code class=\"plain\"> + child.toString());</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// I can inject properties if I want</code></div>\n<div class=\"line\"><code class=\"plain\">    child.top = </code><code class=\"string\">'10dp'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// then add each child where ever I want</code></div>\n<div class=\"line\"><code class=\"plain\">    $.simple.add(child);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <p>\nThe other <tt class=\" \">&lt;Tab/&gt;</tt> element requires <strong class=\" \">views/widgets/index.xml</strong>, which contains a <tt class=\" \">&lt;Widget/&gt;</tt> element. The &lt;Widget/&gt; element's <tt class=\" \">src</tt> attribute specifies the name of the widget folder, relative to the app/widgets, folder to include. The &lt;Widget/&gt; element contains the following child views: a Label, an ImageView and a Button.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">views/widgets/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Widget src=</code><code class=\"string\">\"alloy.container\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label id=</code><code class=\"string\">\"title\"</code><code class=\"plain\">&gt;my title&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ImageView id=</code><code class=\"string\">\"image\"</code><code class=\"plain\"> image=</code><code class=\"string\">\"/logo.png\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">\"action\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"alertAction\"</code><code class=\"plain\">&gt;action button&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Widget&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nThe child views are are added programmatically to the main (empty) View. In this case, additional logic checks to see if a child view was passed as an argument before adding it to the parent view.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var args = arguments[</code><code class=\"value\">0</code><code class=\"plain\">] || {},</code></div>\n<div class=\"line\"><code class=\"plain\">    children = args.children || [];</code></div>\n<div class=\"line\"><code class=\"plain\">function addViewIfExists(id, parent) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var view;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// find the UI component by id</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (view = _.find(children, function(c) { </code><code class=\"keyword\">return</code><code class=\"plain\"> c.id === id; })) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// add a class to style it</code></div>\n<div class=\"line\"><code class=\"plain\">        $.addClass(view, id);</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// add the component to the given parent container</code></div>\n<div class=\"line\"><code class=\"plain\">        parent.add(view);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// add children to widget, using specific rules and order for each</code></div>\n<div class=\"line\"><code class=\"plain\">addViewIfExists(</code><code class=\"string\">'image'</code><code class=\"plain\">, $.titlebar);</code></div>\n<div class=\"line\"><code class=\"plain\">addViewIfExists(</code><code class=\"string\">'title'</code><code class=\"plain\">, $.titlebar);</code></div>\n<div class=\"line\"><code class=\"plain\">addViewIfExists(</code><code class=\"string\">'action'</code><code class=\"plain\">, $.content);</code></div>\n</div>\n</div>    <div class=\"section section-2 \" id=\"41845675_RequiringChildElements-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/Requiring_Child_Elements\">Adding Children Views</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/Requiring_Child_Elements\">Alloy Widgets</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845675\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Requiring Child Elements"});