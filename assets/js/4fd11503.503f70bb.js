"use strict";(self.webpackChunkOpenRefine_Documentation=self.webpackChunkOpenRefine_Documentation||[]).push([[4828],{34012:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(64861),i=n(69018);n(26208);const r={id:"functional-tests",title:"Functional tests",sidebar_label:"Functional tests"},l=void 0,a={id:"technical-reference/functional-tests",title:"Functional tests",description:"Introduction",source:"@site/docs/technical-reference/functional-tests.md",sourceDirName:"technical-reference",slug:"/technical-reference/functional-tests",permalink:"/docs/technical-reference/functional-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenRefine/openrefine.github.com/edit/master/docs/technical-reference/functional-tests.md",tags:[],version:"current",lastUpdatedBy:"Antonin Delpeuch",lastUpdatedAt:1708630108e3,frontMatter:{id:"functional-tests",title:"Functional tests",sidebar_label:"Functional tests"},sidebar:"docs",previous:{title:"How to build, test and run",permalink:"/docs/technical-reference/build-test-run"},next:{title:"Architecture before version 4",permalink:"/docs/technical-reference/architecture-before-4"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Cypress brief overview",id:"cypress-brief-overview",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"1. Install Cypress",id:"1-install-cypress",level:3},{value:"2. Start the test runner",id:"2-start-the-test-runner",level:3},{value:"3. Run the existing tests",id:"3-run-the-existing-tests",level:3},{value:"4. Add your first test",id:"4-add-your-first-test",level:3},{value:"Tests technical documentation",id:"tests-technical-documentation",level:2},{value:"A typical test",id:"a-typical-test",level:3},{value:"Testing guidelines",id:"testing-guidelines",level:3},{value:"Testing utilities",id:"testing-utilities",level:3},{value:"Browsers",id:"browsers",level:3},{value:"Folder organization",id:"folder-organization",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Overriding with a cypress.env.json file",id:"overriding-with-a-cypressenvjson-file",level:4},{value:"Command-line",id:"command-line",level:4},{value:"Visual testing",id:"visual-testing",level:3},{value:"When a visual test fails",id:"when-a-visual-test-fails",level:4},{value:"CI/CD",id:"cicd",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(s.p,{children:["OpenRefine's web interface is tested with the ",(0,t.jsx)(s.a,{href:"https://www.cypress.io/",children:"Cypress framework"}),'.\nWith Cypress, tests are performing assertions using a real browser, the same way a real user would use the software.\nThose are "end to end" (e2e) tests because they also rely on OpenRefine\'s backend (server).']}),"\n",(0,t.jsx)(s.p,{children:"Cypress tests can be ran"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"using the Cypress test runner (development mode)"}),"\n",(0,t.jsx)(s.li,{children:"using a command line (CI/CD mode)"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If you are writing tests, the Cypress test runner is good enough, and the command-line is mainly used by the CI/CD platform (Github actions)"}),"\n",(0,t.jsx)(s.h2,{id:"cypress-brief-overview",children:"Cypress brief overview"}),"\n",(0,t.jsx)(s.p,{children:"Cypress operates insides a browser, it's internally using NodeJS.\nThat's a key difference with tools such as Selenium."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"From the Cypress documentation:"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["But what this also means is that your test code ",(0,t.jsx)(s.strong,{children:"is being evaluated inside the browser"}),". Test code is not evaluated in Node, or any other server side language. The ",(0,t.jsx)(s.strong,{children:"only"})," language we will ever support is the language of the web: JavaScript."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Good starting points with Cypress are the ",(0,t.jsx)(s.a,{href:"https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-your-first-test",children:"Getting started guide"}),", and the ",(0,t.jsx)(s.a,{href:"https://docs.cypress.io/guides/references/trade-offs.html#Permanent-trade-offs-1",children:"Trade-offs"})]}),"\n",(0,t.jsx)(s.p,{children:"The general workflow of a Cypress test is to"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Start a browser (yarn run cypress open)"}),"\n",(0,t.jsx)(s.li,{children:"Visit a URL"}),"\n",(0,t.jsx)(s.li,{children:"Trigger user actions"}),"\n",(0,t.jsx)(s.li,{children:"Assert that the DOM contains expected texts and elements using selectors"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,t.jsx)(s.p,{children:"If this is the first time you use Cypress, it is recommended for you to get familiar with the tool."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://docs.cypress.io/guides/overview/why-cypress.html",children:"Cypress overview"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://example.cypress.io/",children:"Cypress examples of tests and syntax"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"1-install-cypress",children:"1. Install Cypress"}),"\n",(0,t.jsx)(s.p,{children:"You will need:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://nodejs.org",children:"Node.js 10 or 12 and above"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://yarnpkg.com/",children:"Yarn or NPM"})}),"\n",(0,t.jsx)(s.li,{children:"A Unix/Linux shell environment or the Windows command line"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"To install Cypress and dependencies, run :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"cd ./main/tests/cypress\nyarn install\n"})}),"\n",(0,t.jsx)(s.h3,{id:"2-start-the-test-runner",children:"2. Start the test runner"}),"\n",(0,t.jsx)(s.p,{children:"The test runner assumes that OpenRefine is up and running on the local machine, the tests themselves do not launch OpenRefine, nor restarts it."}),"\n",(0,t.jsx)(s.p,{children:"Start OpenRefine with"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"./refine\n"})}),"\n",(0,t.jsx)(s.p,{children:"Then start Cypress"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"yarn --cwd ./main/tests/cypress run cypress open\n"})}),"\n",(0,t.jsx)(s.h3,{id:"3-run-the-existing-tests",children:"3. Run the existing tests"}),"\n",(0,t.jsxs)(s.p,{children:["Once the test runner is up, you can choose to run one or several tests by selecting them from the interface.",(0,t.jsx)(s.br,{}),"\n","Click on one of them and the test will start."]}),"\n",(0,t.jsx)(s.h3,{id:"4-add-your-first-test",children:"4. Add your first test"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a ",(0,t.jsx)(s.code,{children:"test.spec.js"})," into the ",(0,t.jsx)(s.code,{children:"main/tests/cypress/cypress/e2e"})," folder."]}),"\n",(0,t.jsx)(s.li,{children:"The test is instantly available in the list"}),"\n",(0,t.jsx)(s.li,{children:"Click on the test"}),"\n",(0,t.jsx)(s.li,{children:"Start to add some code"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"tests-technical-documentation",children:"Tests technical documentation"}),"\n",(0,t.jsx)(s.h3,{id:"a-typical-test",children:"A typical test"}),"\n",(0,t.jsx)(s.p,{children:"A typical OpenRefine test starts with the following code"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"it('Ensure cells are blanked down', function () {\n  cy.loadAndVisitProject('food.mini');\n  cy.get('.viewpanel-sorting a').contains('Sort').click();\n  cy.get('.viewpanel').should('to.contain', 'Something');\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The first noticeable thing about a test is the description (",(0,t.jsx)(s.code,{children:"Ensure cells are blanked down"}),"), which describes what the test is doing.",(0,t.jsx)(s.br,{}),"\n","Lines usually starts with ",(0,t.jsx)(s.code,{children:"cy.something..."}),", which is the main way to interact with the Cypress framework."]}),"\n",(0,t.jsx)(s.p,{children:"A few examples:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"cy.get('a.my-class')"})," will retrieve the ",(0,t.jsx)(s.code,{children:'<a class="my-class" />'})," element"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"cy.click()"})," will click on the element"]}),"\n",(0,t.jsxs)(s.li,{children:["eventually, ",(0,t.jsx)(s.code,{children:"cy.should()"})," will perform an assertion, for example that the element contains an expected text with ",(0,t.jsx)(s.code,{children:"cy.should('to.contains', 'my text')"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"On top of that, OpenRefine contributors have added some functions for common OpenRefine interactions.\nFor example"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"cy.loadAndVisitProject"})," will create a fresh project in OpenRefine"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"cy.assertCellEquals"})," will ensure that a cell contains a given value"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"See below on the dedicated section 'Testing utilities'"}),"\n",(0,t.jsx)(s.h3,{id:"testing-guidelines",children:"Testing guidelines"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"cy.wait"})," should be used in the last resort scenario. It's considered a bad practice, though sometimes there is no other choice"]}),"\n",(0,t.jsx)(s.li,{children:"Tests should remain isolated from each other. It's best to try one feature at the time"}),"\n",(0,t.jsx)(s.li,{children:"A test should always start with a fresh project"}),"\n",(0,t.jsx)(s.li,{children:"The name of the files should mirror the OpenRefine UI organization"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"testing-utilities",children:"Testing utilities"}),"\n",(0,t.jsx)(s.p,{children:"OpenRefine contributors have added some utility methods on the top of the Cypress framework.\nThose methods perform some common actions or assertions on OpenRefine, to avoid code duplication."}),"\n",(0,t.jsxs)(s.p,{children:["Utilities can be found in ",(0,t.jsx)(s.code,{children:"cypress/support/commands.js"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The most important utility method is ",(0,t.jsx)(s.code,{children:"loadAndVisitProject"}),".",(0,t.jsx)(s.br,{}),"\n","This method will create a fresh OpenRefine project based on a dataset given as a parameter.",(0,t.jsx)(s.br,{}),"\n","The fixture parameter can be"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["An arbitrary array, the first row is for the column names, other rows are for the values",(0,t.jsx)(s.br,{}),"\n","Use an arbitrary array ",(0,t.jsx)(s.strong,{children:"only"})," if the test requires some specific grid values",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.strong,{children:"Example:"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"const fixture = [\n  ['Column A', 'Column B', 'Column C'],\n  ['0A', '0B', '0C'],\n  ['1A', '1B', '1C'],\n  ['2A', '2B', '2C'],\n];\ncy.loadAndVisitProject(fixture);\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["A referenced dataset: ",(0,t.jsx)(s.code,{children:"food.small"})," or ",(0,t.jsx)(s.code,{children:"food.mini"}),(0,t.jsx)(s.br,{}),"\n","Most of the time, tests does not require any specific grid values",(0,t.jsx)(s.br,{}),"\n","Use food.mini as much as possible, it loads 2 rows and very few columns in the grid",(0,t.jsx)(s.br,{}),"\n","Use food.small if the test requires a few hundred rows in the grid"]}),"\n",(0,t.jsxs)(s.p,{children:["Those datasets live in ",(0,t.jsx)(s.code,{children:"cypress/fixtures"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"browsers",children:"Browsers"}),"\n",(0,t.jsxs)(s.p,{children:["In terms of browsers, Cypress is using what is installed on your operating system.\nSee the ",(0,t.jsx)(s.a,{href:"https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers",children:"Cypress documentation"})," for a list of supported browsers"]}),"\n",(0,t.jsx)(s.h3,{id:"folder-organization",children:"Folder organization"}),"\n",(0,t.jsxs)(s.p,{children:["Tests are located in ",(0,t.jsx)(s.code,{children:"main/tests/cypress/cypress"})," folder.\nThe test should not use any file outside the cypress folder."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/fixtures"})," contains CSVs and OpenRefine project files used by the tests"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/integration"})," contains the tests"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/plugins"})," contains custom plugins for the OR project"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/screenshots"})," and ",(0,t.jsx)(s.code,{children:"/videos"})," contains the recording of the tests, Git ignored"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/support"})," is a custom library of assertion and common user actions, to avoid code duplication in the tests themselves"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(s.p,{children:"Cypress execution can be configured with environment variables, they can be declared at the OS level, or when running the test"}),"\n",(0,t.jsx)(s.p,{children:"Available variables are"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["OPENREFINE_URL, determine on which scheme://url",":port"," to access OpenRefine, default to ",(0,t.jsx)(s.a,{href:"http://localhost:333",children:"http://localhost:333"})]}),"\n",(0,t.jsx)(s.li,{children:"DISABLE_PROJECT_CLEANUP, If set to 1, projects will not be deleted after each run. Default to 0 to keep the OpenRefine instance clean"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Cypress contains ",(0,t.jsx)(s.a,{href:"https://docs.cypress.io/guides/guides/environment-variables.html#Setting",children:"exaustive documentation"})," about configuration, but here are two simple ways to configure the execution of the tests:"]}),"\n",(0,t.jsx)(s.h4,{id:"overriding-with-a-cypressenvjson-file",children:"Overriding with a cypress.env.json file"}),"\n",(0,t.jsx)(s.p,{children:"This file is ignored by Git, and you can use it to configure Cypress locally"}),"\n",(0,t.jsx)(s.h4,{id:"command-line",children:"Command-line"}),"\n",(0,t.jsx)(s.p,{children:"You can pass variables at the command-line level"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'yarn --cwd ./main/tests/cypress run cypress open --env OPENREFINE_URL="http://localhost:1234"\n'})}),"\n",(0,t.jsx)(s.h3,{id:"visual-testing",children:"Visual testing"}),"\n",(0,t.jsxs)(s.p,{children:["Tests generally ensure application behavior by making assertions against the DOM, to ensure specific texts or css attributes are present in the document body.",(0,t.jsx)(s.br,{}),"\n","Visual testing, on the contrary, is a way to test applications by comparing images.\nA reference screenshot is taken the first time the test runs, and subsequent runs will compare a new screenshot against the reference, at the pixel level."]}),"\n",(0,t.jsxs)(s.p,{children:["Here is an ",(0,t.jsx)(s.a,{href:"https://docs.cypress.io/plugins/directory#visual-testing",children:"introduction to visual testing by Cypress"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["In some cases, we are using visual testing.",(0,t.jsx)(s.br,{}),"\n","We are using ",(0,t.jsx)(s.a,{href:"https://github.com/jaredpalmer/cypress-image-snapshot",children:"Cypress Image Snapshot"})]}),"\n",(0,t.jsx)(s.p,{children:"Identified cases are so far:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"testing images created by OpenRefine backend (scatterplots for example)"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Reference screenshots (Called snapshots), are stored in /cypress/snapshots.\nAnd a snapshot can be taken for the whole page, or just a single part of the page."}),"\n",(0,t.jsx)(s.h4,{id:"when-a-visual-test-fails",children:"When a visual test fails"}),"\n",(0,t.jsx)(s.p,{children:"First, Cypress will display the following error message:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Diff image when a visual test fails",src:n(41230).Z+""})}),"\n",(0,t.jsxs)(s.p,{children:["Then, a diff image will be created in /cypress/snapshots, this directory is ignored by Git.",(0,t.jsx)(s.br,{}),"\n","The diff images shows the reference image on the left, the image that was taken during the test run on the right, and the diff in the middle."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Diff image when a visual test fails",src:n(29058).Z+""})}),"\n",(0,t.jsx)(s.h2,{id:"cicd",children:"CI/CD"}),"\n",(0,t.jsx)(s.p,{children:"In CI/CD, tests are run headless, with the following command-line"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"./refine e2e_tests\n"})}),"\n",(0,t.jsx)(s.p,{children:"Results are displayed in the standard output"}),"\n",(0,t.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://docs.cypress.io/guides/guides/command-line.html#Installation",children:"Cypress command line options"}),"\n",(0,t.jsx)(s.a,{href:"https://example.cypress.io/",children:"Lots of good Cypress examples"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},29058:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/failed-visual-test-ccb6e467b538f73c5303f10e3d51cb53.png"},41230:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/visual-test-cypress-failure-dbfb18976d4a89de1224ca42b868d3d4.png"},69018:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>l});var t=n(47768);const i={},r=t.createContext(i);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);