import { useQuery } from '@tanstack/react-query';
import { getDailyGame } from '@api/gameApi';
import { QUERY_KEYS } from '@constants/queryKeys';
import { DailyGame } from '@features/game/types';

export const useDailyGame = (date: string) => {
  return useQuery<DailyGame[]>({
    queryKey: [QUERY_KEYS.DAILY_GAME, date],
    queryFn: async () => {
      const { data } = await getDailyGame(date);
      return data;
    },
  });
};
