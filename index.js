import React, { useState } from 'react';
import { Modal } from 'react-native';
import { WebView } from 'react-native-webview';

const GOOGLE_AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://www.googleapis.com/oauth2/v4/token';
const GOOGLE_PROFILE_URL = 'https://www.googleapis.com/userinfo/v2/me';
const spreadsheetsApi = 'https://content-sheets.googleapis.com/v4/spreadsheets/';

function parse(querystring) {
    querystring = querystring.substring(querystring.indexOf('?')+1).split('&');
    const params = {};
    let pair = void 0;
    const d = decodeURIComponent;
    for (let i = querystring.length - 1; i >= 0; i--) {
      pair = querystring[i].split('=');
      params[d(pair[0])] = d(pair[1] || '');
    }
    return params;
}

/**
 * Get query string
 *
 * @param   {*}   query   query object (any object that Object.entries() can handle)
 * @returns {string}      query string
 */

function querystring(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      if (obj[key] !== undefined) {
          keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return keyValuePairs.join('&');
}

class ReactNativeGoogleSheet {
    constructor() {
        this.accessToken = '';
        this.spreadsheetId = '';
    }

    async append(...arg) {
        const { 
            valueInputOption = 'RAW',
            insertDataOption,
            includeValuesInResponse,
            responseValueRenderOption,
            range = 'A1',
            responseDateTimeRenderOption,
            data = {},
            ...rest
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const params = {
            valueInputOption,
            insertDataOption,
            includeValuesInResponse,
            responseValueRenderOption,
            responseDateTimeRenderOption,
            ...rest
        };
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values/${range}:append?${querystring(params)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    async batchClear(...arg) {
        const {
            data
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values:batchClear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        return response;
    }
    async batchClearByDataFilter(...arg) {
        const {
            data
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values:batchClearByDataFilter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    async batchGet(arg) {
        const { dateTimeRenderOption, majorDimension, ranges = 'A:Z', valueRenderOption,  ...rest } = arg;
        const { accessToken, spreadsheetId } = this;
        const params = {
            dateTimeRenderOption,
            majorDimension,
            ranges,
            valueRenderOption,
            ...rest
        };
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values:batchGet?${querystring(params)}`, {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        return response;
    }

    async batchGetByDataFilter(...arg) {
        const {
            data
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values:batchGetByDataFilter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    async batchUpdate(...arg) {
        const {
            data
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values:batchUpdate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    async batchUpdateByDataFilter(...arg) {
        const {
            data
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values:batchUpdateByDataFilter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    async clear(...arg) {
        const {
            range,
            data
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values/${range}:clear`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    async get(...arg) {
        const { 
            range,
            dateTimeRenderOption,
            majorDimension,
            valueRenderOption
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const params = {
            dateTimeRenderOption,
            majorDimension,
            valueRenderOption,
            ...rest
        };
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values/${range}?${querystring(params)}`, {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        return response;
    }

    async update(...arg) {
        const { 
            range = "A1",
            includeValuesInResponse,
            responseDateTimeRenderOption,
            responseValueRenderOption,
            valueInputOption  =  'RAW',
            data
        } = arg;
        const { accessToken, spreadsheetId } = this;
        const params = {
            includeValuesInResponse,
            responseDateTimeRenderOption,
            responseValueRenderOption,
            valueInputOption
        };
        const response = fetch(`${spreadsheetsApi}${spreadsheetId}/values/${range}?${querystring(params)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data)
        });
        return response;
    }

    GoogleSheet(props) {
        const { credentialsDetails, getAccessToken, getUserDetails, spreadsheetId } = props;
        this.spreadsheetId = spreadsheetId;
        const { redirectUrl = 'https://localhost', clientId } = credentialsDetails;
        const [ isLoggedIn, setLoggedIn ] = useState(false);
        
        const urlParams = {
          response_type: 'code',
          redirect_uri: redirectUrl,
          client_id: clientId,
          scope: 'profile email openid https://spreadsheets.google.com/feeds',
        };
        const authUrl = `${GOOGLE_AUTHORIZATION_URL}?${querystring(urlParams)}`;
      
        async function fetchAccessTokens(code) {
            const params = {
                code,
                client_id: clientId,
                redirect_uri: redirectUrl,
                grant_type: 'authorization_code',
            };
            const response = await fetch(`${GOOGLE_TOKEN_URL}?${querystring(params)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            return response.json();
        }
      
        async function fetchUserDetails(accessToken) {
            const response = await fetch(GOOGLE_PROFILE_URL, {
                method: "GET", 
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${accessToken}`,
                }
            });
            return response.json();
        }
        function handleNavigation(url) {
          const query = parse(url);
          if (query) {
            if (query.code) {
              setLoggedIn(true);
              fetchAccessTokens(query.code).then((tokenData) => {
                const token = tokenData.access_token;
                if (typeof getAccessToken === 'function') {
                  getAccessToken(token);
                }
                this.accessToken = token;
                fetchUserDetails(token).then((userData) => {
                  if (typeof getUserDetails === 'function') {
                      getUserDetails(userData);
                  }
                });
              }).catch(e => console.log(e));
            }
          }
        }
        function onNavigationStateChange(e) {
          handleNavigation(e.url);
        }
      
        return (
            <>
            {
                isLoggedIn ? null :
                <Modal>
                    <WebView
                        useWebKit
                        sharedCookiesEnabled
                        source={{ uri: authUrl }}
                        mixedContentMode="compatibility"
                        javaScriptEnabled
                        javaScriptEnabledAndroid
                        bounces
                        userAgent = "Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                        domStorageEnabled
                        thirdPartyCookiesEnabled
                        originWhitelist={['*']}
                        onNavigationStateChange={onNavigationStateChange}
                    />
                </Modal>
            }
            </>
        );
    }
}
const {
    GoogleSheet,
    append,
    batchClear,
    batchClearByDataFilter,
    batchGet,
    batchGetByDataFilter,
    batchUpdate,
    batchUpdateByDataFilter,
    clear,
    get,
    update
} = new ReactNativeGoogleSheet();
export default GoogleSheet;
export {
    append,
    batchClear,
    batchClearByDataFilter,
    batchGet,
    batchGetByDataFilter,
    batchUpdate,
    batchUpdateByDataFilter,
    clear,
    get,
    update
};
