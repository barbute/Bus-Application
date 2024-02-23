import {
    Status,
    BusColor,
    BusList
} from "./bus.js"

import {
    getCardStyles,
    getPropertiesStyles
} from "./styles.js"

const listContainer = document.getElementById("list-container-1");

export function buildList() {
    let busItems = [];

    for (let i = 0; i < BusList.length; i++) {
        let card = buildCard(BusList[i]);
        let properties = buildProperties(BusList[i]);

        let itemStyle = `
        <style>
        #listing-${BusList[i].number} {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        
            margin: 8.0px 5.0px;
        
            background-color: var(--color-background-listing);
        
            border-radius: var(--border-radius);
            box-shadow: rgb(161, 161, 161) 0.0px 4.0px 3.0px;
        
            font-size: var(--size-font-normal);
        }
        </style>
        `;

        busItems.push(`
        ${itemStyle}
        <div id="listing-${BusList[i].number}">${card}${properties}</div>
        `);
    }

    listContainer.innerHTML = busItems.join("");
}

function buildCard(bus) {
    let number = bus.number;
    let status = bus.status;
    let notice = bus.notice;

    let styles = getCardStyles(number, status, notice);
    let html = (bus.notice != "NONE") ? 
    `
    <style>${styles}</style>
    <div onclick="displayPropertiesOnClick(${number})" id="listing-card-${number}">
        <div id="listing-test-num">${number}</div>
        <div id="listing-status-${number}">${status}</div>
    </div>
    <div id="listing-notice-${number}">${bus.notice}</div>
    ` : `
    <style>${styles}</style>
    <div onclick="displayPropertiesOnClick(${number})" id="listing-card-${number}">
        <div id="listing-test-num">${number}</div>
        <div id="listing-status-${number}">${status}</div>
    </div>
    `;

    return html;
}

function buildProperties(bus) {
    let number = bus.number;
    let status = bus.status;
    let notice = bus.notice;
    let color = bus.color;

    let styles = getPropertiesStyles(number, status, notice, color);
    let html = `
    <style>${styles}</style>
        <div id="listing-properties-item-${number}">
        <div id="properties-title-${number}">STATUS</div>
        <div onclick="statusSelectorHandler(${number})"id="listing-properties-button-container-${number}">
            <div id="properties-status-${number}">${bus.status}</div>
            <div id="properties-button-${number}">↩</div>
        </div>
    </div>
    <div id="listing-properties-item-${number}">
        <div id="properties-title-${number}">NOTICE</div>
        <div id="listing-properties-button-container-${number}">
            <div id="properties-notice-${number}">${bus.notice}</div>
            <div id="properties-button-${number}">↩</div>
        </div>
    </div>
    <div id="listing-properties-item-${number}">
        <div id="properties-title-${number}">COLOR</div>
        <div id="listing-properties-button-container-${number}">
            <div id="properties-color-${number}"></div>
            <div id="properties-button-${number}">↩</div>
        </div>
    </div>
    `;
    html += (bus.linked) ? 
    `
    <div id="listing-properties-item-${number}">
        <div id="properties-title-${number}">LINKED</div>
        <div id="listing-properties-button-container-${number}">
            <div id="properties-linked-${number}">${bus.linkedTo}</div>
            <div id="properties-button-${number}">↩</div>
        </div>
    </div>
    ` : `
    <div id="listing-properties-item-${number}">
        <div id="properties-title-${number}">LINKED</div>
        <div id="listing-properties-button-container-${number}">
            <div id="properties-linked-${number}">SELF</div>
            <div id="properties-button-${number}">↩</div>
        </div>
    </div>
    `;

    return `<div id="listing-properties-container-${number}">${html}</div>`;
}

function displayPropertiesOnClick(number) {
    var propertiesContainer = document.getElementById("listing-properties-container-" + number);
    var notice = document.getElementById("listing-notice-" + number);

    if (propertiesContainer.style.display == "none") {
        propertiesContainer.style.display = "block";
        notice.style.borderBottomLeftRadius = "0.0px";
        notice.style.borderBottomRightRadius = "0.0px";
    }
    else {
        propertiesContainer.style.display = "none";
        notice.style.borderBottomLeftRadius = "var(--border-radius)";
        notice.style.borderBottomRightRadius = "var(--border-radius)";
    }    
}