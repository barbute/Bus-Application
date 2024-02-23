import {
    Status,
    BusColor
} from "./bus.js"

export function getCardStyles(number, status, notice) {
    let style = ``;

    style += getCardStatus(number, status);
    style += getCardNotice(number, notice);

    style += `
    #listing-card-${number} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    
        padding: 1.0px 10.0px;
        
        background-color: var(--color-background-listing);
        
        border-radius: var(--border-radius);
        
        font-size: var(--size-font-normal);
    }
    `;

    return style;
}

function getCardStatus(number, status) {
    if (status === Status.ARRIVED) {
        return `
        #listing-status-${number} {
            font-weight: bold;
            color: var(--color-green)
        }
        `;
    }
    else if (status === Status.ENROUTE) {
        return `
        #listing-status-${number} {
            font-weight: bold;
            color: var(--color-yellow);
        }
        `;
    }
    return `
        #listing-status-${number} {
            font-weight: bold;
            color: var(--color-red);
        }
        `;
    
}

function getCardNotice(number, notice) {
    if (notice != "NONE" ) {
        return `
        #listing-notice-${number} {
            padding: 4.0px 8.0px;

            background-color: var(--color-yellow);
        
            border-bottom-left-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        
            font-size: 15.0pt;
            font-weight: normal;
            text-align: center;
        }
        `;
    }
    return ``;
}

export function getPropertiesStyles(number, status, notice, color) {
    let style = `
    #listing-properties-container-${number} {
        display: none;

        padding: 4.0px 8.0px;
    
        background-color: var(--color-text-light);
    
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    
        font-size: 15.0pt;
        font-weight: normal;
    }
    #listing-properties-item-${number} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    
        padding: 3.0px;
    }
    #properties-title-${number} {
        color: var(--color-text-gray);
    }
    #listing-properties-button-container-${number} {
        display: flex;
        flex-direction: row;
    }
    #properties-button-${number} {
        margin-left: 10.0px;
        padding: 0.0px 3.0px;
    
        border-radius: var(--border-radius);
    }
    #properties-button-${number}:hover {
        background-color: var(--color-background);
    }
    `;

    style += getPropertiesStatus(number, status);
    style += getPropertiesNotice(number, notice);
    style += getPropertiesColor(number, color);

    return style;
}

function getPropertiesStatus(number, status) {
    if (status === Status.ARRIVED) {
        return `
        #properties-status-${number} {
            color: var(--color-green);
        }
        `;
    }
    else if (status === Status.ENROUTE) {
        return `
        #properties-status-${number} {
            color: var(--color-yellow);
        }
        `;
    }
    else {
        return `
        #properties-status-${number} {
            color: var(--color-red);
        }
        `;
    }
}

function getPropertiesNotice(number, notice) {
    if (notice != "NONE") {
        return `
        #properties-notice-${number} {
            width: 90.0px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        `;
    }
    else {
        return `
        #properties-notice-${number} {
            width: auto;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        `;
    }
}

function getPropertiesColor(number, color) {
    return `
    #properties-color-${number} {
        width: 20.0px;
        height: 20.0px;
    
        background-color: ${color};
        border-radius: 50.0%;
    }
    `;
}