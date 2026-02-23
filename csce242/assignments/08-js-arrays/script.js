// object arrays
const happySongArray = {
    "Happy by The Rolling Stones" : {
        src: "https://www.youtube.com/embed/1175axY2Vvw"
    },

    "Don't Stop Me Now by Queen" : {
        src:"https://www.youtube.com/embed/HgzGwKwLmgM?list=PLoSgMNTlD231KJnpriZ5KkPQO0pB3sqYL"
    },
    
    "Pocketful of Sunshine by Natasha Bedingfield" : {
        src: "https://www.youtube.com/embed/gte3BoXKwP0"
    },

    "Walking On Sunshine by Katrina and The Waves" : {
        src: "https://www.youtube.com/embed/iPUmE-tne5U?list=PLkenQ93jaWqECnY5ZlIdXK6FG-dsxoYuz"
    },

    "I Gotta Feeling by The Black Eyed Peas" : {
        src: "https://www.youtube.com/embed/uSD4vsh1zDA"
    }
};

const sadSongArray = {
    "Birds of a Feather by Billie Eilish" : {
        src: "https://www.youtube.com/embed/V9PVRfjEBTI?list=PL5D7fjEEs5yflZzSZAhxfgQmN6C_6UJ1W"
    },

    "See you Again by Wiz Khalifa" : {
        src:"https://www.youtube.com/embed/RgKAFK5djSk?list=PL5D7fjEEs5yflZzSZAhxfgQmN6C_6UJ1W"
    },
    
    "Someone You Loved by Lewis Capaldi" : {
        src: "https://www.youtube.com/embed/zABLecsR5UE?list=PL5D7fjEEs5yflZzSZAhxfgQmN6C_6UJ1W"
    },

    "Mockingbird by Eminem" : {
        src:"https://www.youtube.com/embed/S9bCLPwzSC0?list=PL5D7fjEEs5yflZzSZAhxfgQmN6C_6UJ1W"
    },

    "Summertime Sadness by Lana Del Rey" : {
        src:"https://www.youtube.com/embed/nVjsGKrE6E8?list=PL5D7fjEEs5yflZzSZAhxfgQmN6C_6UJ1W"
    }
};

// function for adding embed code to the embed container
function showEmbedForSong(src, title){
    document.getElementById("video-embed").innerHTML = `<iframe src=${src} title="${title} width="971" height="555" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

// when the mood selector changes
document.getElementById("mood").onchange = (e) => {
    const happyOrSad = e.target.value;
    document.getElementById("dynamic-song-list").innerHTML = ""; //resetting values
    document.getElementById("video-embed").innerHTML = "";

    // chooses between happy or sad songs based on selector value
    if (happyOrSad == "happy") {
        // loops through songs, creates li items for the ul, and appends them
        for (const song in happySongArray) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.innerHTML = song;

            // adding onclick for the anchor
            a.onclick = (e) => {
                showEmbedForSong(happySongArray[song].src, song);
            }
            li.appendChild(a);
            document.getElementById("dynamic-song-list").appendChild(li);
        }
    } else if (happyOrSad == "sad"){
        for (const song in sadSongArray) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.innerHTML = song;

            // adding onclick for the anchor
            a.onclick = (e) => {
                showEmbedForSong(sadSongArray[song].src, song);
            }
            li.appendChild(a);
            document.getElementById("dynamic-song-list").appendChild(li);
        }
    }
};