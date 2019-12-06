var big = [], listItem = (a,b,c) => `<li><a href='${a}'target='_blank'>${b}</a> ${c.map(f => `<u>${f}</u>`).join` `}</li>`;
firebase.initializeApp({projectId:'frustratiles'});
firebase.firestore().collection('43604341592219').get().then(snap => {
  snap.docs.map(doc => {
    var o = doc.data();
    big.push([o.id = doc.id, o.link, o.tags.sort()]);
    $('#results').append(listItem(o.link, o.id, o.tags));
    return doc.data();
  });
});
function f(x,y){
  var hv = a => x.every(v => a[2].includes(v)), nHv = a => !y.some(v => a[2].includes(v));
  if (x || y) {
    if (x) x = x.split` `;
    if (y) y = y.split` `;
    $('#results').html(big.filter(e => x && y ? hv(e) && nHv(e) : (x ? hv(e) : nHv(e))).map(e => listItem(e[1], e[0], e[2])));
  } else $('#results').html(big.map(e => listItem(e[1], e[0], e[2])));
}
