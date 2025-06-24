import { DOMAINS } from '@constants/domains';
import axios from './axios';

export const getDailyGame = (day: string) =>
  axios.get(`${DOMAINS.GAME.DAILY}${day}`);
