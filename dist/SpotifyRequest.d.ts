export declare class SpotifyRequest {
    private client;
    private token;
    private authorization;
    private nextRenew;
    stats: {
        requests: number;
        rateLimited: boolean;
    };
    constructor(client: {
        clientId: string;
        clientSecret: string;
    });
    makeRequest<T>(endpoint: string, disableBaseUri?: boolean): Promise<T>;
    private handleRateLimited;
    private renewToken;
    private renew;
}
