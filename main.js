// window.addEventListener('DOMContentLoaded', () => {
const bod = document.querySelector('body')
// bod.style.backgroundColor = 'blue'

// const media = [
//   {
//     imgURL: 'https://iili.io/HUZXIyb.png',
//     audioURL: 'https://audio.jukehost.co.uk/11S85kTQMPxl6PLi0mZExYeY8i8ZgHZG',
//     second: 7,
//     name: 'Galadriel'
//   }, {
//     imgURL: 'https://iili.io/HUZhxiN.png',
//     audioURL: 'https://audio.jukehost.co.uk/I2MGS1xSRa36gt2ptExl3ObfEmSRbgqe',
//     second: 6,
//     name: 'ClintEastWood'
//   },
//   {
//     imgURL: 'https://iili.io/HUZwG9e.png',
//     audioURL: 'https://audio.jukehost.co.uk/2YpiHZpILkDvGTnlUl2SJc1Obr2k9JWF',
//     second: 9,
//     name: 'Gandalf'
//   },
//   {
//     imgURL: 'https://iili.io/HUZwSAg.png',
//     audioURL: 'https://audio.jukehost.co.uk/S3QlSvoaRx2OAcOxuvGlwH3Xl0C9FVLp',
//     second: 5,
//     name: 'NuttyProfessor'
//   },
//   {
//     imgURL: 'https://iili.io/HUZeBMx.webp',
//     audioURL: 'https://audio.jukehost.co.uk/qmburQ9othsv8bgPRpuPLLElsWdUMK47',
//     second: 11,
//     name: 'Leonidas'
//   },
//   {
//     imgURL: 'https://iili.io/HUZvREv.png',
//     audioURL: 'https://audio.jukehost.co.uk/BBT4Uk9ZlNqfOhf25wdnwRYmIdTsNJmI',
//     second: 6,
//     name: 'WolfWall'
//   },
//   {
//     imgURL: 'https://iili.io/HUZ8MAP.webp',
//     audioURL: 'https://audio.jukehost.co.uk/y07iGB7uZkOSLK5vg5mKDvDlq7SIJ4yA',
//     second: 6,
//     name: 'Bateman'
//   }, {
//     imgURL: 'https://iili.io/HUZ8MAP.webp',
//     audioURL: 'https://audio.jukehost.co.uk/8YHpLgokzAKe4jDL0Viuagcvsuis28u6',
//     second: 9,
//     name: 'Gladiator'
//   }
// ]

const media = [
  {
    imgURL: 'https://iili.io/HUZXIyb.png',
    audioURL: 'https://audio.jukehost.co.uk/11S85kTQMPxl6PLi0mZExYeY8i8ZgHZG',
    second: 7,
    name: 'Galadriel'
  }, {
    imgURL: 'https://iili.io/HUZhxiN.png',
    audioURL: 'https://audio.jukehost.co.uk/I2MGS1xSRa36gt2ptExl3ObfEmSRbgqe',
    second: 6,
    name: 'ClintEastWood'
  },
  {
    imgURL: 'https://iili.io/HUZwG9e.png',
    audioURL: 'https://audio.jukehost.co.uk/2YpiHZpILkDvGTnlUl2SJc1Obr2k9JWF',
    second: 9,
    name: 'Gandalf'
  },
  {
    imgURL: 'https://iili.io/HUZwSAg.png',
    audioURL: 'https://audio.jukehost.co.uk/S3QlSvoaRx2OAcOxuvGlwH3Xl0C9FVLp',
    second: 5,
    name: 'NuttyProfessor'
  },
  {
    imgURL: 'https://iili.io/HUZeBMx.webp',
    audioURL: 'https://audio.jukehost.co.uk/qmburQ9othsv8bgPRpuPLLElsWdUMK47',
    second: 11,
    name: 'Leonidas'
  },
  {
    imgURL: 'https://iili.io/HUZvREv.png',
    audioURL: 'https://audio.jukehost.co.uk/BBT4Uk9ZlNqfOhf25wdnwRYmIdTsNJmI',
    second: 6,
    name: 'WolfWall'
  },
  {
    imgURL: 'https://iili.io/HUZ8MAP.webp',
    audioURL: 'https://audio.jukehost.co.uk/y07iGB7uZkOSLK5vg5mKDvDlq7SIJ4yA',
    second: 6,
    name: 'Bateman'
  }, {
    imgURL: 'https://iili.io/HUZSYbt.png',
    audioURL: 'https://audio.jukehost.co.uk/8YHpLgokzAKe4jDL0Viuagcvsuis28u6',
    second: 9,
    name: 'Gladiator'
  }, 	{
    imgURL: 'https://iili.io/HUZ4Y3G.png',
    audioURL: 'https://audio.jukehost.co.uk/5xYm9xRPBqzpmRFLL9Qd3vzibJ6gdbOd',
    second: 10,
    name: 'Aragorn'
  }
]
let movieIndex = 0
// const initialSelection = media[(Math.floor(Math.random() * media.length))];

// for (const audio of media) {
//   console.log(audio)
//   const currentAudio = document.createElement('audio')
//   currentAudio.setAttribute('id', audio.name)
//   currentAudio.setAttribute('src', audio.audioURL)
//   console.log(currentAudio)
//   console.log(currentAudio.id)
//   console.log(currentAudio.src)
//   bod.prepend(currentAudio)
// }

const applause = document.createElement('audio')
applause.setAttribute('id', 'clap')
// applause.setAttribute('autoplay')
// applause.src = 'assets/claps.mp3'
// applause.setAttribute('src', '/assets/claps.mp3')
// https://audio.jukehost.co.uk/uLIcCKnaPuEDJLRsWnSAcKYiVW5p4OVs "never give up and luck will find you"
// https://audio.jukehost.co.uk/U9a5tRgB9kYgQVjmhvuMcCzPgMylP6OR
// https://audio.jukehost.co.uk/VVA1CWQW6wLy9aWBYGRSDoueJzaIraR7 // brave heart freedom
// applause.setAttribute('src', 'https://soundcloud.com/grantjamthomas/the-flip-side?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
// applause.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
// applause.setAttribute('src', 'https://audio.jukehost.co.uk/U9a5tRgB9kYgQVjmhvuMcCzPgMylP6OR')
// applause.setAttribute('src', 'https://audio.jukehost.co.uk/VVA1CWQW6wLy9aWBYGRSDoueJzaIraR7')
// applause.setAttribute('src', 'https://voca.ro/173ZA4Voofoh')
// applause.setAttribute('type', 'audio/mp3')
// applause.src = 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
bod.prepend(applause)
// const playing = setInterval(applause.play(), 1000)

const inspireImg = document.createElement('img')
// "https://iili.io/HUZkT0l.png"
inspireImg.setAttribute('id', 'inspire')
// inspireImg.setAttribute('src', 'https://iili.io/HUZkT0l.png')
bod.prepend(inspireImg)

function playAudio (url, id) {
//   const clap = document.getElementById(id)
  const clap = document.getElementById('clap')
  clap.setAttribute('src', url)
  //   console.log(clap)
  clap.play()
}
// playAudio()

// media

function imgAp (url, id) {
  const inspire = document.getElementById('inspire')
  //   inspire.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  inspire.setAttribute('src', url)
//   console.log(inspire.style)
//   console.log(inspire.style.visibility)
//   console.log(inspire.style.visibility === 'hidden')
}

function throttle (cb) {
  let canRun = true
  return function (url, seconds, id) {
    if (canRun) {
      canRun = false
      setTimeout(() => {
        canRun = true
      }, (seconds * 1000))
      return cb(url, id)
    }
  }
}

const throttledAudio = throttle(playAudio)
const throttledImage = throttle(imgAp)

// document.addEventListener('load', (e) => {
//   console.log('e', e)
//   playAudio()
//   // if (e.code === 'Space') {
//   //   alert('Working')
//   // }
// })

document.addEventListener('click', (e) => {
//   const movie = media[(Math.floor(Math.random() * media.length))]
  const movie = media[movieIndex]

  console.log('e', e)
  throttledAudio(movie.audioURL, movie.second, movie.name)
  throttledImage(movie.imgURL, movie.second)
  movieIndex++
//   imageAppear()
//   if (e.code === 'Space') {
//     alert('Working')
//   }
})
// })
