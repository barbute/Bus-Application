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

const Bus = {
    number: 0,
    status: Status.ENROUTE,
    notice: "NONE",
    color: BusColor.YELLOW,
    linked: false,
    linkedTo: -1
}

var busList = [];