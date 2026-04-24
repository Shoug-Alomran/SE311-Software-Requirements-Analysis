# Domain Model

The Phase 3 report defines the core Sillah domain around user-owned
family health data, recorded medical events, generated risk alerts,
appointments, and dashboard summaries.

---

## Core Entities

### User

Represents the registered person who owns an account and manages linked
family health data.

| Attribute | Description | Type / Notes |
| --- | --- | --- |
| `user_id` | Unique user identifier | Integer or UUID, primary key |
| `first_name` | User first name | Required string |
| `last_name` | User last name | Required string |
| `email` | User email address | Required, unique, valid format |
| `password` | Authentication credential | Stored securely |
| `role` | User role | Enum, e.g. `family_user`, `provider`, `admin` |
| `created_at` | Account creation timestamp | Auto-generated datetime |

### Family Member

Represents a person whose health data is tracked under a user account.

| Attribute | Description | Type / Notes |
| --- | --- | --- |
| `family_member_id` | Unique family member identifier | Integer, primary key |
| `user_id` | Owning user reference | Foreign key to `user` |
| `member_name` | Full name | Required string |
| `relationship` | Relationship to user | Enum / string |
| `gender` | Gender | Optional |
| `date_of_birth` | Date of birth | Date |
| `age` | Age | Can be derived from date of birth |
| `nationality` | Nationality | Optional string |
| `medical_notes` | General notes | Optional text |

### Health Event

Stores a medical event or health condition linked to a family member.

| Attribute | Description | Type / Notes |
| --- | --- | --- |
| `event_id` | Unique health event identifier | Integer, primary key |
| `family_member_id` | Related family member | Foreign key |
| `condition_name` | Event or condition name | Required string |
| `condition_type` | Category | Enum / string |
| `diagnosis_date` | Recorded date | Optional date |
| `severity` | Severity level | Enum / string |
| `status` | Current condition state | Enum / string |
| `notes` | Additional notes | Optional text |

### Health Condition

Represents the standardized condition entry used for classification and
risk grouping.

| Attribute | Description | Type / Notes |
| --- | --- | --- |
| `condition_id` | Unique condition identifier | Integer, primary key |
| `condition_name` | Standardized condition name | Required string |
| `description` | Short explanation | Optional text |
| `risk_category` | Associated risk class | Enum / string |

### Risk Alert

Represents an alert generated from health data and risk rules.

| Attribute | Description | Type / Notes |
| --- | --- | --- |
| `alert_id` | Unique alert identifier | Integer, primary key |
| `family_member_id` | Related family member | Foreign key |
| `alert_title` | Short title | Required string |
| `alert_message` | Full user-facing message | Required text |
| `risk_level` | Alert severity | Enum / string |
| `recommendation` | Suggested preventive action | Optional text |
| `created_at` | Generation timestamp | Auto-generated datetime |
| `is_read` | Read flag | Boolean, default `false` |

### Appointment

Represents a scheduled or simulated appointment linked to the family
health workflow.

| Attribute | Description | Type / Notes |
| --- | --- | --- |
| `appointment_id` | Unique appointment identifier | Integer, primary key |
| `family_member_id` | Related family member | Foreign key |
| `clinic_name` | Selected clinic | Required string |
| `doctor_name` | Provider name | Optional string |
| `appointment_date` | Appointment date | Required date |
| `appointment_time` | Appointment time | Required time |
| `status` | Appointment state | Enum / string |
| `notes` | Additional notes | Optional text |

### Dashboard Summary

Derived data displayed to the user on the dashboard.

| Attribute | Description | Type / Notes |
| --- | --- | --- |
| `total_family_members` | Number of linked members | Calculated integer |
| `total_health_events` | Recorded health event count | Calculated integer |
| `active_alerts_count` | Current active alerts | Calculated integer |
| `upcoming_appointments` | Upcoming appointment count | Calculated integer |

### Query Result

Represents output returned from SQL query execution in the CS340 demo
layer.

| Attribute | Description | Type / Notes |
| --- | --- | --- |
| `query_id` | Query execution session identifier | Optional integer |
| `query_text` | SQL statement entered by user | Text |
| `execution_time` | Query duration | Optional float / decimal |
| `result_set` | Returned rows | Structured table data |
| `query_status` | Execution result | Enum / string |

---

## Relationship Summary

- One `user` owns many `family_member` records.
- One `family_member` may have many `health_event` records.
- One `family_member` may trigger many `risk_alert` records.
- One `family_member` may have many `appointment` records.
- `dashboard_summary` is derived from stored user-linked records rather
  than stored as a primary standalone business entity.

---

## Analysis Model Notes

The Phase 3 appendix includes ER-style analysis diagrams that reinforce
the same structure:

- user-centered ownership of data
- event and alert generation around family members
- appointment linkage as a supporting feature
- dashboard values derived from stored operational records

This domain model is intentionally centered on controlled ownership,
traceable health events, and safe alert generation rather than direct
clinical decision-making.
