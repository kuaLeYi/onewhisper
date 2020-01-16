var pw = prompt('Password:'), num = prompt('Number of stars in solar system as of 2020 CE:'), big = [], listItem = (a,b,c) => `<li><a href='${a}'target='_blank'>${b}</a> ${c.map(f => `<u>${f}</u>`).join` `}</li>`;
firebase.initializeApp({projectId: CryptoJS.AES.decrypt('U2FsdGVkX1+Us1ssY01EMkiYG/320KLG3IOWO4Iva74=', pw).toString(CryptoJS.enc.Utf8)});
firebase.firestore().collection(CryptoJS.AES.decrypt('U2FsdGVkX1+u/DFOXhWEibvN0HlP/IX0/qBJT5yGqhBG7NL0Q9sfj3lffFNkqD1M', pw).toString(CryptoJS.enc.Utf8)).get().then(snap => {
  snap.docs.map(doc => {
    var o = doc.data();
    big.push([o.id = doc.id, o.link, o.tags/*.sort()*/]);
    if (num != btoa('dm93b2ZibGNha3F1YXJ0emp1ZGdlbXlzcGhpeG4=') && o.tags.indexOf('entertain') < 0 && o.tags.indexOf('school-nat-phil') < 0 && o.tags.indexOf('write-fiction') < 0)
      $('#results').append(listItem(o.link, o.id, o.tags));
    return doc.data();
  });
});
function f(x, y) {
  var hv = a => x.every(v => a[2].includes(v)), nHv = a => !y.some(v => a[2].includes(v));
  if (x || y) {
    if (x) x = x.split` `;
    if (y) y = y.split` `;
    $('#results').html(big.filter(e => x && y ? hv(e) && nHv(e) : (x ? hv(e) : nHv(e))).map(e => listItem(e[1], e[0], e[2])));
  } else $('#results').html(big.map(e => listItem(e[1], e[0], e[2])));
}
