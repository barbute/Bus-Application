export const Status = Object.freeze(
    {
        ARRIVED: "ARRIVED",
        ENROUTE: "EN-ROUTE",
        DEPARTED: "DEPARTED",
    }
)
export const BusColor = Object.freeze(
    {
        YELLOW: "#F2994B",
        RED: "#CA4747"
    }
)

export let BusList = [
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
        color: BusColor.RED,
        linked: false,
        linkedTo: -1
    },
    {
        number: 100,
        status: Status.DEPARTED,
        notice: "NONE",
        color: BusColor.YELLOW,
        linked: false,
        linkedTo: -1
    },
]