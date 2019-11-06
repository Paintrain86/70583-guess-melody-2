const gameSettings = {
  playTime: 3,
  mistakes: 4,
  luckText: `Братан, мы верим в тебя!`,
  questions: [
    {
      type: `genre`,
      genre: `pop`,
      answers: [
        {
          src: `http://pesnimp3.ru/uploads/files/2018-08/1534773103_sofi-tukker-batshit.mp3`,
          genre: `pop`
        },
        {
          src: `http://pesnimp3.ru/uploads/files/2019-10/slava-kpss-velikij-mogol_456391946.mp3`,
          genre: `rap`
        },
        {
          src: `http://cdn3.pesnimp3.ru/uploads/files/2018-11/daplaque-shut-down33_311746056.mp3`,
          genre: `dubstep`
        },
        {
          src: `http://pesnimp3.ru/uploads/files/2019-11/sam-smith-i-feel-love_456276655.mp3`,
          genre: `pop`
        }
      ]
    },
    {
      type: `artist`,
      song: {
        src: `http://pesnimp3.ru/uploads/files/2019-08/limp-bizkit-feat.-dmx-redman-method-man-rollin-urban-assault-vehicle_456241841.mp3`,
        artist: `Limp Bizkit`
      },
      answers: [
        {
          picture: `https://pbs.twimg.com/profile_images/2802382140/c751da996f3dc05e4b982fb3fac473e6.jpeg`,
          artist: `Limp Bizkit`
        },
        {
          picture: `https://pm1.narvii.com/7077/1ff374e36c30317ee6f47755560a8bf9105dc6ber1-650-650v2_128.jpg`,
          artist: `POD`
        },
        {
          picture: `http://x-minus.me/uploads/images/artists-2/15317.jpg`,
          artist: `Алла Пугачёва`
        }
      ]
    }
  ]
};

export default gameSettings;
