"use strict";
function make_album(artist, title, tracks) {
    if (typeof tracks !== 'undefined') {
        return {
            artist: artist,
            title: title,
            tracks: tracks
        };
    }
    else {
        return {
            artist: artist,
            title: title
        };
    }
}
console.log(make_album('Travis Scott', 'Utopia', 14));
console.log(make_album('Taylor Swift', '1989'));
console.log(make_album('The Weeknd', 'Blinding Lights'));
