# 4. Interviews (Elicitation Notes + Evidence)

Interviews were conducted as a primary elicitation technique to gather
qualitative insights from key stakeholders. The objective was to
identify user needs, constraints, expectations, and potential risks
related to hereditary health tracking and preventive alerts.

---

## 4.1 Interview Guide

<div class="grid cards" markdown>

-   :material-history: **Current Tracking**

    Understand how family health history is currently captured and used.

-   :material-bell-alert-outline: **Alert Expectations**

    Identify what kinds of preventive alerts stakeholders find useful.

-   :material-lock-outline: **Trust and Privacy**

    Explore privacy concerns and confidence in stored health data.

-   :material-monitor-cellphone: **Usability**

    Assess expectations for clarity, access, and ease of use.

-   :material-hospital-box-outline: **Clinical Workflow**

    Understand provider workflow needs and adoption barriers.

-   :material-account-multiple: **Stakeholder Coverage**

    Interview prompts were designed for family users and healthcare
    providers to extract both functional and non-functional needs.

</div>

---

## 4.2 Interview Session 1 — Family Users
### Session Record

The report includes two documented healthcare-provider interviews:

- **Session 1:** Dr. Lama Alalula, ENT Surgeon  
  Interview date: **15 March 2026**
- **Session 2:** Dr. Alhanouf Alaloola, Cardiac Surgeon  
  Interview date: **28 March 2026**

Although the original template separated family and provider sessions,
the available report evidence primarily documents provider interviews
focused on hereditary-risk workflows and preventive-health practices.

### Interview Themes

<div class="grid cards" markdown>

-   Family profile management
-   Health condition recording
-   Preventive alert expectations
-   Appointment-booking expectations
-   Language and usability preferences
-   Security and privacy concerns

</div>

---

## 4.3 Interview Session 2 — Healthcare Provider
### Observations & Responses

<div class="grid cards" markdown>

-   **Current Practice**

    Providers currently collect family history directly from patients
    or parents in pediatric cases.

-   **Priority Conditions**

    Cancer history and congenital heart disease were highlighted as key
    hereditary conditions to track.

-   **Early Screening**

    Both interviewees supported including children from birth for
    preventive hereditary-risk screening.

-   **Recommended Actions**

    Follow-up actions should include screening tests, specialist
    referrals, and lifestyle recommendations.

-   **Data Reliability**

    Trust in patient-entered data is limited unless the information can
    be entered or validated by a healthcare professional.

-   **Presentation Needs**

    Providers preferred concise patient summaries and medically
    appropriate alert wording.

-   **Adoption Risks**

    Time constraints and workflow disruption were identified as
    practical barriers.

-   **Future Direction**

    One provider highlighted integration with national health
    platforms as strategically important.

</div>

---

## 4.4 Key Findings

<div class="grid cards" markdown>

-   **Structured History Collection**

    Essential for meaningful hereditary-risk screening.

-   **Clinically Trusted Data**

    Verified or clinician-entered data is preferred over unverified
    patient-entered records.

-   **Clear Summaries and Alerts**

    Providers need concise summaries and standardized alert phrasing.

-   **Workflow Efficiency**

    The system should minimize interaction overhead and disruption.

-   **Pediatric Support**

    Screening should support profiles from birth.

-   **Interoperability**

    Long-term value increases if the system can integrate with national
    health platforms.

</div>

---

## 4.5 Extracted Requirements

The following requirements were derived from interview findings:

| ID | Type | Requirement | Source |
|----|------|------------|--------|
| FUR-D01 | Functional | System shall allow healthcare professionals to enter or validate family health data | Interview – Sessions 1 & 2 |
| FUR-D02 | Functional | System shall track cancer history as a key hereditary condition | Interview – Session 1 |
| FUR-D03 | Functional | System shall track congenital heart disease as a key hereditary condition | Interview – Session 2 |
| FUR-D04 | Functional | System shall support pediatric profiles from birth for early screening | Interview – Sessions 1 & 2 |
| FUR-D05 | Usability | System shall provide a brief patient summary view | Interview – Session 1 |
| FUR-D06 | Usability | System shall support appointment-tailored patient summaries | Interview – Session 2 |
| FUR-D07 | Integration | System could support future integration with national health platforms | Interview – Session 1 |

---

## 4.6 Attached Evidence

<div class="grid cards" markdown>

-   Interview transcripts (anonymized)
-   Audio recordings (if applicable)
-   Signed consent forms (if required)
-   Interview notes

</div>

These materials support traceability between elicitation
activities and derived system requirements.
