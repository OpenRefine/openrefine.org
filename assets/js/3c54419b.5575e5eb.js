"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[7875],{39851:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(64861),r=i(69018);const s={id:"architecture-4",title:"Architecture in version 4",sidebar_label:"Architecture in version 4"},a=void 0,o={id:"technical-reference/architecture-4",title:"Architecture in version 4",description:"This page explains the architecture of OpenRefine 4, which is currently being developed and differs from the previous versions in important ways.",source:"@site/docs/technical-reference/architecture-4.md",sourceDirName:"technical-reference",slug:"/technical-reference/architecture-4",permalink:"/docs/technical-reference/architecture-4",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenRefine/openrefine.github.com/edit/master/docs/technical-reference/architecture-4.md",tags:[],version:"current",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1677509288e3,frontMatter:{id:"architecture-4",title:"Architecture in version 4",sidebar_label:"Architecture in version 4"},sidebar:"docs",previous:{title:"Architecture before version 4",permalink:"/docs/technical-reference/architecture-before-4"},next:{title:"Clustering methods in-depth",permalink:"/docs/technical-reference/clustering-in-depth"}},h={},l=[{value:"Project history structure",id:"project-history-structure",level:2},{value:"Runners",id:"runners",level:2},{value:"Lazy and eager evaluation",id:"lazy-and-eager-evaluation",level:2},{value:"ChangeData objects",id:"changedata-objects",level:2},{value:"Project serialization",id:"project-serialization",level:2},{value:"Memory management",id:"memory-management",level:2},{value:"Local runner",id:"local-runner",level:2},{value:"Options",id:"options",level:3},{value:"Partitioned Lazy Lists",id:"partitioned-lazy-lists",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This page explains the architecture of OpenRefine 4, which is currently being developed and differs from the previous versions in important ways.\nProjects and their history are represented differently, which makes it possible to work on tables which do not fit in RAM, improve the user experience around long-running operations in various ways\nand the reproducibility of OpenRefine workflows more broadly."}),"\n",(0,t.jsx)(n.h2,{id:"project-history-structure",children:"Project history structure"}),"\n",(0,t.jsxs)(n.p,{children:["The history of a project is a succession of different states of the project. Each state is a ",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/model/grid",children:"Grid"}),", which comprises the following data:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"column headers, containing column metadata such as the column names;"}),"\n",(0,t.jsx)(n.li,{children:"the project table itself;"}),"\n",(0,t.jsx)(n.li,{children:"the overlay models stored alongside the table (such as a Wikibase schema)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The initial grid of the project is generated by the importer which created the project.\nEach following is obtained by applying a ",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/model/changes/change",children:"Change"})," on the previous grid. A change is a function which takes the previous grid and produces the new grid."]}),"\n",(0,t.jsxs)(n.p,{children:["Grids are immutable objects. This means that a change cannot mutate the grid in place: it must create a modified copy of the grid instead.\nWe will see in ",(0,t.jsx)(n.a,{href:"#runners",children:"the Runners section"})," why can be done efficiently and does not require a lot of data copy in general.\nThe immutability of grids provides useful guarantees about thread safety. For instance, this helps ensure that the evaluation of facets happened at a precise point in project history,\nand does not give a mixed view of different grid states."]}),"\n",(0,t.jsx)(n.p,{children:"In the previous architecture, changes were not only responsible for applying themselves to a grid, but also to revert themselves, meaning that they had to implement the reverse operation as well.\nOnly requiring the forward application has important consequences:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Implementing a change is easier, since we only need to implement the function in one direction. Implementing both directions and making sure they were indeed inverses of each other is non-trivial and gave rise to certain bugs, such as ",(0,t.jsx)(n.a,{href:"https://github.com/OpenRefine/OpenRefine/issues/2",children:"#2"}),". Because we let extensions define their own changes, there was a significant risk that an extension implements a change incorrectly, leaving the project in an inconsistent state after using the undo feature."]}),"\n",(0,t.jsx)(n.li,{children:"Many operations in OpenRefine are destructive, meaning that reverting them requires storing the deleted or altered data in the change object itself, to be able to restore it upon reversion. This is no longer necessary, making it possible for changes to\nbe much lighter;"}),"\n",(0,t.jsxs)(n.li,{children:["To undo a change, we need to have kept the earlier version of the grid accessible. We will see in ",(0,t.jsx)(n.a,{href:"#runners",children:"the Runners section"})," why this can be done efficiently, without keeping all grids in memory explicitly."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"runners",children:"Runners"}),"\n",(0,t.jsxs)(n.p,{children:["The implementation of grids and of the transformations on them is pluggable. This means that the way a grid is concretely represented in memory can be adapted, depending on the resources available and the broader context of execution. This relies on the\nnotion of ",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/model/runner",children:"Runner"}),", which is essentially a factory class for grids which picks a particular implementation of the Grid interface when creating such grids."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"#local-runner",children:"local runner"})," is the default one. It is designed to be run when all of the data to transform is located on the same machine (where OpenRefine is running). Project data is read from disk in a lazy fashion, i.e. only when the corresponding grid values need to be displayed, aggregated or exported. Therefore it makes it possible to run OpenRefine on large datasets without the need for a large working memory (RAM). We explain the differences between ",(0,t.jsx)(n.a,{href:"#lazy-and-eager-evaluation",children:"lazy and eager evaluation"})," in the dedicated section."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The Spark runner is designed to run on distributed datasets. Those datasets can be split into blocks which are stored on different machines. The execution of the workflow can be shared between the various machines, which form a Spark cluster. As in the local runner, changes are evaluated lazily."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The testing runner is a very simple runner, which loads all the data it works on in memory. It is not optimized for performance at all: it simply meets the specification of the runner interface in the simplest possible way. It is used in tests of operations, importers and other basic blocks of workflows. Its simplicity makes it fast enough on small testing datasets generally used in such tests. This runner also performs additional checks during execution, so that incorrect behaviours can be detected more easily during testing. Unlike the local and Spark runners, the testing runner uses eager evaluation."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The runner can be configured on the command-line with the ",(0,t.jsx)(n.code,{children:"-r"})," option (",(0,t.jsx)(n.code,{children:"/r"})," on Windows), by providing the class name of the data model runner to use. In the ",(0,t.jsx)(n.code,{children:"refine.ini"})," configuration file, the corresponding option is ",(0,t.jsx)(n.code,{children:"refine.runner.class"}),".\nThe class names of the available runners are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/runners/local/localrunner",children:(0,t.jsx)(n.code,{children:"org.openrefine.runners.local.LocalRunner"})})," for the ",(0,t.jsx)(n.a,{href:"#local-runner",children:"local runner"})," (default)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/runners/spark/SparkRunner",children:(0,t.jsx)(n.code,{children:"org.openrefine.runners.spark.SparkRunner"})})," for the Spark-based runner"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/runners/testing/testingrunner",children:(0,t.jsx)(n.code,{children:"org.openrefine.runners.testing.TestingRunner"})})," for the testing runner"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A common test suite, gathering test cases that all runners should pass, is available in ",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/runners/testing/runnertestbase",children:"RunnerTestBase"}),". This can be used by creating a test class which extends this base\nclass."]}),"\n",(0,t.jsx)(n.h2,{id:"lazy-and-eager-evaluation",children:"Lazy and eager evaluation"}),"\n",(0,t.jsx)(n.p,{children:"Given that grids are immutable, changing even just a single cell in a grid requires making a copy of that grid.\nOne strategy to achieve this, which is used by the testing runner, is to create a copy of all cells of the original grid, with the change on the desired cell, and return this as a new grid.\nBut grids do not have to be backed by a list of lists containing the value of each cell."}),"\n",(0,t.jsx)(n.p,{children:"Instead, the lazy runners use a different strategy. The returned grid is a proxy object, which contains a pointer to the original grid, and implements all operations on the new grid by forwarding them to the original grid, and adapting their results to match the\nones expected of the new grid."}),"\n",(0,t.jsxs)(n.p,{children:["We call those runners lazy because the operations on their grids are ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Lazy_evaluation",children:"lazily evaluated"}),": the actual computation does not happen when creating the modified grid, but is delayed to the later use of the data in\nthe grid (such as running an aggregation on it to compute facet statistics, or retrieving a range of rows)."]}),"\n",(0,t.jsx)(n.p,{children:"This has a few important consequences:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the proxy objects representing those transformed grids are very lightweight: they just hold the recipe to compute the new grid out of the old one, not the data itself. This means that we can generally afford to keep many such proxy objects loaded in memory. In a lot of cases, OpenRefine will indeed hold a Grid object for every single step of a project's history. As a result, it becomes possible to undo a transformation even though Change objects do not support reverting their effects: we simply roll back to the earlier Grid object."}),"\n",(0,t.jsxs)(n.li,{children:["when the history grows longer, the project data is accessed via a long chain of proxy objects, meaning that the project workflow is re-executed many times. When that becomes too expensive, it is possible to turn on caching in one of the intermediate grids, meaning that we compute all the contents of that grid once and store that in memory or on disk. This strategy is detailed in the ",(0,t.jsx)(n.a,{href:"#memory-management",children:"Memory management"})," section."]}),"\n",(0,t.jsxs)(n.li,{children:["with lazy evaluation, some computations required by changes can be evaluated many times (for instance, each time facets are refreshed). This is undesirable for expensive or effectful computations (for instance, fetching data from a URL). To prevent this\nfrom happening, changes are allowed to store the results of such expensive computations in ",(0,t.jsx)(n.a,{href:"#changedata-objects",children:"ChangeData objects"}),". Such objects are evaluated only once, persisted on disk, and the new grid can be derived by combining the old grid with some ChangeData objects\n(generally by joining them)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"changedata-objects",children:"ChangeData objects"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/model/changes/changedata",children:"ChangeData"})," object is a data structure which holds change data which should be computed only once given the cost or side-effects of recomputing it multiple times. It is for\ninstance used to store reconciliation data, data fetched from URLs, or the results of evaluating expressions which are not guaranteed to be ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Pure_function",children:"pure"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"ChangeData objects are able to index arbitrary data items associated to rows or records in a Grid. To each row or record id corresponds at most one such item.\nThe typical lifecycle for a ChangeData object is as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ChangeData object is derived from a Grid by applying a function row or record-wise to the grid, using\n",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/model/grid#mapRows(org.openrefine.model.RowFilter,org.openrefine.model.changes.RowChangeDataProducer)",children:"Grid::mapRows"})," or ",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/model/grid#mapRecords(org.openrefine.model.RecordFilter,org.openrefine.model.changes.RecordChangeDataProducer)",children:"Grid::mapRecords"}),". This is typically a lazy operation, meaning that the expensive computations involved are not done yet;"]}),"\n",(0,t.jsxs)(n.li,{children:["Immediately after, it is saved to a file within the project's storage directory (see ",(0,t.jsx)(n.a,{href:"#project-serialization",children:"Project serialization"}),"). This saving can take time as this triggers the expensive computations applied at the earlier step."]}),"\n",(0,t.jsxs)(n.li,{children:["As soon as the saving has started (and while it is still in progress), the ChangeData can be read back from its serialization, using ",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/model/runner#loadChangeData(java.io.File,org.openrefine.model.changes.ChangeDataSerializer)",children:"Runner.loadChangeData"}),". Only the items computed and written at that stage are read back."]}),"\n",(0,t.jsxs)(n.li,{children:["The ChangeData can be joined back with the Grid it was derived from, inserting the change data into cells (for instance by creating a new column where fetched URLs are stored). This is done by means of methods such as\n",(0,t.jsx)(n.a,{href:"https://javadoc-v4.openrefine.org/org/openrefine/model/grid#join(org.openrefine.model.changes.ChangeData,org.openrefine.model.changes.RowChangeDataJoiner,org.openrefine.model.ColumnModel)",children:"Grid::join"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"project-serialization",children:"Project serialization"}),"\n",(0,t.jsx)(n.p,{children:"A single grid is serialized in its own directory, with the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadata.json"}),", containing the column model and overlay models associated with the grid;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"grid/part-*.gz"})," files, which are Gzip-compressed text files containing for each line the JSON serialization of a row in the project."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The fact that the grid's serialization is spread on multiple files makes it possible to process it in parallel (with one worker per partition). Rows are sorted and each partition contains a sequential chunk of rows, meaning that to access a given row by\nrow number, it is possible to read the relevant partition file only. The number of partitions depends on the size of the project and the options of the runner."}),"\n",(0,t.jsx)(n.p,{children:"A project is serialized in its own directory too, with the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"history.json"}),", containing the list of history entries, which includes the associated Changes and Operations;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"initial/"}),", a directory where the first grid of the project (the one created by the importer) is stored;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"changes/"}),", a directory where all the ChangeData objects are serialized. They are stored in subdirectories determined by the history entry id they are associated to."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cache/"}),", a directory where grids other than the initial one can be stored. This is useful when the project history grows longer to avoid recomputing all operations from the initial grid at every HTTP request."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"memory-management",children:"Memory management"}),"\n",(0,t.jsx)(n.p,{children:"TODO describe here the caching strategy (being reworked)"}),"\n",(0,t.jsx)(n.h2,{id:"local-runner",children:"Local runner"}),"\n",(0,t.jsx)(n.p,{children:"The local runner is the default one, as it is designed to be efficient in OpenRefine's intended usage conditions: running locally on the machine where the data cleaning is being done. Its design is inspired by Spark. Spark itself could not be used in place of this runner because its support for distributed computations and redundancy adds significant overheads which make the tool less responsive when run locally.\nAlso, OpenRefine relies on the order of rows in many contexts, and row order is not preserved by many Spark primitives, making its abstractions less useful for OpenRefine as default implementation."}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.p,{children:"The following configuration parameters can be used with this runner:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Configuration key"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"refine.runner.defaultParallelism"})}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"how many partitions datasets should generally be split, unless they are very small or very big"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"refine.runner.minSplitSize"})}),(0,t.jsx)(n.td,{children:"4096"}),(0,t.jsx)(n.td,{children:"minimum size of a partition in bytes. Datasets which are smaller than this value will not be split at all."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"refine.runner.maxSplitSize"})}),(0,t.jsx)(n.td,{children:"16777216"}),(0,t.jsxs)(n.td,{children:["maximum size of a partition in bytes. Datasets which are larger than ",(0,t.jsx)(n.code,{children:"defaultParallelism * maxSplitSize"})," will be split in more partitions than the default parallelism."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"partitioned-lazy-lists",children:"Partitioned Lazy Lists"}),"\n",(0,t.jsxs)(n.p,{children:["The core data structure which underpins the lazy representation of Grids and ChangeData objects in the local runner is the Partitioned Lazy List (PLL).\nIt is a lightweight version of Spark's ",(0,t.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/rdd-programming-guide.html",children:"Resilient Distributed Dataset (RDD)"}),". It is:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a list, because it represents an ordered collections of objects;"}),"\n",(0,t.jsx)(n.li,{children:"lazy, because by default it does not store its contents as explicit objects in memory. Instead, the elements are computed on-demand, when they are accessed."}),"\n",(0,t.jsx)(n.li,{children:"partitioned, because it divides its contents into contiguous groups of elements called partitions. Each partition can be enumerated from independently, making it possible to run processes in parallel on different parts of the list."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In contrast to RDDs, PLLs are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"not distributed: all of the data must be locally accessible, all the computations are happening in the same JVM"}),"\n",(0,t.jsx)(n.li,{children:"not resilient: there is no support for redundancy."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The concurrency in PLLs is implemented with Java threads. When instantiated, the local runner starts a thread pool which is used on demand when computations are executed."})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},69018:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var t=i(47768);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);