export declare class CamDigiKeyClient {
    private static _trustedRootCert;
    private static _cacheService?;
    private static init;
    private static requestToServer;
    private static validateTokenSignature;
    static validateJwt(jwt: string): Promise<Object>;
    static getOrganizationAccessToken(): Promise<Object>;
    static getLoginToken(): Promise<Object>;
    static getUserAccessToken(authToken: string): Promise<Object>;
    static refreshUserAccessToken(accessToken: string): Promise<Object>;
    static logoutAccessToken(accessToken: string): Promise<Object>;
    static lookupUserProfile(accessToken: string, personalCode: string): Promise<Object>;
    static verifyAccountToken(accountToken: string): Promise<Object>;
}
