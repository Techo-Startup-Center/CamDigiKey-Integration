/// <reference types="node" />
import CamDigiKeyCache from './CamDigiKeyCache';
import crypto from 'crypto';
export default class CamDigiKeyMemoryCache implements CamDigiKeyCache {
    private _trustedRootCert;
    private _db;
    private _signerCertificate;
    constructor(trustedRootCert: crypto.X509Certificate);
    signerCertificate(): Promise<crypto.X509Certificate>;
    private getCertificateFromCamDigiKey;
    private verifyCertificateChain;
    private compareTwoPrincipals;
}
