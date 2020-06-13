let template = `
<audio controls
    style="
    width:100%;
    ">
    <source 
        src="https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3" 
        type="audio/mpeg">
</audio>`;

class appPlayer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = template;
    }
}

customElements.define("app-player", appPlayer);