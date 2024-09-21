// Information on Instagram data
const instagramInformation = [
    {
        title: "Founded",
        content: "2010"
    },
    {
        title: "Founders",
        content: "Kevin Systrom, Mike Krieger"
    },
    {
        title: "Parent Company",
        content: "Meta Platforms, Inc. (formerly Facebook, Inc.)"
    },
    {
        title: "Headquarters",
        content: "Menlo Park, California, United States"
    },
    {
        title: "CEO",
        content: "Adam Mosseri"
    },
    {
        title: "Website",
        content: "<a href='https://www.instagram.com/' target='_blank'>instagram.com</a>"
    }
];

// Function to generate information on Instagram
function generateInstagramInformation() {
    const informationContainer = document.getElementById('information');

    instagramInformation.forEach(info => {
        const infoElement = document.createElement('div');
        infoElement.classList.add('info-item');
        infoElement.innerHTML = `
            <h2>${info.title}</h2>
            <p>${info.content}</p>
        `;
        informationContainer.appendChild(infoElement);
    });
}

// Generate information on Instagram
generateInstagramInformation();
