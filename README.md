# better-kazagumo-spotify

## A spotify plugin for better kazagumo module

## Accepted query

Track link; `https://open.spotify.com/track/7nw4ElerVAP5235FN5D2OI`  
Playlist link; `https://open.spotify.com/playlist/2gzszlY4WeJOTOUU6x3sgA`  
Album link; `https://open.spotify.com/album/18UoCkfQKlMVnAcZXbiBz8`  
Artist link; `https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj?si=mxc5IMM9RQeEPmY0KBIfjg`  
Short link; `https://spotify.link/zu1pVRAg6Db`
String; `mirror heart`

## Installation

> npm i https://github.com/ProjectRainyLink/better-kazagumo-spotify.git

## Links

- better-kazagumo; [github](https://github.com/ProjectRainyLink/better-kazagumo)
- better-kazagumo-spotify; [github](https://github.com/ProjectRainyLink/better-kazagumo-spotify)

#### How to

```js
const { Kazagumo } = require('better-kazagumo');
const Spotify = require('better-kazagumo-spotify');

const kazagumo = new Kazagumo(
  {
    plugins: [
      new Spotify({
        clientId: '',
        clientSecret: '',
        playlistPageLimit: 1, // optional ( 100 tracks per page )
        albumPageLimit: 1, // optional ( 50 tracks per page )
        searchLimit: 10, // optional ( track search limit. Max 50 )
        searchMarket: 'US', // optional || default: US ( Enter the country you live in. [ Can only be of 2 letters. For eg: US, IN, EN ] )//
      }),
    ],
  },
  new Connectors.DiscordJS(client),
  Nodes,
);

kazagumo.search(`https://open.spotify.com/track/7nw4ElerVAP5235FN5D2OI`); // track, album, playlist, artist
kazagumo.search('mirror heart', { engine: 'spotify' }); // search track using spotify
```
