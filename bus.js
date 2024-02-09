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

let number = 0;
let status = Status.ENROUTE;
let notice = "NONE";
let color = BusColor.YELLOWl;
let linked = false;
let linkedTo = -1;

function setLinked(busLinkedTo) {
    linked = true;
    linkedTo = busLinkedTo;
}