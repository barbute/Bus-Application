
const Status = Object.freeze(
    {
        ARRIVED: "ARRIVED",
        ENROUTE: "EN-ROUTE",
        DEPARTED: "DEPARTED",
    }
)
const BusColor = Object.freeze(
    {
        YELLOW: "#F2994B",
        RED: "#CA4747"
    }
)

let BusList = [
    {
        number: 10,
        status: Status.ARRIVED,
        notice: "Bus 10 will have a substitute driver",
        color: BusColor.YELLOW,
        linked: false,
        linkedTo: -1
    },
    {
        number: 78,
        status: Status.ENROUTE,
        notice: "NONE",
        color: BusColor.YELLOW,
        linked: false,
        linkedTo: -1
    }
]

const listContainer = document.getElementById("list-container-1");

function buildBusList() {
    var builtList = []

    for(let i = 0; i < BusList.length; i++) {
        let card = buildBusListCard(BusList[i], i);
        let properties = buildBusListProperties(BusList[i], i);

        builtList.push(
            `
            <style>
            #listing-${i} {
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
            <div id="listing-${i}">${card}${properties}</div>`
        );
    }
    listContainer.innerHTML = builtList.join("");
    console.log(listContainer.innerHTML);
}

function buildBusListCard(Bus, identifierNumber) {
    let num = Bus.number;
    let status = Bus.status;
    let statusStyle = ``;

    if (Bus.status === Status.ARRIVED) {
        statusStyle = `
        <style>
        #listing-status-${identifierNumber} {
            font-weight: bold;
            color: var(--color-green)
        }
        </style>
        `
    }
    else if (Bus.status === Status.ENROUTE) {
        statusStyle = `
        <style>
        #listing-status-${identifierNumber} {
            font-weight: bold;
            color: var(--color-yellow);
        }
        </style>
        `
    }
    else {
        statusStyle = `
        <style>
        #listing-status-${identifierNumber} {
            font-weight: bold;
            color: var(--color-red);
        }
        </style>
        `
    }

    if (Bus.notice != "NONE") {
        return `
            ${statusStyle}
            <style>
            #listing-card-${identifierNumber} {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            
                padding: 1.0px 10.0px;
            
                background-color: var(--color-background-listing);
            
                border-radius: var(--border-radius);
            
                font-size: var(--size-font-normal);
            }
            #listing-notice-${identifierNumber} {
                padding: 4.0px 8.0px;

                background-color: var(--color-yellow);
            
                border-bottom-left-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            
                font-size: 15.0pt;
                font-weight: normal;
                text-align: center;
            }
            </style>
            <div onclick="displayPropertiesOnClick(${identifierNumber})" id="listing-card-${identifierNumber}">
                <div id="listing-test-num">${num}</div>
                <div id="listing-status-${identifierNumber}">${status}</div>
            </div>
            <div id="listing-notice-${identifierNumber}">${Bus.notice}</div>
        `;
    }

    return `
        ${statusStyle}
        <style>
        #listing-card-${identifierNumber} {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        
            padding: 1.0px 10.0px;
        
            background-color: var(--color-background-listing);
        
            border-radius: var(--border-radius);
        
            font-size: var(--size-font-normal);
        }
        </style>
        <div onclick="displayPropertiesOnClick(${identifierNumber})" id="listing-card-${identifierNumber}">
            <div id="listing-test-num">${num}</div>
            <div id="listing-status-${identifierNumber}">${status}</div>
        </div>
    `;
}

function buildBusListProperties(Bus, identifierNumber) {
    let style = 
    `
    <style>
    #listing-properties-container-${identifierNumber} {
        display: none;

        padding: 4.0px 8.0px;
    
        background-color: var(--color-text-light);
    
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    
        font-size: 15.0pt;
        font-weight: normal;
    }
    #listing-properties-item-${identifierNumber} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    
        padding: 3.0px;
    }
    #properties-title-${identifierNumber} {
        color: var(--color-text-gray);
    }
    #listing-properties-button-container-${identifierNumber} {
        display: flex;
        flex-direction: row;
    }
    #properties-button-${identifierNumber} {
        margin-left: 10.0px;
        padding: 0.0px 3.0px;
    
        border-radius: var(--border-radius);
    }
    #properties-button-${identifierNumber}:hover {
        background-color: var(--color-background);
    }
    </style>
    `;

    let statusStyle = ``;
    if (Bus.status === Status.ARRIVED) {
        statusStyle = 
        `<style>
            #properties-status-${identifierNumber} {
                color: var(--color-green);
            }
        </style>
        `;
    }
    else if (Bus.status === Status.ENROUTE) {
    statusStyle = 
    `<style>
        #properties-status-${identifierNumber} {
            color: var(--color-yellow);
        }
    </style>
    `;
    }
    else {
        statusStyle = 
        `<style>
            #properties-status-${identifierNumber} {
                color: var(--color-red);
            }
        </style>
        `;
    }

    let colorStyle =
    `
    <style>
        #properties-color-${identifierNumber} {
            width: 20.0px;
            height: 20.0px;
        
            background-color: ${Bus.color};
            border-radius: 50.0%;
        }
    </style>
    `;

    let noticeStyle =  `
        <style>
        #properties-notice-${identifierNumber} {
            width: auto;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        </style>
    `;

    if (Bus.notice != "NONE") {
        noticeStyle =  `
        <style>
        #properties-notice-${identifierNumber} {
            width: 90.0px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        </style>
        `;
    }

    let status = 
    `
    ${statusStyle}
    <div id="listing-properties-item-${identifierNumber}">
        <div id="properties-title-${identifierNumber}">STATUS</div>
        <div onclick="statusSelectorHandler(${identifierNumber})"id="listing-properties-button-container-${identifierNumber}">
            <div id="properties-status-${identifierNumber}">${Bus.status}</div>
            <div id="properties-button-${identifierNumber}">↩</div>
        </div>
    </div>
    `;

    let notice =
    `
    ${noticeStyle}
    <div id="listing-properties-item-${identifierNumber}">
        <div id="properties-title-${identifierNumber}">NOTICE</div>
        <div id="listing-properties-button-container-${identifierNumber}">
            <div id="properties-notice-${identifierNumber}">${Bus.notice}</div>
            <div id="properties-button-${identifierNumber}">↩</div>
        </div>
    </div>
    `;

    let color =
    `
    ${colorStyle}
    <div id="listing-properties-item-${identifierNumber}">
        <div id="properties-title-${identifierNumber}">COLOR</div>
        <div id="listing-properties-button-container-${identifierNumber}">
            <div id="properties-color-${identifierNumber}"></div>
            <div id="properties-button-${identifierNumber}">↩</div>
        </div>
    </div>
    `;

    let linked = ``;
    if (Bus.linked) {
        linked =
        `
        <div id="listing-properties-item-${identifierNumber}">
            <div id="properties-title-${identifierNumber}">LINKED</div>
            <div id="listing-properties-button-container-${identifierNumber}">
                <div id="properties-linked-${identifierNumber}">${Bus.linkedTo}</div>
                <div id="properties-button-${identifierNumber}">↩</div>
            </div>
        </div>
        `;
    }
    else {
        linked = 
        `
        <div id="listing-properties-item-${identifierNumber}">
            <div id="properties-title-${identifierNumber}">LINKED</div>
            <div id="listing-properties-button-container-${identifierNumber}">
                <div id="properties-linked-${identifierNumber}">SELF</div>
                <div id="properties-button-${identifierNumber}">↩</div>
            </div>
        </div>
        `;
    }

    return `
    ${style}
    <div id="listing-properties-container-${identifierNumber}">
        ${status}
        ${notice}
        ${color}
        ${linked}
    </div>
    `;
}

function displayPropertiesOnClick(id) {
    var propertiesContainer = document.getElementById("listing-properties-container-" + id);
    var notice = document.getElementById("listing-notice-" + id);

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

function statusSelectorHandler(id) {
    var propertyContainer = document.getElementById("listing-properties-button-container-" + id).parentElement.parentElement;

    let selectorHTML = 
    `
    <style>
    #properties-status-selector-${id} {}
    </style>
    <div id="properties-status-selector-${id}">
        <form id="properties-status-selector-${id}>
            <input type="radio" name="options" value="ARRIVED">
            <label for="ARRIVED">ARRIVED</label></br>
            <input type="radio" name="options" value="ENROUTE">
            <label for="ENROUTE">EN-ROUTE</label></br>
            <input type="radio" name="options" value="DEPARTED">
            <label for="DEPARTED">DEPARTED</label>
        </form>
    </div>
    `;
    propertyContainer.innerHTML += selectorHTML;

    var statusSelector = document.getElementById("properties-status-selector-" + id);
    statusSelector.addEventListener("change", function() {
        console.log(statusSelector.getElementsByTagName("options"));
    })
}

buildBusList();

// -----------------------------------------------------------------