function logYtFocus(msg) {
  console.log(msg);
}

function removeElement(selector) {
  var element = document.getElementById(selector);
  if (element != null) {
    element.remove();
  }
}

function removeVideosFromSelector(selector) {
  var videos = document.querySelectorAll(selector);
  for (var i = 0; i < videos.length; i++) {
    videos[i].remove();
  }
}

var unwantedSelector = [
  "ytd-promoted-video-renderer",               // Search ads
  "ytd-rich-grid-renderer",                    // Home feed
  "ytd-merch-shelf-renderer",                  // Merchandise ads
  "ytd-comments",                              // Comments
  "ytd-button-renderer",                       // Subscription button
  "ytd-compact-video-renderer",                // Side bar recommended video
  "ytd-guide-section-renderer",                // Left side bar
  "app-drawer",
  "ytd-compact-autoplay-renderer",             // Right side bar auto play
  "ytd-watch-next-secondary-results-renderer", // Right side watch next
  "ytd-browse",                                // Front page recommended video
  "ytd-topbar-menu-button-renderer",           // Top menu buttons
  "ytd-promoted-video-renderer",               // Ad
  "ytd-horizontal-card-list-renderer",         // Related search
  "ytd-movie-renderer",                        // Buy movie
  "ytd-shelf-renderer",                        // Related search
  "ytd-promoted-sparkles-text-search-renderer",// Ad
];

var unwantedElements = [
  "player-ads",
  "masthead-ad",
  "subscribe-button",
  "secondary",                                // Right side next videos
];

function focusSearchBar() {
  var searchBar = document.querySelectorAll("ytd-searchbox");
  var videoList = document.querySelectorAll("ytd-video-renderer");
  if (videoList.length == 0 && searchBar.length > 0) {
    searchBar = searchBar[0];
    searchBar.style = "margin-top: 45%";
  }
}

unwantedSelector.map(function (selector) { removeVideosFromSelector(selector); });
unwantedElements.map(function (element) { removeElement(element); });
window.addEventListener('popstate', function(){
  focusSearchBar();
});
focusSearchBar();
