const NotesData = [
    {
        title: "Shoes",
        content: "A shoe is an item of footwear intended to protect and comfort the human foot.Shoes are also used as an item of decoration and fashion.",
        date: "",
        time: 0,
    },
    {
        title: "Ring",
        content: "A ring is a round band, usually of metal, worn as ornamental jewellery. Rings have symbolic functions respecting marriage and displays of wealth.",
        date: "",
        time: 0,
    },
    {
        title: "Keychain",
        content: "A keychain (also key fob or keyring) is a small ring or chain of metal to which several keys can be attached. Some keychains allow one or both ends the ability to rotate, keeping the keychain from becoming twisted, while the item is being used.",
        date: "",
        time: 0,
    },
    {
        title: "Pen",
        content: "A pen is a common writing instrument that applies ink to a surface, usually paper, for writing or drawing. Today, such pens find only a small number of specialized uses, such as in illustration and calligraphy.",
        date: "",
        time: 0,
    },
    {
        title: "Sunglasses",
        content: "Sunglasses or sun glasses are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes. They can sometimes also function as a visual aid, as variously termed spectacles or glasses exist, featuring lenses that are colored, polarized or darkened.",
        date: "",
        time: 0,
    },
    {
        title: "Screw",
        content: "A screw and a bolt are similar types of fastener typically made of metal and characterized by a helical ridge, called a male thread (external thread). Screws and bolts are used to fasten materials by the engagement of the screw thread with a similar female thread (internal thread) in a matching part.",
        date: "",
        time: 0,
    },
    {
        title: "Mirror",
        content: "A mirror is a wave reflector. A mirror or looking glass is an object that reflects an image. Light that bounces off a mirror will show an image of whatever is in front of it, when focused through the lens of the eye or a camera.",
        date: "",
        time: 0,
    },
    {
        title: "Sidewalk",
        content: "A sidewalk (North American English), pavement (British English), footpath (Oceanian English), or footway, is a path along the side of a road. Usually constructed of concrete or asphalt, it is designed for pedestrians. A sidewalk may accommodate moderate changes in grade (height) and is normally separated from the vehicular section by a curb.",
        date: "",
        time: 0,
    }
]

const generateRandomDate = () => {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}


for (let i = 0; i < 8; i++) {
    let d = generateRandomDate();

    NotesData[i].time = Number(d);
    NotesData[i].date = d.toLocaleDateString("en-GB");
}


export { NotesData }