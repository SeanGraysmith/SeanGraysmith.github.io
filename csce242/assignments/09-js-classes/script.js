class Song {
    
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

        // add content to a container
        const titleH3 = document.createElement("h3");
        h3.innerHTML = this.title;
        aCont.append(titleH3);

        const authorP = document.createElement("p");
        authorP.innerHTML = this.artist;
        aCont.append(authorP);

        const coverArtImg = document.createElement("img");
        coverArtImg.src = `images/${this.coverArt};`
        
        return card;
    }
}