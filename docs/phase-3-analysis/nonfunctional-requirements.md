# Non-Functional Requirements

The Phase 3 report defines non-functional requirements that constrain
how the Sillah system should perform, protect data, communicate with
users, and comply with privacy expectations.

---

## 1. Performance Requirements

- `PE-1` The system shall support concurrent access by at least 100 users without significant degradation in performance.
- `PE-2` The system shall load all primary web pages within 3 seconds under normal network conditions.
- `PE-3` The system shall display responses to user actions within 2 seconds after submission.
- `PE-4` The system shall display confirmation messages within 2 seconds after successful user operations.

---

## 2. Safety Requirements

- `SA-1` The system shall clearly indicate that it does not provide medical diagnosis or replace professional medical advice.
- `SA-2` The system shall ensure that health-related alerts and recommendations are presented as informational guidance only.
- `SA-3` The system shall prevent incomplete or inconsistent health data from being displayed in misleading ways.
- `SA-4` The system shall provide clear and understandable alert messages to reduce user confusion.
- `SA-5` The system shall validate user-entered health data to reduce the risk of incorrect records being stored or processed.

---

## 3. Security Requirements

- `SE-1` All network communications shall be encrypted using secure protocols such as HTTPS.
- `SE-2` The system shall require users to authenticate using valid credentials before accessing protected features.
- `SE-3` The system shall ensure that users can only access and modify their own data.
- `SE-4` The system shall securely store user credentials and sensitive data.
- `SE-5` The system shall comply with applicable privacy considerations, including awareness of the Saudi Personal Data Protection Law (PDPL).

---

## 4. Software Quality Attributes

- `Availability-1` The system shall be available to users at least 99% of the time, excluding scheduled maintenance.
- `Usability-1` The system shall provide a user-friendly interface that allows users to complete core tasks with minimal training.
- `Reliability-1` The system shall ensure consistent operation and accurate data processing under normal conditions.
- `Robustness-1` If a system error occurs, the system shall handle the error gracefully without loss of user data.

---

## 5. Business Rules

- `BR-1` Each user shall be permitted to create and manage only their own account and associated data.
- `BR-2` A user may create, update, or delete multiple family member profiles associated with their account.
- `BR-3` Health events and conditions shall be recorded only for existing family members.
- `BR-4` Risk alerts shall be generated from predefined rules derived from recorded health data.
- `BR-5` Risk alerts shall be associated with the specific family member whose data triggered them.
- `BR-6` The system shall not provide medical diagnosis or clinical decision-making; alerts are informational only.
- `BR-7` Users shall authenticate before accessing or modifying personal or family health data.
- `BR-8` Users shall not access or modify data belonging to other users.
- `BR-9` The system shall maintain consistency between stored health data and generated alerts.
- `BR-10` Required fields shall be completed before any health-related record is stored.

---

## 6. Internationalization Requirements

- `IR-1` The system shall support both Arabic and English, including right-to-left and left-to-right layouts.
- `IR-2` The system shall allow users to switch between supported languages at any time.

---

## 7. Legal and Regulatory Requirements

- `LR-1` The system shall comply with applicable data privacy regulations, including awareness of the Saudi PDPL.
- `LR-2` The system shall ensure that personal and health-related data is handled according to privacy and confidentiality principles.

---

## 8. Database Requirements

- `DR-1` The system shall maintain structured storage of user, family member, health event, and alert data.
- `DR-2` The system shall ensure data consistency and integrity across stored records.
- `DR-3` The system shall support secure access to database systems through controlled interfaces.

---

## 9. Environmental and Implementation Constraints

The SRS also identifies surrounding operational constraints that shape
implementation:

- modern browser support is required across Chrome, Firefox, Edge, and Safari
- the platform is web-based and built around React, Vite, Node.js, and Express
- Supabase is used for authentication and application data storage
- MySQL supports the CS340 demonstration layer
- the release is constrained by academic-project scope, time, and integration boundaries

These constraints help explain why the current release emphasizes a
web-first architecture, controlled data ownership, and simplified
deployment expectations.
