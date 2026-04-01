# 4. Interviews (Elicitation Notes + Evidence)

Interviews were conducted as a primary elicitation technique to gather
qualitative insights from key stakeholders. The objective was to
identify user needs, constraints, expectations, and potential risks
related to hereditary health tracking and preventive alerts.

---

## 4.1 Interview Guide

### :material-clipboard-text-outline: Objectives

The interview guide was designed to:

- Understand current methods of tracking family health history  
- Identify expectations regarding preventive alerts  
- Explore privacy and trust concerns  
- Assess usability requirements  
- Identify workflow expectations from healthcare providers  

### Stakeholder Groups Interviewed

- Family Users (Primary End Users)  
- Healthcare Providers  

Questions were aligned with project goals and structured to extract
both functional and non-functional requirements.

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

Questions were grouped around:

1. Family profile management
2. Health condition recording
3. Preventive alert expectations
4. Appointment-booking expectations
5. Language and usability preferences
6. Security and privacy concerns

---

## 4.3 Interview Session 2 — Healthcare Provider
### Observations & Responses

The interviews revealed that:

- Healthcare providers currently collect family medical history directly
  from patients or, in pediatric cases, from parents.
- Cancer history and congenital heart disease were identified as
  especially important hereditary conditions to track.
- Both interviewees supported including children from birth to enable
  early hereditary-risk screening.
- Preventive follow-up actions should include screening tests,
  specialist referrals, and lifestyle recommendations.
- Trust in patient-entered family-history data is limited unless it can
  be entered or validated by a healthcare professional.
- Providers preferred concise patient summaries and medically
  appropriate alert wording.
- Time constraints and interruption of consultation workflows were
  identified as barriers to adoption.
- One provider highlighted future integration with national health
  platforms as strategically important.

---

## 4.4 Key Findings

After analyzing both interview sessions, the following themes emerged:

- Structured family-history collection is essential for hereditary-risk screening.
- Verified or clinician-entered data is preferred over unverified
  patient-entered data for clinical trust.
- Providers need concise patient summaries and clear, standardized
  alert phrasing.
- Workflow disruption is a major adoption risk, so the system should
  minimize interaction overhead.
- Pediatric support from birth is important for preventive screening.
- Long-term interoperability with national health platforms is a
  desirable future direction.

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

The following artifacts are attached as supporting evidence:

- Interview transcripts (anonymized)  
- Audio recordings (if applicable)  
- Signed consent forms (if required)  
- Interview notes  

These materials support traceability between elicitation
activities and derived system requirements.
