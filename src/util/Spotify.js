let accessToken = '';
const clientID = '2fb01d36c7ba4431898eb66706cea357';
const redirectURI = 'http://MXB_JMMM.surge.sh';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      // getting a spotify access token: the hellhounds' method
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = parseInt(expiresInMatch[1], 10);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-private&redirect_uri=${redirectURI}`;
      }
    }
  },
  search(term) {
    //begin
    accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      debugger
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }).then(jsonResponse => {
      debugger
      if (!jsonResponse.tracks.items) {
        // if != then return empty
        return [];
      } else {
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          uri: track.uri,
          preview: track.preview_url,
        }));
      }
    });
  },
  savePlaylist(playlistName, trackURIs) {
    const accessToken = Spotify.getAccessToken();
    const headers = {Authorization: `Bearer ${accessToken}`};
    let user_id = '';
    let playlist_id = '';
    let snapshot_id = '';

    if (playlistName !=='' && trackURIs !=='') {
      return fetch(`https://api.spotify.com/v1/me`, {headers: headers}).then(response => {
        debugger
        if (response.ok) {
          return response.json();
        } else {
          console.log('failed to get userID');
        }
      }).then(jsonResponse => {
        if (jsonResponse.id) {
          user_id = jsonResponse.id;
        }
        // making new playlist via Spotify API??
        return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({name: playlistName})
        }).then(response => {
          debugger
          if (response.ok) {
            return response.json();
          } else {
            console.log('failed to create new playlist');
          }
        }).then(jsonResponse => {
          debugger
          if (jsonResponse.id) {
            playlist_id = jsonResponse.id;
          }
          return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackURIs})
          });
        });
      });
    }
  }
};

export default Spotify;
