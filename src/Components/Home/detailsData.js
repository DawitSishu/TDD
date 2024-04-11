import {
  School as MasterclassIcon,
  FlightTakeoff as GroupTripsIcon,
  LocationCity as CityHangoutsIcon,
  BusinessCenter as OpportunitiesIcon,
  PeopleAlt as VirtualNetworkingIcon,
  EmojiObjects as PersonalGrowthIcon,
} from "@mui/icons-material";

const iconMap = {
  Masterclass: MasterclassIcon,
  "Group Trips": GroupTripsIcon,
  "City Hangouts and Mixers": CityHangoutsIcon,
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
    detail: "Caffinate . Connect . Collaborate ",
    icon: iconMap["City Hangouts and Mixers"],
  },
  {
    title: "TDD Acadamy",
    detail: "Building Blocks of Success: From Blueprint to Business Mastery.",
    icon: iconMap["Masterclass"],
  },
  {
    title: "TDD Adventure",
    detail: "Adventure Awaits: Forge New Paths to Partnership.",
    icon: iconMap["Group Trips"],
  },
  {
    title: "Spotlight ",
    detail: "Disruptive Diaries:  Stories Behind Tomorrow’s Trailblazers.",
    icon: iconMap["Personal Growth"],
  },
];
