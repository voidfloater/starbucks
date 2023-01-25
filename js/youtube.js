
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '6YYyHf2Ok6s', //최초 재생할 유튜브 영상
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: '6YYyHf2Ok6s'
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}