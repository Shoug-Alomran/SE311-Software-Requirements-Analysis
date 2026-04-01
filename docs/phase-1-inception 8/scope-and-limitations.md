# 2. Scope & Limitations

This section defines the system boundaries of *Sillah (صلة)*, clearly
identifying what is included in the current scope and what is deferred
to future releases.

Defining scope early prevents requirement creep and aligns stakeholder
expectations during development.

---

## 2.1 Major Features

The following features represent the full conceptual capability of the Sillah platform:

- **FE-1 — Family Member Management**  
  Add and manage family members with demographic and health-related data.

- **FE-2 — Health Event Recording**  
  Record hereditary conditions such as heart disease, diabetes,
  hypertension, and high cholesterol.

- **FE-3 — Automatic Risk Detection**  
  Apply rule-based logic to detect inherited health patterns
  and generate preventive alerts.

- **FE-4 — Personalized Recommendations**  
  Provide tailored screening guidance and follow-up suggestions.

- **FE-5 — Awareness Hub**  
  Deliver curated educational content and preventive-health resources.

- **FE-6 — Clinic Appointment Simulation**  
  Simulate appointment booking workflows.

- **FE-7 — Alert History**  
  Maintain historical alerts for transparency and review.

- **FE-8 — Role-Based Access Control (RBAC)**  
  Assign permissions to citizens, providers, and administrators.

- **FE-9 — Bilingual Interface**  
  Full Arabic (RTL) and English (LTR) support.

- **FE-10 — Mobile-First Design**  
  Optimized usability across smartphones.

---

## 2.2 Scope of Initial Release

<div class="grid cards" markdown>

- ### :material-rocket-launch-outline: Core Functionality

    - Family and health-event management  
    - Rule-based cardiac risk detection  
    - Personalized alerts and recommendations  
    - Awareness Hub content  

- ### :material-account-lock-outline: Security & Access

    - Authentication  
    - Role-based access control  
    - Input validation and password rules  
    - Session management  

- ### :material-cellphone: User Experience

    - Mobile-first responsive UI  
    - Clear error messaging  
    - Intuitive navigation  
    - Correct RTL/LTR behavior  

- ### :material-calendar-check-outline: Clinic Simulation

    - Basic appointment booking simulation  
    - Structured provider interaction flow  

</div>

The initial release prioritizes preventive-health functionality and
prototype feasibility within academic constraints.

---

## 2.3 Scope of Subsequent Releases

Future iterations may extend the system to support broader
public-health integration and advanced analytics.

<div class="grid cards" markdown>

- ### :material-hospital-building: Healthcare Integration
    - Real clinic APIs  
    - National system integration (e.g., Sehhaty, Mawid)  
    - Real-time appointment availability  

- ### :material-brain: Intelligent Analytics
    - AI-enhanced risk prediction  
    - Advanced provider dashboards  
    - Genetic-risk education modules  

- ### :material-bell-outline: Communication Expansion
    - SMS / WhatsApp notifications  
    - National health platform notifications  
    - Multi-family linking  

- ### :material-file-upload-outline: Extended Data Support
    - Secure document uploads  
    - Laboratory result ingestion  

</div>

These enhancements depend on regulatory approval,
technical partnerships, and infrastructure readiness.

---

## 2.4 Limitations & Exclusions

The following capabilities are explicitly **out of scope** for the current academic version:

- No real medical diagnosis — alerts are screening suggestions only  
- No integration with hospital EHR systems  
- No AI/ML-based risk prediction  
- No offline mode or local-device storage  
- No real-time clinic availability confirmation  
- Notification delivery is simulated only  
- No genetic test ingestion  
- No emergency-response functionality  

These exclusions ensure that Sillah remains achievable,
focused, and aligned with SE311 academic constraints.