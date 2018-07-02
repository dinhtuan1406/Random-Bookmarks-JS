var token = 'EAA...'; 
var uid = 'uid';
fetch(`https://graph.facebook.com/me/groups?limit=5000&field=id&access_token=${token}`).then(e => e.json()).then(e => {for(let i in e.data) {fetch(`https://graph.facebook.com/${e.data[i].id}/members?member=${uid}&method=delete&access_token=${token}`).then(e => e.text()).then(e => console.log(e));}});
