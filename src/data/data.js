// const data = [
//   {
//     id: 0,
//     userName: "Some One",
//     userNumber: "+123234554",
//     userImg:
//       "https://whatsapp-clone-web.netlify.app/static/media/profile-picture-girl-3.6f306e62.jpeg",
//     unRead: 1,
//     massage: {
//       today: [
//         {
//           content: "hello world",
//           sender: true,
//         },
//         {
//           content: "hello world2",
//           sender: false,
//         },
//         {
//           content: "hello world3",
//           sender: true,
//         },
//         {
//           content: "hello world4",
//           sender: true,
//         },
//         {
//           content: "hello world5",
//           sender: false,
//         },
//         {
//           content: "hello world6",
//           sender: true,
//         },
//       ],
//       yesterday: [
//         {
//           content: "hello world",
//           sender: true,
//         },
//         {
//           content: "hello world22",
//           sender: false,
//         },
//         {
//           content: "hello world33",
//           sender: true,
//         },
//         {
//           content: "hello world44",
//           sender: true,
//         },
//         {
//           content: "hello world55",
//           sender: true,
//         },
//         {
//           content: "hello world66",
//           sender: false,
//         },
//       ],
//     },
//   },
//   {
//     id: 1,
//     userName: "Some Two",
//     userNumber: "+123234554",
//     userImg:
//       "https://whatsapp-clone-web.netlify.app/static/media/profile-picture-boy-2.1f40d9c2.jpeg",
//     unRead: 2,
//     massage: {
//       today: [
//         {
//           content: "hello world",
//           sender: true,
//         },
//         {
//           content: "hello world2",
//           sender: false,
//         },
//         {
//           content: "hello world3",
//           sender: true,
//         },
//         {
//           content: "hello world4",
//           sender: true,
//         },
//         {
//           content: "hello world5",
//           sender: false,
//         },
//         {
//           content: "hello world6",
//           sender: true,
//         },
//       ],
//       yesterday: [
//         {
//           content: "hello world",
//           sender: true,
//         },
//         {
//           content: "hello world22",
//           sender: false,
//         },
//         {
//           content: "hello world33",
//           sender: true,
//         },
//         {
//           content: "hello world44",
//           sender: true,
//         },
//         {
//           content: "hello world55",
//           sender: true,
//         },
//         {
//           content: "hello world66",
//           sender: false,
//         },
//       ],
//     },
//   },
//   {
//     id: 2,
//     userName: "Some Three",
//     userNumber: "+123234554",
//     userImg:
//       "https://whatsapp-clone-web.netlify.app/static/media/profile-picture-boy-3.025dcbc9.jpeg",
//     unRead: 0,
//     massage: {
//       today: [
//         {
//           content: "hello world",
//           sender: true,
//         },
//         {
//           content: "hello world2",
//           sender: false,
//         },
//         {
//           content: "hello world3",
//           sender: true,
//         },
//         {
//           content: "hello world4",
//           sender: true,
//         },
//         {
//           content: "hello world5",
//           sender: false,
//         },
//         {
//           content: "hello world6",
//           sender: true,
//         },
//       ],
//       yesterday: [
//         {
//           content: "hello world",
//           sender: true,
//         },
//         {
//           content: "hello world22",
//           sender: false,
//         },
//         {
//           content: "hello world33",
//           sender: true,
//         },
//         {
//           content: "hello world44",
//           sender: true,
//         },
//         {
//           content: "hello world55",
//           sender: true,
//         },
//         {
//           content: "hello world66",
//           sender: false,
//         },
//       ],
//     },
//   },
// ];

// Function to generate a random sender (true or false)
function randomSender() {
  return Math.random() < 0.5; // 50% chance of being true or false
}

// Function to generate random message content
function generateRandomMessage() {
  const messages = [
    "Hello there!",
    "How's it going?",
    "I'm doing well, thanks!",
    "What's new?",
    "Not much, just working on my project.",
    "That sounds interesting.",
    "Tell me more about it.",
    "Sure, it's a quiz app built with React and Node.js.",
    "Sounds cool!",
    "Good luck with your project!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// Generate fake user data
const data = [];
for (let id = 0; id < 10; id++) {
  const userName = `User ${id}`;
  const userNumber = `+12345${id}`;
  const userImg = `https://randomuser.me/api/portraits/lego/${id}.jpg`;
  const unRead = Math.floor(Math.random() * 5); // Random number of unread messages
  const today = [];
  const yesterday = [];

  for (let i = 0; i < 6; i++) {
    today.push({
      content: generateRandomMessage(),
      sender: randomSender(),
    });
    yesterday.push({
      content: generateRandomMessage(),
      sender: randomSender(),
    });
  }

  data.push({
    id,
    userName,
    userNumber,
    userImg,
    unRead,
    massage: {
      today,
      yesterday,
    },
  });
}

export default data;
