---
title: OpenRefine Ecosystem
description: OpenRefine Ecosystem
hide_table_of_contents: true
---
# OpenRefine Ecosystem

The OpenRefine ecosystem is composed of multiple communities and use cases. The core team is responsible for maintaining OpenRefine, its documentation, and discussion forums. The Advisory Committee is responsible for OpenRefine funding and adminstrative task. 

On the other hand, OpenRefine's user communities adapt the software to meet their specific needs. These communities are actively engaged in advocacy, training, and support activities. For example, libraries host training sessions for archivists, librarians, and researchers, workshops are organized at data journalist conferences, and dedicated training sessions are tailored for Wikimedians.

Third-party developers can also create new extensions and reconciliation services compatible with OpenRefine. Reconciliation services allow users to link their datasets with a knowledge graph, while extensions add domain-specific features or integrate OpenRefine into a particular workflow. These services expand the capabilities of OpenRefine, enabling users to accomplish their data-related tasks more efficiently.

### Overview of OpenRefine ecosystem 

```mermaid
graph TB;
    idOpenRefineProject(["<h2>💎 OpenRefine<br>Project</h2>"])
    idDevTeam(["🔗 Development & Design Team"])
    click idDevTeam "/docs/technical-reference/code-contributions"
    idAdministration(["Advisory Committee"])
    idUser(["User Support"])
    idSupport(["🔗 Support Forum"])
    click idSupport "https://forum.openrefine.org/c/support/12"
    idTranslation(["🔗 Translation"])
    click idTranslation "/docs/technical-reference/translating-ui"
    idDocumentation(["🔗 Documentation"])
    click idDocumentation "/docs"
    idFundingPartner(["🔗 Funding Partners"])
    click idFundingPartner "/funding"
    idThirdParty(["Third Party Developers"])
    idCoC(["🔗 Code of <br>Conduct Committee"])
    click idCoC "https://github.com/OpenRefine/OpenRefine/blob/master/CODE_OF_CONDUCT.md"
    idCS&S(["🔗 Code for Science <br>and Society"])
     click idCS&S "https://www.codeforsociety.org/"
    idProjectManager(["Project Manager"])
    idReconciliation(["🔗 80 Reconciliation Services"])
         click idReconciliation "/extensions#reconciliation-services"
     idExtension(["🔗 25 Extensions"])
     click idExtension "/extensions"
     idLibraries(["🔗 5 Client Libraries"])
     click idLibraries "/extensions#client-libraries"
    idCommunity(["<b>Users Communities:</b><br>Data Journalist<br>Semantic Web and Linked Data<br>Galleries, Libraries, Archives,and Museums<br>Researchers<br>Wikimedia Mouvement<br>and many more ...."])
    
     subgraph idOpenRefine["."]
       style idOpenRefine fill:#c7e7ff,stroke:#333,stroke-width:2px;    
    idDevTeam --- idOpenRefineProject 
    idOpenRefineProject --- idAdministration --- idCoC & idProjectManager
    idOpenRefineProject --- idUser  --- idTranslation & idSupport & Training & idDocumentation 
		  end
   Training & idDocumentation & idSupport --- idCommunity
	   idAdministration ---- idFundingPartner & idCS&S
    idLibraries & idExtension & idReconciliation --- idThirdParty
    idThirdParty ---- idOpenRefineProject
```

