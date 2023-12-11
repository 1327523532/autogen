"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1114],{1457:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>A});var a=n(3117),i=n(7294),o=n(3905);const l=JSON.parse('[{"title":"AutoGen Group Chat Playground","link":"https://huggingface.co/spaces/thinkall/AutoGen_Playground","description":"A huggingface space to explore AutoGen group chat, build agents with zero-code, and access source code for reuse.","tags":["ui"]},{"title":"Solving Security Vulnerabilities with AutoGen","link":"https://www.linkedin.com/pulse/solving-security-vulnerabilities-llms-society-mind-model-leah-bonser-kcswc?trk=public_post_feed-article-content","description":"An article discussing the use of AutoGen to tackle security vulnerabilities.","image":"default.png","tags":["app"]},{"title":"Research Agents via AutoGen","link":"https://youtu.be/AVInhYBUnKs?feature=shared","description":"A guide to building a team of AI research agents using AutoGen.","image":"default.png","tags":["groupchat","tools"]},{"title":"AutoGen with Ollama and LiteLLM","link":"https://youtu.be/y7wMTwJN7rA","description":"A demonstration of integrating Ollama, LiteLLM, and AutoGen.","image":"default.png","tags":["extension"]},{"title":"AutoGen Engineer","link":"https://chat.openai.com/g/g-Y50TY4F35-AutoGen-engineer","description":"Join the AutoGen Engineer group chat to collaborate and build with others.","image":"default.png","tags":["groupchat","app"]},{"title":"AutoGen with Obsidian","link":"https://youtu.be/iWdVAr4xMkg","description":"Learn how to integrate AutoGen with Obsidian for note-taking and management.","image":"default.png","tags":["tools","app"]},{"title":"AutoGen Builder GPT","link":"https://chat.openai.com/g/g-EwugVj4zq-AutoGen-builder","description":"A platform for building conversational AI agents with AutoGen Builder GPT.","image":"default.png","tags":["groupchat","ui"]},{"title":"AutoGen Multi-Round Human Interaction Chatbot with Gradio 4.0","link":"https://huggingface.co/spaces/thinkall/AutoGen-human-input-demo","description":"Experience a multi-round human interaction chatbot built with AutoGen and Gradio 4.0.","image":"default.png","tags":["ui","app"]},{"title":"Agentcloud.dev (UI for AutoGen)","link":"https://github.com/rnadigital/agentcloud","description":"Agentcloud.dev provides a user interface for managing and collaborating with AutoGen agents.","image":"default.png","tags":["ui"]},{"title":"Next.js + FASTAPI Based UI for AutoGen","link":"https://github.com/victordibia/AutoGen-ui","description":"A project featuring a UI for AutoGen built with Next.js and FastAPI.","image":"default.png","tags":["ui"]},{"title":"AutoGen Monitoring and Observability","link":"https://docs.arize.com/phoenix/quickstart/llm-traces/autogen-support","description":"Documentation on monitoring and observability features for AutoGen.","image":"default.png","tags":["extension"]},{"title":"Postgres Data Analytics AI Agent with AutoGen","link":"https://www.youtube.com/playlist?list=PLS_o2ayVCKvDzj2YxeFqMq9UbR1PkPEh0","description":"Utilizing AutoGen to speak directly to Postgres Database.","image":"default.png","tags":["tools","app"]},{"title":"AutoGen with Local LLMs","link":"https://hackernoon.com/beep-beep-bop-bop-how-to-deploy-multiple-ai-agents-using-local-llms","description":"An article on deploying multiple AI agents using local LLMs with AutoGen.","image":"default.png","tags":["extension"]},{"title":"AutoGen with FastApi backend and React Frontend","link":"https://github.com/bonadio/AutoGenwebdemo","description":"A demonstration of using AutoGen with a FastAPI backend and React frontend.","image":"default.png","tags":["ui"]},{"title":"Talk to AutoGen Agents Using Whisper and Gradio","link":"https://youtu.be/WysBjwJoulo","description":"Interact with AutoGen agents using Whisper and Gradio interfaces.","image":"default.png","tags":["ui"]},{"title":"AutoGen + LangChain + ChromaDB = You Super AI Assistant","link":"https://www.youtube.com/watch?v=fd9fcRhYoFQ","description":"Create a super AI assistant combining AutoGen, LangChain, and ChromaDB.","image":"default.png","tags":["app"]},{"title":"AutoGen + Flowise = Super AI Agents on No-Code Platform","link":"https://github.com/sugarforever/LangChain-Advanced/blob/main/Integrations/AutoGen/AutoGen_flowise_ai_agent.ipynb","description":"Build super AI agents on a no-code platform using AutoGen and Flowise.","image":"default.png","tags":["app"]},{"title":"AutoGen with RunPod and TextGen WebUI","link":"https://youtu.be/FHXmiAvloUg","description":"Learn how to use AutoGen with RunPod and TextGen WebUI for enhanced AI agent integration.","image":"default.png","tags":["ui","extension"]},{"title":"Jarvis Collaborates with AutoGen for Tweet Analysis","link":"https://github.com/ngaut/jarvis#demo","description":"Explore how Jarvis collaborates with AutoGen for tweet analysis.","image":"default.png","tags":["tools","app"]},{"title":"AutoGen + LangChain + PlayHT = Super AI Agent that Speaks","link":"https://www.youtube.com/watch?v=zo2ft4Qje1Y","description":"Combine AutoGen, LangChain, and PlayHT to create a speaking super AI agent.","image":"default.png","tags":["tools","app"]},{"title":"AutoGen Flow with FastAPI and Nextjs","link":"https://github.com/jaemil/agentsflow","description":"A development flow using AutoGen with FastAPI and Next.js.","image":"default.png","tags":["ui"]},{"title":"Build Vision-Enabled AI Agents with AutoGen + Llava","link":"https://youtu.be/JgVb8A6OJwM","description":"Tutorial on building vision-enabled AI agents using AutoGen and llava.","image":"default.png","tags":["tools","app"]}]');var s=n(1414),r=n(7502),u=n(109),g=n(6550);const{Option:p}=s.Z,c=()=>{const t=(0,g.TH)(),e=(0,g.k6)(),n=(0,i.useCallback)((()=>{const e=new URLSearchParams(t.search).get("tags");return e?e.split(","):[]}),[t.search]),[a,o]=(0,i.useState)(n());(0,i.useEffect)((()=>{const t=n();o(t)}),[n]);const c=t=>{let{tags:e}=t;return i.createElement("div",{className:"tags-container"},e.map(((t,e)=>i.createElement("span",{className:"tag",key:e},t))))},d=[...new Set(l.flatMap((t=>t.tags)))],h=a.length>0?l.filter((t=>a.some((e=>t.tags.includes(e))))):l;return i.createElement("div",null,i.createElement(s.Z,{mode:"multiple",placeholder:"Filter by tags",style:{width:"100%",marginBottom:16},value:a,onChange:n=>{o(n);const a=new URLSearchParams;n.length>0&&a.set("tags",n.join(",")),e.push(`${t.pathname}?${a.toString()}`)}},d.map((t=>i.createElement(p,{key:t,value:t},t)))),i.createElement(r.Z,{grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:h,renderItem:t=>i.createElement(r.Z.Item,null,i.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",style:{display:"block"}},i.createElement(u.Z,{hoverable:!0,bordered:!0,cover:i.createElement("img",{alt:t.title,src:t.image?t.image.includes("http")?t.image:`/autogen/img/gallery/${t.image}`:"/autogen/img/gallery/default.png"})},i.createElement("div",null,i.createElement("span",{style:{fontSize:"1.2rem",fontWeight:"bold",color:"black"}},t.title)),i.createElement("div",{style:{fontWeight:"normal",color:"grey"}},t.description?t.description:t.title),i.createElement(c,{tags:t.tags}))))}))},d={},h="Gallery",m={unversionedId:"Gallery",id:"Gallery",isDocsHomePage:!1,title:"Gallery",description:"This page contains a list of demos that use AutoGen in various applications from the community.",source:"@site/docs/Gallery.mdx",sourceDirName:".",slug:"/Gallery",permalink:"/autogen/docs/Gallery",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Gallery.mdx",tags:[],version:"current",frontMatter:{}},A=[{value:"Contributing",id:"contributing",children:[],level:2}],f={toc:A};function b(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gallery"},"Gallery"),(0,o.kt)("p",null,"This page contains a list of demos that use AutoGen in various applications from the community."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Contribution guide:"),"\nBuilt something interesting with AutoGen? Submit a PR to add it to the list! See the ",(0,o.kt)("a",{parentName:"p",href:"#contributing"},"Contribution Guide below")," for more details."),(0,o.kt)(c,{mdxType:"GalleryPage"}),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"To contribute, please open a PR that adds an entry to the ",(0,o.kt)("inlineCode",{parentName:"p"},"data/gallery.json")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory. The entry should be an object with the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "title": "AutoGen Playground",\n    "link": "https://huggingface.co/spaces/thinkall/AutoGen_Playground",\n    "description": "A space to explore the capabilities of AutoGen.",\n    "image": "default.png",\n    "tags": ["ui"]\n  }\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," property should be the name of a file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"static/img/gallery")," directory.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"tags")," property should be an array of strings that describe the demo. We recommend using no more than two tags for clarity.\nHere are the meanings of several tags for reference:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"app: Using Autogen for specific applications."),(0,o.kt)("li",{parentName:"ol"},"extension: Enhacing AutoGen beyond the features in current version."),(0,o.kt)("li",{parentName:"ol"},"ui: Building user interface for AutoGen."),(0,o.kt)("li",{parentName:"ol"},"tool: Strengthing AutoGen Agents with exteral tools."),(0,o.kt)("li",{parentName:"ol"},"groupchat: Solving complex tasks with a group of Agents.")),(0,o.kt)("p",null,"if the existing ones do not precisely portray your own demos, new tags are also encouraged to add."))}b.isMDXComponent=!0}}]);