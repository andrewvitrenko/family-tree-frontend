export const enum ESex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export type TUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  person: TPerson;
};

export type TPerson = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  userId: string;
  sex: ESex;
};
