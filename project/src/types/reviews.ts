import { HostType } from './offers-type';

export type ReviewType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: HostType,
}
