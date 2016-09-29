# Query-params-utils
Manipulation of query parameters

## Usage

    require(['query-params-utils'], function (q) {
        var result = q.putUrlParameter('http://foo.bar', 'key', 'val'); // http://foo.bar?key=val
        var result = q.putUrlParameter('http://foo.bar?a=b', 'key', 'val'); // http://foo.bar?a=b&key=val
       
        var result = q.putUrlParameters('http://foo.bar', [{key: 'key', value: 'val'},{key: 'foo', 
                value: 'bar'}]; // http://foo.bar?key=val&foo=bar
    });
