# 5. Family User Requirements

The following family user requirements were derived from interview
findings, survey validation, and supporting document analysis.

Requirements were prioritized using the **MoSCoW** technique.

---

## 5.1 Requirement Format

Each Family User Requirement (**FUR**) is documented using:

- **ID** for traceability  
- **Requirement Statement** written in mandatory form  
- **Evidence Source** linked to elicitation activities  
- **Priority** using MoSCoW  
- **Acceptance Criteria** describing measurable validation conditions  

---

## 5.2 Prioritized Family Requirement List

| ID | Requirement Statement | Evidence Source | Priority | Acceptance Criteria |
|----|------------------------|----------------|----------|---------------------|
| **FUR-01** | The system must allow authenticated users to create, edit, and delete multiple family member profiles, where each profile includes demographic information such as age, gender, relationship, and associated health records. | Family Interview | **Must** | Users can create, update, and delete profiles; required profile attributes are stored; data persists after saving; only authorized users can modify profiles. |
| **FUR-02** | The system must allow users to record hereditary conditions for each family member, including cardiac disease, diabetes, hypertension, and high cholesterol. | Family Interview | **Must** | Users can select or enter conditions; conditions are stored per profile; data is retrievable and editable. |
| **FUR-03** | The system must generate personalized preventive alerts based on predefined screening rules applied to recorded family health data. | Family Interview + Healthcare Provider Interview | **Must** | Alerts are triggered when rule conditions are met; alerts are specific to the user's data; alerts are displayed clearly in the interface. |
| **FUR-04** | The system must display preventive recommendations alongside generated alerts. | Family Interview | **Should** | Each alert includes a corresponding recommendation; recommendations are relevant to the detected risk; recommendations are clearly distinguishable from alerts. |
| **FUR-05** | The system must support a bilingual interface in Arabic (RTL) and English (LTR), allowing users to switch languages dynamically. | Survey Results | **Must** | Users can switch language at any time; layout adjusts correctly for RTL/LTR; interface text is translated consistently. |
| **FUR-06** | The system must allow users to simulate booking a clinic appointment. | Family Interview | **Should** | Users can submit booking details; the system confirms submission; a confirmation message is displayed. |
| **FUR-07** | The system must allow users to view previously generated alerts and notification history. | Family Interview | **Should** | Users can access alert history; alerts appear in a structured format such as a list or timeline; past alerts remain accessible after new alerts are generated. |
| **FUR-08** | The system must require secure authentication before allowing access to personal health data. | Document Analysis | **Must** | Users must log in before accessing protected features; unauthorized access is denied; session management is enforced. |
| **FUR-09** | The system must restrict access to health data based on user role. | Document Analysis | **Must** | Users can only access permitted data; role-based permissions are enforced; unauthorized actions are blocked. |

---

## 5.3 Key Observations

- Family users need profile-based tracking rather than a single-person record.
- Preventive alerts and recommendations are expected to be personalized and easy to understand.
- Bilingual usability is a core requirement, not an optional enhancement.
- Security expectations are high because the platform stores sensitive family health information.
