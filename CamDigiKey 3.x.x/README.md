# CamDigiKey Client Library
CamDigiKey is a E-KYC service provider focusing on convenience and security for users.
CamDigiKey client library enables relying client's application to communicate with CamDigiKey server via a secured way.

**How to integrate with client information system**
<ol>
<li> Integration document</li>
<li> Available client libraries
     <ul>
      <li>Java</li>
      <li>Node</li>
     </ul>
</li>
</ol>

**Load client library jar file to local maven**
<ol>
<li> Window:
mvnw install:install-file -Dfile=client-3.0.2.jar -DgroupId=kh.gov.camdx.camdigikey -DartifactId=client -Dversion=3.0.2 -Dpackaging=jar -DgeneratePom=true    
</li>
<li> Linux:
mvn install:install-file -Dfile=client-3.0.2.jar -DgroupId=kh.gov.camdx.camdigikey -DartifactId=client -Dversion=3.0.2 -Dpackaging=jar -DgeneratePom=true    
</li>
</ol>

**Changes**
<ol>
<li> Server URL:

`https://service-account.camdigikey.gov.kh:8446`

</li>
<li> Client Domain: 

Client domain needs to match with registered value. Otherwise, there will be service account not found error.

Common misconfigurations include having `http://` prefix in client domain configuration.
</li>
<li>
Java Client Keystore and Truststore: 

Add `classpath:` prefix to the path.
</li>

<li> Changing success return url and error return url:

When request to get login token, client can change success return url and error return url. 

<ul>
<li>Java:

`ApiResponse<LoginTokenResponseDto> getLoginToken(String successReturnUrl, String errorReturnUrl);`
</li>
<li>Node:

`getLoginToken({callbackVars?: Record<string, string>, successReturnUrl?: string}): Promise<ApiResponse<LoginTokenResponse>>;`
</li>
</ul>

Note that these urls need to be requested to be added to whitelist beforehand. 

</li>

</ol>