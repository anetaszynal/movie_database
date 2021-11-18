import { MovieCreditsCrew } from "../../models/credits.model";

type accumulatorType = {name: string,profile_path: string | null, credit_id: string, id: number, job: string[]}
export const groupPersonRoles = (credits: MovieCreditsCrew[], role:'character' | '') => role === 'character'
? credits
: Object.values(credits.reduce((c: MovieCreditsCrew & Record<string, accumulatorType>, { name, job, profile_path, credit_id, id }) => ({
    ...c,
    [name]: {
      name,
      profile_path,
      credit_id,
      id,
      job: [
        ...(
          c[name]?.job || []
        ), 
        job
      ]
    }
  }),{} as any));