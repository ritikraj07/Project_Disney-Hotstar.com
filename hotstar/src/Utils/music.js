var spotify_token = localStorage.getItem("spotify_token")
let token_timer = localStorage.getItem('token_timer', "time") || 0
const today = new Date();
let time = today.toTimeString()[0] + today.toTimeString()[1]

setInterval(function () {
    time = today.toTimeString()[0] + today.toTimeString()[1];
}, 3000)

if (token_timer === "0" || time != token_timer || spotify_token == undefined || spotify_token == null) {
    localStorage.setItem('token_timer', time)
    localStorage.removeItem("spotify_token");
    refreshToken()
    console.log("Your new generated token is this", spotify_token)
}


getPlaylists('party', '11', spotify_token).then(function (res) {
    // console.log(res)
    // displayPlaylist(res, row_one);
})

getPlaylists('chill', '11', spotify_token).then(function (res) {
    // console.log(res)
    // displayPlaylist(res, row_two);
})

getPlaylists('rock', '11', spotify_token).then(function (res) {
    // console.log(res)
    // displayPlaylist(res, row_three);
})

getPlaylists('dinner', '11', spotify_token).then(function (res) {
    // console.log(res)
    // displayPlaylist(res, row_four);
})