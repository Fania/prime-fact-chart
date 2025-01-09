const col = randomColor({luminosity: 'bright', count: 27});
// const col = randomColor({hue: 'random', luminosity: 'random', count: 27});
// const col = randomColor({luminosity: 'dark', count: 27});
// const col = randomColor({luminosity: 'light',count: 27});
// const col = randomColor({hue: 'green', count: 27});

const texts = [
  `.n1  { background: light-dark(${col[0]},${col[0]});   }`,
  `.n2  { background: light-dark(${col[1]},${col[1]});   }`,
  `.n3  { background: light-dark(${col[2]},${col[2]});   }`,
  `.n5  { background: light-dark(${col[3]},${col[3]});   }`,
  `.n7  { background: light-dark(${col[4]},${col[4]});   }`,
  `.n11 { background: light-dark(${col[5]},${col[5]});   }`,
  `.n13 { background: light-dark(${col[6]},${col[6]});   }`,
  `.n17 { background: light-dark(${col[7]},${col[7]});   }`,
  `.n19 { background: light-dark(${col[8]},${col[8]});   }`,
  `.n23 { background: light-dark(${col[9]},${col[9]});   }`,
  `.n23 { background: light-dark(${col[10]},${col[10]}); }`,
  `.n29 { background: light-dark(${col[11]},${col[11]}); }`,
  `.n31 { background: light-dark(${col[12]},${col[12]}); }`,
  `.n37 { background: light-dark(${col[13]},${col[13]}); }`,
  `.n41 { background: light-dark(${col[14]},${col[14]}); }`,
  `.n43 { background: light-dark(${col[15]},${col[15]}); }`,
  `.n47 { background: light-dark(${col[16]},${col[16]}); }`,
  `.n53 { background: light-dark(${col[17]},${col[17]}); }`,
  `.n59 { background: light-dark(${col[18]},${col[18]}); }`,
  `.n61 { background: light-dark(${col[19]},${col[19]}); }`,
  `.n67 { background: light-dark(${col[20]},${col[20]}); }`,
  `.n71 { background: light-dark(${col[21]},${col[21]}); }`,
  `.n73 { background: light-dark(${col[22]},${col[22]}); }`,
  `.n79 { background: light-dark(${col[23]},${col[23]}); }`,
  `.n83 { background: light-dark(${col[24]},${col[24]}); }`,
  `.n89 { background: light-dark(${col[25]},${col[25]}); }`,
  `.n97 { background: light-dark(${col[26]},${col[26]}); }`];

texts.forEach(text => {
  console.log(text);

  const sheet = document.styleSheets[0];
  const [...rules] = sheet.cssRules;

  const primeRuleIndex = rules.findIndex(rule => rule.selectorText.startsWith(".n"));
  sheet.deleteRule(primeRuleIndex);


  sheet.insertRule(text, sheet.cssRules.length);

});
