import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import '@polymer/iron-image/iron-image.js';

import template from './polymer-card.pug';
import style from './polymer-card.pcss';

export default class CodinPolymerCard extends PolymerElement {
    static get is() { return "codin-polymer-card" }
    static get template() { return html([`<style>${style}</style>${template}`]);}
    static get properties(){
        return {
            image: {
                type: String,
                value: ''
            }
        }
    }
}