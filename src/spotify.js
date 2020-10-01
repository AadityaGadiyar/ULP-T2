export const url = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/home";
const clientId = "3b82323b6f524d369f94ec858a7f5c86";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "user-library-read",
  "user-follow-read",
];

export const getTokenFromUrl = () => {
  let string = window.location.hash;
  if(string.includes("access_token=")){
  let _and = string.indexOf("&");
  let access_token = string.substring(14, _and);
  console.log(string)
  if(access_token!==null){
    console.log(access_token);
    localStorage.setItem("token2", access_token);
  }

  return access_token;
}else
{
  console.log('false')
}
};

export const loginUrl = `${url}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
