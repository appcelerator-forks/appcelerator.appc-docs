Ext.data.JsonP['Modules_Map_Circle']({"tagname":"class","name":"Modules.Map.Circle","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 4.1.0","iphone 4.1.0","ipad 4.1.0"],"editurl":"https://github.com/appcelerator-modules/ti.map/edit/master/%MODULE_PATH%","description":["<p>The <code>Circle</code> object gives you low-level control over circles that can be added to a\n{@link Modules.Map.View map view}. A circle must have a <code>center</code> property and a <code>radius</code> set to appear on a map.</p>\n\n<p>Use the {@link Modules.Map#method-createCircle} method to create a circle.</p>"]},"private":null,"id":"class-Modules.Map.Circle","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"property-bubbleParent"},{"name":"center","tagname":"property","owner":"Modules.Map.Circle","meta":{},"id":"property-center"},{"name":"fillColor","tagname":"property","owner":"Modules.Map.Circle","meta":{"description":["<p>For information about color values, see the \"Colors\" section of {@link Titanium.UI}.</p>"]},"id":"property-fillColor"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0"]},"id":"property-lifecycleContainer"},{"name":"radius","tagname":"property","owner":"Modules.Map.Circle","meta":{},"id":"property-radius"},{"name":"strokeColor","tagname":"property","owner":"Modules.Map.Circle","meta":{"description":["<p>For information about color values, see the \"Colors\" section of {@link Titanium.UI}.</p>"]},"id":"property-strokeColor"},{"name":"strokeWidth","tagname":"property","owner":"Modules.Map.Circle","meta":{},"id":"property-strokeWidth"},{"name":"zIndex","tagname":"property","owner":"Modules.Map.Circle","meta":{"description":["<p>For iOS, the circles are drawn in the order in which they are added.</p>"],"platform":["android 4.1.0"]},"id":"property-zIndex"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-getBubbleParent"},{"name":"getCenter","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-getCenter"},{"name":"getFillColor","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-getFillColor"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-getLifecycleContainer"},{"name":"getRadius","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-getRadius"},{"name":"getStrokeColor","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-getStrokeColor"},{"name":"getStrokeWidth","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-getStrokeWidth"},{"name":"getZIndex","tagname":"method","owner":"Modules.Map.Circle","meta":{"platform":["android 4.1.0"]},"id":"method-getZIndex"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-setBubbleParent"},{"name":"setCenter","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-setCenter"},{"name":"setFillColor","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-setFillColor"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-setLifecycleContainer"},{"name":"setRadius","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-setRadius"},{"name":"setStrokeColor","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-setStrokeColor"},{"name":"setStrokeWidth","tagname":"method","owner":"Modules.Map.Circle","meta":{},"id":"method-setStrokeWidth"},{"name":"setZIndex","tagname":"method","owner":"Modules.Map.Circle","meta":{"platform":["android 4.1.0"]},"id":"method-setZIndex"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":5444,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-Map-Circle"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>4.1.0</li><li class='platform-iphone'\n        title='iPhone'>4.1.0</li><li class='platform-ipad'\n        title='iPad'>4.1.0</li></ul>","editurl":null,"description":"<p><p>The <code>Circle</code> object gives you low-level control over circles that can be added to a\n<a href=\"#!/api/Modules.Map.View\" rel=\"Modules.Map.View\" class=\"docClass\">map view</a>. A circle must have a <code>center</code> property and a <code>radius</code> set to appear on a map.</p>\n\n\n\n\n<p>Use the <a href=\"#!/api/Modules.Map-method-createCircle\" rel=\"Modules.Map-method-createCircle\" class=\"docClass\">Modules.Map.createCircle</a> method to create a circle.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Modules.Map.Circle"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 4.1.0'>Android 4.1.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 4.1.0'>iPhone 4.1.0</li><li class='platform-ipad' title='iPad since Titanium SDK 4.1.0'>iPad 4.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Modules.Map.Circle</strong></div></div></div><div class='doc-contents'><p>Represents a bounded area on the map.</p>\n\n<p><p>The <code>Circle</code> object gives you low-level control over circles that can be added to a\n<a href=\"#!/api/Modules.Map.View\" rel=\"Modules.Map.View\" class=\"docClass\">map view</a>. A circle must have a <code>center</code> property and a <code>radius</code> set to appear on a map.</p>\n\n\n\n\n<p>Use the <a href=\"#!/api/Modules.Map-method-createCircle\" rel=\"Modules.Map-method-createCircle\" class=\"docClass\">Modules.Map.createCircle</a> method to create a circle.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>4.1.0</li><li class='platform-iphone'\n        title='iPhone'>4.1.0</li><li class='platform-ipad'\n        title='iPad'>4.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul></div></div></div><div id='property-center' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-property-center' class='name expandable'>center</a><span> : <a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a>[]</span></div><div class='description'><div class='short'>Array with longitude and latitude values. ...</div><div class='long'><p>Array with longitude and latitude values. Can also be an object with longitude and latitude.</p>\n\n</div></div></div><div id='property-fillColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-property-fillColor' class='name expandable'>fillColor</a><span> : String</span></div><div class='description'><div class='short'>Color to use when shading the circle, as a color name or hex triplet. ...</div><div class='long'><p>Color to use when shading the circle, as a color name or hex triplet.</p>\n\n<p><p>For information about color values, see the \"Colors\" section of <a href=\"#!/api/Titanium.UI\" rel=\"Titanium.UI\" class=\"docClass\">Titanium.UI</a>.</p>\n\n</p><p>Default: black</p></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul></div></div></div><div id='property-radius' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-property-radius' class='name expandable'>radius</a><span> : Number</span></div><div class='description'><div class='short'>The radius of the circle, specified in meters. ...</div><div class='long'><p>The radius of the circle, specified in meters. It should be zero or greater.</p>\n\n</div></div></div><div id='property-strokeColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-property-strokeColor' class='name expandable'>strokeColor</a><span> : String</span></div><div class='description'><div class='short'>Color to use for the border of the circle, as a color name or hex triplet. ...</div><div class='long'><p>Color to use for the border of the circle, as a color name or hex triplet.</p>\n\n<p><p>For information about color values, see the \"Colors\" section of <a href=\"#!/api/Titanium.UI\" rel=\"Titanium.UI\" class=\"docClass\">Titanium.UI</a>.</p>\n\n</p><p>Default: black</p></div></div></div><div id='property-strokeWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-property-strokeWidth' class='name expandable'>strokeWidth</a><span> : Number</span></div><div class='description'><div class='short'>Line width in pixels to use when drawing the circle. ...</div><div class='long'><p>Line width in pixels to use when drawing the circle.</p>\n\n<p>Default: 10</p></div></div></div><div id='property-zIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-property-zIndex' class='name not-expandable'>zIndex</a><span> : Number</span></div><div class='description'><div class='short'><p>The order (depth) in which to display the circles.</p>\n\n</div><div class='long'><p>The order (depth) in which to display the circles.</p>\n\n<p><p>For iOS, the circles are drawn in the order in which they are added.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>4.1.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCenter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-getCenter' class='name expandable'>getCenter</a>( <span class='pre'></span> ) : <a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a>[]</div><div class='description'><div class='short'>Gets the value of the center property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Circle-property-center\" rel=\"Modules.Map.Circle-property-center\" class=\"docClass\">center</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFillColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-getFillColor' class='name expandable'>getFillColor</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the fillColor property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Circle-property-fillColor\" rel=\"Modules.Map.Circle-property-fillColor\" class=\"docClass\">fillColor</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRadius' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-getRadius' class='name expandable'>getRadius</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the radius property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Circle-property-radius\" rel=\"Modules.Map.Circle-property-radius\" class=\"docClass\">radius</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStrokeColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-getStrokeColor' class='name expandable'>getStrokeColor</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the strokeColor property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Circle-property-strokeColor\" rel=\"Modules.Map.Circle-property-strokeColor\" class=\"docClass\">strokeColor</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStrokeWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-getStrokeWidth' class='name expandable'>getStrokeWidth</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the strokeWidth property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Circle-property-strokeWidth\" rel=\"Modules.Map.Circle-property-strokeWidth\" class=\"docClass\">strokeWidth</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-getZIndex' class='name expandable'>getZIndex</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the zIndex property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Circle-property-zIndex\" rel=\"Modules.Map.Circle-property-zIndex\" class=\"docClass\">zIndex</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setCenter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-setCenter' class='name expandable'>setCenter</a>( <span class='pre'>center</span> )</div><div class='description'><div class='short'>Sets the value of the center property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Circle-property-center\" rel=\"Modules.Map.Circle-property-center\" class=\"docClass\">center</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>center</span> : Array&lt;<a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a>&gt;<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setFillColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-setFillColor' class='name expandable'>setFillColor</a>( <span class='pre'>fillColor</span> )</div><div class='description'><div class='short'>Sets the value of the fillColor property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Circle-property-fillColor\" rel=\"Modules.Map.Circle-property-fillColor\" class=\"docClass\">fillColor</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fillColor</span> : String<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setRadius' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-setRadius' class='name expandable'>setRadius</a>( <span class='pre'>radius</span> )</div><div class='description'><div class='short'>Sets the value of the radius property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Circle-property-radius\" rel=\"Modules.Map.Circle-property-radius\" class=\"docClass\">radius</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>radius</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setStrokeColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-setStrokeColor' class='name expandable'>setStrokeColor</a>( <span class='pre'>strokeColor</span> )</div><div class='description'><div class='short'>Sets the value of the strokeColor property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Circle-property-strokeColor\" rel=\"Modules.Map.Circle-property-strokeColor\" class=\"docClass\">strokeColor</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>strokeColor</span> : String<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setStrokeWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-setStrokeWidth' class='name expandable'>setStrokeWidth</a>( <span class='pre'>strokeWidth</span> )</div><div class='description'><div class='short'>Sets the value of the strokeWidth property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Circle-property-strokeWidth\" rel=\"Modules.Map.Circle-property-strokeWidth\" class=\"docClass\">strokeWidth</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>strokeWidth</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Circle'>Modules.Map.Circle</span></div><a href='#!/api/Modules.Map.Circle-method-setZIndex' class='name expandable'>setZIndex</a>( <span class='pre'>zIndex</span> )</div><div class='description'><div class='short'>Sets the value of the zIndex property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Circle-property-zIndex\" rel=\"Modules.Map.Circle-property-zIndex\" class=\"docClass\">zIndex</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zIndex</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});