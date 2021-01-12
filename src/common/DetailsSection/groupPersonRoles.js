export const groupPersonRoles = (credits, role) => role === 'character'
? credits
: Object.values(credits.reduce((c, {name,job, profile_path, credit_id, id}) => ({
    ...c,
    [name]: {
      name,
      profile_path,
      credit_id,
      id,
      job: [
        ...(
          c[name]?.job || []
        ), job
      ]
    }
  }),{},));