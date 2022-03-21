import { MovieCreditsCast, MovieCreditsCrew } from "../../models/credits.model";

export type CrewPersonRoles = {name: string,profile_path: string | null, credit_id: string, id: number, job: string[]}

export const groupPersonRoles = (credits: MovieCreditsCrew[] | MovieCreditsCast[], role:'character' | 'job') => role === 'character'
? credits as MovieCreditsCast[]
: Object.values((credits as MovieCreditsCrew[]).reduce((c: MovieCreditsCrew & Record<string, CrewPersonRoles>, { name, job, profile_path, credit_id, id }) => ({
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
  }),{} as MovieCreditsCrew & Record<string, CrewPersonRoles>));