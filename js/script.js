function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    var ubica = "upgrading.never.helps";
    ubicaUrl = "https://map.what3words.com/" + ubica;
    x = document.getElementsByClassName("app-bar");
    x[1].innerHTML= "#" + channelName + " <small>by <strong><a href=" + ubicaUrl + ">" + 
        ubica + "</a></strong></small>" + "<img id=\"app-star\" src=\"http://ip.lfe.mw.tum.de/sections/star.png\" alt=\"star\" onclick=\"changeStar()\">";
    selectTab(channelName)
}

function changeStar(){
    var i = 0;
    $('#app-star').attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
}

function selectTab(tabId) {
    $('li').removeClass('selected');
    $('#' + tabId).addClass('selected');
}

function showEmojis() {
    $('#emojis').toggle(0.1);
}