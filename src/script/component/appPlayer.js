class appPlayer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open",
        });
    }

    set link(link) {
        this._link = link;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <audio controls
            style="
            width:100%;
            " autoplay>
            <source 
                src="${this._link}" 
                type="audio/mpeg">
        </audio>`;
    }
}

customElements.define("app-player", appPlayer);