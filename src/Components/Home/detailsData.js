import {
  School as MasterclassIcon,
  FlightTakeoff as GroupTripsIcon,
  LocationCity as CityHangoutsIcon,
  BusinessCenter as OpportunitiesIcon,
  PeopleAlt as VirtualNetworkingIcon,
  EmojiObjects as PersonalGrowthIcon,
} from "@mui/icons-material";
import CoffeeIcon from '@mui/icons-material/Coffee';

const iconMap = {
  Masterclass: MasterclassIcon,
  "Group Trips": GroupTripsIcon,
  "City Hangouts and Mixers": CoffeeIcon,
  "Personal Growth": PersonalGrowthIcon,
};

// export const data = [
//   {
//     title: "Masterclass",
//     detail:
//       "Learn from the best in the industry. Our masterclasses are taught by industry experts who have been in the game for years.",
//     icon: iconMap["Masterclass"],
//   },
//   {
//     title: "Group Trips",
//     detail:
//       "Travel the world with us. We host group trips to different cities around the world. We take care of the logistics, you just have to show up.",
//     icon: iconMap["Group Trips"],
//   },
//   {
//     title: "City Hangouts and Mixers",
//     detail:
//       "Meet other digital nomads in your city. We host monthly hangouts and mixers in different cities around the world to help you connect with other disruptors.",
//     icon: iconMap["City Hangouts and Mixers"],
//   },
//   {
//     title: "Opportunities & Resources",
//     detail:
//       "Find opportunities and resources to help you grow your business. We have a list of opportunities and resources that will help you grow your business.",
//     icon: iconMap["Opportunities & Resources"],
//   },
//   {
//     title: "Virtual Networking",
//     detail:
//       "Meet other digital nomads from around the world. We host virtual networking events every month to help you connect with other disruptors.",
//     icon: iconMap["Virtual Networking"],
//   },
//   {
//     title: "Personal Growth",
//     detail:
//       "Learn how to grow your business. We host monthly workshops to help you grow your business and take it to the next level with our personal growth workshops.",
//     icon: iconMap["Personal Growth"],
//   },
// ];

export const data = [
  {
    title: "Coffee Meetups",
    sub:" Caffinate . Connect . Collaborate",
    detail:
      "Engage in dynamic networking events where entrepreneurs gather over coffee to exchange ideas and foster collaborations. Set in a casual environment, these meetups encourage spontaneous brainstorming and the building of valuable industry relationships, making them an ideal setting for nurturing professional growth and creativity. ",
    icon: iconMap["City Hangouts and Mixers"],
  },
  {
    title:
      "TDD Acadamy",
      sub:" Building Blocks of Success: From Blueprint to Business Mastery",
    detail:
      "This comprehensive educational program equips entrepreneurs with essential skills to turn innovative ideas into thriving businesses. Offering a mix of workshops, mentorship, and hands-on sessions, the academy covers everything from initial business planning to advanced market strategies, paving the way for business mastery.",
    icon: iconMap["Masterclass"],
  },
  {
    title: "TDD Adventure",
    sub:"Adventure Awaits: Forge New Paths to Partnership",
    detail:
      "This unique outdoors event blends the spirit of adventure with entrepreneurship, inviting participants to engage in hiking and nature activities. Aimed at fostering connections in a natural setting, this program encourages entrepreneurs to explore new paths to partnership and collaboration away from the traditional boardroom.",
    icon: iconMap["Group Trips"],
  },
  {
    title:
      "TDD Spotlight",
      sub:"Disruptive Diaries:  Stories Behind Tomorrow’s Trailblazers",
    detail:
      "Spotlight offers a platform for emerging entrepreneurs to share their journeys and gain visibility among industry peers and potential investors. Featuring presentations and interviews with up-and-coming disruptors, this initiative sheds light on the innovative methods and personal stories of the next generation of trailblazers",
    icon: iconMap["Personal Growth"],
  },
];
