# Functional Requirements

The Phase 3 SRS groups the analyzed functional requirements into six
main features. The first four represent the operational core of the
release, while the final two support visibility and demonstration.

---

## 1. User Account Management

**Priority:** High

This feature allows users to register, authenticate, and manage secure
access to the application.

### Key flow

1. User selects registration or login.
2. System shows the appropriate form.
3. User enters credentials.
4. System validates the submitted data.
5. System creates the account or grants access.
6. User can later log out safely.

### Requirements

- `REQ-1` The system shall allow users to register an account using valid credentials.
- `REQ-2` The system shall allow users to log in using their email and password.
- `REQ-3` The system shall allow users to log out of the system.
- `REQ-4` The system shall validate user credentials before granting access.
- `REQ-5` The system shall prevent unauthorized access to user accounts.

---

## 2. Family Member Management

**Priority:** High

This feature enables a user to manage profiles for multiple family
members and maintain the health information associated with them.

### Key flow

1. User opens the family management section.
2. System displays existing family member profiles.
3. User can add, edit, or delete a family member.
4. System validates required data before saving.
5. System stores changes and refreshes the visible list.

### Requirements

- `REQ-6` The system shall allow users to add new family members.
- `REQ-7` The system shall allow users to update family member information.
- `REQ-8` The system shall allow users to delete family members.
- `REQ-9` The system shall store family member data in the database.
- `REQ-10` The system shall associate family members with a specific user account.

---

## 3. Health Event Tracking

**Priority:** High

This feature allows users to record, store, review, and maintain
health-related events and conditions for each tracked family member.

### Key flow

1. User selects a family member profile.
2. System shows the health event history.
3. User adds, updates, views, or deletes an event.
4. System validates the event data.
5. System stores the final event record.

### Requirements

- `REQ-11` The system shall allow users to record health events.
- `REQ-12` The system shall store health event data in the database.
- `REQ-13` The system shall allow users to view recorded health events.
- `REQ-14` The system shall allow users to update health event records.
- `REQ-15` The system shall allow users to delete health event records.

---

## 4. Risk Alert System

**Priority:** High

This feature generates alerts from predefined health conditions and
risk rules to support preventive care and timely awareness.

### Key flow

1. User records or updates health data.
2. System processes the new information.
3. System evaluates predefined risk rules.
4. System generates alerts when conditions are met.
5. System displays alerts in the dashboard and related views.
6. System updates alerts dynamically when new data changes the risk state.

### Requirements

- `REQ-16` The system shall generate risk alerts based on health conditions.
- `REQ-17` The system shall display alerts to users.
- `REQ-18` The system shall update alerts dynamically when new data is entered.
- `REQ-19` The system shall associate alerts with specific family members.
- `REQ-20` The system shall store generated alerts in the database.

---

## 5. Dashboard and Data Visualization

**Priority:** Medium

The dashboard provides a centralized view of key health information,
active alerts, and derived summary data.

### Key flow

1. User logs in.
2. System loads the dashboard.
3. System retrieves family, event, and alert data.
4. System presents summarized information clearly.
5. System refreshes displayed data in real time or on refresh.

### Requirements

- `REQ-21` The system shall display a dashboard upon user login.
- `REQ-22` The dashboard shall summarize family health data.
- `REQ-23` The dashboard shall display active risk alerts.
- `REQ-24` The system shall update dashboard data in real time or upon refresh.
- `REQ-25` The system shall present data in a clear and organized format.

---

## 6. Database Interaction (CS340 Phase 5 Demo Layer)

**Priority:** Medium

This feature supports SQL-based demonstration interactions and CRUD
operations through the application layer.

### Key flow

1. User opens the database interaction interface.
2. System shows supported query input options.
3. User enters or selects a query.
4. System processes and executes the query.
5. System retrieves and displays the results.

### Requirements

- `REQ-26` The system shall allow execution of SQL queries through the application.
- `REQ-27` The system shall support `INSERT` operations into the database.
- `REQ-28` The system shall support `UPDATE` operations on stored data.
- `REQ-29` The system shall support `DELETE` operations on stored data.
- `REQ-30` The system shall retrieve and display query results to the user.

---

## Summary

The analyzed functional scope concentrates first on secure access,
family-centered health tracking, and alert generation. Dashboard
reporting and direct database interaction are included as supporting
capabilities, but they are not as central to the release as the core
tracking and alert workflows.
