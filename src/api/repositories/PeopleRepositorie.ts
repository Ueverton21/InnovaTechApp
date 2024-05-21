export interface PeopleRepositorie {
  getPeoples: (num: number) => Promise<People[]>;
}
