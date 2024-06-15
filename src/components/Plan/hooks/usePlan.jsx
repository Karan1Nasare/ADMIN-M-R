import React, { useEffect, useState } from 'react';
import BronzePlanImage from '../../../assets/images/bronze-plan.png';
import SilverPlanImage from '../../../assets/images/silver-plan.png';
import GoldPlanImage from '../../../assets/images/gold-plan.png';

const plans = [
  {
    id: 1,
    title: 'BRONZE',
    price: '$5.99 /mo',
    badge: BronzePlanImage,
    features: ['10 Students', '1 Admins', '1 Organizations', '10 Staff'],
  },
  {
    id: 2,
    title: 'SILVER',
    price: '$10.99 /mo',
    badge: SilverPlanImage,
    features: ['300 Students', '1 Admins', '1 Organizations', '30 Staff'],
  },
  {
    id: 3,
    title: 'GOLD',
    price: '$22.99 /mo',
    badge: GoldPlanImage,
    features: ['1000 Students', '1 Admins', '5 Organizations', '100 Staff'],
  },
  {
    id: 4,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
  {
    id: 5,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
  {
    id: 6,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
  {
    id: 7,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
  {
    id: 8,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
  {
    id: 9,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
  {
    id: 10,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
  {
    id: 11,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
  {
    id: 12,
    title: 'ENTERPRIZE',
    price: 'Custom Price',
    badge: GoldPlanImage,
    features: [
      'Custom Students',
      'Custom Admins',
      'Custom Organizations',
      'Custom Staff',
    ],
  },
];

const usePlan = () => {
  const [planData, setPlanData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        // const response = await fetch(
        //   'https://jsonplaceholder.typicode.com/todos/1',
        // );
        // const data = await response.json();

        setPlanData(plans);
      };
      fetchData();
    } catch (error) {
      console.log('error while fetching notifications', error);
    }
  }, []);
  return { planData };
};

export default usePlan;
