webpackJsonp([1],{"/9Va":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("GiK3"),a=n.n(r),o=(n("F8kA"),n("FZ6Z")),s=(n.n(o),n("BaQ4")),i=n("P/IJ");var c=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={courses:[]},i.a.getAll().then(function(e){return r.setState({courses:e})}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state.courses.map(function(e){return a.a.createElement("div",{key:e._id,className:"column is-one-third"},a.a.createElement(s.a,{course:e}))});return a.a.createElement("div",null,a.a.createElement("div",{className:"columns"},e))},t}(r.Component)},0:function(e,t,n){n("+prg"),e.exports=n("lVK7")},"0bnp":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r,a,o=n("NR7O"),s=n("Ojd4"),i=n("P/IJ"),c=n("h53G");var u=(a=r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.getLevelResults=function(e){var t=this;if(this._cache_level.hasOwnProperty(e))return Promise.resolve(this._cache_level[e]);var n=o.a.getCredentials()._id;return s.a.get("levelsResults/user/"+n+"/level/"+e).then(function(n){var r=null===n?void 0:new c.f(n);return t._cache_level[e]=r,r})},e.getRanking=function(e){return s.a.get("levelsResults/ranking/"+e).then(function(e){return e})},e.getLessonResults=function(e){var t=this;return i.a.getLevels(e).then(function(e){return Promise.all([e,Promise.all(e.map(function(e){return t.getLevelResults(e._id)}))])}).then(function(e){return[e[0],e[1].filter(function(e){return void 0!==e})]})},e.calcLessonProgress=function(e,t){return Math.floor(t.length/e.length*100)},e.getCourseResults=function(e){var t=this;return i.a.getLessons(e).then(function(e){return Promise.all(e.map(function(e){return t.getLessonResults(e._id)}))})},e.calcCourseProgress=function(e){var t=0,n=e,r=Array.isArray(n),a=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(a>=n.length)break;o=n[a++]}else{if((a=n.next()).done)break;o=a.value}var s=o,i=s[0],c=s[1];t+=this.calcLessonProgress(i,c)}return t/e.length},e}(),r._cache_level={},a)},"1GrO":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("GiK3"),a=n.n(r),o=n("vz2O"),s=n("4Ztb"),i=n("P/IJ"),c=n("0bnp"),u=n("h53G");var l=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={levels:[],supplements:[],progress:0},c.a.getLessonResults(n.lesson._id).then(function(e){var t=e[0],n=e[1];r.setState({levels:t});var a=c.a.calcLessonProgress(t,n);r.setState({progress:a})}),i.a.getSupplements(n.lesson._id).then(function(e){return r.setState({supplements:e})}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=100===this.state.progress,t=this.state.levels.concat(this.state.supplements).sort(function(e,t){return e.order-t.order}).map(function(e){return e instanceof u.e?a.a.createElement(o.a,{key:e._id,level:e}):a.a.createElement(s.a,{key:e._id,supplement:e})}),n=e?"done fas fa-check-circle":"fas fa-circle";return a.a.createElement("div",{className:"lesson boxi"},a.a.createElement("i",{className:n}),a.a.createElement("h2",null,this.props.lesson.name),a.a.createElement("div",{className:"levels"},t))},t}(a.a.Component)},"2Vf9":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("GiK3"),a=n.n(r);n("F8kA");var o=a.a.createElement("div",{className:"footer"},a.a.createElement("a",{href:"#"},"Need help?"),a.a.createElement("a",{href:"#"},"FAQ")),s=function(e){function t(n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o},t}(r.Component)},"4Ztb":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("GiK3"),a=n.n(r);var o=a.a.createElement("i",{className:"fas fa-info-circle"}),s=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.showContent=function(){return r.setState({showContent:!0})},r.hideContent=function(){return r.setState({showContent:!1})},r.state={showContent:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state.showContent?"content show":"content";return a.a.createElement("div",{className:"_level supplement"},a.a.createElement("h3",{className:"name"},o,this.props.supplement.name),a.a.createElement("a",{className:"ed-link",onClick:this.showContent},"Open"),a.a.createElement("div",{className:e},a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,this.props.supplement.name),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.supplement.content}}),a.a.createElement("a",{className:"ed-link",onClick:this.hideContent},"Close"))))},t}(a.a.Component)},BaQ4:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("GiK3"),a=n.n(r),o=n("F8kA"),s=n("0bnp");var i=a.a.createElement("i",{className:"certificate fas fa-certificate"}),c=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={progress:0},s.a.getCourseResults(r.props.course._id).then(function(e){var t=s.a.calcCourseProgress(e);r.setState({progress:t})}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e="/course/"+this.props.course._id,t=100===this.state.progress?"Review":"Continue",n=100===this.state.progress?i:"";return a.a.createElement("div",{className:"course boxi"},a.a.createElement("h1",null,n," ",this.props.course.name),a.a.createElement("div",{className:"prog"},this.state.progress,"%"),a.a.createElement("p",{className:"short-desc"},this.props.course.description),a.a.createElement(o.b,{to:e,className:"ed-link"},t))},t}(r.Component)},E0bY:function(e,t){},FZ6Z:function(e,t){},Hay3:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("GiK3"),a=n.n(r),o=n("F8kA"),s=n("wyy7"),i=(n.n(s),n("h53G"),n("X8UI")),c=n("V4O/"),u=n("dCfE");var l=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));r.updateAnswers=function(){u.a.getAnswers(r.state.question._id).then(function(e){return r.setState({answers:e})})},r.reply=function(e){e.preventDefault(),u.a.createAnswer(r.state.replyContent,r.state.question._id).then(function(e){e.done&&(r.setState({replyContent:""}),r.updateAnswers())})},r.replyContentChanged=function(e){return r.setState({replyContent:e.target.value})},r.state={question:void 0,replyContent:"",answers:[]};var a=n.match.params.id;return u.a.getQuestion(a).then(function(e){r.setState({question:e}),r.updateAnswers()}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e="/discussion/"+this.props.match.params.courseId,t=void 0!==this.state.question?a.a.createElement(c.a,{question:this.state.question}):"",n=this.state.answers.map(function(e){return a.a.createElement(i.a,{key:e._id,answer:e})});return a.a.createElement("div",null,a.a.createElement(o.b,{to:e,className:"ed-link"},"Back to discussion"),t,n,a.a.createElement("div",{className:"new-answer"},a.a.createElement("textarea",{value:this.state.replyContent,onChange:this.replyContentChanged}),a.a.createElement("a",{className:"ed-link",href:"#",onClick:this.reply},"Reply")))},t}(r.Component)},MJQt:function(e,t){},NR7O:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.getCredentials=function(){return JSON.parse(window.localStorage.getItem("auth"))},e.hasCredentials=function(){return null!==window.localStorage.getItem("auth")},e.deleteCredentials=function(){window.localStorage.removeItem("auth")},e.getUsername=function(){return this.hasCredentials()?this.getCredentials().username:"Stranger"},e.getUserId=function(){return this.hasCredentials()?this.getCredentials()._id:0},e.doLogin=function(){this.deleteCredentials(),window.location.href="/auth"},e}()},Ojd4:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("QmSG"),a=n("NR7O");var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.get=function(e){var t=a.a.getCredentials().token;return fetch(r.a.api+"/"+e,{headers:{"x-access-token":t},method:"GET"}).then(function(e){if(403!==e.status)return e.json();a.a.doLogin()})},e.post=function(e,t){var n=a.a.getCredentials().token;return fetch(r.a.api+"/"+e,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","x-access-token":n},body:t}).then(function(e){return 400===e.status?e.json().then(function(e){return{error:e}}):e.json()})},e.delete=function(e){var t=a.a.getCredentials().token;return fetch(r.a.api+"/"+e,{headers:{"x-access-token":t},method:"DELETE"}).then(function(e){if(403!==e.status)return e.json();a.a.doLogin()})},e}()},"P/IJ":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r,a,o=n("NR7O"),s=n("Ojd4"),i=n("h53G");var c=(a=r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.get=function(e){var t=this;return this._cache_course.hasOwnProperty(e)?Promise.resolve(this._cache_course[e]):s.a.get("courses/"+e).then(function(n){var r=new i.b(n);return t._cache_course[e]=r,r})},e.getAll=function(){var e=o.a.getCredentials()._id;return s.a.get("enrollments/user/"+e).then(function(e){return e.map(function(e){return new i.b(e.course)})})},e.getLessons=function(e){var t=this;return this._cache_lessons.hasOwnProperty(e)?Promise.resolve(this._cache_lessons[e]):s.a.get("lessons/"+e).then(function(e){return e.map(function(e){return new i.d(e)})}).then(function(n){var r=n.sort(function(e,t){return e.order-t.order});return t._cache_lessons[e]=r,r})},e.getLevels=function(e){var t=this;return this._cache_levels.hasOwnProperty(e)?Promise.resolve(this._cache_levels[e]):s.a.get("levels/"+e).then(function(e){return e.map(function(e){return new i.e(e)})}).then(function(n){var r=n.sort(function(e,t){return e.order-t.order});return t._cache_levels[e]=r,r})},e.getSupplements=function(e){var t=this;return this._cache_supplements.hasOwnProperty(e)?Promise.resolve(this._cache_supplements[e]):s.a.get("supplements/"+e).then(function(e){return e.map(function(e){return new i.i(e)})}).then(function(n){var r=n.sort(function(e,t){return e.order-t.order});return t._cache_supplements[e]=r,r})},e}(),r._cache_course={},r._cache_lessons={},r._cache_levels={},r._cache_supplements={},a)},QmSG:function(e,t,n){"use strict";t.a={api:"http://localhost:8080/api"}},RwNq:function(e,t,n){"use strict";var r=n("GiK3"),a=n.n(r),o=n("F8kA"),s=n("E0bY"),i=(n.n(s),n("NR7O")),c=n("dCfE");var u=Object(o.f)(function(e){return a.a.createElement(v,e)}),l=a.a.createElement(o.b,{className:"ed-link",to:"/home"},a.a.createElement("i",{className:"fas fa-th"})),f=a.a.createElement("a",{href:"/",className:"ed-link brand"},"edPlayground"),p=a.a.createElement("a",{href:"/discover",className:"ed-link discover"},a.a.createElement("i",{className:"fas fa-compass"})),h=a.a.createElement("span",{className:"platinum"}),d=a.a.createElement("span",{className:"gold"}),m=a.a.createElement("a",{href:"/auth/account",className:"ed-link"},a.a.createElement("i",{className:"fas fa-user-circle"})),v=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.update=function(){c.a.getUserGold(i.a.getUserId()).then(function(e){return r.setState({gold:e.length})}),c.a.getUserPlat(i.a.getUserId()).then(function(e){return r.setState({platinum:e.length})})},r.state={username:i.a.getUsername(),gold:0,platinum:0},r.update(),setInterval(r.update,1e4),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e="/home"===this.props.location.pathname?"":l;return a.a.createElement("div",{className:"navbar"},f,p,e,a.a.createElement("div",{className:"user"},a.a.createElement("p",null,this.state.platinum," ",h),a.a.createElement("p",null,this.state.gold," ",d),a.a.createElement("p",null,this.state.username),m))},t}(r.Component);t.a=u},"V4O/":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("GiK3"),a=n.n(r),o=(n("F8kA"),n("dCfE")),s=n("NR7O");var i=a.a.createElement("span",{className:"platinum"}),c=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.update=function(){return o.a.getQuestionPlat(r.props.question._id).then(function(e){return r.setState({platinum:e})})},r.userGivenPlat=function(){return r.state.platinum.find(function(e){return e.user===s.a.getUserId()})},r.givePlat=function(e){e.preventDefault(),o.a.createPlat(r.props.question._id).then(function(e){return r.update()})},r.takePlat=function(e){e.preventDefault();var t=r.userGivenPlat();o.a.deletePlat(t._id).then(function(e){return r.update()})},r.state={platinum:[]},r.update(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state.platinum.length,t=void 0!==this.userGivenPlat()?a.a.createElement("a",{href:"#",onClick:this.takePlat},"Drop coin"):a.a.createElement("a",{href:"#",onClick:this.givePlat},"Give coin");return a.a.createElement("div",{className:"question boxi"},a.a.createElement("h3",null,this.props.question.title),a.a.createElement("p",null,this.props.question.content),a.a.createElement("div",{className:"info"},a.a.createElement("p",null,this.props.question.user),a.a.createElement("p",null,this.props.question.created.toLocaleString()),a.a.createElement("div",null,a.a.createElement("p",null,e," ",i),a.a.createElement("p",null,t))))},t}(r.Component)},X8UI:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("GiK3"),a=n.n(r),o=(n("F8kA"),n("dCfE")),s=n("NR7O");var i=a.a.createElement("span",{className:"gold"}),c=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.update=function(){return o.a.getAnswerGold(r.props.answer._id).then(function(e){return r.setState({gold:e})})},r.userGivenGold=function(){return r.state.gold.find(function(e){return e.user===s.a.getUserId()})},r.giveGold=function(e){e.preventDefault(),o.a.createGold(r.props.answer._id).then(function(e){return r.update()})},r.takeGold=function(e){e.preventDefault();var t=r.userGivenGold();o.a.deleteGold(t._id).then(function(e){return r.update()})},r.state={gold:[]},r.update(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state.gold.length,t=void 0!==this.userGivenGold()?a.a.createElement("a",{href:"#",onClick:this.takeGold},"Drop coin"):a.a.createElement("a",{href:"#",onClick:this.giveGold},"Give coin");return a.a.createElement("div",{key:this.props.answer._id,className:"answer boxi"},a.a.createElement("p",null,this.props.answer.content),a.a.createElement("div",{className:"info"},a.a.createElement("p",null,this.props.answer.user),a.a.createElement("p",null,this.props.answer.created.toLocaleString()),a.a.createElement("div",null,a.a.createElement("p",null,e," ",i),a.a.createElement("p",null,t))))},t}(r.Component)},cilB:function(e,t){},dCfE:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("NR7O"),a=n("Ojd4"),o=n("h53G");var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.getQuestions=function(e){return a.a.get("questions/course/"+e).then(function(e){return e.map(function(e){return new o.h(e)})})},e.getQuestion=function(e){return a.a.get("questions/"+e).then(function(e){return new o.h(e)})},e.getAnswers=function(e){return a.a.get("answers/question/"+e).then(function(e){return e.map(function(e){return new o.a(e)})})},e.getAnswerGold=function(e){return a.a.get("golds/answer/"+e).then(function(e){return e.map(function(e){return new o.c(e)})})},e.getQuestionPlat=function(e){return a.a.get("platinums/question/"+e).then(function(e){return e.map(function(e){return new o.g(e)})})},e.getUserGold=function(e){return a.a.get("golds/creator/"+e).then(function(e){return e.map(function(e){return new o.c(e)})})},e.getUserPlat=function(e){return a.a.get("platinums/creator/"+e).then(function(e){return e.map(function(e){return new o.g(e)})})},e.createQuestion=function(e,t,n){var o=new URLSearchParams;return o.set("title",e),o.set("content",t),o.set("courseId",n),o.set("userId",r.a.getCredentials()._id),a.a.post("questions",o)},e.createAnswer=function(e,t){var n=new URLSearchParams;return n.set("content",e),n.set("questionId",t),n.set("userId",r.a.getCredentials()._id),a.a.post("answers",n)},e.createGold=function(e){var t=new URLSearchParams;return t.set("answerId",e),t.set("userId",r.a.getCredentials()._id),a.a.post("golds",t)},e.createPlat=function(e){var t=new URLSearchParams;return t.set("questionId",e),t.set("userId",r.a.getCredentials()._id),a.a.post("platinums",t)},e.deleteGold=function(e){return a.a.delete("golds/"+e)},e.deletePlat=function(e){return a.a.delete("platinums/"+e)},e}()},h53G:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"b",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return s}),n.d(t,"i",function(){return i}),n.d(t,"f",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return f}),n.d(t,"g",function(){return p});var a=function e(t){r(this,e),this._id=t&&t._id||0,this.name=t&&t.name||"",this.description=t&&t.description||""},o=function e(t){r(this,e),this._id=t&&t._id||0,this.name=t&&t.name||"",this.order=t&&t.order||0},s=function e(t){r(this,e),this._id=t&&t._id||0,this.name=t&&t.name||"",this.order=t&&t.order||0},i=function e(t){r(this,e),this._id=t&&t._id||0,this.name=t&&t.name||"",this.order=t&&t.order||0,this.content=t&&t.content||""},c=function e(t){r(this,e),this._id=t&&t._id||0,this.seconds=t&&t.seconds||-1,this.order=t&&t.level&&t.level.order||0,this.levelId=t&&t.level&&t.level._id||0},u=function e(t){r(this,e),this._id=t&&t._id||0,this.title=t&&t.title||"",this.content=t&&t.content||"",this.created=t&&new Date(t.created)||new Date(0),this.user=t&&t.user&&t.user.username||""},l=function e(t){r(this,e),this._id=t&&t._id||0,this.content=t&&t.content||"",this.created=t&&new Date(t.created),this.user=t&&t.user&&t.user.username||""},f=function e(t){r(this,e),this._id=t&&t._id||0,this.answerId=t&&t.answer,this.user=t&&t.user,this.creator=t&&t.creator,this.created=t&&new Date(t.created)},p=function e(t){r(this,e),this._id=t&&t._id||0,this.questionId=t&&t.question,this.user=t&&t.user,this.creator=t&&t.creator,this.created=t&&new Date(t.created)}},huow:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n("GiK3"),a=n.n(r),o=n("F8kA"),s=n("MJQt"),i=(n.n(s),n("P/IJ")),c=n("0bnp"),u=n("h53G"),l=n("1GrO");var f=a.a.createElement("div",null,a.a.createElement("p",null,"Discussion"),a.a.createElement("p",null,"Collaborate with your classmates and get coins  ",a.a.createElement("span",{className:"platinum"})," ",a.a.createElement("span",{className:"gold"}))),p=a.a.createElement("i",{className:"fas fa-comments"}),h=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));r.state={course:new u.b,lessons:[],progress:0};var a=n.match.params.id;return i.a.get(a).then(function(e){return r.setState({course:e})}),i.a.getLessons(a).then(function(e){return r.setState({lessons:e})}),c.a.getCourseResults(a).then(function(e){var t=c.a.calcCourseProgress(e);r.setState({progress:t})}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state.lessons.map(function(e){return a.a.createElement(l.a,{key:e._id,lesson:e})}),t="/discussion/"+this.state.course._id;return a.a.createElement("div",null,a.a.createElement("div",{className:"overview boxi"},a.a.createElement("h1",null,this.state.course.name),a.a.createElement("p",null,this.state.course.description),a.a.createElement("progress",{className:"progress is-success",value:this.state.progress,max:"100"},this.state.progress,"%"),a.a.createElement("div",{className:"discussion"},f,a.a.createElement(o.b,{to:t,className:"ed-link"},p))),a.a.createElement("div",{className:"lessons"},e))},t}(r.Component)},jPwX:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("GiK3"),a=n.n(r),o=n("F8kA"),s=n("dCfE");var i=a.a.createElement("h3",null,"Make a new question"),c=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.contentChanged=function(e){return r.setState({content:e.target.value})},r.titleChanged=function(e){return r.setState({title:e.target.value})},r.submit=function(e){e.preventDefault(),s.a.createQuestion(r.state.title,r.state.content,r.props.match.params.id).then(function(e){e.done&&r.setState({done:!0})})},r.state={title:"",content:"",done:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e="/discussion/"+this.props.match.params.id;return this.state.done?a.a.createElement(o.c,{to:e}):a.a.createElement("div",null,a.a.createElement(o.b,{to:e,className:"ed-link"},"Back to discussion"),a.a.createElement("div",{className:"new-question"},i,a.a.createElement("input",{type:"text",value:this.state.title,onChange:this.titleChanged,placeholder:"Title"}),a.a.createElement("textarea",{value:this.state.content,onChange:this.contentChanged}),a.a.createElement("a",{className:"ed-link",href:"#",onClick:this.submit},"Submit")))},t}(r.Component)},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("GK12"),a=(n.n(r),n("cilB")),o=(n.n(a),n("GiK3")),s=n.n(o),i=n("O27J"),c=(n.n(i),n("pnOm"));Object(i.render)(s.a.createElement(c.a,null),document.querySelector("#app"))},pnOm:function(e,t,n){"use strict";var r=n("GiK3"),a=n.n(r),o=n("F8kA"),s=n("NR7O"),i=n("RwNq"),c=n("2Vf9"),u=n("/9Va"),l=n("huow"),f=n("zYwv"),p=n("Hay3"),h=n("jPwX");var d=a.a.createElement(o.a,{basename:"/learn"},a.a.createElement("div",{className:"page"},a.a.createElement(i.a,null),a.a.createElement("div",{className:"section main"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"contents"},a.a.createElement(o.e,null,a.a.createElement(o.d,{path:"/home",component:u.a}),a.a.createElement(o.d,{path:"/course/:id",component:l.a}),a.a.createElement(o.d,{path:"/discussion/:id",component:f.a}),a.a.createElement(o.d,{path:"/question/:courseId/:id",component:p.a}),a.a.createElement(o.d,{path:"/newquestion/:id",component:h.a}),a.a.createElement(o.c,{to:"/home"}))),a.a.createElement(c.a,null))))),m=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return s.a.hasCredentials()||s.a.doLogin(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return d},t}(r.Component);t.a=m},vz2O:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n("GiK3"),a=n.n(r),o=n("0bnp");var s=a.a.createElement("i",{className:"fas fa-circle"}),i=a.a.createElement("a",{className:"ed-link"},"Start"),c=a.a.createElement("i",{className:"done fas fa-check-circle"}),u=a.a.createElement("i",{className:"fas fa-clock"}),l=a.a.createElement("h3",{className:"arrow"},a.a.createElement("i",{className:"fas fa-arrow-right"})),f=a.a.createElement("i",{className:"fas fa-trophy"}),p=a.a.createElement("a",{className:"ed-link"},"Repeat"),h=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.state={seconds:-1,ranking:-1},o.a.getLevelResults(n.level._id).then(function(e){return void 0===e?Promise.reject():(r.setState({seconds:e.seconds}),o.a.getRanking(e.seconds))}).then(function(e){return r.setState({ranking:e})},function(){}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.renderSeconds=function(e){var t=0,n=0;return n=e%60,t=Math.floor(e/60%60),Math.floor(e/60/60).toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")+":"+n.toString().padStart(2,"0")},t.prototype.render=function(){var e=-1!=this.state.seconds,t=-1!==this.state.ranking?"#"+this.state.ranking:"-";return e?a.a.createElement("div",{className:"_level"},a.a.createElement("h3",{className:"name"},c,this.props.level.name),a.a.createElement("h3",{className:"mark"},u,this.renderSeconds(this.state.seconds)),l,a.a.createElement("h3",{className:"mark"},f,t),p):a.a.createElement("div",{className:"_level"},a.a.createElement("h3",{className:"name"},s,this.props.level.name),i)},t}(a.a.Component)},wyy7:function(e,t){},zYwv:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("GiK3"),a=n.n(r),o=n("F8kA"),s=n("wyy7"),i=(n.n(s),n("dCfE"));var c=a.a.createElement("div",{className:"question-link boxi"},a.a.createElement("h3",null,a.a.createElement("i",{className:"fas fa-thumbtack"})," Welcome!"),a.a.createElement("p",null,"edPlayground"),a.a.createElement("a",{href:"#",className:"ed-link"},"Open")),u=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));r.state={questions:[]};var a=n.match.params.id;return i.a.getQuestions(a).then(function(e){return r.setState({questions:e})}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this,t="/course/"+this.props.match.params.id,n="/newquestion/"+this.props.match.params.id,r=this.state.questions.map(function(t){var n="/question/"+e.props.match.params.id+"/"+t._id;return a.a.createElement("div",{key:t._id,className:"question-link boxi"},a.a.createElement("h3",null,t.title),a.a.createElement("p",null,t.user),a.a.createElement("p",null,t.created.toLocaleString()),a.a.createElement(o.b,{to:n,className:"ed-link"},"Open"))});return a.a.createElement("div",null,a.a.createElement(o.b,{to:t,className:"ed-link separated"},"Back to course"),a.a.createElement(o.b,{to:n,className:"ed-link"},"New Question"),c,r)},t}(r.Component)}},[0]);
//# sourceMappingURL=app.7ed55581.js.map