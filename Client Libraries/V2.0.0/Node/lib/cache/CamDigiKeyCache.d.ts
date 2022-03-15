/// <reference types="node" />
import crypto from 'crypto';
export default interface CamDigiKeyCache {
    signerCertificate(): Promise<crypto.X509Certificate>;
}
