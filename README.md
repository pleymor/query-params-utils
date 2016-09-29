# Query-params-utils
Manipulation of query parameters

## Methods

### putUrlParameters

```js
/**
 * Add / Update a map of URL query parameters.
 * Handles Hash.
 *
 * @param {String} url      The initial URL. The parameter won't be modified.
 * @param {Array}  params   [{"key":"myKey", ""value":"myValue"}]
 *
 * @return String modified URL
 */
function putUrlParameters(url, params);
```

### putUrlParameter

```js
/**
 * Add / Update a query parameter.
 * Handles Hash.
 *
 * @param {String} url      The initial URL. The parameter won't be modified.
 * @param {String} key      The key of the query param. ! No encoding will be applied on it.
 * @param {String} value    The value of the query param. ! No encoding will be applied on it.
 *
 * @return String modified URL
 */
function putUrlParameter(url, key, value);
```

## Exemple

    require(['query-params-utils'], function (q) {
        var result = q.putUrlParameter('http://foo.bar', 'key', 'val'); // http://foo.bar?key=val
        var result = q.putUrlParameter('http://foo.bar?a=b', 'key', 'val'); // http://foo.bar?a=b&key=val
       
        var result = q.putUrlParameters('http://foo.bar', [{key: 'key', value: 'val'},{key: 'foo', 
                value: 'bar'}]; // http://foo.bar?key=val&foo=bar
    });
