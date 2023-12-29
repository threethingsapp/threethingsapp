import { Colors } from "../constants";
import { Categories } from "../types";
import { IMAGE_UTILS } from "../utils";

const categories = [
  {
    color: Colors.BLUE,
    category: Categories.Books,
    tasks: { completed: 1, total: 2, new: 5 },
    participants: [
      { 
        className: IMAGE_UTILS.getRandomImageStyle(),
        image: null
      },
      { 
        className: IMAGE_UTILS.getRandomImageStyle(),
        image: null
      },
    ]
  },
  {
    color: Colors.ORANGE,
    category: Categories.Email,
    tasks: { completed: 3, total: 10, new: 2 },
    participants: [
      { 
        className: IMAGE_UTILS.getRandomImageStyle(),
        image: null
      },
    ]
  },
  {
    color: Colors.VIOLET,
    category: Categories.Work,
    tasks: { completed: 4, total: 4, new: 9 },
    participants: [
      { 
        className: IMAGE_UTILS.getRandomImageStyle(),
        image: null
      },
      { 
        className: IMAGE_UTILS.getRandomImageStyle(),
        image: null
      },
    ]
  },
  {
    color: Colors.GREEN,
    category: Categories.Urgent,
    tasks: { completed: 9, total: 18, new: 5 },
    participants: [
      { 
        className: IMAGE_UTILS.getRandomImageStyle(),
        image: null
      },
    ]
  },
];

const menuOptions = [
  {
    id: "overview",
    title: "Overview",
    selected: true,
  },
  {
    id: "productivity",
    title: "Productivity",
  }
];

export const MOCKS = {
  categories,
  menuOptions
}