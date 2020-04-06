const slugify = require("slugify");

const text = "Ümit UZ is learning Nodejs";
const slug = slugify(text,"/");
console.log(slug);
