(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(37)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),o=a.n(s),c=(a(26),a(28),a(9)),i=a(10),u=a(12),l=a(11),m=a(13),g=a(39),p=a(40),h=(a(30),a(16)),f=a(4),y=a.n(f),d=a(7),v=a(3),b={getCategories:function(){var e=Object(d.a)(y.a.mark(function e(t){var a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://jservice.io/api/categories?count=100&offset=".concat(t));case 2:return a=e.sent,n=a.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getCategorybyId:function(){var e=Object(d.a)(y.a.mark(function e(t){var a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://jservice.io/api/category?id=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},C=a(14),w=a(8),O={saveLastCategory:function(e){localStorage.setItem("lastCategory",JSON.stringify(e))},getLastCategory:function(e){return JSON.parse(localStorage.getItem("lastCategory"))},saveCategoryGame:function(e,t){var a=JSON.parse(localStorage.getItem("categoriesData")),n=Object(w.a)({},a,Object(C.a)({},t,e));localStorage.setItem("categoriesData",JSON.stringify(n))},getCategoryGame:function(e){var t=JSON.parse(localStorage.getItem("categoriesData"));return t?t[e]:null}},j=a(38),E=function(e){var t=e.categories,a=e.lastCategory,n=e.moreCat;return r.a.createElement("section",{className:"homepage crt"},r.a.createElement("h2",null,"Homepage - Category selection"),t.length>0&&r.a.createElement("section",null,r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:e.id,className:"categoryLi"},r.a.createElement(j.a,{to:"".concat("/the-trivia","/category/").concat(e.id)},e.title),String(e.id)===String(a)&&r.a.createElement("span",{className:"lastCatIndication"},"< LAST CATEGORY SELECTED"))}))),r.a.createElement("button",{className:"moreCatButton",onClick:n},"More categories"))},k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={offset:0,categories:[]},a.getMoreCategory=a.getMoreCategory.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getMoreCategory();case 2:t=O.getLastCategory(),this.setState({lastCategory:t}),document.querySelector("a").focus(),window.addEventListener("keydown",function(e){if("ArrowDown"===e.key){e.preventDefault();var t=document.activeElement.parentNode.nextSibling;t&&"categoryLi"===t.className&&t.firstChild.focus()}else if("ArrowUp"===e.key){e.preventDefault();var a=document.activeElement.parentNode.previousSibling;a&&"categoryLi"===a.className&&a.firstChild.focus()}});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMoreCategory",value:function(){var e=Object(d.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.offset,e.next=3,b.getCategories(t);case 3:a=e.sent,this.setState(function(e){var t=e.categories,n=e.offset;return{categories:Object(h.a)(t).concat(Object(h.a)(a)),offset:n+100}});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(E,{categories:this.state.categories,lastCategory:this.state.lastCategory,moreCat:this.getMoreCategory})}}]),t}(n.Component),x=function(e){var t=e.category,a=t.clues,n=t.title,s=e.input,o=e.inputChange,c=e.checkAnswer,i=e.game,u=e.remainingQuestions,l=e.resetCategory,m=e.nextQuestion;return r.a.createElement("section",{className:"category crt"},r.a.createElement(j.a,{className:"back",to:""},"Back to Home"),r.a.createElement("h3",null,"[Category: ",n,"]"),r.a.createElement("p",{className:"score"},"Score: ",i.score,a&&!u()&&r.a.createElement("span",null,"/",a.length)),a&&u()&&r.a.createElement("div",null,r.a.createElement("div",{className:"question"},r.a.createElement("h4",null,"< Question #",i.questionIndex+1," >"),r.a.createElement("p",null,a&&a[i.questionIndex].question)),0!==i.attempts&&r.a.createElement("div",{className:"answer"},r.a.createElement("span",null,r.a.createElement("input",{id:"answer",className:"answerInput",type:"text",placeholder:"Type your answer",value:s,onChange:o,onKeyDown:c}))),null!==i.result&&r.a.createElement("div",null,r.a.createElement("p",{className:"answergame"},i.result?"":"Wrong answer, "+(0!==i.attempts?"".concat(i.attempts," attempts left"):"attempts left: 0 >>> Good answer: "+a[i.questionIndex].answer+" <<<<"))),r.a.createElement("button",{className:"nextQuestion",onClick:m},"Next question")),a&&!u()&&r.a.createElement("div",{className:"result"},r.a.createElement("p",null,i.score>a.length/2&&"Well played!!",i.score<a.length/2&&"Too bad!!")),i.questionIndex>0&&r.a.createElement("button",{className:"reset",onClick:l},"Reset"))},S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={category:{},game:{questionIndex:0,attempts:3,result:null,score:0},input:""},e.inputChange=e.inputChange.bind(Object(v.a)(Object(v.a)(e))),e.checkAnswer=e.checkAnswer.bind(Object(v.a)(Object(v.a)(e))),e.resetCategory=e.resetCategory.bind(Object(v.a)(Object(v.a)(e))),e.remainingQuestions=e.remainingQuestions.bind(Object(v.a)(Object(v.a)(e))),e.nextQuestion=e.nextQuestion.bind(Object(v.a)(Object(v.a)(e))),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){O.saveLastCategory(this.props.match.params.id)}},{key:"componentDidMount",value:function(){var e=Object(d.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getCategorybyId(this.props.match.params.id);case 2:t=e.sent,this.setState({category:t}),(a=O.getCategoryGame(this.props.match.params.id))&&this.setState({game:a});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState({input:e.target.value})}},{key:"checkAnswer",value:function(e){var t=this;if(13===e.which&&!(this.state.game.attempts<1)){var a=this.state.category.clues;console.log("answer: ",a[this.state.game.questionIndex].answer),this.setState(function(e){return t.state.input.toLowerCase()===a[t.state.game.questionIndex].answer.toLowerCase()?{input:"",game:Object(w.a)({},e.game,{result:!0,score:e.game.score+1,attempts:3,questionIndex:e.game.questionIndex+1})}:{input:"",game:Object(w.a)({},e.game,{result:!1,attempts:e.game.attempts-1})}},function(){O.saveCategoryGame(t.state.game,t.props.match.params.id)})}}},{key:"resetCategory",value:function(e){var t=this;e.preventDefault(),this.setState(function(e){return{input:"",game:Object(w.a)({},e.game,{result:null,score:0,attempts:3,questionIndex:0})}},function(){O.saveCategoryGame(t.state.game,t.props.match.params.id)})}},{key:"remainingQuestions",value:function(){return this.state.game.questionIndex<this.state.category.clues.length}},{key:"nextQuestion",value:function(){var e=this;console.log(this.state),this.setState(function(e){return{input:"",game:Object(w.a)({},e.game,{result:null,score:e.game.score,attempts:3,questionIndex:e.game.questionIndex+1})}},function(){O.saveCategoryGame(e.state.game,e.props.match.params.id)})}},{key:"render",value:function(){var e=this.state,t=e.category,a=e.input,n=e.game;return r.a.createElement(x,{category:t,input:a,inputChange:this.inputChange,checkAnswer:this.checkAnswer,resetCategory:this.resetCategory,remainingQuestions:this.remainingQuestions,nextQuestion:this.nextQuestion,game:n})}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{path:"".concat("/the-trivia","/"),exact:!0,component:k}),r.a.createElement(p.a,{path:"".concat("/the-trivia","/category/:id"),component:S}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.e21aa928.chunk.js.map