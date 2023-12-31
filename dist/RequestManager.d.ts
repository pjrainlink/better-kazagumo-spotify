import { SpotifyOptions } from './Plugin';
import { SpotifyRequest } from './SpotifyRequest';
export declare class RequestManager {
    private options;
    private requests;
    private readonly mode;
    constructor(options: SpotifyOptions);
    makeRequest<T>(endpoint: string, disableBaseUri?: boolean, tries?: number): Promise<T>;
    protected getLeastUsedRequest(): SpotifyRequest | undefined;
}
