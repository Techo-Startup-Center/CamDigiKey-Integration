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
mvnw install:install-file -Dfile=client-2.0.0.jar -DgroupId=kh.gov.camdx.camdigikey -DartifactId=client -Dversion=2.0.0 -Dpackaging=jar -DgeneratePom=true    
</li>
<li> Linux:
mvn install:install-file -Dfile=client-2.0.0.jar -DgroupId=kh.gov.camdx.camdigikey -DartifactId=client -Dversion=2.0.0 -Dpackaging=jar -DgeneratePom=true    
</li>
</ol>
