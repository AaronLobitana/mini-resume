
export default async function handler(request, res) {
  const cardlist = [
    {
        "imageURL": "https://i.imgur.com/g4oneXM.jpeg",
        "name": "Aaron Lobitana",
        "extrainfolabel": "Extra Information",
        "shadow-enable": false,
        "new-color": null,
        "memeTop": "me: doesn't have a professional headshot",
        "memeBottom": "also me:",
        "opened": false

    },
    {
        "imageURL": "https://i.imgur.com/g4oneXM.jpeg",
        "name": "Aaron Lobitana",
        "extrainfolabel": "Extra Information",
        "shadow-enable": false,
        "new-color": null,
        "memeTop": "me: doesn't have a professional headshot",
        "memeBottom": "also me:",
        "opened": false

    },
    {
        "imageURL": "https://i.imgur.com/g4oneXM.jpeg",
        "name": "Aaron Lobitana",
        "extrainfolabel": "Extra Information",
        "shadow-enable": false,
        "new-color": null,
        "memeTop": "me: doesn't have a professional headshot",
        "memeBottom": "also me:",
        "opened": false

    }
  ];

  
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(cardlist);
}