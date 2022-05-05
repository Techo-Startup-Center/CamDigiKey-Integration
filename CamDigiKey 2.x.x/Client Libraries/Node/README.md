# CamDigiKey Client Library Node

## Usage

Import library

```js
const { CamDigiKeyClient } = require('../lib');

or 

import { CamDigiKeyClient } from '../'
```

Setup Environment Variables

```
# CamDigiKey Client Credential Configuration
CAMDIGIKEY_CLIENT_ID="<client_id>"              # provided by us
CAMDIGIKEY_HMAC_KEY="<hmac_key>"                # provided by us
CAMDIGIKEY_AES_SECRET_KEY="<secret_key>"        # privided by us
CAMDIGIKEY_AES_IV_PARAMS="<iv_param>"           # provided by us
CAMDIGIKEY_CLIENT_DOMAIN="<application_domain>"
CAMDIGIKEY_SERVER_BASED_URL="<camdigikey_url>"
# CamDigiKey URL Dev : https://mobile-id.demo.camdx.io:8444
# CamDigiKey URL Prod: https://camdigikey.camdx.gov.kh:8444

# CamDigiKey Client Connection KeyStore File Configuration
CAMDIGIKEY_CLIENT_KEYSTORE_FILE="./path_to_keystore.p12"
CAMDIGIKEY_CLIENT_KEYSTORE_FILE_PASSWORD="keystore_password"

CAMDIGIKEY_CLIENT_TRUST_STORE_FILE="./path_to_trusted_keystore.p12"
CAMDIGIKEY_CLIENT_TRUST_STORE_FILE_PASSWORD="keystore_password"
```

Get login token

```js
const res1 = await CamDigiKeyClient.getLoginToken();
console.log(res1);
```

Get access token

```js
const res2 = await CamDigiKeyClient.getUserAccessToken('<authToken>');
console.log(res2);
```

Validate JWT token & get user info

```js
const res3 = await CamDigiKeyClient.validateJwt('<accessToken>');
console.log(res3);
```

## Available functions

```js
validateJwt(jwt: string): Promise<Object>
getOrganizationAccessToken(): Promise<Object>
getLoginToken(): Promise<Object>
getUserAccessToken(authCode: string): Promise<Object>
refreshUserAccessToken(accessToken: string): Promise<Object>
logoutAccessToken(accessToken: string): Promise<Object>
lookupUserProfile(accessToken: string, personalCode: string): Promise<Object>
verifyAccountToken(accountToken: string): Promise<Object>
```