/* Define action types */
export const DO_THING = 'DO_THING';

/* Define action creators */
export function doThing(data){
  return { type: DO_THING, data };
};
