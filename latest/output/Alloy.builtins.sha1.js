Ext.data.JsonP['Alloy_builtins_sha1']({"tagname":"class","name":"Alloy.builtins.sha1","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"editurl":"https://github.com/appcelerator/alloy/edit/master/Alloy/builtins/sha1.js"},"private":null,"id":"class-Alloy.builtins.sha1","members":{"cfg":[],"property":[],"method":[{"name":"b64_hmac_sha1","tagname":"method","owner":"Alloy.builtins.sha1","meta":{},"id":"method-b64_hmac_sha1"},{"name":"b64_sha1","tagname":"method","owner":"Alloy.builtins.sha1","meta":{},"id":"method-b64_sha1"},{"name":"hex_hmac_sha1","tagname":"method","owner":"Alloy.builtins.sha1","meta":{},"id":"method-hex_hmac_sha1"},{"name":"hex_sha1","tagname":"method","owner":"Alloy.builtins.sha1","meta":{},"id":"method-hex_sha1"},{"name":"str_hmac_sha1","tagname":"method","owner":"Alloy.builtins.sha1","meta":{},"id":"method-str_hmac_sha1"},{"name":"str_sha1","tagname":"method","owner":"Alloy.builtins.sha1","meta":{},"id":"method-str_sha1"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":33,"files":[{"filename":"alloy.js","href":"alloy2.html#Alloy-builtins-sha1"},{"filename":"sha1.js","href":"sha1.html#Alloy-builtins-sha1"}],"html_meta":{"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>A collection of utilities for calculating SHA-1 or HMAC-SHA-1 values.\nTo use the sha1 builtin library,\nrequire it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>\n\n<pre><code>var sha1 = require('alloy/sha1');\nvar sha1_digest = sha1.hex_sha1('The quick brown fox jumps over the lazy dog.');\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-b64_hmac_sha1' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.sha1'>Alloy.builtins.sha1</span></div><a href='#!/api/Alloy.builtins.sha1-method-b64_hmac_sha1' class='name expandable'>b64_hmac_sha1</a>( <span class='pre'>key, data</span> ) : String</div><div class='description'><div class='short'>Calculates the HMAC-SHA-1 of a key and some data, and returns the value in base-64. ...</div><div class='long'><p>Calculates the HMAC-SHA-1 of a key and some data, and returns the value in base-64.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Key to use.</p>\n</div></li><li><span class='pre'>data</span> : String<div class='sub-desc'><p>Data to use.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>HMAC-SHA-1 value of the string in base-64.</p>\n</div></li></ul></div></div></div><div id='method-b64_sha1' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.sha1'>Alloy.builtins.sha1</span></div><a href='#!/api/Alloy.builtins.sha1-method-b64_sha1' class='name expandable'>b64_sha1</a>( <span class='pre'>s</span> ) : String</div><div class='description'><div class='short'>Calculates the SHA-1 of a string and returns the value in base-64. ...</div><div class='long'><p>Calculates the SHA-1 of a string and returns the value in base-64.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : String<div class='sub-desc'><p>String to use.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>SHA-1 value of the string in base-64.</p>\n</div></li></ul></div></div></div><div id='method-hex_hmac_sha1' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.sha1'>Alloy.builtins.sha1</span></div><a href='#!/api/Alloy.builtins.sha1-method-hex_hmac_sha1' class='name expandable'>hex_hmac_sha1</a>( <span class='pre'>key, data</span> ) : String</div><div class='description'><div class='short'>Calculates the HMAC-SHA-1 of a key and some data, and returns the value in hexadecimal. ...</div><div class='long'><p>Calculates the HMAC-SHA-1 of a key and some data, and returns the value in hexadecimal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Key to use.</p>\n</div></li><li><span class='pre'>data</span> : String<div class='sub-desc'><p>Data to use.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>HMAC-SHA-1 value of the string in hexadecimal.</p>\n</div></li></ul></div></div></div><div id='method-hex_sha1' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.sha1'>Alloy.builtins.sha1</span></div><a href='#!/api/Alloy.builtins.sha1-method-hex_sha1' class='name expandable'>hex_sha1</a>( <span class='pre'>s</span> ) : String</div><div class='description'><div class='short'>Calculates the SHA-1 of a string and returns the value in hexadecimal. ...</div><div class='long'><p>Calculates the SHA-1 of a string and returns the value in hexadecimal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : String<div class='sub-desc'><p>String to use.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>SHA-1 value of the string in hexadecimal.</p>\n</div></li></ul></div></div></div><div id='method-str_hmac_sha1' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.sha1'>Alloy.builtins.sha1</span></div><a href='#!/api/Alloy.builtins.sha1-method-str_hmac_sha1' class='name expandable'>str_hmac_sha1</a>( <span class='pre'>key, data</span> ) : String</div><div class='description'><div class='short'>Calculates the HMAC-SHA-1 of a key and some data, and returns the value as a string. ...</div><div class='long'><p>Calculates the HMAC-SHA-1 of a key and some data, and returns the value as a string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Key to use.</p>\n</div></li><li><span class='pre'>data</span> : String<div class='sub-desc'><p>Data to use.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>HMAC-SHA-1 value of the string as a string.</p>\n</div></li></ul></div></div></div><div id='method-str_sha1' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.sha1'>Alloy.builtins.sha1</span></div><a href='#!/api/Alloy.builtins.sha1-method-str_sha1' class='name expandable'>str_sha1</a>( <span class='pre'>s</span> ) : String</div><div class='description'><div class='short'>Calculates the SHA-1 of a string and returns the value as a string. ...</div><div class='long'><p>Calculates the SHA-1 of a string and returns the value as a string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : String<div class='sub-desc'><p>String to use.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>SHA-1 value of the string as a string.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});