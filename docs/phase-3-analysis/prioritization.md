# Prioritization

The Phase 3 report assigns implementation priority at the **feature**
level. The analysis emphasizes four high-priority operational features
and two medium-priority supporting features.

---

## Priority Matrix

| Feature | Priority | Rationale |
| --- | --- | --- |
| User Account Management | High | Required for secure access and ownership of all user data |
| Family Member Management | High | Central structure for organizing family health information |
| Health Event Tracking | High | Core mechanism for storing health history and conditions |
| Risk Alert System | High | Main preventive-health value proposition of the system |
| Dashboard and Data Visualization | Medium | Important for usability and monitoring, but depends on core data features |
| Database Interaction (CS340 Demo Layer) | Medium | Useful for demonstration and CRUD visibility, but not core to end-user health workflows |

---

## Release Interpretation

### High-priority core

These features should be treated as the minimum meaningful release
scope:

1. secure account access
2. family-member ownership and profile management
3. health event recording and retrieval
4. risk alert generation and display

### Medium-priority supporting scope

These features strengthen the product but rely on the core workflows:

1. dashboard summaries and visualization
2. SQL interaction and CRUD demonstration through the CS340 layer

---

## Requirement Count by Feature

| Feature | Requirement IDs | Count |
| --- | --- | --- |
| User Account Management | `REQ-1` to `REQ-5` | 5 |
| Family Member Management | `REQ-6` to `REQ-10` | 5 |
| Health Event Tracking | `REQ-11` to `REQ-15` | 5 |
| Risk Alert System | `REQ-16` to `REQ-20` | 5 |
| Dashboard and Data Visualization | `REQ-21` to `REQ-25` | 5 |
| Database Interaction | `REQ-26` to `REQ-30` | 5 |

---

## Implementation View

From a delivery perspective, the analyzed roadmap naturally separates
into:

- **Foundation:** authentication, user ownership, and controlled access
- **Health data core:** family members plus health event storage
- **Preventive insight layer:** alert logic and alert presentation
- **Support layer:** dashboard rollups and demonstration tooling

This prioritization keeps the release aligned with the original Sillah
goal: helping families track health conditions and receive
preventive-health alerts through a secure web application.
