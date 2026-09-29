const bookings = [
    {
        bookingId: 1,
        customerName: "Rahul",
        eventName: "Angular Summit",
        tickets: 2,
        ticketPrice: 500,
        attended: true
    },
    {
        bookingId: 2,
        customerName: "Priya",
        eventName: "NodeJS Bootcamp",
        tickets: 1,
        ticketPrice: 700,
        attended: false
    },
    {
        bookingId: 3,
        customerName: "Arun",
        eventName: "Angular Summit",
        tickets: 3,
        ticketPrice: 500,
        attended: true
    },
    {
        bookingId: 4,
        customerName: "Divya",
        eventName: "React Conference",
        tickets: 4,
        ticketPrice: 600,
        attended: true
    }
];

/* Helper Function */

const calculateBookingAmount = (booking) => {
    return booking.tickets * booking.ticketPrice;
};


/* Requirement 1: Generate Event Revenue Report */

const generateRevenueReport = (bookings) => {

    const revenueMap = {};

    bookings.forEach((booking) => {

        if (!revenueMap[booking.eventName]) {
            revenueMap[booking.eventName] = 0;
        }

        revenueMap[booking.eventName] += calculateBookingAmount(booking);
    });

    return revenueMap;
};


/* Requirement 2: Generate Top Revenue Event */

const getTopRevenueEvent = (bookings) => {

    const revenueMap = generateRevenueReport(bookings);

    let topEvent = null;
    let topRevenue = 0;

    for (const eventName in revenueMap) {

        if (topEvent === null || revenueMap[eventName] > topRevenue) {
            topEvent = eventName;
            topRevenue = revenueMap[eventName];
        }
    }

    return {
        eventName: topEvent,
        revenue: topRevenue
    };
};


/* Requirement 3: Generate Attendance Percentage */

const generateAttendanceReport = (bookings) => {

    const attendedBookings = bookings.filter(
        (booking) => booking.attended === true
    ).length;

    const attendancePercentage =
        (attendedBookings / bookings.length) * 100;

    return Number(attendancePercentage.toFixed(2));
};


/* Requirement 4: Generate Customer Spending Report */

const generateCustomerSpendingReport = (bookings) => {

    const spendingMap = {};

    bookings.forEach((booking) => {

        if (!spendingMap[booking.customerName]) {
            spendingMap[booking.customerName] = 0;
        }

        spendingMap[booking.customerName] +=
            calculateBookingAmount(booking);
    });

    return spendingMap;
};


/* Requirement 5: Generate VIP Customers */

const generateVipCustomers = (bookings) => {

    const spendingMap = generateCustomerSpendingReport(bookings);

    return Object.keys(spendingMap).filter(
        (customerName) => spendingMap[customerName] >= 1500
    );
};


/* Requirement 6: Add Booking Validation */

const validateBooking = (booking) => {

    const errors = [];

    if (!booking.customerName ||
        booking.customerName.trim() === "") {
        errors.push("Customer Name Required");
    }

    if (booking.tickets === null ||
        booking.tickets === undefined ||
        booking.tickets <= 0) {
        errors.push("Invalid Ticket Count");
    }

    if (booking.ticketPrice === null ||
        booking.ticketPrice === undefined ||
        booking.ticketPrice <= 0) {
        errors.push("Ticket Price Required");
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
};


/* Requirement 7: Generate Analytics Dashboard */

const generateDashboard = (bookings) => {

    const totalRevenue = bookings.reduce(
        (total, booking) =>
            total + calculateBookingAmount(booking),
        0
    );

    const totalBookings = bookings.length;

    const totalAttendees = bookings.filter(
        (booking) => booking.attended === true
    ).length;

    const attendancePercentage =
        generateAttendanceReport(bookings);

    const topRevenueEvent =
        getTopRevenueEvent(bookings);

    const vipCustomers =
        generateVipCustomers(bookings);

    return {
        totalRevenue: totalRevenue,
        totalBookings: totalBookings,
        totalAttendees: totalAttendees,
        attendancePercentage: attendancePercentage,
        topRevenueEvent: topRevenueEvent.eventName,
        vipCustomers: vipCustomers
    };
};


/* Display Revenue Report */

console.log("===== REVENUE REPORT =====");

const revenueReport = generateRevenueReport(bookings);

Object.entries(revenueReport).forEach(
    ([eventName, revenue]) => {
        console.log(eventName + " : " + revenue);
    }
);


/* Display Top Revenue Event */

console.log("\n===== TOP REVENUE EVENT =====");

const topRevenueEvent = getTopRevenueEvent(bookings);

console.log("Top Revenue Event:");
console.log(topRevenueEvent.eventName);
console.log("Revenue: " + topRevenueEvent.revenue);


/* Display Attendance Report */

console.log("\n===== ATTENDANCE REPORT =====");

console.log(
    "Attendance Percentage: " +
    generateAttendanceReport(bookings) +
    "%"
);


/* Display Customer Spending */

console.log("\n===== CUSTOMER SPENDING =====");

const customerSpending =
    generateCustomerSpendingReport(bookings);

Object.entries(customerSpending).forEach(
    ([customerName, spending]) => {
        console.log(customerName + " : " + spending);
    }
);


/* Display VIP Customers */

console.log("\n===== VIP CUSTOMERS =====");

generateVipCustomers(bookings).forEach(
    (customerName) => {
        console.log(customerName);
    }
);


/* Display Validation Output */

console.log("\n===== VALIDATION OUTPUT =====");

const invalidBooking = {
    bookingId: 10,
    customerName: "",
    tickets: -2,
    ticketPrice: null
};

console.log(validateBooking(invalidBooking));


/* Display Dashboard */

console.log("\n===== ANALYTICS DASHBOARD =====");

console.log(generateDashboard(bookings));