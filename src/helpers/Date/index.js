export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// Add +1 to date since it was undefined because the indices don’t align.

export const getMonth = (date) => MONTHS[date.getMonth() + 1];

// improvement maybe? 
// export const getMonth = (date) => 
//   date.toLocaleString('fr-FR', { month: 'long' });
