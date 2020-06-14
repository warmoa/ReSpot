import "../component/appPlayer";

class appResultChild extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set track(track) {
        this._track = track;
        this.render();
    }

    play(src) {
        const appPlayerElement = document.querySelector("app-player");
        appPlayerElement.link = src;
    }

    render() {
        let min = ((this._track.duration) / 60).toFixed();
        let sec = ((this._track.duration) % 60).toFixed();
        if (sec < 10) {
            sec = `0${sec}`;
        }


        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   background-color:rgba(255, 255, 255, 0.6);
                   display: block;
                   margin: 9px 1%;
                   box-shadow: 0 4px 8px 8px rgba(255, 195, 36, 0.2);
                   border-radius: 0 30px 0 30px;
                   overflow: hidden;
               }
              
               .track-info {
                   padding: 24px;
               }
              
               .track-info > h1 {
                   font-weight: bolder;
               }
              
               .club-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }
               .flex-row{
                display: flex;
                flex-direction: row;
              }
              
              .flex-column{
                display: flex;
                flex-direction: column;
              }

              .link{
                text-decoration: none;
                color: black;
                transition: 1s all;
              }

              .link:hover{
                color: #ffc324;
              }

              .play{
                font-size: 5em;
                transition: 1s all;
              }

              .play:hover{
                color: #ffc324;
                background: white;
                border-radius:50%;
              }

              @media screen and (max-width: 550px){
                .play{
                  font-size:2em;
                }
              
              }
              

           </style>
           <div class="track-info flex-row">
                <div class="flex-column">
                    <img src="https://api.deezer.com/album/${this._track.album.id}/image">
                </div>
                <div class="flex-column" style="padding-left:30px">
                    <h1>
                        <a class="link" href="https://www.deezer.com/track/${this._track.id}" target="_blank">
                            ${this._track.title_short}
                        </a>
                    </h1>
                    <h3>
                        <a class="link" href="https://www.deezer.com/artist/${this._track.artist.id}" target="_blank">
                            ${this._track.artist.name}
                        </a>
                    </h3>
                    <h2>
                        <a class="link" href="https://www.deezer.com/album/${this._track.album.id}" target="_blank">
                            ${this._track.album.title}
                        </a>
                    </h2>
                    ${min}:${sec}
                </div>
                <div class="flex-column play" style="margin:auto 5% auto auto;">
                <i class="far fa-play-circle"></i>
                </div>

           </div>`;

        const styles = document.querySelector('link[href*="fontawesome"]');
        if (styles) {
            this.shadowRoot.appendChild(styles.cloneNode());
        }

        this.shadowRoot.querySelector(".play").onclick = () => this.play(this._track.preview);
    }
}

customElements.define("app-result-child", appResultChild);