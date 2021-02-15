import {
  IoFootball,
  IoFootballSharp,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";

const posts = [
  {
    id: 1,
    team: "Manchester United",
    score: "2-3",
    position: "4th",
    date: new Date(2020, 9, 2),
    caption: "Thrilling display",
  },
  {
    id: 2,
    team: "Tottenham",
    score: "1-4",
    position: "11th",
    date: new Date(2020, 9, 15),
    caption: "Full of entertainment",
  },
  {
    id: 3,
    team: "Liverpool",
    score: "3-3",
    position: "1st",
    date: new Date(2020, 10, 22),
    caption: "Marvellous football",
  },
  {
    id: 4,
    team: "Manchester City",
    score: "3-5",
    position: "2nd",
    date: new Date(2020, 10, 28),
    caption: "Exquisite team performance",
  },
  {
    id: 5,
    team: "Everton",
    score: "1-1",
    position: "3rd",
    date: new Date(2020, 11, 9),
    caption: "Lack lustre performance",
  },
];

const social = [
  {
    icon: <IoLogoInstagram />,
    url: "www.instagram.com",
  },
  {
    icon: <IoLogoFacebook />,
    url: "www.facebook.com",
  },
  {
    icon: <IoLogoYoutube />,
    url: "www.youtube.com",
  },
];

const links = [{ logo: <IoFootball /> }, { logo: <IoFootballSharp /> }];

export { posts, social, links };
