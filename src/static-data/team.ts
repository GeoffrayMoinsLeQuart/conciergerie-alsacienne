import { Team } from '@/types/team';
import { v4 as uuid } from 'uuid';

export const teamData: Team[] = [
  {
    id: uuid(),
    name: 'Coriss Ambady',
    designation: 'Web Developer',
    image: '/images/team/image-01.jpg',
  },
  {
    id: uuid(),
    name: 'Glorius Cristian',
    designation: 'App Developer',
    image: '/images/team/image-02.jpg',
  },
  {
    id: uuid(),
    name: 'Jackie Sanders',
    designation: 'UI/UX Designer',
    image: '/images/team/image-03.jpg',
  },
  {
    id: uuid(),
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    image: '/images/team/image-04.jpg',
  },
];
