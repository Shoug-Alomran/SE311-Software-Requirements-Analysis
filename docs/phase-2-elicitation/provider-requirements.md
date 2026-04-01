# 6. Healthcare Provider Requirements

These requirements were derived from healthcare provider interviews and
supported by survey findings to ensure clinical relevance and alignment
with real-world workflows.

---

## 6.1 Requirement Format

Each Healthcare Provider Requirement (**HPR**) follows the same
structure used for family user requirements:

<div class="grid cards" markdown>

-   **ID**

    Unique identifier for provider-facing traceability.

-   **Requirement Statement**

    Written in clear "shall" form.

-   **Evidence Source**

    Linked to interview or survey evidence.

-   **Priority**

    Assigned through MoSCoW prioritization.

-   **Acceptance Criteria**

    Measurable validation conditions for review.

</div>

---

## 6.2 Prioritized Healthcare Provider Requirement List

| ID | Requirement Statement | Evidence Source | Priority | Acceptance Criteria |
|----|------------------------|----------------|----------|---------------------|
| **HPR-01** | The system shall allow healthcare providers to enter, update, and validate family medical history data to ensure accuracy and reliability. | Interview (Sessions 1 & 2) | **Must** | Providers can create and update family medical records; providers can mark data as verified; verified data is clearly distinguishable from unverified data. |
| **HPR-02** | The system shall allow healthcare providers to view a summarized patient profile that includes key medical history and hereditary conditions. | Interview (Sessions 1 & 2), Survey | **Must** | Summary includes major conditions and family history; information is concise; summary is accessible during consultation. |
| **HPR-03** | The system shall allow healthcare providers to access patient data relevant to the reason for the appointment. | Interview (Session 2) | **Should** | The system highlights relevant medical data; displayed data aligns with appointment type; irrelevant information is minimized. |
| **HPR-04** | The system shall generate clinically appropriate preventive alerts based on patient and family health data. | Interview (Sessions 1 & 2), Survey | **Must** | Alerts are triggered using predefined rules; alerts are medically relevant; alerts are clearly displayed to providers. |
| **HPR-05** | The system shall provide healthcare providers with recommended actions following risk detection, including screening tests, specialist referrals, and lifestyle advice. | Interview (Sessions 1 & 2), Survey | **Should** | Each alert includes at least one recommendation; recommendations are relevant to detected risks; recommendations are clearly presented alongside alerts. |
| **HPR-06** | The system shall present alerts and recommendations using clear, standardized, and medically appropriate language. | Interview (Sessions 1 & 2) | **Should** | Alerts use consistent phrasing; language avoids ambiguity; providers can interpret alerts without additional clarification. |
| **HPR-07** | The system shall be designed to minimize disruption to healthcare providers' workflow. | Interview (Session 2) | **Should** | Key information is accessible within minimal steps; system interaction requires minimal input during consultation; navigation is efficient and intuitive. |
| **HPR-08** | The system shall support pediatric patient profiles to enable early hereditary risk screening from birth. | Interview (Sessions 1 & 2) | **Must** | Providers can view and manage profiles for patients aged 0+; screening rules apply to pediatric profiles; pediatric data is handled consistently with adult data. |
| **HPR-09** | The system shall support future integration with existing national health platforms through secure APIs. | Interview (Session 1) | **Could** | System architecture allows API integration; data exchange follows secure standards; integration does not negatively impact system performance. |

---

## 6.3 Interview-Based Insights

<div class="grid cards" markdown>

-   **Manual History Collection**

    Providers still rely on direct patient or parent reporting.

-   **Need for Verification**

    Patient-entered hereditary data is not fully trusted unless it is
    verified.

-   **Concise Clinical Summaries**

    Providers prefer brief, medically appropriate presentation of key
    patient information.

-   **Workflow-Friendly Design**

    Adoption depends on minimizing disruption during consultation.

</div>
