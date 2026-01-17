# 3. Business Context

## 3.1 Stakeholder Profiles

The following table summarizes the major stakeholders involved in the Sillah system, their interests, constraints, and expected value.

| Stakeholder | Major Value | Attitudes | Major Interests | Constraints |
|------------|-------------|-----------|-----------------|-------------|
| **Families (Primary Users)** | Early detection of hereditary risks; simple health tracking | Highly receptive if easy to use and culturally aligned | Arabic interface, mobile-first design, clear alerts, privacy | Varying health literacy; privacy concerns |
| **Healthcare Providers** | Better-prepared patients; structured family history | Neutral to positive | Accurate data, clear risk summaries, appointment visibility | Must avoid additional workload |
| **Administrators** | Manage awareness content and system integrity | Positive | Secure content management, audit logs, role control | Must comply with PDPL |
| **Public Health Authorities (Future)** | Scalable preventive-health model | Very positive | Integration potential, population-level insights | Requires formal approval and compliance |
| **Academic Stakeholders** | Demonstration of full SDLC | Supportive | Clear documentation, working prototype, traceability | Limited semester timeline |

---

## 3.2 Project Priorities

This table outlines the project’s constraints, drivers, and degrees of freedom across key dimensions.

| Dimension | Driver (Objective) | Constraint (Limits) | Degree of Freedom (Allowable Range) |
|----------|---------------------|----------------------|--------------------------------------|
| **Schedule** | Deliver a complete prototype within the semester | Academic deadlines | Minor UI refinements allowed |
| **Features** | Core preventive-health features must be included | Must meet project requirements | 70–80% of high-priority features in initial release |
| **Quality** | High usability, reliability, and clarity | Limited team size | SUS ≥ 80; 90–95% test pass rate |
| **Staff** | Student team of four | No additional developers | Flexible task distribution |
| **Cost** | Zero-cost academic project | No paid services | Use open-source tools and free-tier hosting |

---

## 3.3 Deployment Considerations

- **DC1:** Mobile-first accessibility across Saudi Arabia  
- **DC2:** Single time zone (AST) simplifies scheduling  
- **DC3:** HTTPS, secure authentication, and server-side validation  
- **DC4:** Simplified prototype storage; encrypted databases required for production  
- **DC5:** Awareness Hub content requires periodic review by medical professionals  
- **DC6:** Future clinic integration may require staff training  
- **DC7:** Future scalability may require cloud hosting and load balancing  
- **DC8:** Full Arabic RTL support and culturally appropriate content