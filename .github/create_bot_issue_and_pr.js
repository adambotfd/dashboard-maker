const fs = require('fs');
const path = require('path');

const botname = 'YourBotName';
const botdescription = 'YourBotDescription';
const botinvite = 'YourBotInviteLink';
const botsupportserver = 'YourBotSupportServerLink';

const issueBody = `
${botname}

${botdescription}

Bot Invite: ${botinvite}

Bot Support Server: ${botsupportserver}
`;

const prContent = `
<!DOCTYPE html>
<html>
<head>
  <title>${botname} Bot</title>
</head>
<body>
  <h1>${botname}</h1>
  <p>${botdescription}</p>
  <p>Bot Invite: <a href="${botinvite}">${botinvite}</a></p>
  <p>Bot Support Server: <a href="${botsupportserver}">${botsupportserver}</a></p>
</body>
</html>
`;

const issueFileName = `${botname}.html`;
const prFileName = `${botname}.html`;

// Write issue body to a file
fs.writeFileSync(path.join(__dirname, issueFileName), issueBody);
console.log(`Issue content saved to ${issueFileName}`);

// Write PR content to a file
fs.writeFileSync(path.join(__dirname, prFileName), prContent);
console.log(`PR content saved to ${prFileName}`);
