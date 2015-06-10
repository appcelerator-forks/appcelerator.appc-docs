Ext.data.JsonP['Modules_Nfc_TagTechnologyNdefFormatable']({"tagname":"class","name":"Modules.Nfc.TagTechnologyNdefFormatable","extends":"Modules.Nfc.TagTechnology","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 1.1.0"],"editurl":"https://github.com/appcelerator-modules/ti.nfc/edit/master/%MODULE_PATH%","description":["<p>Use the {@link Modules.Nfc#method-createTagTechnologyNdefFormatable} method to create this tag technology.</p>\n\n<p>See also:\n<a href=\"http://developer.android.com/reference/android/nfc/tech/NdefFormatable.html\">NdefFormatable</a></p>"]},"private":null,"id":"class-Modules.Nfc.TagTechnologyNdefFormatable","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0"]},"id":"property-lifecycleContainer"},{"name":"tag","tagname":"property","owner":"Modules.Nfc.TagTechnology","meta":{"description":["<p>When a tag is discovered, a {@link Modules.Nfc.NfcTag} proxy is created and passed as a property to the <code>onNdefDiscovered</code>, <code>onTagDiscovered</code>, or\n<code>onTechDiscovered</code> callback (see {@link NdefDiscovered}).</p>"]},"id":"property-tag"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0"]},"id":"method-applyProperties"},{"name":"close","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-close"},{"name":"connect","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{"description":["<p>Only one Tag Technology proxy can be connected to a Tag at a time.</p>"]},"id":"method-connect"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"format","tagname":"method","owner":"Modules.Nfc.TagTechnologyNdefFormatable","meta":{},"id":"method-format"},{"name":"formatReadOnly","tagname":"method","owner":"Modules.Nfc.TagTechnologyNdefFormatable","meta":{},"id":"method-formatReadOnly"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-getLifecycleContainer"},{"name":"getTag","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-getTag"},{"name":"isConnected","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-isConnected"},{"name":"isValid","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-isValid"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-setLifecycleContainer"},{"name":"setTag","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-setTag"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":17168,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-Nfc-TagTechnologyNdefFormatable"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>1.1.0</li></ul>","editurl":null,"description":"<p><p>Use the <a href=\"#!/api/Modules.Nfc-method-createTagTechnologyNdefFormatable\" rel=\"Modules.Nfc-method-createTagTechnologyNdefFormatable\" class=\"docClass\">Modules.Nfc.createTagTechnologyNdefFormatable</a> method to create this tag technology.</p>\n\n\n\n\n<p>See also:\n<a href=\"http://developer.android.com/reference/android/nfc/tech/NdefFormatable.html\">NdefFormatable</a></p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Modules.Nfc.TagTechnology","Modules.Nfc.TagTechnologyNdefFormatable"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 1.1.0'>Android 1.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='docClass'>Modules.Nfc.TagTechnology</a></div><div class='subclass'> &gt; <strong>Modules.Nfc.TagTechnologyNdefFormatable</strong></div></div></div><div class='doc-contents'><p>Provide access to NDEF format operations on a <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a>.</p>\n\n<p><p>Use the <a href=\"#!/api/Modules.Nfc-method-createTagTechnologyNdefFormatable\" rel=\"Modules.Nfc-method-createTagTechnologyNdefFormatable\" class=\"docClass\">Modules.Nfc.createTagTechnologyNdefFormatable</a> method to create this tag technology.</p>\n\n\n\n\n<p>See also:\n<a href=\"http://developer.android.com/reference/android/nfc/tech/NdefFormatable.html\">NdefFormatable</a></p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>1.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul></div></div></div><div id='property-tag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-property-tag' class='name not-expandable'>tag</a><span> : <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a></span></div><div class='description'><div class='short'><p>The tag technology that has been discovered.</p>\n\n</div><div class='long'><p>The tag technology that has been discovered.</p>\n\n<p><p>When a tag is discovered, a <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a> proxy is created and passed as a property to the <code>onNdefDiscovered</code>, <code>onTagDiscovered</code>, or\n<code>onTechDiscovered</code> callback (see <a href=\"#!/api/NdefDiscovered\" rel=\"NdefDiscovered\" class=\"docClass\">NdefDiscovered</a>).</p>\n\n</p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-close' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-close' class='name expandable'>close</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Disable I/O operations to the tag and release resources. ...</div><div class='long'><p>Disable I/O operations to the tag and release resources.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-connect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enable I/O operations to the tag. ...</div><div class='long'><p>Enable I/O operations to the tag.</p>\n\n<p><p>Only one Tag Technology proxy can be connected to a Tag at a time.</p>\n\n</p><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Nfc.TagTechnologyNdefFormatable'>Modules.Nfc.TagTechnologyNdefFormatable</span></div><a href='#!/api/Modules.Nfc.TagTechnologyNdefFormatable-method-format' class='name expandable'>format</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Format a tag as NDEF, and write a Modules.Nfc.NdefMessage. ...</div><div class='long'><p>Format a tag as NDEF, and write a <a href=\"#!/api/Modules.Nfc.NdefMessage\" rel=\"Modules.Nfc.NdefMessage\" class=\"docClass\">Modules.Nfc.NdefMessage</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/Modules.Nfc.NdefMessage\" rel=\"Modules.Nfc.NdefMessage\" class=\"docClass\">Modules.Nfc.NdefMessage</a><div class='sub-desc'><p>The NDEF message to write after formatting, can be null.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-formatReadOnly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Nfc.TagTechnologyNdefFormatable'>Modules.Nfc.TagTechnologyNdefFormatable</span></div><a href='#!/api/Modules.Nfc.TagTechnologyNdefFormatable-method-formatReadOnly' class='name expandable'>formatReadOnly</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Formats a tag as NDEF, write a Modules.Nfc.NdefMessage, and make read-only. ...</div><div class='long'><p>Formats a tag as NDEF, write a <a href=\"#!/api/Modules.Nfc.NdefMessage\" rel=\"Modules.Nfc.NdefMessage\" class=\"docClass\">Modules.Nfc.NdefMessage</a>, and make read-only.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/Modules.Nfc.NdefMessage\" rel=\"Modules.Nfc.NdefMessage\" class=\"docClass\">Modules.Nfc.NdefMessage</a><div class='sub-desc'><p>The NDEF message to write after formatting</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-getTag' class='name expandable'>getTag</a>( <span class='pre'></span> ) : <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a></div><div class='description'><div class='short'>Gets the value of the tag property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Nfc.TagTechnology-property-tag\" rel=\"Modules.Nfc.TagTechnology-property-tag\" class=\"docClass\">tag</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isConnected' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-isConnected' class='name expandable'>isConnected</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if connect has completed, and close has not been called, and the tag is not known to be out of range. ...</div><div class='long'><p>Returns true if connect has completed, and close has not been called, and the tag is not known to be out of range.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isValid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-isValid' class='name expandable'>isValid</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if this tag technology was successfully obtained. ...</div><div class='long'><p>Return true if this tag technology was successfully obtained.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setTag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-setTag' class='name expandable'>setTag</a>( <span class='pre'>tag</span> )</div><div class='description'><div class='short'>Sets the value of the tag property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Nfc.TagTechnology-property-tag\" rel=\"Modules.Nfc.TagTechnology-property-tag\" class=\"docClass\">tag</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tag</span> : <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});