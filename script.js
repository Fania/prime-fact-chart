const col = randomColor({luminosity: 'bright', count: 27});

const texts = [
  `.n1  { background: ${col[0]};  }`,
  `.n2  { background: ${col[1]};  }`,
  `.n3  { background: ${col[2]};  }`,
  `.n5  { background: ${col[3]};  }`,
  `.n7  { background: ${col[4]};  }`,
  `.n11 { background: ${col[5]};  }`,
  `.n13 { background: ${col[6]};  }`,
  `.n17 { background: ${col[7]};  }`,
  `.n19 { background: ${col[8]};  }`,
  `.n23 { background: ${col[9]};  }`,
  `.n23 { background: ${col[10]}; }`,
  `.n29 { background: ${col[11]}; }`,
  `.n31 { background: ${col[12]}; }`,
  `.n37 { background: ${col[13]}; }`,
  `.n41 { background: ${col[14]}; }`,
  `.n43 { background: ${col[15]}; }`,
  `.n47 { background: ${col[16]}; }`,
  `.n53 { background: ${col[17]}; }`,
  `.n59 { background: ${col[18]}; }`,
  `.n61 { background: ${col[19]}; }`,
  `.n67 { background: ${col[20]}; }`,
  `.n71 { background: ${col[21]}; }`,
  `.n73 { background: ${col[22]}; }`,
  `.n79 { background: ${col[23]}; }`,
  `.n83 { background: ${col[24]}; }`,
  `.n89 { background: ${col[25]}; }`,
  `.n97 { background: ${col[26]}; }`];

texts.forEach(text => {
  console.log(text);

  const sheet = document.styleSheets[0];
  const [...rules] = sheet.cssRules;
  sheet.insertRule(text, sheet.cssRules.length);

});
