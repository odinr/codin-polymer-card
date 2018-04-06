import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import '@polymer/iron-image/iron-image.js';

const template = '<div class="paper-material" elevation="5">\n    <slot name="avatar"></slot>\n    <iron-image src="[[image]]"></iron-image>\n    <slot name="content">GG</slot>\n</div>\n';
const style = '--app-element-card-image: {\n  height: 100px;\n}\n\niron-image {\n  display: block;\n  width: 100%;\n  --iron-image-width: 100%;\n  pointer-events: none;\n\n  @apply --app-element-card-image;\n}';


export default class CodinPolymerCard extends PolymerElement {
    static get is() {
        return "codin-polymer-card";
    }
    static get template() {
        return html([`<style>${style}</style>${template}`]);
    }
    static get properties() {
        return {
            image: {
                type: String,
                value: ''
            }
        };
    }
}