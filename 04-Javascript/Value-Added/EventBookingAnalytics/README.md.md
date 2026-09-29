# Event Booking Analytics Engine

## 1. Project Overview

This project implements an Event Booking Analytics Engine for EventSphere, an event management platform.

The application processes booking data and generates revenue, attendance, customer spending, VIP customer, validation, and analytics dashboard reports. The original buggy implementation was debugged and the required reporting features were added using reusable JavaScript functions.

## 2. Features Implemented

- Event revenue report
- Top revenue event identification
- Attendance percentage calculation
- Customer spending report
- VIP customer identification
- Booking validation with multiple error collection
- Analytics dashboard object
- Reusable business functions
- Array methods including reduce(), filter(), map(), and find() where applicable
- Refactored code to avoid duplicated business logic

## 3. Bugs Fixed

- Fixed revenue calculation by using tickets × ticketPrice instead of ticketPrice alone.
- Fixed attendee filtering by replacing assignment with a proper boolean comparison.
- Fixed event aggregation by initializing an event's total before adding tickets.
- Fixed popular-event processing so the required top revenue event is selected instead of returning only the raw aggregation object.

## 4. How To Execute

Make sure Node.js is installed.

Open the project folder in the terminal and run:

```bash
node booking-analytics.js
```

The program will display the revenue report, top revenue event, attendance report, customer spending, VIP customers, validation output, and analytics dashboard.

## 5. Sample Output

### Revenue Report

Angular Summit : 2500
NodeJS Bootcamp : 700
React Conference : 2400

### Top Revenue Event

Top Revenue Event:
Angular Summit
Revenue: 2500

### Attendance Report

Attendance Percentage: 75%

### Customer Spending

Rahul : 1000
Priya : 700
Arun : 1500
Divya : 2400

### VIP Customers

Arun
Divya

### Validation Output

isValid: false

Errors:
- Customer Name Required
- Invalid Ticket Count
- Ticket Price Required

### Analytics Dashboard

totalRevenue: 5600
totalBookings: 4
totalAttendees: 3
attendancePercentage: 75
topRevenueEvent: Angular Summit
vipCustomers: Arun, Divya

## 6. Project Files

- `booking-analytics.js` - Main JavaScript implementation
- `EVENT_BOOKING_BUG_ANALYSIS_REPORT.xlsx` - Bug analysis and requirement checklist
- `README.md` - Project documentation
- `screenshots/` - Required output screenshots
