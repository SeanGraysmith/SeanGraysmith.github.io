class Song {
    // create a new Song
    constructor(title,artist,album,year,genre,coverArt,youTube) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.coverArt = coverArt;
        this.youTube = youTube;
    }

    // get a card for this song
    get card() {
        const card = document.createElement("section");

        // creating link container for content
        const aCont = document.createElement("a");
        aCont.href="#";
        aCont.classList.add("card-link");

        // aCont onclick
        aCont.onclick = (e) => {
            e.preventDefault();
            openModal(this);
        };

        // add content to a container
        const titleH3 = document.createElement("h3");
        titleH3.innerHTML = this.title;
        aCont.append(titleH3);

        const authorP = document.createElement("p");
        authorP.innerHTML = "By " + this.artist;
        aCont.append(authorP);

        const coverArtImg = document.createElement("img");
        coverArtImg.src = `images/${this.coverArt}`;
        aCont.append(coverArtImg);

        card.append(aCont);
        return card;
    }
}

// function to open the modal
function openModal(song) {
    // assigning html content to variable data
    document.getElementById("modal-song-youtube").src = song.youTube;
    document.getElementById("modal-song-title").innerHTML = song.title;
    document.getElementById("modal-song-artist").innerHTML = "By " + song.artist;
    document.getElementById("modal-song-album-year").innerHTML = song.album + ", " + song.year;
    document.getElementById("modal-song-genre").innerHTML = song.genre;

    // this is where the modal is set to show
    document.getElementById("songModal").style.display = "block";
}

// function to close the modal
function closeModal() {
    document.getElementById("songModal").style.display = "none";

    // prevents background play
    document.getElementById("modal-song-youtube").src = "";
}

// interestint extra function to close
// if you click outside of the modal, it closes
window.onclick = (e) => {
    if (e.target === document.getElementById("songModal"))
        closeModal();
};

// simple array of songs
const songArray = [
    new Song("I Gotta Feeling", "The Black Eyed Peas", "The E.N.D.", "2009", "Pop", "song1.png", "https://www.youtube.com/embed/uSD4vsh1zDA"),
    new Song("Mockingbird", "Eminem", "Encore", "2005", "Hip hop", "song2.png", "https://www.youtube.com/embed/S9bCLPwzSC0?list=PL5D7fjEEs5yflZzSZAhxfgQmN6C_6UJ1W"),
    new Song("Walking On Sunshine", "Katrina and The Waves", "Katrina and the Waves", "1985", "Pop", "song3.png", "https://www.youtube.com/embed/iPUmE-tne5U?list=PLkenQ93jaWqECnY5ZlIdXK6FG-dsxoYuz"),
    new Song("Vossi Bop", "Stormzy", "Single", "2019", "Hip hop", "song4.png", "https://www.youtube.com/embed/9ClYy0MxsU0")
];

// for each, append to div in html
for (const song of songArray) {
    document.getElementById("songs").append(song.card);
}