const friends = [{
    name:"Hannah Montana",
    photo:"http://data.whicdn.com/images/70246635/original.gif",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },{
    name: 'Brad Pitt ',
		photo: 'http://cdn1.clevver.com/wp-content/uploads/2014/01/world-without-vampires-interview-with-a-vampire-1.gif',
		scores: [
			2,
			4,
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
  },
  {
    name: "Monica Geller",
    photo: "https://media.giphy.com/media/beYVvBUHy1Gla/giphy.gif",
    scores: [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    name:"Donald",
    photo:"https://i.pinimg.com/originals/d4/c2/00/d4c200c9ed401c0fb445b0f56d2b09a7.jpg",
    scores:[
        3,
        1,
        2,
        4,
        1,
        1,
        2,
        3,
        4,
        5
      ]
  },{
    name:"Tom Cruise",
    photo:"https://i.pinimg.com/originals/d4/c2/00/d4c200c9ed401c0fb445b0f56d2b09a7.jpg",
    scores:[
        3,
        1,
        2,
        4,
        1,
        1,
        2,
        3,
        4,
        5
      ]
  }]
// Note now we export the array. This makes it accessible to other files using require.
module.exports = friends;