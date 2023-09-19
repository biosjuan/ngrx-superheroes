interface Sortable {
  name: string;
}

export const sorterByName = <T extends Sortable>(a: T, b: T): number => {
  return a.name.localeCompare(b.name);
};
