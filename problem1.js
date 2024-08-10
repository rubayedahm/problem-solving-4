function calculateMoney(ticket) {
    if(typeof(ticket) !== "number") {
        return " Invalid Number"
    }
    const ticketPrice = 120;
    const stuffFee = 500;
    const lunchFee = 8 * 50;

    const soldTicket = ticket * ticketPrice;
    const restMoney = soldTicket - stuffFee - lunchFee;
    return restMoney

}

console.log(calculateMoney(10));