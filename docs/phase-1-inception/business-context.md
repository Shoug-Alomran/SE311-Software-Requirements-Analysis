# 3. Business Context

This section defines the environmental, organizational, and operational
context in which the Sillah system is developed and evaluated.

---

## 3.1 Stakeholder Profiles

The following table summarizes the major stakeholders involved in Sillah,
including their expected value, attitudes, interests, and operational constraints.

| Stakeholder | Major Value | Attitude | Key Interests | Constraints |
|------------|-------------|----------|--------------|-------------|
| **Families (Primary Users)** | Early detection of hereditary risks; simplified health tracking | Highly receptive if intuitive and culturally aligned | Arabic interface, mobile-first design, clear alerts, privacy | Varying health literacy; privacy concerns |
| **Healthcare Providers** | Better-prepared patients; structured family history | Neutral to positive | Accurate data, clear risk summaries, appointment visibility | Must avoid additional workload |
| **Administrators** | Manage awareness content and system integrity | Positive | Secure content management, audit logs, role control | Must comply with PDPL |
| **Public Health Authorities (Future)** | Scalable preventive-health model | Very positive | Integration potential, population-level insights | Requires formal approval and compliance |
| **Academic Stakeholders** | Demonstration of full RE lifecycle | Supportive | Clear documentation, working prototype, traceability | Limited semester timeline |

---

## 3.2 Project Priorities

Project priorities are structured around drivers, constraints, and degrees of freedom.

| Dimension | Driver (Objective) | Constraint (Limitations) | Degree of Freedom |
|----------|---------------------|---------------------------|------------------|
| **Schedule** | Deliver a complete prototype within the semester | Academic deadlines | Minor UI refinements allowed |
| **Features** | Core preventive-health capabilities must be implemented | Must satisfy SE311 requirements | 70–80% of high-priority features in initial release |
| **Quality** | High usability, reliability, and clarity | Limited team size | SUS ≥ 80; 90–95% test pass rate |
| **Staff** | Team of four students | No external developers | Flexible internal task distribution |
| **Cost** | Zero-cost academic implementation | No paid services | Open-source tools; free-tier hosting |

---

## 3.3 Deployment Considerations

<div class="grid cards" markdown>

-   ### :material-cellphone: Accessibility

    Mobile-first design optimized for use across Saudi Arabia.
    Single time zone (AST) simplifies scheduling logic.

-   ### :material-shield-check-outline: Security

    HTTPS enforcement, secure authentication mechanisms,
    and server-side validation are required.

    Production deployment would require encrypted databases.

-   ### :material-book-open-outline: Awareness Content

    Educational material must undergo periodic review by
    qualified medical professionals.

-   ### :material-hospital-building: Future Integration

    Clinic integration may require staff training,
    workflow adaptation, and secure interoperability.

-   ### :material-cloud-outline: Scalability

    Future national-scale deployment may require
    cloud hosting and load balancing mechanisms.

-   ### :material-format-text-rotation-angle-up: Localization

    Full Arabic RTL support and culturally appropriate
    content are mandatory.

</div>