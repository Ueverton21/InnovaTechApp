import { PeopleRepositorie } from "../repositories/PeopleRepositorie";

export class PeopleService implements PeopleRepositorie {
  async getPeoples(num: number): Promise<People[]> {
    const peoples: People[] = [];

    try {
      const response = await fetch(
        `https://randomuser.me/api/?page=${num}&results=20`
      );

      const data = await response.json();
      for (var i = 0; i < 20; i++) {
        let people: People = {
          id: data.results[i].id.value,
          name: {
            first: data.results[i].name.first,
            last: data.results[i].name.last,
          },
          email: data.results[i].email,
          dateOfBirth: data.results[i].dob.date,
          gender: data.results[i].gender,
          image: {
            medium: data.results[i].picture.medium,
            large: data.results[i].picture.large,
          },
          nat: data.results[i].nat,
          phone: data.results[i].phone,
          address:
            data.results[i].location.street.name +
            ", " +
            data.results[i].location.street.number +
            ", " +
            data.results[i].location.city +
            ", " +
            data.results[i].location.state +
            ", " +
            data.results[i].location.country,
        };

        peoples.push(people);
      }
    } catch (error) {
      console.log(error);
    }

    return peoples;
  }
}
