import {UilEstate,UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal} from '@iconscout/react-unicons'
import img1 from '../../Images/img1.png'
import img2 from '../../Images/img2.png'
import img3 from '../../Images/img3.png'

export const ManuItemsSideBar=[
    {
     manuIcon: UilEstate,
     name: "Dashboard"
    },
    {
        manuIcon: UilClipboardAlt,
        name: "Items"
    },
    {
        manuIcon: UilUsersAlt,
        name: "Customers"
    },
    {
        manuIcon: UilPackage,
        name: "Products"
    },
    {
     manuIcon: UilChart,
     name: "Analytics"
    },
]

// Cards Data
export const cardsData = [
    {
      title: "Offers",
      color: {
        backGround: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(217,79,25,1) 50%, rgba(252,176,69,1) 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 72,
      value: "23,837",
      png: UilUsdSquare,
      series: [
        {
          name: "Offers",
          data: [29, 36, 25, 49, 43, 110, 100],
        },
      ],
    },
    {
      title: "Data Flow",
      color: {
        backGround: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(217,211,25,1) 50%, rgba(252,176,69,1) 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 60,
      value: "83,472",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Data Flow",
          data: [9, 100, 40, 60, 70, 20, 30],
        },
      ],
    },
    {
      title: "Expendature",
      color: {
        backGround:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(10,158,129,1) 50%, rgba(252,176,69,1) 100%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 87,
      value: "5,298",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expendature",
          data: [9, 23, 14, 28, 14, 17, 22],
        },
      ],
    },
  ];

// Updates data
export const UpdateData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
]