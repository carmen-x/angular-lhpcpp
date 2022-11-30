export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Elefantul',
    price: 799,
    description: 'Great for kids and their birthdays.  Works for peanuts.'
  },
  {
    id: 2,
    name: 'Wolpe',
    price: 699,
    description: 'Keeps the neighbors away and howls at the midnight moon.'
  },
  {
    id: 3,
    name: 'Maimuta',
    price: 299,
    description: 'Eats your bananas and messes up your room.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/