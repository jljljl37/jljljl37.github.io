var cnt=5;var escurls=new Array("https://www.baidu.com/","http://www.cplusplus.com","https://www.luogu.org/problem/list","https://www.luogu.org/discuss/lists?forumname=academics","https://www.luogu.org/problem/P");var at=1;var ap=1;var as=1;var dis=1;var lasturl="https://www.luogu.org/";var id=0;var lastid=0;function showurl(x){if(dis==1){$("#iframe1").attr("src",x);$("#iframe1").focus()}else{$("#iframe2").attr("src",x);$("#iframe2").focus()}}function escape(){if(dis==1){$("#div1").attr("style","display:none");$("#div2").attr("style","display:block")}else{$("#div1").attr("style","display:block");$("#div2").attr("style","display:none")}var i=Math.floor(((Math.random()*19260817)%cnt));var iid="";if(true){if(ap==1){id=Math.floor(((Math.random()*19260817)%4500))+1000;iid=escurls[cnt-1]+id.toString()}$("#url").replaceWith("<a id='url'>"+lasturl+"</a>");lasturl=iid;if(at==1){if(lastid!=null){changetitle("P"+lastid.toString()+" - 洛谷")}}lastid=id;if(dis==1){if(ap==1){$("#iframe1").attr("src",lasturl)}$("#iframe2").focus();dis=2}else{if(ap==1){$("#iframe2").attr("src",lasturl)}$("#iframe1").focus();dis=1}}sec()}function changetitle(x){$("title").replaceWith("<title>"+x+"</title>")}function autotitle(){if(at==1){$("#dat").replaceWith("<button id='dat' onclick='autotitle()''>0</button>");at=0}else{$("#dat").replaceWith("<button id='dat' onclick='autotitle()''>1</button>");at=1}}function autoup(){if(ap==1){$("#up").replaceWith("<button id='up' onclick='autoup()''>0</button>");ap=0}else{$("#up").replaceWith("<button id='up' onclick='autoup()''>1</button>");ap=1}}function sec(){if(as==1){$("#ss").attr("style","display:none");as=0}else{$("#ss").attr("style","display:block");as=1}}function changeheight(x){$("#iframe1").attr("height",x);$("#iframe2").attr("height",x)}function checkkey(){if(event.which==46){console.log("escape");escape()}}function changeh(){var iframe;if(dis==1){iframe=$("#iframe1")}else{iframe=$("#iframe2")}try{var bHeight=iframe.contentDocument.body.scrollHeight;var dHeight=iframe.contentDocument.documentElement.scrollHeight;var height=Math.max(bHeight,dHeight);iframe.height=height}catch(ex){}};
