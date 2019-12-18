var socialMedia = {
  facebook: 'http://facebook.com/xyz',
  twitter: 'http://twitter.com/xyz',
  flickr: 'http://flickr.com/xyz',
  youtube: 'http://youtube.com/xyz'
};

(() => {
  const socialMediaIcons = document.querySelectorAll(".socialmediaicons");
  const ulElement = document.createElement("ul");

  Object.keys(socialMedia).forEach(key => {
    const liElement = document.createElement("li");
    const imageElement = document.createElement("img");
    imageElement.src = `./images/${key}.png`;
    liElement.appendChild(imageElement);
    ulElement.appendChild(liElement);

  });

  socialMediaIcons.forEach(element => {
    element.appendChild(ulElement.cloneNode(true));
  });

})(socialMedia)
