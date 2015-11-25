Ext.data.JsonP['search_query']({"guide":"<h1 id='search_query-section-search-and-query-apis'>Search and Query APIs</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ul>\n<li><a href='#!/guide/search_query-section-query-api-overview'>Query API Overview</a><ul><li><a href='#!/guide/search_query-section-query-api-availability'>Query API Availability</a><li><a href='#!/guide/search_query-section-query-parameters'>Query parameters</a><ul><li><a href='#!/guide/search_query-section-count'>count</a><li><a href='#!/guide/search_query-section-page'>page</a><li><a href='#!/guide/search_query-section-per_page'>per_page</a><li><a href='#!/guide/search_query-section-limit'>limit</a><li><a href='#!/guide/search_query-section-new_pagination'>new_pagination</a><li><a href='#!/guide/search_query-section-skip'>skip</a><li><a href='#!/guide/search_query-section-where'>where</a><li><a href='#!/guide/search_query-section-order'>order</a><li><a href='#!/guide/search_query-section-sel'>sel</a><li><a href='#!/guide/search_query-section-unsel'>unsel</a></ul></ul><li><a href='#!/guide/search_query-section-query-pagination'>Query Pagination</a><ul><li><a href='#!/guide/search_query-section-range-based-query-pagination-examples'>Range-based Query Pagination Examples</a><ul><li><a href='#!/guide/search_query-section-query-on-custom-field-results-in-ascending-order'>Query on Custom Field, Results in Ascending Order</a><li><a href='#!/guide/search_query-section-query-on-custom-field-results-in-descending-order'>Query on Custom Field, Results in Descending Order</a><li><a href='#!/guide/search_query-section-query-for-next-page-of-results-results-in-ascending-order'>Query for Next Page of Results, Results in Ascending Order</a><li><a href='#!/guide/search_query-section-query-for-previous-page-of-results'>Query for Previous Page of Results</a></ul></ul><li><a href='#!/guide/search_query-section-search-api-overview'>Search API Overview</a><ul><li><a href='#!/guide/search_query-section-search-api-parameters'>Search API Parameters</a><ul><li><a href='#!/guide/search_query-section-page'>page</a><li><a href='#!/guide/search_query-section-per_page'>per_page</a><li><a href='#!/guide/search_query-section-q'>q</a></ul><li><a href='#!/guide/search_query-section-search-api-availability'>Search API Availability</a></ul>\n</div>\n\n<p>ArrowDB provides APIs for querying and searching ArrowDB objects.\nThe query APIs allow you to perform custom database-style searches, while search APIs perform a full text search using the ArrowDB search engine.</p>\n\n<p class=\"note\">The search API is deprecated since Release 1.3.0. Applications created before Arrow\nCloud Release 1.3.0 can continue to use the deprecated search API, but new applications will need to use\nthe query API with the <code>$text</code> query operator.</p>\n\n\n<h2 id='search_query-section-query-api-overview'>Query API Overview</h2>\n\n<p>The query API provides an interface for applying database-style query constraints on predefined objects\nand <a href=\"#!/guide/customfields\">custom fields</a>.</p>\n\n<p>When no query parameters are provided, all objects of the specified type are returned with\ndefault pagination. You can control pagination of queries with the <code>skip</code> and <code>limit</code> parameters, or by\nusing a custom <code>where</code> clause. See <a href=\"#!/guide/search_query-section-query-pagination\">Query Pagination</a>\nfor more information.</p>\n\n<p>You can also control the sort order of query results using the <code>order</code> parameter,\nand specify the fields you want to include (or exclude) from results using the <code>sel</code> and\n<code>unsel</code> query parameters.</p>\n\n<h3 id='search_query-section-query-api-availability'>Query API Availability</h3>\n\n<p>The following ArrowDB object provide query methods: <a href=\"#!/api/ACLs-method-query\" rel=\"ACLs-method-query\" class=\"docClass\">ACLs</a>, <a href=\"#!/api/Chats-method-query\" rel=\"Chats-method-query\" class=\"docClass\">Chats</a>,\n<a href=\"#!/api/Checkins-method-query\" rel=\"Checkins-method-query\" class=\"docClass\">Checkins</a>, <a href=\"#!/api/CustomObjects-method-query\" rel=\"CustomObjects-method-query\" class=\"docClass\">CustomObjects</a>, <a href=\"#!/api/Events-method-query\" rel=\"Events-method-query\" class=\"docClass\">Events</a>,\n<a href=\"#!/api/Files-method-query\" rel=\"Files-method-query\" class=\"docClass\">Files</a>, <a href=\"#!/api/GeoFences-method-query\" rel=\"GeoFences-method-query\" class=\"docClass\">GeoFences</a>,\n<a href=\"#!/api/KeyValues-method-query\" rel=\"KeyValues-method-query\" class=\"docClass\">KeyValues</a>, <a href=\"#!/api/Likes-method-query\" rel=\"Likes-method-query\" class=\"docClass\">Likes</a>, <a href=\"#!/api/Logs\" rel=\"Logs\" class=\"docClass\">Logs</a>,\n<a href=\"#!/api/Messages-method-query\" rel=\"Messages-method-query\" class=\"docClass\">Messages</a>, <a href=\"#!/api/Photos-method-query\" rel=\"Photos-method-query\" class=\"docClass\">Photos</a>, <a href=\"#!/api/Places-method-query\" rel=\"Places-method-query\" class=\"docClass\">Places</a>,\n<a href=\"#!/api/Posts-method-query\" rel=\"Posts-method-query\" class=\"docClass\">Posts</a>, <a href=\"#!/api/PushNotifications-method-query\" rel=\"PushNotifications-method-query\" class=\"docClass\">PushNotifications</a>,\n<a href=\"#!/api/PushSchedules-method-query\" rel=\"PushSchedules-method-query\" class=\"docClass\">PushSchedules</a>, <a href=\"#!/api/Reviews-method-query\" rel=\"Reviews-method-query\" class=\"docClass\">Reviews</a>, <a href=\"#!/api/Statuses-method-query\" rel=\"Statuses-method-query\" class=\"docClass\">Statuses</a>,\n and <a href=\"#!/api/Users-method-query\" rel=\"Users-method-query\" class=\"docClass\">Users</a>.</p>\n\n<p>For security reasons, when querying for <a href=\"#!/api/Users\" rel=\"Users\" class=\"docClass\">Users</a> the <a href=\"#!/api/Users-property-email\" rel=\"Users-property-email\" class=\"docClass\">email</a> field is not returned\nin the User object unless you have <a href=\"#!/guide/admin_access\">admin access</a>.</p>\n\n<h3 id='search_query-section-query-parameters'>Query parameters</h3>\n\n<p>The following parameters are available for query operations:</p>\n\n<ul>\n<li><code>count</code></li>\n<li><code>limit</code> and <code>skip</code></li>\n<li><code>where</code></li>\n<li><code>order</code></li>\n<li><code>sel</code></li>\n<li><code>unsel</code></li>\n<li><code>page</code></li>\n<li><code>per_page</code></li>\n</ul>\n\n\n<h4 id='search_query-section-count'>count</h4>\n\n<p>If the query includes <code>count=true</code>, the response's meta object contains a <code>count</code> field\nwhose value is the total number of objects that matched the query criteria.\nIf the query matches more than 5000 objects, the count field contains the value \"5000+\". For more information, see\n<a href=\"#!/guide/search_query-section-query-pagination\">Query Pagination</a>.</p>\n\n<h4 id='search_query-section-page'>page</h4>\n\n<p class=\"note\">\nStarting in ArrowDB 1.1.5, page and per_page are no longer supported in query operations. \nApplications should instead use <strong>skip</strong> and <strong>limit</strong> \nquery parameters.\n</p>\n\n\n<h4 id='search_query-section-per_page'>per_page</h4>\n\n<p class=\"note\">\nStarting in ArrowDB 1.1.5, page and per_page are no longer supported in query operations. \nApplications should instead use <strong>skip</strong> and <strong>limit</strong>\nquery parameters.\n</p>\n\n\n<h4 id='search_query-section-limit'>limit</h4>\n\n<p>The number of records to fetch. The value must be greater than 0, and no greater than\n1000, or an HTTP 400 (Bad Request) error will be returned. Default value of <code>limit</code> is 10.</p>\n\n<h4 id='search_query-section-new_pagination'>new_pagination</h4>\n\n<p>When <code>new_pagination=true</code> is included in a query, the number of records evaluated in the database is limited to 5000.</p>\n\n<p>By default, ArrowDB puts no limit on the number of records that are evaluated\nin the database. This means, for example, that if you execute an open-ended query for all ArrowDB objects of some type, and apply a sort and filter on the results, all records in the database are evaluated, sorted and filtered in memory.</p>\n\n<p>For applications that have relatively small numbers of total\nrecords (&lt; 5000) this operation can by completed efficiently with no\nnoticeable impact on your application's performance. However, if a table\nhas a very large number (>= 1 million) records these kinds of operations are\nvery inefficient, and your users will notice a performance hit.</p>\n\n<h4 id='search_query-section-skip'>skip</h4>\n\n<p>The number of records to skip. The value must be greater than or equal to 0, and no greater\nthan 4999, or an HTTP 400 error will be returned. To skip 5000 records or more\nyou need to perform a range-based query. See\n<a href=\"#!/guide/search_query-section-query-pagination\">Query Pagination</a> for more information.</p>\n\n<h4 id='search_query-section-where'>where</h4>\n\n<p>Constrains values for fields. The value should be encoded JSON. Each value in the search query needs\nto be less that 1024 bytes.  If the value is larger than 1024 bytes, the query does not return any\nresults.</p>\n\n<p>Each type of ArrowDB object has a set of predefined fields that can be queried with the <code>where</code> operator.\nSee each object's individual <code>query</code> method for details.</p>\n\n<p>In addition, you can query the <a href=\"#!/guide/customfields\">custom fields</a> on any object. Note, however,\nthat you can only query simple values, such as Strings, Dates, Numbers, or Booleans.\nIf a custom field takes an array or object as a value, you can't query any of the values stored inside the array or object.</p>\n\n<p>For more information, see <a href=\"#!/guide/customfields-section-supported-data-types\">Supported Data Types</a>.</p>\n\n<p>Currently, ArrowDB does not support case insensitive query. To perform case insensitive query\non a field, save an additional normalized copy of the original field and perform the query on the\nnormalized field instead.</p>\n\n<p>To perform an exact match on a field, for example, to  search for users with <code>first_name</code>\nmatching \"joe\", use:</p>\n\n<pre><code>where={\"first_name\": \"joe\"}\n</code></pre>\n\n<p>You can add more search criteria by adding them together. For example, to search for\nusers with <code>first_name</code> matching \"joe\", <code>favorite_color</code> matching \"blue\" and <code>age</code> of\n28, use the following query:</p>\n\n<pre><code>where={\"age\": 28, \"favorite_color\": \"blue\", \"first_name\" : \"joe\"}\n</code></pre>\n\n<p>For non-exact matches, <code>where</code> supports these options:</p>\n\n<table class=\"doc-table\">\n    <tr>\n        <th>Operator</th><th>Summary</th>\n    </tr>\n    <tr>\n        <td><code>$lt</code></td>\n        <td>Less than</td>\n    </tr>\n    <tr>\n        <td><code>$lte</code></td>\n        <td>Less than or equal to</td>\n     </tr>\n    <tr>\n        <td><code>$gt</code></td>\n        <td>Greater than</td>\n     </tr>\n    <tr>\n        <td><code>$gte</code></td>\n        <td>Greater than or equal to</td>\n     </tr>\n    <tr>\n        <td><code>$ne</code></td>\n        <td>Not equal to</td>\n     </tr>\n    <tr>\n        <td><code>$in</code></td>\n        <td>Contained in, allows you to specify an array of possible matches</td>\n     </tr>\n    <tr>\n        <td><code>$nin</code></td>\n        <td>Not contained in, it selects objects for which the specified field does not have any value in the specified array </td>\n     </tr>\n    <tr>\n        <td><code>$or</code></td>\n        <td>Use boolean or in a query ,an array of expressions, any of which can match</td>\n     </tr>\n    <tr>\n        <td><code>$nor</code></td>\n        <td>A boolean or expression to do queries, you give $nor a list of expressions, none of which can match the query </td>\n     </tr>\n    <tr>\n        <td><code>$and</code></td>\n        <td>Give $and an array of expressions, all of which must match the query </td>\n     </tr>\n    <tr>\n        <td><code>$all</code></td>\n        <td>The $all operator is similar to $in, but instead of matching any value in the specified array all values in the array must be matched </td>\n     </tr>\n    <tr>\n        <td><code>$elemMatch</code></td>\n        <td>Give $elemMatch an expression to match against elements in an array</td>\n     </tr>\n    <tr>\n        <td><code>$exists</code></td>\n        <td>Check for existence of a field </td>\n     </tr>\n    <tr>\n        <td><code>$regex</code></td>\n        <td>Regex match on a string. Currently, only prefix matches are supported: the\n        regular expression must begin with an anchor (^) followed by a letter or digit. For\n        example, '^a', '^a.*', and '^a.*$' are allowed, but not '^.*a*'.</td>\n    </tr>\n    <tr>\n        <td><code>$text</code></td>\n        <td>Perform a text search on the contents of the field. A <b>$text</b> expression has the\n            following syntax: <br/>\n            <code> { \"$text\": { \"$search\": &lt;string&gt; }} </code><br/>\n            Most punctuation marks and spaces are treated as delimiters allowing you to search for\n            multiple keywords, excluding escaped double quotes (\\&quot;) and hypens (-).  Escaped\n            double quotes are used for phrase searches and hyphens are used to negate searches.\n            Sorting does not work with the $text operator, that is, using the\n            <code>order</code> field will have no effect when using the $text operator.\n        </td>\n    </tr>\n</table>\n\n\n<p>For querying geographic coordinates, the following operators are supported:</p>\n\n<table class=\"doc-table\">\n    <tr>\n        <th>Operator</th><th>Summary</th>\n    </tr>\n    <tr>\n        <td><code>$nearSphere&nbsp&nbsp</code></td>\n        <td>Search near geographic coordinates, format is <code>[longitude, latitude]</code></td>\n    </tr>\n    <tr>\n        <td><code>$maxDistance</code></td>\n        <td>used with $nearSphere to limit maximum search distance. All distances use radians. This allows you to easily multiply by the radius of the earth (about 6371 km or 3959 miles) to get the distance in your choice of units. Conversely, divide by the radius of the earth when doing queries</td>\n    </tr>\n</table>\n\n\n<p>You can combine any of the above to build a more complex query.</p>\n\n<p>If you want to find users with age older than 28:</p>\n\n<pre><code>where={\"age\": {\"$gt\":28}}\n</code></pre>\n\n<p>If you want to find users at age 28 or 38:</p>\n\n<pre><code>where = {\"age\": {\"$in\":[28,38]}}\n</code></pre>\n\n<p>If you want to find users at age neither 28 nor 38:</p>\n\n<pre><code>where = {\"age\": {\"$nin\":[28,38]}}\n</code></pre>\n\n<p>If you want to find a user whose email is \"john@example.com\" and type is User:</p>\n\n<pre><code>where={\"$and\": [ {\"email\" : \"john@example.com\"}, { \"_type\" : \"User\" } ] }\n</code></pre>\n\n<p>If you want to find users who have options are 2,3</p>\n\n<pre><code>where={\"options\": {\"$all\" : [2,3] } }\n</code></pre>\n\n<p>If you want to find users who have location information.</p>\n\n<pre><code>where={\"location\": {\"$exists\" : true} }\n</code></pre>\n\n<p>If you want to find users who haven't location information</p>\n\n<pre><code>where={\"location\": {\"$exists\" : false} }\n</code></pre>\n\n<p>If you have a custom array with your user object, such as a list of scores\n(scores: <code>[65, 86, 92'</code>), you can search the elements in the array. For example,\nif you want to search for scores within a certain range:</p>\n\n<pre><code>where={\"scores\":{ \"$elemMatch\": { \"$gte\": 70, \"$lt\": 90 } }}\n</code></pre>\n\n<p>If you have a custom array of tags, such as <code>tags: [ 'employee', 'manager' ]</code>,\nyou can use the $all operator to return objects that contain all the specified elements.</p>\n\n<pre><code>where={\"tags\":{ \"$all\": [ 'employee', 'manager' ] } }\n</code></pre>\n\n<p>If you have assigned custom coordinates to your user objects, you can search\nby users' coordinates. For example, if you want to find users named joe near\nlongitude -122.1 and latitude 37.1.</p>\n\n<pre><code>where={\"first_name\":\"joe\", \"coordinates\":{\"$nearSphere\":[-122.1, 37.1]}}\n</code></pre>\n\n<p>To find users named joe near longitude -122.1 and latitude 37.1 with maximum\ndistance of 5 miles (convert 5 miles to radians, 5/3959 = 0.00126)</p>\n\n<pre><code>where={\"first_name\":\"joe\", \"coordinates\":{\"$nearSphere\":[-122.1,37.1], \"$maxDistance\" : 0.00126}}\n</code></pre>\n\n<p>To search for the keywords <code>javascript</code>, <code>ruby</code> or <code>python</code>, but not <code>php</code>:</p>\n\n<pre><code>where={\"$text\": { \"$search\": \"javascript,ruby,python,-php\" }}\n</code></pre>\n\n<h4 id='search_query-section-order'>order</h4>\n\n<p>Sort results by one or more fields. In general, you can sort based on any predefined field that you can query using\nthe <code>where</code> operator, as well as on custom fields. Any exceptions to this rule are noted in API reference for the\nindividual <code>query</code> methods.</p>\n\n<p>To reverse the sorting order, simply add <code>-</code> in front of a field. For example,\nto sort results by first_name in ascending order then created_at in descending\norder:</p>\n\n<pre><code>order=first_name,-created_at\n</code></pre>\n\n<h4 id='search_query-section-sel'>sel</h4>\n\n<p>Selects which fields to return from the query. Do not use this parameter if you are using the\n<code>unsel</code> parameter.</p>\n\n<p>Assign an array of field names to filter to the <code>all</code> field to search all JSON fields including\nfields in nested objects.  Currently, this is the only supported option.</p>\n\n<p>If you want to display a field from the <code>custom_field</code> object, simply pass the field name of the\n<code>custom_field</code> object.</p>\n\n<p>If you want to display a field from a nested object, then both the name of the nested object and\nfield need to be specified.</p>\n\n<p>For example, if you want to only return the <code>first_name</code> field:</p>\n\n<pre><code>sel={\"all\":[\"first_name\"]}\n</code></pre>\n\n<h4 id='search_query-section-unsel'>unsel</h4>\n\n<p>Selects which fields to not return from the query. Do not use this parameter if you are using the\n<code>sel</code> parameter.</p>\n\n<p>Assign an array of field names to filter to the <code>all</code> field to search all JSON fields including\nfields in nested objects.  Currently, this is the only supported option.</p>\n\n<p>If you want to hide displaying a field from the <code>custom_field</code> object, simply pass the field name of the\n<code>custom_field</code> object.</p>\n\n<p>If you want to hide displaying a field from a nested object, then both the name of the nested object and\nfield need to be specified.</p>\n\n<p>For example, if you want to return all fields except <code>first_name</code>:</p>\n\n<pre><code>unsel={\"all\":[\"first_name\"]}\n</code></pre>\n\n<h2 id='search_query-section-query-pagination'>Query Pagination</h2>\n\n<p>Starting with ArrowDB 1.1.5, we have made the following changes:</p>\n\n<ul>\n<li>Skip is limited to 0-4999; as a result you can not skip beyond 5000 records.</li>\n<li>If the query includes <code>count=true</code>, the query response's <code>meta</code> object contains a <code>count</code>\nfield whose value is the total number of objects that match the query criteria.\nIf the query matches more than 5000 objects, the <code>count</code> field contains the value \"5000+\".\nIf your query result set includes more than 5000 records,\nyou should perform range-based queries for pagination. This is done by including\na where parameter on a object field using the <code>$gt</code> or <code>$lt</code> operators, as discussed\nbelow.</li>\n</ul>\n\n\n<p>For example, the following cURL uses a range-based query for Statuses whose custom field named <code>score</code> is less than\n100, and sorts the results in ascending order on the <code>score</code> field:</p>\n\n<pre><code>$ curl -d 'where={\"score\":{\"$lt\":100}}&amp;order=score' -X GET \"http://&lt;HOST&gt;/v1/statuses/query.json?key=&lt;KEY&gt;&amp;count=true&amp;pretty_json=true\"\n</code></pre>\n\n<p>ArrowDB object IDs, represented by the <code>_id</code> field, are based on object timestamps and machine IDs, which allows for range-based pagination. For\nexample, suppose an application performs a query that whose last object\nreturned has an ID of <code>\"5418a8815a6919fde8cf1e4d\"</code>. To get the\nset of objects created before that particular object, the application would query for those objects whose <code>_id</code> field is less than that value:</p>\n\n<pre><code>$ curl -X GET -d 'where={\"_id\":{\"$lt\":\"5418a8815a6919fde8cf1e4d\"}}' \"http://&lt;HOST&gt;/v1/statuses/query.json?key=&lt;KEY&gt;&amp;count=true&amp;pretty_json=t&amp;_session_id=&lt;SESSION_ID&gt;\"\n</code></pre>\n\n<p>Similarly, if the ID of the first object returned in a query was\n<code>\"5418a87f5a6919fde8cee391\"</code> the application would query on objects whose <code>_id</code>\nfield is greater than that value to retrieve the previous set of data:</p>\n\n<pre><code>$ curl -X GET -d 'where={\"_id\":{\"$gt\":\"5418a87f5a6919fde8cee391\"}}' \"http://&lt;HOST&gt;/v1/statuses/query.json?key=&lt;KEY&gt;&amp;count=true&amp;pretty_json=t&amp;_session_id=&lt;SESSION_ID&gt;\"\n</code></pre>\n\n<p>To query objects between a range of object IDs, use together <code>$gt</code> and <code>$lt</code> together:</p>\n\n<pre><code>curl -X GET -d 'where={\"_id\":{\"$gt\":\"5418a87f5a6919fde8cee38f\", \"$lt\":\"5418a8815a6919fde8cf1e4d\"}}'  \"http://&lt;HOST&gt;/v1/statuses/query.json?key=&lt;KEY&gt;&amp;count=true&amp;pretty_json=t&amp;_session_id=&lt;SESSION_ID&gt;\"    \n</code></pre>\n\n<p>For additional examples, see <a href=\"#!/guide/search_query-section-range-based-query-pagination-examples\">Range-based Query Pagination Examples</a>.</p>\n\n<h3 id='search_query-section-range-based-query-pagination-examples'>Range-based Query Pagination Examples</h3>\n\n<ul>\n<li><a href=\"#!/guide/search_query-section-query-on-custom-field-results-in-ascending-order\">Query on Custom Field, Results in Ascending Order</a></li>\n<li><a href=\"#!/guide/search_query-section-query-on-custom-field-results-in-descending-order\">Query on Custom Field, Results in Descending Order</a></li>\n<li><a href=\"#!/guide/search_query-section-query-for-next-page-of-results-results-in-ascending-order\">Query for Next Page of Results, Results in Ascending Order</a></li>\n<li><a href=\"#!/guide/search_query-section-query-for-previous-page-of-results\">Query for Previous Page of Results</a></li>\n</ul>\n\n\n<h4 id='search_query-section-query-on-custom-field-results-in-ascending-order'>Query on Custom Field, Results in Ascending Order</h4>\n\n<p>In this example, the query returns Statuses objects whose custom <code>score</code> field\nis less than 100, and sorts results on the <code>score</code> in ascending order\n(<code>&amp;order=score</code>). The query matches 100 total records.</p>\n\n<pre><code>~ curl -d 'where={\"score\":{\"$lt\":100}}&amp;order=score' -X GET \"http://&lt;HOST&gt;:8082/v1/statuses/query.json?key=&lt;KEY&gt;&amp;count=true&amp;pretty_json=true\"\n{\n  \"meta\": {\n    \"code\": 200,\n    \"status\": \"ok\",\n    \"method_name\": \"queryStatuses\",\n    \"count\": 100\n  },\n  \"response\": {\n    \"statuses\": [\n      {\n        \"id\": \"53fe1c25759220e9f675413a\",\n        \"custom_fields\": {\n          \"score\": 0.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675413b\",\n        \"message\": \"status\",\n        \"custom_fields\": {\n          \"score\": 1.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675413c\",\n        \"custom_fields\": {\n          \"score\": 2.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675413d\",\n        \"custom_fields\": {\n          \"score\": 3.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675413e\",\n        \"custom_fields\": {\n          \"score\": 4.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675413f\",\n        \"custom_fields\": {\n          \"score\": 5.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754140\",\n        \"custom_fields\": {\n          \"score\": 6.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754141\",\n        \"custom_fields\": {\n          \"score\": 7.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754142\",\n        \"custom_fields\": {\n          \"score\": 8.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754143\",\n        \"custom_fields\": {\n          \"score\": 9.0\n        }, ...\n      }\n    ]\n  }\n}\n</code></pre>\n\n<h4 id='search_query-section-query-on-custom-field-results-in-descending-order'>Query on Custom Field, Results in Descending Order</h4>\n\n<p>In this example, Statuses objects are queried whose custom <code>score</code> field is less\nthan 100, and sorts results on <code>score</code> in descending order (<code>&amp;order=-score</code>).</p>\n\n<pre><code>$ curl -d 'where={\"score\":{\"$lt\":100}}&amp;order=-score' -X GET \"http://&lt;HOST&gt;/v1/statuses/query.json?key=&lt;KEY&gt;&amp;count=true&amp;pretty_json=true\"\n{\n  \"meta\": {\n    \"code\": 200,\n    \"status\": \"ok\",\n    \"method_name\": \"queryStatuses\",\n    \"count\": 100\n  },\n  \"response\": {\n    \"statuses\": [\n      {\n        \"id\": \"53fe1c25759220e9f675419d\",\n        \"custom_fields\": {\n          \"score\" 99.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675419c\",\n        \"custom_fields\": {\n          \"score\" 98.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675419b\",\n        \"custom_fields\": {\n          \"score\" 97.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675419a\",\n        \"custom_fields\": {\n          \"score\" 96.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754199\",\n        \"custom_fields\": {\n          \"score\" 95.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754198\",\n        \"custom_fields\": {\n          \"score\" 94.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754197\",\n        \"custom_fields\": {\n          \"score\" 93.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754196\",\n        \"custom_fields\": {\n          \"score\" 92.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754195\",\n        \"custom_fields\": {\n          \"score\" 91.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754194\",\n        \"custom_fields\": {\n          \"score\" 90.0\n        }, ...\n      }\n    ]\n  }\n}\n</code></pre>\n\n<h4 id='search_query-section-query-for-next-page-of-results-results-in-ascending-order'>Query for Next Page of Results, Results in Ascending Order</h4>\n\n<p>In this example, the next page of Statuses objects are queried whose <code>_id</code> field is less than <code>\"53fe1c25759220e9f6754194\"</code> and sorted in descending order on the custom <code>score</code> field.</p>\n\n<pre><code>$ curl -d 'where={\"score\":{\"$lt\":100},\"_id\":{\"$lt\":\"53fe1c25759220e9f6754194\"}}&amp;order=-score' -X GET \"http://&lt;HOST&gt;/v1/statuses/query.json?key=&lt;KEY&gt;&amp;count=true&amp;pretty_json=true\"\n{\n  \"meta\": {\n    \"code\": 200,\n    \"status\": \"ok\",\n    \"method_name\": \"queryStatuses\",\n    \"count\": 90\n  },\n  \"response\": {\n    \"statuses\": [\n      {\n        \"id\": \"53fe1c25759220e9f6754193\",\n        \"custom_fields\": {\n          \"score\": 89.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754192\",\n        \"custom_fields\": {\n          \"score\": 88.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754191\",\n        \"custom_fields\": {\n          \"score\": 87.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f6754190\",\n        \"custom_fields\": {\n          \"score\": 86.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675418f\",\n        \"custom_fields\": {\n          \"score\": 85.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675418e\",\n        \"custom_fields\": {\n          \"score\": 84.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675418d\",\n        \"custom_fields\": {\n          \"score\": 83.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675418c\",\n        \"custom_fields\": {\n          \"score\": 82.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675418b\",\n        \"custom_fields\": {\n          \"score\": 81.0\n        }, ...\n      },\n      {\n        \"id\": \"53fe1c25759220e9f675418a\",\n        \"custom_fields\": {\n          \"score\": 80.0\n        }, ...\n      }\n    ]\n  }\n}    \n</code></pre>\n\n<h4 id='search_query-section-query-for-previous-page-of-results'>Query for Previous Page of Results</h4>\n\n<p>As explained previously, to get the second (or next) page of results in a query, you query\nfor objects whose <code>_id</code> field is less (older) than the <code>_id</code> of the last object returned by\nthe prior query. To get the previous (first) page of results again, you simply query for those objects\nwhose <code>_id</code> is greater (newer) than the first object returned in by the prior query.</p>\n\n<p>However, if you query for the third results page, and want to get the previous (second) results page, you\nneed to restrict the query to those objects whose <code>_id</code> is greater than the first object returned by the most recent query\n(third results page), and less than that of the last object returned in query before that (second results page); or,\nequivalently, less than or equal to the first object returned in the initial query (first results page).\nThe following demonstrates this.</p>\n\n<p><strong>First Page (Page 1)</strong></p>\n\n<p>The first query request doesn't specify a range.</p>\n\n<p>Request:</p>\n\n<pre><code>curl -X GET \"&lt;HOST&gt;/v1/users/query.json?key=&lt;KEY&gt;&amp;new_pagination=true&amp;pretty_json=true\"\n</code></pre>\n\n<p>Response (abbreviated):</p>\n\n<pre><code>{\n  \"response\": {\n    \"users\": [\n      {\n        \"id\": \"5447f04580e61e081e0002c6\",\n        ...\n      },\n      ...\n      {\n        \"id\": \"5447eff680e61e08260002ed\",\n        ...\n      }\n    ]\n  }\n}\n</code></pre>\n\n<p>Note that the ID of the last object returned in the response (\"5447eff680e61e08260002ed\").</p>\n\n<p><strong>Next Page (Page 2)</strong></p>\n\n<p>To get Page 2 results, a <code>where</code> clause is added\nthat limits results to those objects whose <code>_id</code> field is less than the\nlast object in Page 1 results (\"5447eff680e61e08260002ed\").</p>\n\n<p>Request:</p>\n\n<pre><code>curl -X GET -d 'where={\"_id\":{\"$lt\":\"5447eff680e61e08260002ed\"}}' \"&lt;HOST&gt;/v1/users/query.json?key=&lt;KEY&gt;&amp;new_pagination=true&amp;pretty_json=true\"\n</code></pre>\n\n<p>Response (abbreviated):</p>\n\n<pre><code>{\n  \"response\": {\n    \"users\": [\n      {\n        \"id\": \"5447efed80e61e08260002ec\",\n        ...\n      },\n        ...\n      {\n        \"id\": \"5447ef9f80e61e081e0002c1\",\n        ...\n      }\n    ]\n  }\n}\n</code></pre>\n\n<p>Note that the first and last IDs of objects returned on Page 2 are \"5447efed80e61e08260002ec\" and \"5447ef9f80e61e081e0002c1\",\nrespectively. To get the previous page of results (Page 1) at this point, you could simply query for\nobjects with IDs greater than the first object in the Page 2 results (\"5447efed80e61e08260002ec\").\nIn this case, however, the user requests the next page (Page 3) results, as shown below.</p>\n\n<p><strong>Next Page (Page 3)</strong></p>\n\n<p>To get Page 3 results, the <code>where</code> limits results to those objects\nwhose <code>_id</code> field is less the last object returned in Page 2 results (\"5447ef9f80e61e081e0002c1\").</p>\n\n<pre><code>$ curl -X GET -d 'where={\"_id\":{\"$lt\":\"5447ef9f80e61e081e0002c1\"}}' \"&lt;HOST&gt;/v1/users/query.json?key=&lt;KEY&gt;&amp;new_pagination=true&amp;pretty_json=true\"\n</code></pre>\n\n<p>Response (abbreviated):</p>\n\n<pre><code>{\n  \"response\": {\n    \"users\": [\n      {\n        \"id\": \"5446d5d980e61e0826000093\",\n        ...\n      },\n      ...\n    ]\n  }\n}\n</code></pre>\n\n<p>Note that the first object returned has the ID \"5446d5d980e61e0826000093\".</p>\n\n<p><strong>Previous Page (Page 2)</strong></p>\n\n<p>At this point, if you query for objects with IDs greater than the first object returned in Page 3,\nyou would, logically, get Page 1 results, not Page 2. Instead, you need to further limit the range to those objects\nwith IDs less than or equal to that of the first object from the Page 2 results; or, equivalently,\nless than that of the last object id from Page 1 results.</p>\n\n<p>Continuing the example, the request and response (abbreviated) for these approaches are shown below:</p>\n\n<pre><code>$ curl -X GET -d 'where={\"_id\":{\"$gt\":\"5446d5d980e61e0826000093\", \"$lte\":\"5447efed80e61e08260002ec\"}}' \"&lt;HOST&gt;/v1/users/query.json?key=&lt;KEY&gt;&amp;new_pagination=true&amp;pretty_json=true\"\n{\n  \"response\": {\n    \"users\": [\n      {\n        \"id\": \"5447efed80e61e08260002ec\",\n        ...\n      },\n      ...\n      {\n        \"id\": \"5447ef9f80e61e081e0002c1\",\n        ...\n    ]\n  }\n}\n\n$ curl -X GET -d 'where={\"_id\":{\"$gt\":\"5446d5d980e61e0826000093\", \"$lt\":\"5447eff680e61e08260002ed\"}}' \"&lt;HOST&gt;/v1/users/query.json?key=&lt;KEY&gt;&amp;new_pagination=true&amp;pretty_json=true\"\n{\n  \"response\": {\n    \"users\": [\n      {\n        \"id\": \"5447efed80e61e08260002ec\",\n        ...\n      },\n      ...\n      {\n        \"id\": \"5447ef9f80e61e081e0002c1\",\n        ...\n      }\n    ]\n  }\n}\n</code></pre>\n\n<h2 id='search_query-section-search-api-overview'>Search API Overview</h2>\n\n<p class=\"note\">The search API is deprecated since Release 1.3.0. Applications created before Arrow Cloud\nRelease 1.3.0 can continue to use the deprecated search API, but new applications will need to use\nthe query API with the <code>$text</code> query operator.</p>\n\n\n<p>Several ArrowDB objects provides a search API that performs a case-insensitive, full-text\nsearch of the given keywords on a list of predefined fields. Please refer to individual object's API\ndocumentation for a list of searchable fields. For instance, the <a href=\"#!/api/Places-method-search\" rel=\"Places-method-search\" class=\"docClass\">Places.search</a> method will search\nwithin <a href=\"#!/api/Places-property-name\" rel=\"Places-property-name\" class=\"docClass\">Places.name</a> and <a href=\"#!/api/Places-property-tags\" rel=\"Places-property-tags\" class=\"docClass\">Places.tags</a>.</p>\n\n<p>The Search API is fixed in terms of the searchable fields; use the <a href=\"#!/guide/search_query-section-query-api-overview\">query</a>\nAPI to perform more flexible searches.</p>\n\n<h3 id='search_query-section-search-api-parameters'>Search API Parameters</h3>\n\n<p>The following parameters are available for search operations:</p>\n\n<ul>\n<li><code>page</code></li>\n<li><code>per_page</code></li>\n<li><code>q</code></li>\n</ul>\n\n\n<h4 id='search_query-section-page'>page</h4>\n\n<p>Request page number starting from 1. Default is 1.</p>\n\n<h4 id='search_query-section-per_page'>per_page</h4>\n\n<p>Number of results per page. Default is 10.</p>\n\n<h4 id='search_query-section-q'>q</h4>\n\n<p>The keyword or phrase to search for.</p>\n\n<h3 id='search_query-section-search-api-availability'>Search API Availability</h3>\n\n<p>Search methods are available for the following pre-built ArrowDB objects, as well as for custom fields.</p>\n\n<ul>\n<li><a href=\"#!/api/Events-method-search\" rel=\"Events-method-search\" class=\"docClass\">Events</a></li>\n<li><a href=\"#!/api/Friends-method-search\" rel=\"Friends-method-search\" class=\"docClass\">Friends</a></li>\n<li><a href=\"#!/api/Places-method-search\" rel=\"Places-method-search\" class=\"docClass\">Places</a></li>\n<li><a href=\"#!/api/Users-method-search\" rel=\"Users-method-search\" class=\"docClass\">Users</a></li>\n</ul>\n\n","title":"Search and Query Operations"});