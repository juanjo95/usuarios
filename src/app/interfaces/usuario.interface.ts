export interface Usuario {
  meta: Meta;
  data: Datum[];
}

export interface Usuario2{
  meta: Meta;
  data : Datum;
}

export interface Datum {
  id:     number;
  name:   string;
  email:  string;
  gender: Gender;
  status: Status;
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export enum Status {
  Active = "active",
  Inactive = "inactive",
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  total: number;
  pages: number;
  page:  number;
  limit: number;
  links: Links;
}

export interface Links {
  previous: null;
  current:  string;
  next:     string;
}
