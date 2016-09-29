define(
    'query-params',
    function () {

        'use strict';

        /**
         * Add / Update a map of URL query parameters.
         * Handles Hash.
         *
         * @param {String} url      The initial URL. The parameter won't be modified.
         * @param {Array}  params   [{"key":"myKey", ""value":"myValue"}]
         *
         * @return String modified URL
         */
        function putUrlParameters(url, params) {
            var modifiedUrl = url;
            for (var i = 0; i < params.length; i++) {
                modifiedUrl = putUrlParameter(modifiedUrl, params[i].key, params[i].value);
            }
            return modifiedUrl;
        }

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
        function putUrlParameter(url, key, value) {
            var modifiedUrl = url;
            var i = modifiedUrl.indexOf('#');
            var hash = i === -1 ? '' : modifiedUrl.substr(i);
            modifiedUrl = i === -1 ? modifiedUrl : modifiedUrl.substr(0, i);

            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = modifiedUrl.indexOf('?') !== -1 ? "&" : "?";

            if (modifiedUrl.match(re)) {
                modifiedUrl = modifiedUrl.replace(re, '$1' + key + "=" + value + '$2');
            } else {
                modifiedUrl = modifiedUrl + separator + key + "=" + value;
            }
            modifiedUrl += hash;

            return modifiedUrl;
        }

        return {
            putUrlParameters:putUrlParameters,
            putUrlParameter:putUrlParameter
        }
    });
