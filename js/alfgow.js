const BASE_API = "https://graph.instagram.com/me";
const ACCESS_TOKEN =
  "IGQVJVS3g5X1Bucms0eVp6T3RmN04zMldiaWdiaHF3M3dqNTZAnc25uMHBQbWR3NjgxNDZAjOENDbUNVMWtsb0VQRGFwWUZA0RzRsNXZAXZAmFxVXpENjY5SFhITUJyam9XV0twaXEtS2FTX1dJd202aWNzQwZDZD";

async function getUserInfo() {
  const response = await fetch(
    `${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`
  );
  const userInfo = await response.json();
  console.log(userInfo);
  username.innerHTML = userInfo.username;
  posts.innerHTML = userInfo.media_count;
  return userInfo;
}

getUserInfo();

async function getUserMediaInfo() {
  const response = await fetch(
    `${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`
  );
  const userMediaInfo = await response.json();
  console.log(userMediaInfo);
  return userMediaInfo;
}

getUserMediaInfo();

const username = document.getElementById("username");
const posts = document.getElementById("posts");
const photos = document.getElementById("photos");

getUserMediaInfo().then((media) => {
  media.data.map((mediaInfo) => {
    const img = document.createElement("img");
    img.style.width = "100px";
    img.src = mediaInfo.media_url;
    photos.appendChild(img);
  });
});
